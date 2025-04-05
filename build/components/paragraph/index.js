(()=>{"use strict";const e=window.wp.blocks,t=JSON.parse('{"UU":"app/paragraph"}'),a=window.React,l=window.wp.i18n,n=window.wp.blockEditor,o=window.wp.components;(0,e.registerBlockType)(t.UU,{edit:({attributes:e,setAttributes:t})=>{const{content:r,textAlign:i,color:c,fontWeight:p,fontSize:s,lineHeight:g,fontFamily:m,textTransform:u}=e;return(0,a.createElement)(a.Fragment,null,(0,a.createElement)(n.InspectorControls,null,(0,a.createElement)(o.PanelBody,{title:(0,l.__)("Paragraph Settings","custom-paragraph")},(0,a.createElement)(o.SelectControl,{label:(0,l.__)("Text Align","custom-paragraph"),value:i,options:[{label:"Left",value:"left"},{label:"Center",value:"center"},{label:"Right",value:"right"}],onChange:e=>t({textAlign:e})}),(0,a.createElement)(o.ColorPalette,{label:(0,l.__)("Text Color","custom-paragraph"),value:c,onChange:e=>t({color:e})}),(0,a.createElement)(o.TextControl,{label:(0,l.__)("Font Size","custom-paragraph"),value:s,onChange:e=>t({fontSize:e}),type:"number",min:0}),(0,a.createElement)(o.TextControl,{label:(0,l.__)("Line Height","custom-paragraph"),value:g,onChange:e=>t({lineHeight:e})}),(0,a.createElement)(o.TextControl,{label:(0,l.__)("Font Family","custom-paragraph"),value:m,onChange:e=>t({fontFamily:e})}),(0,a.createElement)(o.SelectControl,{label:(0,l.__)("Font Weight","custom-paragraph"),value:p,options:[{label:"Normal",value:"400"},{label:"Bold",value:"700"},{label:"Bolder",value:"900"}],onChange:e=>t({fontWeight:e})}),(0,a.createElement)(o.SelectControl,{label:(0,l.__)("Text Transform","custom-paragraph"),value:u,options:[{label:"None",value:"none"},{label:"Uppercase",value:"uppercase"},{label:"Lowercase",value:"lowercase"},{label:"Capitalize",value:"capitalize"}],onChange:e=>t({textTransform:e})}))),(0,a.createElement)(n.RichText,{...(0,n.useBlockProps)({style:{color:c,fontWeight:p,fontSize:s,lineHeight:g,fontFamily:m,textTransform:u,textAlign:i}}),tagName:"p",value:r,onChange:e=>t({content:e}),placeholder:(0,l.__)("Enter paragraph text...","custom-paragraph")}))},save:({attributes:e})=>{const{content:t,textAlign:l,color:o,fontWeight:r,fontSize:i,lineHeight:c,fontFamily:p,textTransform:s}=e;return(0,a.createElement)(n.RichText.Content,{...n.useBlockProps.save({style:{color:o,fontWeight:r,fontSize:i,lineHeight:c,fontFamily:p,textTransform:s,textAlign:l}}),tagName:"p",value:t})}})})();