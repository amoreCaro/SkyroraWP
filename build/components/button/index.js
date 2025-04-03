(()=>{"use strict";const e=window.wp.blocks,t=window.React,n=window.wp.i18n,l=window.wp.blockEditor,o=window.wp.components;(0,e.registerBlockType)("app/button",{edit:({attributes:e,setAttributes:a})=>{const{content:r,textAlign:i,color:c,backgroundColor:p,fontWeight:s,fontSize:u,lineHeight:g,fontFamily:b,textTransform:m}=e,C=(0,l.useBlockProps)({style:{textAlign:i,color:c,backgroundColor:p,fontWeight:s,fontSize:u,lineHeight:g,fontFamily:b,textTransform:m,padding:"10px 20px",border:"none",cursor:"pointer",display:"inline-block"}});return(0,t.createElement)(t.Fragment,null,(0,t.createElement)(l.InspectorControls,null,(0,t.createElement)(o.PanelBody,{title:(0,n.__)("Button Settings","app")},(0,t.createElement)(o.TextControl,{label:(0,n.__)("Text","app"),value:r,onChange:e=>a({content:e})}),(0,t.createElement)(o.SelectControl,{label:(0,n.__)("Text Align","app"),value:i,options:[{label:"Left",value:"left"},{label:"Center",value:"center"},{label:"Right",value:"right"}],onChange:e=>a({textAlign:e})}),(0,t.createElement)(o.ColorPalette,{label:(0,n.__)("Text Color","app"),value:c,onChange:e=>a({color:e})}),(0,t.createElement)(o.ColorPalette,{label:(0,n.__)("Background Color","app"),value:p,onChange:e=>a({backgroundColor:e})}),(0,t.createElement)(o.TextControl,{label:(0,n.__)("Font Size","app"),value:u,onChange:e=>a({fontSize:e})}),(0,t.createElement)(o.TextControl,{label:(0,n.__)("Line Height","app"),value:g,onChange:e=>a({lineHeight:e})}),(0,t.createElement)(o.TextControl,{label:(0,n.__)("Font Family","app"),value:b,onChange:e=>a({fontFamily:e})}),(0,t.createElement)(o.SelectControl,{label:(0,n.__)("Text Transform","app"),value:m,options:[{label:"None",value:"none"},{label:"Uppercase",value:"uppercase"},{label:"Lowercase",value:"lowercase"},{label:"Capitalize",value:"capitalize"}],onChange:e=>a({textTransform:e})}))),(0,t.createElement)("button",{...C},r))},save:({attributes:e})=>{const{content:n,textAlign:o,color:a,backgroundColor:r,fontWeight:i,fontSize:c,lineHeight:p,fontFamily:s,textTransform:u}=e;return(0,t.createElement)("button",{...l.useBlockProps.save({style:{textAlign:o,color:a,backgroundColor:r,fontWeight:i,fontSize:c,lineHeight:p,fontFamily:s,textTransform:u,padding:"10px 20px",border:"none",cursor:"pointer",display:"inline-block"}})},n)}})})();