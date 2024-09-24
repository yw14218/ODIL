"use strict";(self.webpackChunkone_shot_dual_arm_imitation_learning=self.webpackChunkone_shot_dual_arm_imitation_learning||[]).push([[245],{4618:function(e,t,a){a.r(t),a.d(t,{Head:function(){return C},default:function(){return _}});var n=a(6540),r=a(1612),l=a(33),s=a.p+"static/wood-0e049533cd3fed3bf1b439e771761fe3.mp4",o=a.p+"static/cooker-e1cf253d8aaab3356bf8e0711fa8e0f5.mp4",i=a.p+"static/scissor-44460c7dff7d2b6accb849202b593f54.mp4",c=a.p+"static/sharpener-0b9c486b594acb562b60233e330a54a7.mp4",m=a.p+"static/lego-adffb5698f98ca08c781c23c0be09234.mp4",d=a.p+"static/pan-76131b49fc325f32661001389f4a8d57.mp4",u=a.p+"static/cooker-2312fd7d2277d9f0e8a9bbcf4e5bb9e4.png",f=a.p+"static/wood-ed40bcd346758db5082f9c8fa4d31dae.png",p=a.p+"static/scissor-9101e3ea3419527d8f2d8b34cb6cf539.png",b=a.p+"static/sharpener-daba1c95b8015085a345420755316424.png",h=a.p+"static/lego-213f1eaffe4619545ef2e81b1916ba26.png",g=a.p+"static/pan-37898825656d93f3d27c75bbec855fd6.png";const E=e=>{let{children:t}=e;return n.createElement("h1",{className:"pb-1 mb-5 sm:mb-4 sm:leading-tight md:leading-tight lg:leading-tight font-bold text-center"},t)},x=e=>{let{website:t,children:a}=e;return n.createElement("div",{className:"flex flex-wrap justify-center text-2xl lg:text-2xl mb-6 sm:mb-5"},n.createElement("a",{className:"no-underline",href:t,target:"_blank"},a))},v=e=>{let{children:t}=e;return n.createElement("div",null,n.createElement("div",{className:"flex justify-center content-center"},n.createElement("p",{className:"font-semibold text-2xl sm:text3xl m-1 sm:m-2"},"Abstract")),n.createElement("div",{className:"flex justify-center content-center"},n.createElement("p",{className:"text-justify font-light text-sm m-1 sm:text-lg sm:m-1 sm:max-w-[620px]"},t)))},w=e=>{let{children:t,website:a,firstAuthor:r,affiliations:l,lastAuthor:s}=e;return n.createElement("span",{className:"text-center inline-block"},n.createElement("a",{href:a,target:"_blank",className:"font-normal no-underline text-stone-600 hover:underline underline-offset-3 hover:transition-all"},t),r||l?n.createElement("sup",{className:"pl-0.5"},r?n.createElement("span",{className:"font-bold"},"*"):null,l||null):null,s?null:n.createElement(n.Fragment,null,", "))},y=e=>{let{children:t,url:a,icon:r}=e;return n.createElement("span",{className:"text-center inline-block my-2.5 sm:my-1 mx-2"},n.createElement("a",{href:a,target:a.startsWith("#")?"_self":"_blank",className:"flex items-center text-lg no-underline font-normal text-black bg-[#f4f4f4] hover:bg-[#a8a8a8] hover:transition-all px-3 py-1.5 rounded-xl"},n.createElement("span",{className:"mr-1"},r),n.createElement("span",null,t)))},N=e=>{let{children:t}=e;return n.createElement("div",{className:"mx-auto w-full max-w-[90%] format format-md md:format-base lg:max-w-5xl lg:format-lg format-blue dark:format-invert"},t)},k=e=>{let{children:t}=e;return n.createElement("main",{className:"pt-6 lg:pt-12 bg-white dark:bg-gray-900"},t)},j=e=>{let{children:t,id:a,demos:r,demos_label:l,video:s,hidden:o}=e;return n.createElement("div",{id:a,className:"grasp-result flex flex-row flex-wrap justify-items-center items-center mt-6"+(o?" hidden":"")},n.createElement("div",{className:"sm:basis-3/3"},n.createElement("video",{autoPlay:!0,muted:!0,playsInline:!0,loop:!0,alt:t,className:"rounded-lg !my-0 !sm:my-0 w-full mx-auto"},n.createElement("source",{src:s,type:"video/mp4"}))))},C=()=>n.createElement("title",null,"One-shot Dual-arm Imitation Learning"),O=e=>{let{id:t,src:a,alt:r,onClick:l,isSelected:s}=e;return n.createElement("button",{onClick:()=>l(t),className:"flex flex-col items-center p-1"},n.createElement("img",{src:a,alt:r,className:"h-32 w-34 cursor-pointer hover:scale-110 transition-transform"}),n.createElement("span",{className:"text-gray-900 italic font-light text-sm -mt-4 transition-transform "+(s?"underline":"")},r))};var _=()=>{const{0:e,1:t}=(0,n.useState)("wood"),a=e=>{t(e)};return n.createElement(n.Fragment,null,n.createElement(k,null,n.createElement(N,null,n.createElement(E,null,n.createElement("span",{className:"justify-center text-stone-800"},"One-shot Dual-arm Imitation Learning")),n.createElement(x,null,n.createElement("span",{className:"justify-center font-normal text-stone-600"},"Submitted to ICRA 2025")),n.createElement("div",{className:"flex flex-wrap justify-center text-xl lg:text-xl mb-4"},n.createElement(w,{firstAuthor:!1,affiliations:"",lastAuthor:!0},"Yilong Wang"),n.createElement("span",{className:"mx-1"},"and"),n.createElement(w,{website:"https://www.robot-learning.uk/",firstAuthor:!1,affiliations:"",lastAuthor:!0},"Edward Johns")),n.createElement("p",{className:"flex flex-wrap justify-center"},n.createElement(y,{url:"https://www.google.com/",icon:n.createElement(r.kl1,null)},"Paper"),n.createElement(y,{url:"#video",icon:n.createElement(l.Jvf,{style:{color:"white",backgroundColor:"black",padding:"4px",borderRadius:"50%"}})},"Video"))),n.createElement(N,null,n.createElement(v,null,"We introduce ODIL, a novel approach to one-shot dual-arm imitation learning that enables dual-arm robots to learn precise and co-ordinated everyday tasks from just a single demonstration. ODIL parameterizes a co-ordinated trajectory from this demonstration using a novel dual-arm co-ordination paradigm, and introduces a three-stage deep match visual servoing (3-VS) controller for precise state estimation. This is achieved without the need for prior knowledge of tasks or objects, precise camera calibration, or additional data collection and training. Our method has been tested on a real-world dual-arm robot, demonstrating state-of-the-art performance across six precise and co-ordinated tasks in both 4-DoF and 6-DoF settings, and showing robustness in the presence of distracting objects and partial occlusions."),n.createElement("h2",{className:"font-semibold border-b-[1px] !mb-4"},"Evaluation"),n.createElement("h3",{className:"!mt-4",id:"few-shot"},"Robot Results"),n.createElement("p",{className:"text-base"},"We provided the robot with a single demonstration for each task and then evaluated its performance in three distinct settings: first, ",n.createElement("b",null,"4 DoF")," with a clear background; second, ",n.createElement("b",null,"4 DoF",n.createElement("sup",null,"+"))," with variations in background, distracting objects, and partial occlusion; and third, ",n.createElement("b",null,"6 DoF",n.createElement("sup",null,"+"))," involving 6-DoF object pose variations in addition to the previous conditions. For the 4 DoF experiments, the controller also operated with 4 DoFs."),n.createElement("p",{className:"font-light text-base"},"Please click on the images below to view the corresponding videos."),n.createElement("div",{className:"leading-8 -mt-8 -mb-2"},n.createElement("div",{className:"flex justify-center items-center space-x-4"},[{id:"wood",src:f,alt:"Wood Lift"},{id:"cooker",src:u,alt:"Cooker Add"},{id:"scissor",src:p,alt:"Scissor Uncover"},{id:"sharpener",src:b,alt:"Sharpener Insert"},{id:"lego",src:h,alt:"Lego Split"},{id:"pan",src:g,alt:"Pan Hang"}].map((t=>{let{id:r,src:l,alt:s}=t;return n.createElement(O,{key:r,id:r,src:l,alt:s,onClick:a,isSelected:e===r})})))),[{id:"wood",video:s,label:"Wood Lift"},{id:"cooker",video:o,label:"Cooker Add"},{id:"scissor",video:i,label:"Scissor Uncover"},{id:"sharpener",video:c,label:"Sharpener Insert"},{id:"lego",video:m,label:"Lego Split"},{id:"pan",video:d,label:"Pan Hang"}].map((t=>{let{id:a,video:r,label:l}=t;return n.createElement(j,{key:a,id:a,video:r,hidden:e!==a},l)}))),n.createElement("footer",{className:"flex flex-col justify-center bg-gray-50 mt-8 py-8"},n.createElement("div",{className:"flex justify-center align-middle text-lg"},n.createElement("a",{role:"button",className:"text-black",onClick:()=>{window.scrollTo({top:0,behavior:"smooth"})}},n.createElement("span",{className:"align-text-top inline-flex justify-center mr-0.25"},n.createElement(r.uCC,null)," "),n.createElement("span",null,"Back to Top"))),n.createElement("div",{className:"mt-2.5 text-center"},"Website template borrowed from ",n.createElement("a",{href:"https://f3rm.github.io/",target:"_blank",className:"text-blue-500"},"F3RM"),"."))))}},4084:function(e,t,a){a.d(t,{k5:function(){return c}});var n=a(6540),r={color:void 0,size:void 0,className:void 0,style:void 0,attr:void 0},l=n.createContext&&n.createContext(r),s=function(){return s=Object.assign||function(e){for(var t,a=1,n=arguments.length;a<n;a++)for(var r in t=arguments[a])Object.prototype.hasOwnProperty.call(t,r)&&(e[r]=t[r]);return e},s.apply(this,arguments)},o=function(e,t){var a={};for(var n in e)Object.prototype.hasOwnProperty.call(e,n)&&t.indexOf(n)<0&&(a[n]=e[n]);if(null!=e&&"function"==typeof Object.getOwnPropertySymbols){var r=0;for(n=Object.getOwnPropertySymbols(e);r<n.length;r++)t.indexOf(n[r])<0&&Object.prototype.propertyIsEnumerable.call(e,n[r])&&(a[n[r]]=e[n[r]])}return a};function i(e){return e&&e.map((function(e,t){return n.createElement(e.tag,s({key:t},e.attr),i(e.child))}))}function c(e){return function(t){return n.createElement(m,s({attr:s({},e.attr)},t),i(e.child))}}function m(e){var t=function(t){var a,r=e.attr,l=e.size,i=e.title,c=o(e,["attr","size","title"]),m=l||t.size||"1em";return t.className&&(a=t.className),e.className&&(a=(a?a+" ":"")+e.className),n.createElement("svg",s({stroke:"currentColor",fill:"currentColor",strokeWidth:"0"},t.attr,r,c,{className:a,style:s(s({color:e.color||t.color},t.style),e.style),height:m,width:m,xmlns:"http://www.w3.org/2000/svg"}),i&&n.createElement("title",null,i),e.children)};return void 0!==l?n.createElement(l.Consumer,null,(function(e){return t(e)})):t(r)}}}]);
//# sourceMappingURL=component---src-pages-index-tsx-6525d4cc81b0e23a06c8.js.map