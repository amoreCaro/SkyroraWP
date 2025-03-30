(()=>{"use strict";const e=window.wp.blocks,t=JSON.parse('{"UU":"app/hero-banner"}'),a=window.React,l=window.wp.blockEditor,n=window.wp.components,r=window.wp.element;(0,e.registerBlockType)(t.UU,{edit:function({attributes:e,setAttributes:t}){const{id:o,title:c,content:i,imageUrl:s,videoUrl:m,gallery:d,text:g,backgroundType:p}=e,v=(0,l.useBlockProps)(),h=e=>{t({imageUrl:e.url,imageId:e.id,videoUrl:""})},u=e=>{t({videoUrl:e.url,videoId:e.id,imageUrl:""})};return(0,a.createElement)(r.Fragment,null,(0,a.createElement)("div",{id:o,...v},(0,a.createElement)(n.TabPanel,{activeClass:"active-tab",tabs:[{name:"hero_content",title:"Content",className:"tab-item hero-content-tab"},{name:"hero_brands",title:"Brands",className:"tab-item hero-brands-tab"},{name:"hero_media",title:"Media",className:"tab-item hero-media-tab"},{name:"hero_design",title:"Design",className:"tab-item hero-design-tab"}]},(e=>(0,a.createElement)("div",null,"hero_content"===e.name&&(0,a.createElement)("div",{className:"content-tab"},(0,a.createElement)(l.RichText,{tagName:"h1",value:c,onChange:e=>t({title:e}),placeholder:"Text",allowedFormats:""}),(0,a.createElement)(l.RichText,{tagName:"p",value:i,onChange:e=>t({content:e}),placeholder:"Text",allowedFormats:["core/bold","core/link"]})),"hero_brands"===e.name&&(0,a.createElement)("div",{className:"brands-tab"},(0,a.createElement)("input",{type:"text",value:g,onChange:e=>t({text:e.target.value}),placeholder:"Text"}),(0,a.createElement)(l.MediaUploadCheck,null,(0,a.createElement)(l.MediaUpload,{onSelect:e=>t({gallery:e.map((e=>({url:e.url,id:e.id})))}),allowedTypes:["image"],multiple:!0,gallery:!0,render:({open:e})=>(0,a.createElement)("div",{className:"wp-group__gallery"},(0,a.createElement)(n.Button,{onClick:e,className:"select-gallery-button"},d&&d.length?(0,a.createElement)("div",{className:"gallery-preview"},d.map(((e,l)=>(0,a.createElement)("div",{key:l,className:"gallery-image"},(0,a.createElement)("img",{src:e.url,width:"150px",height:"150px",alt:`Gallery image ${l+1}`}),(0,a.createElement)(n.Button,{className:"remove-gallery-image-button",onClick:()=>{const e=[...d];e.splice(l,1),t({gallery:e})}},(0,a.createElement)("svg",{xmlns:"http://www.w3.org/2000/svg",fill:"#000000",width:"24px",height:"24px",viewBox:"-1.7 0 20.4 20.4",class:"cf-icon-svg"},(0,a.createElement)("path",{d:"M16.417 10.283A7.917 7.917 0 1 1 8.5 2.366a7.916 7.916 0 0 1 7.917 7.917zm-6.804.01 3.032-3.033a.792.792 0 0 0-1.12-1.12L8.494 9.173 5.46 6.14a.792.792 0 0 0-1.12 1.12l3.034 3.033-3.033 3.033a.792.792 0 0 0 1.12 1.119l3.032-3.033 3.033 3.033a.792.792 0 0 0 1.12-1.12z"}))))))):"Select Gallery"))}))),"hero_media"===e.name&&(0,a.createElement)("div",{className:"media-tab"},!m&&(0,a.createElement)(l.MediaUpload,{onSelect:h,allowedTypes:["image"],render:({open:e})=>(0,a.createElement)("div",{className:"wp-group__image"},(0,a.createElement)(n.Button,{onClick:e,className:"select-image-button"},s?(0,a.createElement)("img",{src:s,alt:"Selected",width:"150px",height:"150px",className:"selected-image"}):"Select Image"),s&&(0,a.createElement)(n.Button,{onClick:()=>t({imageUrl:"",imageId:void 0}),className:"remove-image-button"},(0,a.createElement)("svg",{xmlns:"http://www.w3.org/2000/svg",fill:"#000000",width:"24px",height:"24px",viewBox:"-1.7 0 20.4 20.4",class:"cf-icon-svg"},(0,a.createElement)("path",{d:"M16.417 10.283A7.917 7.917 0 1 1 8.5 2.366a7.916 7.916 0 0 1 7.917 7.917zm-6.804.01 3.032-3.033a.792.792 0 0 0-1.12-1.12L8.494 9.173 5.46 6.14a.792.792 0 0 0-1.12 1.12l3.034 3.033-3.033 3.033a.792.792 0 0 0 1.12 1.119l3.032-3.033 3.033 3.033a.792.792 0 0 0 1.12-1.12z"}))))}),!s&&(0,a.createElement)(l.MediaUpload,{onSelect:u,allowedTypes:["video"],render:({open:e})=>(0,a.createElement)("div",{className:"wp-group__video"},(0,a.createElement)(n.Button,{onClick:e,className:"select-video-button"},m?(0,a.createElement)("video",{src:m,className:"selected-video",controls:!0}):"Select Video"),m&&(0,a.createElement)(n.Button,{onClick:()=>t({videoUrl:"",videoId:void 0}),className:"remove-video-button"},(0,a.createElement)("svg",{xmlns:"http://www.w3.org/2000/svg",fill:"#000000",width:"24px",height:"24px",viewBox:"-1.7 0 20.4 20.4",class:"cf-icon-svg"},(0,a.createElement)("path",{d:"M16.417 10.283A7.917 7.917 0 1 1 8.5 2.366a7.916 7.916 0 0 1 7.917 7.917zm-6.804.01 3.032-3.033a.792.792 0 0 0-1.12-1.12L8.494 9.173 5.46 6.14a.792.792 0 0 0-1.12 1.12l3.034 3.033-3.033 3.033a.792.792 0 0 0 1.12 1.119l3.032-3.033 3.033 3.033a.792.792 0 0 0 1.12-1.12z"}))))})),"hero_design"===e.name&&(0,a.createElement)("div",{className:"design-tab"},(0,a.createElement)(n.RadioControl,{label:"Select Background Type",selected:p,options:[{label:"Image",value:"image"},{label:"Video",value:"video"}],onChange:e=>t({backgroundType:e})})))))),(0,a.createElement)(l.InspectorControls,null,(0,a.createElement)(n.PanelBody,{title:"Section Settings",initialOpen:!0},(0,a.createElement)(n.TextControl,{label:"Section ID",value:o,onChange:e=>t({id:e}),placeholder:"Enter section ID"}))))},save:function({attributes:e}){const t=l.useBlockProps.save(),{id:n,title:r,content:o,imageUrl:c,videoUrl:i,gallery:s,text:m}=e,d=c?{backgroundImage:`url(${c})`,backgroundSize:"cover"}:i?{}:{backgroundColor:"#f0f0f0"};return(0,a.createElement)("section",{id:n,...t,style:d},i&&(0,a.createElement)("video",{className:"hero__video",muted:!0,playsInline:!0,autoPlay:!0,loop:!0},(0,a.createElement)("source",{src:i,type:"video/mp4"}),"Your browser does not support the video tag."),(0,a.createElement)("div",{className:"hero__container container"},(0,a.createElement)("div",{className:"hero__content"},r&&(0,a.createElement)("h1",{className:"title--01",dangerouslySetInnerHTML:{__html:r}}),o&&(0,a.createElement)("p",{dangerouslySetInnerHTML:{__html:o}})),(0,a.createElement)("div",{className:"hero__partrers-block"},m&&(0,a.createElement)("div",{className:"hero__partrers-title",dangerouslySetInnerHTML:{__html:m}}),s&&s.length>0&&(0,a.createElement)("div",{className:"hero__partrers-list"},s.map((e=>(0,a.createElement)("img",{key:e.id,src:e.url,alt:`Partner - ${e.url.split("/").pop()}`})))))))}})})();