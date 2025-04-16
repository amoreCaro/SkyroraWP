(()=>{"use strict";const e=window.wp.blocks,t=window.React,a=window.wp.blockEditor,l=window.wp.components;(0,e.registerBlockType)("app/header",{edit:function({attributes:e,setAttributes:n}){const{id:i,imgUrl:d,text1:o,text2:p,paddingLeft:r,paddingRight:c}=e,s=(0,a.useBlockProps)(),m=!1!==e.isEditable;return(0,t.createElement)(t.Fragment,null,(0,t.createElement)(a.InspectorControls,null,(0,t.createElement)(l.PanelBody,{title:"Block Settings",initialOpen:!0},(0,t.createElement)(l.TextControl,{label:"Padding Left (px)",value:r,onChange:e=>{const t=e?parseInt(e):0;n({paddingLeft:t})},type:"number",min:0}),(0,t.createElement)(l.TextControl,{label:"Padding Right (px)",value:c,onChange:e=>{const t=e?parseInt(e):0;n({paddingRight:t})},type:"number",min:0}))),(0,t.createElement)("div",{id:i,...s},(0,t.createElement)("div",{className:"app-block app-block--preview",style:{display:"flex",justifyContent:"space-between",background:"#181b24",paddingLeft:`${r}px`,paddingRight:`${c}px`,paddingTop:"20px",paddingBottom:"32px"}},(0,t.createElement)("div",null,(0,t.createElement)("div",{style:{maxWidth:"114px",height:"60px",width:"100%"}},d?(0,t.createElement)("img",{src:d,alt:"Uploaded",style:{height:"100%",width:"100%",objectFit:"contain"},className:"uploaded-img"}):(0,t.createElement)("div",null,"No image uploaded")),(0,t.createElement)(a.MediaUploadCheck,null,(0,t.createElement)(a.MediaUpload,{onSelect:e=>{m&&n({imgUrl:e.url})},allowedTypes:["image"],value:d,render:({open:e})=>(0,t.createElement)(l.Button,{onClick:e,disabled:!m},(0,t.createElement)("span",{className:"dashicons dashicons-upload"})," Upload Image")}))),(0,t.createElement)("div",{style:{position:"relative"}},(0,t.createElement)("div",{style:{display:"flex",flexDirection:"column",alignItems:"flex-end",marginRight:"12px"}},(0,t.createElement)(a.RichText,{tagName:"p",placeholder:"Enter the first text...",value:o,onChange:e=>{m&&n({text1:e})},style:{margin:"0px 0px 8px 0px",color:"#FFFFFF"},disabled:!m}),(0,t.createElement)(a.RichText,{tagName:"p",placeholder:"Enter the second text...",value:p,onChange:e=>{m&&n({text2:e})},style:{margin:"0px",color:"#FFFFFF"},disabled:!m})),(0,t.createElement)("div",{style:{position:"absolute",right:"0px",top:"0px",height:"32px",width:"2px",backgroundColor:"#164BDC"}})))))},save:function({attributes:e}){const{id:l,imgUrl:n,text1:i,text2:d,paddingLeft:o,paddingRight:p}=e,r=a.useBlockProps.save();return(0,t.createElement)("div",{id:l,...r,style:{display:"flex",justifyContent:"space-between",alignItems:"center",background:"#181b24",paddingLeft:`${o}px`,paddingRight:`${p}px`,paddingTop:"20px",paddingBottom:"32px"}},(0,t.createElement)("div",null,(0,t.createElement)("div",{style:{maxWidth:"114px",height:"60px",width:"100%"}},n?(0,t.createElement)("img",{src:n,alt:"Uploaded",style:{height:"100%",width:"100%",objectFit:"contain"},className:"uploaded-img"}):(0,t.createElement)("div",null,"No image uploaded"))),(0,t.createElement)("div",{style:{position:"relative"}},(0,t.createElement)("div",{style:{display:"flex",flexDirection:"column",alignItems:"flex-end",marginRight:"12px"}},(0,t.createElement)(a.RichText.Content,{tagName:"p",value:i,style:{margin:"0px 0px 8px 0px",color:"#FFFFFF",fontFamily:"Bai Jamjuree, sans-serif"}}),(0,t.createElement)(a.RichText.Content,{tagName:"p",value:d,style:{margin:"0px",color:"#FFFFFF",fontFamily:"Bai Jamjuree, sans-serif"}})),(0,t.createElement)("div",{style:{position:"absolute",right:"0px",top:"0px",height:"32px",width:"2px",backgroundColor:"#164BDC"}})))}})})();