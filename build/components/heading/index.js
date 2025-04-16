(()=>{"use strict";const e=window.wp.blocks,t=window.React,n=window.wp.i18n,a=window.wp.blockEditor,l=window.wp.components;(0,e.registerBlockType)("app/heading",{edit:({attributes:e,setAttributes:o})=>{const{content:r,level:i,textAlign:m,color:d,fontWeight:g,fontSize:p,lineHeight:c,fontFamily:s,textTransform:u,paddingLeft:h,paddingRight:x,paddingTop:b,paddingBottom:f}=e,_=(e,t)=>o({[e]:parseFloat(t||0)}),v=(0,a.useBlockProps)({className:"custom-heading",style:{color:d,fontWeight:g,fontSize:(e=>{switch(e){case 1:return"2.5rem";case 2:return"2.0rem";case 3:return"1.75rem";case 4:return"1.5rem";case 5:return"1.25rem";case 6:return"1.0rem";default:return"2rem"}})(i),lineHeight:c,fontFamily:s,textTransform:u,textAlign:m,paddingTop:`${b}px`,paddingBottom:`${f}px`,paddingLeft:`${h}px`,paddingRight:`${x}px`,margin:"0px"}});return(0,t.createElement)(t.Fragment,null,(0,t.createElement)(a.BlockControls,null,(0,t.createElement)(l.ToolbarGroup,null,[1,2,3,4,5,6].map((e=>(0,t.createElement)(l.ToolbarButton,{key:e,isPressed:i===e,onClick:()=>o({level:e})},"H",e))))),(0,t.createElement)(a.InspectorControls,null,(0,t.createElement)(l.PanelBody,{title:(0,n.__)("Heading Settings","custom-heading")},(0,t.createElement)(l.SelectControl,{label:(0,n.__)("Heading Level","custom-heading"),value:i,options:Array.from({length:6},((e,t)=>({label:`H${t+1}`,value:t+1}))),onChange:e=>o({level:parseInt(e,10)})}),(0,t.createElement)(l.SelectControl,{label:(0,n.__)("Text Align","custom-heading"),value:m,options:[{label:"Left",value:"left"},{label:"Center",value:"center"},{label:"Right",value:"right"}],onChange:e=>o({textAlign:e})}),(0,t.createElement)(l.ColorPalette,{label:(0,n.__)("Text Color","custom-heading"),value:d,onChange:e=>o({color:e||"#000000"})}),(0,t.createElement)(l.TextControl,{label:(0,n.__)("Font Size (rem)","custom-heading"),type:"number",value:p.replace("rem",""),onChange:e=>o({fontSize:`${e}rem`})}),(0,t.createElement)(l.TextControl,{label:(0,n.__)("Line Height","custom-heading"),type:"number",step:"0.1",value:c,onChange:e=>o({lineHeight:e})}),(0,t.createElement)(l.TextControl,{label:(0,n.__)("Font Family","custom-heading"),value:s,onChange:e=>o({fontFamily:e})}),(0,t.createElement)(l.SelectControl,{label:(0,n.__)("Font Weight","custom-heading"),value:g,options:[{label:"Normal",value:"400"},{label:"Bold",value:"700"},{label:"Bolder",value:"900"}],onChange:e=>o({fontWeight:e})}),(0,t.createElement)(l.SelectControl,{label:(0,n.__)("Text Transform","custom-heading"),value:u,options:[{label:"None",value:"none"},{label:"Uppercase",value:"uppercase"},{label:"Lowercase",value:"lowercase"},{label:"Capitalize",value:"capitalize"}],onChange:e=>o({textTransform:e})})),(0,t.createElement)(l.PanelBody,{title:(0,n.__)("Padding Settings","custom-heading"),initialOpen:!0},(0,t.createElement)(l.TextControl,{label:(0,n.__)("Padding Top (px)","custom-heading"),value:b,onChange:e=>_("paddingTop",e),type:"number",min:0}),(0,t.createElement)(l.TextControl,{label:(0,n.__)("Padding Bottom (px)","custom-heading"),value:f,onChange:e=>_("paddingBottom",e),type:"number",min:0}),(0,t.createElement)(l.TextControl,{label:(0,n.__)("Padding Left (px)","custom-heading"),value:h,onChange:e=>_("paddingLeft",e),type:"number",min:0}),(0,t.createElement)(l.TextControl,{label:(0,n.__)("Padding Right (px)","custom-heading"),value:x,onChange:e=>_("paddingRight",e),type:"number",min:0}))),(0,t.createElement)("style",{dangerouslySetInnerHTML:{__html:"\n\t\t\t\t\t\t@media (max-width: 768px) {\n\t\t\t\t\t\t\t.custom-heading {\n\t\t\t\t\t\t\t\tpadding-left: 12px !important;\n\t\t\t\t\t\t\t\tpadding-right: 12px !important;\n\t\t\t\t\t\t\t\tpadding-top: 8px !important;\n\t\t\t\t\t\t\t\tpadding-bottom: 8px !important;\n\t\t\t\t\t\t\t}\n\t\t\t\t\t\t}\n\t\t\t\t\t"}}),(0,t.createElement)(a.RichText,{...v,tagName:`h${i}`,value:r,onChange:e=>o({content:e}),placeholder:(0,n.__)("Enter heading text...","custom-heading")}))},save:({attributes:e})=>{const{content:n,level:l,textAlign:o,color:r,fontWeight:i,fontSize:m,lineHeight:d,fontFamily:g,textTransform:p,paddingLeft:c,paddingRight:s,paddingTop:u,paddingBottom:h}=e;return(0,t.createElement)(t.Fragment,null,(0,t.createElement)("style",{dangerouslySetInnerHTML:{__html:"\n      @media (max-width: 768px) {\n        .wp-heading {\n          padding-left: 12px !important;\n          padding-right: 12px !important;\n        }\n      }\n    "}}),(0,t.createElement)("div",{...a.useBlockProps.save()},(0,t.createElement)(a.RichText.Content,{tagName:`h${l}`,value:n,className:"wp-heading",style:{color:r,fontWeight:i,fontSize:(e=>{switch(e){case 1:return"2.5rem";case 2:return"2.0rem";case 3:return"1.75rem";case 4:return"1.5rem";case 5:return"1.25rem";case 6:return"1.0rem";default:return"2rem"}})(l),lineHeight:d,fontFamily:g,textTransform:p,textAlign:o,paddingTop:`${u}px`,paddingBottom:`${h}px`,paddingLeft:`${c}px`,paddingRight:`${s}px`,margin:"0px"}})))}})})();