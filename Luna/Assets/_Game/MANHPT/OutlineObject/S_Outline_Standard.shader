Shader "Horus/Standard/Outline"
{
    Properties
    {
        _BlendMode("Blend Mode", Int) = 1
        _Color ("Color", Color) = (1,1,1,1)
        _MainTex ("Albedo (RGB)", 2D) = "white" {}
        _Glossiness ("Smoothness", Range(0,1)) = 1
        _Metallic ("Metallic", Range(0,1)) = 0.5

        _MainColor("Main Color", Color)=(1,0,0,1)
        _OutlineColor("Outline Color", Color)=(1,1,0,1)
        _OutlineSize("Outline Size", float) = 0.01
        _ChangeColorSpeed("Change Color Speed", float) = 5
        _MinAlpha("Min Alpha", Range(0,1)) = 0
        _MaxAlpha("Max Alpha", Range(0,1)) = .3
        _TurnOnOutline("Turn On Outline", Range(0,1)) = 1
        _TurnOnSilhouette("Turn On Silhouette", Range(0,1)) = 1
        _Stencil ("Stencil", float) = 1
    }
    CustomEditor "OutlineStandardCustomEditor"
    SubShader
    {
        Tags
        {
            "RenderType"="Opaque"
        }
        LOD 200

        CGPROGRAM
        // Physically based Standard lighting model, and enable shadows on all light types
        #pragma surface surf Standard fullforwardshadows

        // Use shader model 3.0 target, to get nicer looking lighting
        #pragma target 3.0

        sampler2D _MainTex;

        struct Input
        {
            float2 uv_MainTex;
        };

        half _Glossiness;
        half _Metallic;
        fixed4 _Color;
        fixed4 _MainColor;
        fixed _TurnOnSilhouette;
        float _ChangeColorSpeed;
        fixed _MinAlpha;
        fixed _MaxAlpha;
        int _BlendMode;

        // Add instancing support for this shader. You need to check 'Enable Instancing' on materials that use the shader.
        // See https://docs.unity3d.com/Manual/GPUInstancing.html for more information about instancing.
        // #pragma instancing_options assumeuniformscaling
        UNITY_INSTANCING_BUFFER_START(Props)
        // put more per-instance properties here
        UNITY_INSTANCING_BUFFER_END(Props)

        float Remap(float In, float2 InMinMax, float2 OutMinMax)
        {
            return OutMinMax.x + (In - InMinMax.x) * (OutMinMax.y - OutMinMax.x) / (InMinMax.y - InMinMax.x);
        }

        void surf(Input IN, inout SurfaceOutputStandard o)
        {
            fixed4 c = fixed4(1, 1, 1, 1);
            fixed4 color;
            fixed4 alpha = 1;
            switch (_BlendMode)
            {
            case 0:
                color = _TurnOnSilhouette > 0
                            ? lerp(_Color, _MainColor,
                                   Remap(sin(_ChangeColorSpeed * _Time.y), float2(-1, 1),
                                         float2(_MinAlpha, _MaxAlpha)))
                            : _Color;
                c = tex2D(_MainTex, IN.uv_MainTex) * color;
                break;
            case 1:
                alpha = _TurnOnSilhouette > 0
                            ? Remap(sin(_ChangeColorSpeed * _Time.y), float2(-1, 1),
                                    float2(_MinAlpha, _MaxAlpha))
                            : 0;
                c = tex2D(_MainTex, IN.uv_MainTex) + _MainColor * alpha;
                break;
            case 2:
                alpha = _TurnOnSilhouette > 0
                            ? Remap(sin(_ChangeColorSpeed * _Time.y), float2(-1, 1),
                                    float2(_MinAlpha, _MaxAlpha))
                            : 0;
                c = tex2D(_MainTex, IN.uv_MainTex) * (1 - alpha) + _MainColor * alpha;
                break;
            default: break;
            }

            o.Albedo = c.rgb;
            // Metallic and smoothness come from slider variables
            o.Metallic = _Metallic;
            o.Smoothness = _Glossiness;
            o.Alpha = c.a;
        }
        ENDCG
        Blend SrcAlpha OneMinusSrcAlpha
        Pass
        {
            colormask 0
            Stencil
            {
                ref [_Stencil]
                comp always
                pass replace
            }
        }
        Pass
        {
            Tags
            {
                "Queue"="Overlay"
            }
            Cull off
            Stencil
            {
                ref [_Stencil]
                comp notequal
            }

            CGPROGRAM
            #pragma vertex vert
            #pragma fragment frag
            #include "UnityCG.cginc"
            fixed4 _OutlineColor;
            float _OutlineSize;
            float _TurnOnOutline;

            struct appdata
            {
                float4 vertex:POSITION;
                float3 normal:NORMAL;
            };

            struct v2f
            {
                float4 clipPos:SV_POSITION;
                float3 normal:TEXCOORD0;
            };

            v2f vert(appdata v)
            {
                v2f o;
                o.normal = v.normal;
                float drawSize = _TurnOnOutline > 0 ? _OutlineSize : 0;
                o.clipPos = UnityObjectToClipPos(v.vertex + v.normal * drawSize);
                // float3 normalClipSpace = mul((float3x3)UNITY_MATRIX_VP, mul((float3x3)UNITY_MATRIX_M, v.normal));
                // o.clipPos = UnityObjectToClipPos(v.vertex);
                // o.clipPos += fixed4(normalize(normalClipSpace), 0) * drawSize;
                return o;
            }

            fixed4 frag(v2f i) : SV_Target
            {
                fixed alpha = _TurnOnOutline > 0 ? 1 : 0;
                return fixed4(_OutlineColor.xyz, alpha);
                //return _OutlineColor;
            }
            ENDCG
        }
    }
    SubShader
    {
        LOD 100
        Pass
        {
            Stencil 
            {
                ref 1
                comp always
                pass replace
            }
            
            CGPROGRAM
            #pragma vertex vert
            #pragma fragment frag
            #include "UnityCG.cginc"
            fixed4 _MainColor;
            sampler2D _MainTexture;
            float4 _MainTexture_ST;
            float _ChangeColorSpeed;
            float _TurnOn;

            struct appdata
            {
                float4 vertex:POSITION;
                float2 uv:TEXCOORD0;
            };

            struct v2f
            {
                float4 clipPos:SV_POSITION;
                float2 uv:TEXCOORD0;
            };

            v2f vert(appdata v)
            {
                v2f o;
                o.clipPos = UnityObjectToClipPos(v.vertex);
                o.uv = (v.uv * _MainTexture_ST.xy) + _MainTexture_ST.zw;
                return o;
            }

            fixed4 frag(v2f i) : SV_Target
            {
                fixed4 changeCol = (_TurnOn > 0) ? lerp(fixed4(1,1,1,1), _MainColor, (sin(_Time.y * 2) + 0.5) / 2) : fixed4(1,1,1,1);
                fixed4 col = tex2D(_MainTexture, i.uv) * changeCol;
                return col;
            }
            ENDCG
        }
        Pass
        {
            Stencil 
            {
                ref 0
                comp gequal
            }

            CGPROGRAM
            #pragma vertex vert
            #pragma fragment frag
            #include "UnityCG.cginc"
            fixed4 _OutlineColor;
            float _OutlineSize;
            float _TurnOn;

            struct appdata
            {
                float4 vertex:POSITION;
                float3 normal:NORMAL;
            };

            struct v2f
            {
                float4 clipPos:SV_POSITION;
                float3 normal:TEXCOORD0;
            };

            v2f vert(appdata v)
            {
                v2f o;
                o.normal = v.normal;
                float drawSize = _TurnOn > 0 ? _OutlineSize : 0;
                o.clipPos = UnityObjectToClipPos(v.vertex + normalize(o.normal) * drawSize);
                return o;
            }

            fixed4 frag(v2f i) : SV_Target
            {
                // return fixed4(i.normal,1);
                return _OutlineColor;
            }
            ENDCG
        }
    }
    FallBack "Diffuse"
}