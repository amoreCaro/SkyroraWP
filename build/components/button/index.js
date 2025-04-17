(()=>{"use strict";const t=window.wp.blocks,e=window.React,n=window.wp.i18n,a=window.wp.blockEditor,o=window.wp.components;(0,t.registerBlockType)("app/button",{edit:function({attributes:t,setAttributes:l}){const{content:i,textAlign:p,color:r,backgroundColor:d,fontWeight:g,fontSize:c,lineHeight:m,fontFamily:s,textTransform:u,paddingLeft:x,paddingRight:h,paddingTop:b,paddingBottom:f}=t,C={display:"flex",justifyContent:"flex-start",textAlign:p,paddingTop:`${b}px`,paddingBottom:`${f}px`,paddingLeft:`${x}px`,paddingRight:`${h}px`},_=(t,e)=>{l({[t]:parseFloat(e||0)})};return(0,e.createElement)(e.Fragment,null,(0,e.createElement)(a.InspectorControls,null,(0,e.createElement)(o.PanelBody,{title:(0,n.__)("Button Settings","app")},(0,e.createElement)(o.TextControl,{label:(0,n.__)("Font Size","app"),value:c,onChange:t=>l({fontSize:t})}),(0,e.createElement)(o.TextControl,{label:(0,n.__)("Line Height","app"),value:m,onChange:t=>l({lineHeight:t})}),(0,e.createElement)(o.TextControl,{label:(0,n.__)("Padding Top (px)","app"),value:b,onChange:t=>_("paddingTop",t)}),(0,e.createElement)(o.TextControl,{label:(0,n.__)("Padding Bottom (px)","app"),value:f,onChange:t=>_("paddingBottom",t)}),(0,e.createElement)(o.TextControl,{label:(0,n.__)("Padding Left (px)","app"),value:x,onChange:t=>_("paddingLeft",t)}),(0,e.createElement)(o.TextControl,{label:(0,n.__)("Padding Right (px)","app"),value:h,onChange:t=>_("paddingRight",t)}),(0,e.createElement)(o.SelectControl,{label:(0,n.__)("Font Weight","app"),value:g,options:[{label:"Normal",value:"400"},{label:"Medium",value:"500"},{label:"Semi-Bold",value:"600"},{label:"Bold",value:"700"}],onChange:t=>l({fontWeight:t})}),(0,e.createElement)(o.SelectControl,{label:(0,n.__)("Text Transform","app"),value:u,options:[{label:"None",value:"none"},{label:"Uppercase",value:"uppercase"},{label:"Lowercase",value:"lowercase"},{label:"Capitalize",value:"capitalize"}],onChange:t=>l({textTransform:t})}),(0,e.createElement)(o.ColorPalette,{label:(0,n.__)("Text Color","app"),value:r,onChange:t=>l({color:t})}),(0,e.createElement)(o.ColorPalette,{label:(0,n.__)("Background Color","app"),value:d,onChange:t=>l({backgroundColor:t})}))),(0,e.createElement)("style",{dangerouslySetInnerHTML:{__html:"\n\t\t\t\t\t\t@media (max-width: 768px) {\n\t\t\t\t\t\t\t.wp-button {\n\t\t\t\t\t\t\t\tpadding-left: 12px !important;\n\t\t\t\t\t\t\t\tpadding-right: 12px !important;\n\t\t\t\t\t\t\t\tpadding-top: 16px !important;\n\t\t\t\t\t\t\t\tpadding-bottom: 16px !important;\n\t\t\t\t\t\t\t}\n\t\t\t\t\t\t}\n\t\t\t\t\t"}}),(0,e.createElement)("div",{...(0,a.useBlockProps)({className:"wp-button",style:C})},(0,e.createElement)("button",{style:{color:r,backgroundColor:d,fontWeight:g,fontSize:c,lineHeight:m,fontFamily:s,textTransform:u,border:"none",cursor:"pointer",display:"inline-block",maxWidth:"256px",width:"100%",height:"56px"}},(0,e.createElement)(a.RichText,{tagName:"span",value:i,onChange:t=>l({content:t}),placeholder:(0,n.__)("Enter your button text","app")}))))},save:({attributes:t})=>{const{content:n,textAlign:o,color:l,backgroundColor:i,fontWeight:p,fontSize:r,lineHeight:d,fontFamily:g,textTransform:c,paddingX:m,paddingTop:s,paddingBottom:u}=t;return(0,e.createElement)(e.Fragment,null,(0,e.createElement)("style",{dangerouslySetInnerHTML:{__html:"\n                    @media (max-width: 768px) {\n                        .wp-button {\n                            padding-left: 12px !important;\n                            padding-right: 12px !important;\n                        }\n                    }\n                "}}),(0,e.createElement)("div",{...a.useBlockProps.save({className:"wp-button",style:{paddingTop:s,paddingBottom:u,paddingLeft:m,paddingRight:m}})},(0,e.createElement)("button",{...a.useBlockProps.save({className:"wp-button",style:{textAlign:o,color:l,backgroundColor:i,fontWeight:p,fontSize:r,lineHeight:d,fontFamily:g,textTransform:c,border:"none",cursor:"pointer",display:"inline-block",maxWidth:"256px",width:"100%",height:"56px"}})},n)))}})})();