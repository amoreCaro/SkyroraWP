(()=>{"use strict";const e=window.wp.blocks,t=window.React,r=window.wp.i18n,o=window.wp.blockEditor,i=window.wp.components;(0,e.registerBlockType)("app/divider",{edit:({attributes:e,setAttributes:n})=>{const{id:l,color:d}=e;return(0,t.createElement)(t.Fragment,null,(0,t.createElement)(o.InspectorControls,null,(0,t.createElement)(i.PanelBody,{title:(0,r.__)("Divider Settings","custom-divider")},(0,t.createElement)(i.TextControl,{label:(0,r.__)("ID","custom-divider"),value:l,onChange:e=>n({id:e})}))),(0,t.createElement)("hr",{id:l,style:{borderColor:d,borderWidth:"1px"}}))},save:({attributes:e})=>{const{id:r,align:i,style:n,color:l}=e;return(0,t.createElement)("div",{style:{marginTop:"16px",marginBottom:"16px"}},(0,t.createElement)("hr",{...o.useBlockProps.save(),id:r,style:{textAlign:i,borderStyle:n,borderColor:l,borderWidth:"1px"}}))}})})();