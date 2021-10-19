import{r as n,c as h,a as o,w as c,b as f,o as y,d as b}from"./vendor.5fe01aba.js";const x=function(){const i=document.createElement("link").relList;if(i&&i.supports&&i.supports("modulepreload"))return;for(const e of document.querySelectorAll('link[rel="modulepreload"]'))a(e);new MutationObserver(e=>{for(const t of e)if(t.type==="childList")for(const s of t.addedNodes)s.tagName==="LINK"&&s.rel==="modulepreload"&&a(s)}).observe(document,{childList:!0,subtree:!0});function d(e){const t={};return e.integrity&&(t.integrity=e.integrity),e.referrerpolicy&&(t.referrerPolicy=e.referrerpolicy),e.crossorigin==="use-credentials"?t.credentials="include":e.crossorigin==="anonymous"?t.credentials="omit":t.credentials="same-origin",t}function a(e){if(e.ep)return;e.ep=!0;const t=d(e);fetch(e.href,t)}};x();var z="./images/logo.png";var S=(r,i)=>{for(const[d,a]of i)r[d]=a;return r};const L={mounted(){const r=this.$refs.renderer;this.$refs.god1.scene;const i=this.$refs.shaderboi.props.uniforms.u_time;r.onBeforeRender(()=>{i.value+=.05})}},k=f("div",{id:"navbar"},[f("img",{src:z,alt:"",id:"logoboi"}),f("button",{class:"btn"},"Go to the site")],-1);function M(r,i,d,a,e,t){const s=n("Camera"),l=n("PointLight"),p=n("DirectionalLight"),m=n("GltfModel"),v=n("ShaderMaterial"),u=n("Sphere"),g=n("Scene"),_=n("Renderer");return y(),h("div",null,[o(_,{ref:"renderer",antialias:"","orbit-ctrl":{enableDamping:!0},resize:"window"},{default:c(()=>[o(s,{position:{z:10},far:1e4}),o(g,null,{default:c(()=>[o(l,{position:{y:0,z:5},intensity:1.5},null,8,["intensity"]),o(l,{position:{y:-10,z:0},intensity:2.5},null,8,["intensity"]),o(l,{position:{y:0,z:-10},intensity:2.5},null,8,["intensity"]),o(p),o(m,{ref:"god1",src:"./models/blockGodSet1.glb",position:{x:-6,y:-1,z:0},rotation:{x:0,y:1,z:0}},null,512),o(u,{scale:{x:15,y:15,z:15},position:{x:1.25,y:1.25,z:.5}},{default:c(()=>[o(v,{ref:"shaderboi",props:{side:1,uniforms:{u_time:{value:0}},vertexShader:`
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
        #define tile   0.850
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
  `}},null,8,["props"])]),_:1},8,["position"])]),_:1})]),_:1},512),k])}var N=S(L,[["render",M]]);b(N).mount("#app");
