import{r,c as u,a as o,n as x,b as w,d as n,w as m,o as f,e as z}from"./vendor.010b58eb.js";const S=function(){const i=document.createElement("link").relList;if(i&&i.supports&&i.supports("modulepreload"))return;for(const e of document.querySelectorAll('link[rel="modulepreload"]'))s(e);new MutationObserver(e=>{for(const t of e)if(t.type==="childList")for(const l of t.addedNodes)l.tagName==="LINK"&&l.rel==="modulepreload"&&s(l)}).observe(document,{childList:!0,subtree:!0});function d(e){const t={};return e.integrity&&(t.integrity=e.integrity),e.referrerpolicy&&(t.referrerPolicy=e.referrerpolicy),e.crossorigin==="use-credentials"?t.credentials="include":e.crossorigin==="anonymous"?t.credentials="omit":t.credentials="same-origin",t}function s(e){if(e.ep)return;e.ep=!0;const t=d(e);fetch(e.href,t)}};S();var M="/assets/logo.9044ea1b.png";var k=(a,i)=>{for(const[d,s]of i)a[d]=s;return a};const A={data(){return{hamburger:"hamburger",menuActive:!1}},mounted(){const a=this.$refs.renderer;this.$refs.god1.scene;const i=this.$refs.shaderboi.props.uniforms.u_time;a.onBeforeRender(()=>{i.value+=.05})},methods:{toggleMenuState(){console.log("clicked"),this.hamburger==="hamburger"?(this.hamburger="hamburger hamburger-open",this.menuActive=!0):(this.hamburger="hamburger",this.menuActive=!1)}}},C={class:"w-screen h-16 fixed flex items-center justify-between flex-wrap"},L=o("img",{src:M,class:"h-7 my-auto mx-auto"},null,-1),N={key:0,class:"bg-white absolute right-5 top-20 p-5 tray"},P=o("ul",null,[o("li",null,"About Us"),o("li",null,"RoadMap"),o("li",null,"Team"),o("li",null,"Collection")],-1),U=[P],j=o("div",{class:"textbox"},[o("div",{class:"text-white text-justify px-10"}," In prehistoric times both creative innovation and commerce grew around gods, housed in temples, which were the centres of artistic and financial activity. Legends and myths about Gods formed part of transparent public records maintained by communities that could be manipulated by no single individual or authority. And under such a system both art and commerce exploded and expanded. ")],-1);function B(a,i,d,s,e,t){const l=r("Camera"),c=r("PointLight"),p=r("DirectionalLight"),v=r("GltfModel"),h=r("ShaderMaterial"),g=r("Sphere"),_=r("Scene"),b=r("Renderer");return f(),u("div",null,[o("nav",C,[L,o("div",null,[o("div",{onClick:i[0]||(i[0]=(...y)=>t.toggleMenuState&&t.toggleMenuState(...y))},[o("div",{class:x([e.hamburger,""])},null,2)]),e.menuActive?(f(),u("div",N,U)):w("",!0)])]),j,n(b,{ref:"renderer",antialias:"","orbit-ctrl":{enableDamping:!0},resize:"window"},{default:m(()=>[n(l,{position:{z:10},far:1e4}),n(_,null,{default:m(()=>[n(c,{position:{y:0,z:5},intensity:1.5},null,8,["intensity"]),n(c,{position:{y:-10,z:0},intensity:2.5},null,8,["intensity"]),n(c,{position:{y:0,z:-10},intensity:2.5},null,8,["intensity"]),n(p),n(v,{ref:"god1",src:"./models/blockGodSet1.glb",position:{x:-1.75,y:-1,z:0},rotation:{x:0,y:.7,z:0}},null,8,["position","rotation"]),n(g,{scale:{x:15,y:15,z:15},position:{x:1.25,y:1.25,z:.5}},{default:m(()=>[n(h,{ref:"shaderboi",props:{side:1,uniforms:{u_time:{value:0}},vertexShader:`
              precision highp float;
              varying vec2 vUv;
              varying vec3 vNormal;

              /*------------------------------
              Main
              ------------------------------*/
              void main() {
                vUv = uv;
                vNormal = normal;
                vec4 mvPosition = modelViewMatrix * vec4(position, 1.);
                gl_Position = projectionMatrix * mvPosition;
              }               
        `,fragmentShader:`  
        #define iterations 17
        #define formuparam 0.53

        #define volsteps 20
        #define stepsize 0.1

        #define zoom   0.800
        #define tile   0.900
        #define speed  0.001 

        #define brightness 0.0015
        #define darkmatter 0.300
        #define distfading 0.730
        #define saturation 0.850

        
        precision highp float;
          varying vec2 vUv;
          uniform vec3 uColor;
          uniform float u_time;
          varying vec3 vNormal;

 

          void main() {
            vec2 uv = vUv;
            float iTime = u_time;
            vec3 dir=vec3(uv*zoom,1.);
          	float time=iTime*speed+.25;
            float s=0.1,fade=1.;
            vec3 v=vec3(0.);
            vec3 from=vec3(1.,.5,0.5);
            from+=vec3(time*2.,time,-2.);
            for (int r=0; r<volsteps; r++) {
              vec3 p=from+s*dir*.5;
              p = abs(vec3(tile)-mod(p,vec3(tile*2.))); // tiling fold
              float pa,a=pa=0.;
              for (int i=0; i<iterations; i++) { 
                p=abs(p)/dot(p,p)-formuparam; // the magic formula
                a+=abs(length(p)-pa); // absolute sum of average change
                pa=length(p);
              }
              float dm=max(0.,darkmatter-a*a*.001); //dark matter
              a*=a*a; // add contrast
              if (r>6) fade*=1.-dm; // dark matter, don't render near
              //v+=vec3(dm,dm*.5,0.);
              v+=fade;
              v+=vec3(s,s*s,s*s*s*s)*a*brightness*fade; // coloring based on distance
              fade*=distfading; // distance fading
              s+=stepsize;
            }
            v=mix(vec3(length(v)),v,saturation); //color adjust
            gl_FragColor = vec4(v*.01, 1.);
          }
  `}},null,8,["props"])]),_:1},8,["position"])]),_:1})]),_:1},512)])}var G=k(A,[["render",B]]);z(G).mount("#app");
