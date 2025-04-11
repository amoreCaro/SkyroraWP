(()=>{"use strict";const e=window.wp.blocks,t=window.React,n=window.wp.blockEditor,l=window.wp.components,i=window.wp.element;(0,e.registerBlockType)("app/footer",{edit:function({attributes:e,setAttributes:a}){const{copyright:o,listItems:r=[],imageItems:c=[],paddingLeft:m,paddingRight:p}=e,s=(0,n.useBlockProps)();return(0,i.useEffect)((()=>{o||a({copyright:"© 2025 SKYRORA LIMITED"})}),[]),(0,t.createElement)(t.Fragment,null,(0,t.createElement)(n.InspectorControls,null,(0,t.createElement)(l.PanelBody,{title:"Padding Controls",initialOpen:!0},(0,t.createElement)(l.TextControl,{label:"Padding Left (rem)",value:m||0,onChange:e=>a({paddingLeft:Number(e)}),type:"number",min:0}),(0,t.createElement)(l.TextControl,{label:"Padding Right (rem)",value:p||0,onChange:e=>a({paddingRight:Number(e)}),type:"number",min:0})),(0,t.createElement)(l.PanelBody,{title:"Text Columns Controls",initialOpen:!0},(0,t.createElement)(l.Button,{onClick:()=>{a({listItems:r.slice(0,-1)})},isDestructive:!0,style:{backgroundColor:"#8B0000",color:"#FFF"}},"Видалити текстову колонку"),(0,t.createElement)(l.Button,{onClick:()=>{a({listItems:[...r,""]})}},"Додати текстову колонку")),(0,t.createElement)(l.PanelBody,{title:"Image Upload Controls",initialOpen:!0},(0,t.createElement)(l.Button,{onClick:()=>{a({imageItems:c.slice(0,-1)})},isDestructive:!0,style:{backgroundColor:"#8B0000",color:"#FFF"}},"Видалити зображення колонку"),(0,t.createElement)(l.Button,{onClick:()=>{a({imageItems:[...c,""]})}},"Додати зображення колонку"),(0,t.createElement)("div",null,c.map(((e,i)=>(0,t.createElement)("div",{key:i,style:{marginBottom:"10px"}},(0,t.createElement)(n.MediaUpload,{onSelect:e=>((e,t)=>{const n=[...c];n[t]=e.url,a({imageItems:n})})(e,i),allowedTypes:["image"],value:c[i],render:({open:e})=>(0,t.createElement)(l.Button,{onClick:e,style:{backgroundColor:"#0000FF",color:"#FFF"}},c[i]?"Змінити зображення":"Додати зображення")}),c[i]&&(0,t.createElement)("div",null,(0,t.createElement)("img",{src:c[i],alt:`Column Image ${i+1}`,style:{maxWidth:"100px",marginTop:"10px"}}),(0,t.createElement)(l.Button,{isDestructive:!0,onClick:()=>(e=>{const t=[...c];t[e]="",a({imageItems:t})})(i),style:{backgroundColor:"#8B0000",color:"#FFF"}},"Видалити зображення")))))))),(0,t.createElement)("div",{...s,style:{display:"flex",flexDirection:"column",justifyContent:"center",alignItems:"center",background:"#181B24",paddingTop:"30px",paddingBottom:"48px",paddingLeft:`${m||0}rem`,paddingRight:`${p||0}rem`}},(0,t.createElement)("div",{style:{display:"flex",gap:"20px",marginBottom:"16px",flexWrap:"wrap",justifyContent:"center"}},c.map(((e,n)=>(0,t.createElement)("div",{style:{maxWidth:"48px",width:"100%",height:"48px"}},(0,t.createElement)("img",{key:n,src:e,alt:`Column Image ${n+1}`,style:{width:"100%",height:"100%",objectFit:"cover"}}))))),(0,t.createElement)("div",{style:{display:"flex",gap:"20px",flexWrap:"wrap",justifyContent:"center"}},r.map(((e,l)=>(0,t.createElement)(n.RichText,{key:l,tagName:"div",value:e,onChange:e=>((e,t)=>{const n=[...r];n[t]=e,a({listItems:n})})(e,l),placeholder:`Column ${l+1}`,style:{fontSize:"12px",lineHeight:"100%",color:"#FFFFFF",gap:"16px",textAlign:"center",textTransform:"uppercase"}})))),(0,t.createElement)(n.RichText,{tagName:"p",value:o,onChange:e=>a({copyright:e}),placeholder:"Enter copyright text",style:{fontWeight:400,fontSize:"12px",lineHeight:"100%",textAlign:"center",textTransform:"uppercase",color:"#B8BDCC",marginTop:"24px"}})))},save:function({attributes:e}){const{copyright:l,paddingLeft:i,paddingRight:a,listItems:o=[],imageItems:r=[]}=e,c=n.useBlockProps.save();return(0,t.createElement)("div",{...c,style:{display:"flex",flexDirection:"column",justifyContent:"center",alignItems:"center",background:"#181B24",paddingTop:"30px",paddingBottom:"48px",paddingLeft:`${i||0}rem`,paddingRight:`${a||0}rem`}},(0,t.createElement)("div",{style:{display:"flex",gap:"20px",marginBottom:"16px",flexWrap:"wrap",justifyContent:"center"}},r.map(((e,n)=>(0,t.createElement)("div",{style:{maxWidth:"48px",width:"100%",height:"48px"}},(0,t.createElement)("img",{key:n,src:e,alt:`Column Image ${n+1}`,style:{width:"100%",height:"100%",objectFit:"cover"}}))))),(0,t.createElement)("div",{className:"footer-columns",style:{display:"flex",gap:"20px",flexWrap:"wrap",justifyContent:"center"}},o.map(((e,l)=>(0,t.createElement)(n.RichText.Content,{key:l,tagName:"a",value:e,style:{fontSize:"12px",lineHeight:"100%",color:"#FFFFFF",textAlign:"center",textTransform:"uppercase"}})))),(0,t.createElement)("span",{style:{fontFamily:"Bai Jamjuree",fontWeight:400,fontSize:"12px",lineHeight:"100%",textAlign:"center",textTransform:"uppercase",color:"#B8BDCC",marginTop:"24px"}},l))}})})();