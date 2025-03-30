(()=>{"use strict";const e=window.wp.blocks,t=JSON.parse('{"DD":"Cards","UU":"app/cards"}'),n=window.React,i=window.wp.blockEditor,a=window.wp.element,o=window.wp.components;window.ReactDOM;"undefined"!=typeof window&&void 0!==window.document&&window.document.createElement;function s(e){const t=Object.prototype.toString.call(e);return"[object Window]"===t||"[object global]"===t}function r(e){return"nodeType"in e}function l(e){var t,n;return e?s(e)?e:r(e)&&null!=(t=null==(n=e.ownerDocument)?void 0:n.defaultView)?t:window:window}function c(e){const{Document:t}=l(e);return e instanceof t}function d(e){return!s(e)&&e instanceof l(e).HTMLElement}function u(e){return e instanceof l(e).SVGElement}function h(e){return e?s(e)?e.document:r(e)?c(e)?e:d(e)||u(e)?e.ownerDocument:document:document:document}function m(e){return function(t){for(var n=arguments.length,i=new Array(n>1?n-1:0),a=1;a<n;a++)i[a-1]=arguments[a];return i.reduce(((t,n)=>{const i=Object.entries(n);for(const[n,a]of i){const i=t[n];null!=i&&(t[n]=i+e*a)}return t}),{...t})}}const p=m(-1);function v(e){if(function(e){if(!e)return!1;const{TouchEvent:t}=l(e.target);return t&&e instanceof t}(e)){if(e.touches&&e.touches.length){const{clientX:t,clientY:n}=e.touches[0];return{x:t,y:n}}if(e.changedTouches&&e.changedTouches.length){const{clientX:t,clientY:n}=e.changedTouches[0];return{x:t,y:n}}}return function(e){return"clientX"in e&&"clientY"in e}(e)?{x:e.clientX,y:e.clientY}:null}var g;!function(e){e.DragStart="dragStart",e.DragMove="dragMove",e.DragEnd="dragEnd",e.DragCancel="dragCancel",e.DragOver="dragOver",e.RegisterDroppable="registerDroppable",e.SetDroppableDisabled="setDroppableDisabled",e.UnregisterDroppable="unregisterDroppable"}(g||(g={}));const w=Object.freeze({x:0,y:0});var b,k,E,f;!function(e){e[e.Forward=1]="Forward",e[e.Backward=-1]="Backward"}(b||(b={}));class y{constructor(e){this.target=void 0,this.listeners=[],this.removeAll=()=>{this.listeners.forEach((e=>{var t;return null==(t=this.target)?void 0:t.removeEventListener(...e)}))},this.target=e}add(e,t,n){var i;null==(i=this.target)||i.addEventListener(e,t,n),this.listeners.push([e,t,n])}}function x(e,t){const n=Math.abs(e.x),i=Math.abs(e.y);return"number"==typeof t?Math.sqrt(n**2+i**2)>t:"x"in t&&"y"in t?n>t.x&&i>t.y:"x"in t?n>t.x:"y"in t&&i>t.y}function N(e){e.preventDefault()}function C(e){e.stopPropagation()}!function(e){e.Click="click",e.DragStart="dragstart",e.Keydown="keydown",e.ContextMenu="contextmenu",e.Resize="resize",e.SelectionChange="selectionchange",e.VisibilityChange="visibilitychange"}(k||(k={})),(f=E||(E={})).Space="Space",f.Down="ArrowDown",f.Right="ArrowRight",f.Left="ArrowLeft",f.Up="ArrowUp",f.Esc="Escape",f.Enter="Enter";E.Space,E.Enter,E.Esc,E.Space,E.Enter;function D(e){return Boolean(e&&"distance"in e)}function S(e){return Boolean(e&&"delay"in e)}class _{constructor(e,t,n){var i;void 0===n&&(n=function(e){const{EventTarget:t}=l(e);return e instanceof t?e:h(e)}(e.event.target)),this.props=void 0,this.events=void 0,this.autoScrollEnabled=!0,this.document=void 0,this.activated=!1,this.initialCoordinates=void 0,this.timeoutId=null,this.listeners=void 0,this.documentListeners=void 0,this.windowListeners=void 0,this.props=e,this.events=t;const{event:a}=e,{target:o}=a;this.props=e,this.events=t,this.document=h(o),this.documentListeners=new y(this.document),this.listeners=new y(n),this.windowListeners=new y(l(o)),this.initialCoordinates=null!=(i=v(a))?i:w,this.handleStart=this.handleStart.bind(this),this.handleMove=this.handleMove.bind(this),this.handleEnd=this.handleEnd.bind(this),this.handleCancel=this.handleCancel.bind(this),this.handleKeydown=this.handleKeydown.bind(this),this.removeTextSelection=this.removeTextSelection.bind(this),this.attach()}attach(){const{events:e,props:{options:{activationConstraint:t,bypassActivationConstraint:n}}}=this;if(this.listeners.add(e.move.name,this.handleMove,{passive:!1}),this.listeners.add(e.end.name,this.handleEnd),this.windowListeners.add(k.Resize,this.handleCancel),this.windowListeners.add(k.DragStart,N),this.windowListeners.add(k.VisibilityChange,this.handleCancel),this.windowListeners.add(k.ContextMenu,N),this.documentListeners.add(k.Keydown,this.handleKeydown),t){if(null!=n&&n({event:this.props.event,activeNode:this.props.activeNode,options:this.props.options}))return this.handleStart();if(S(t))return void(this.timeoutId=setTimeout(this.handleStart,t.delay));if(D(t))return}this.handleStart()}detach(){this.listeners.removeAll(),this.windowListeners.removeAll(),setTimeout(this.documentListeners.removeAll,50),null!==this.timeoutId&&(clearTimeout(this.timeoutId),this.timeoutId=null)}handleStart(){const{initialCoordinates:e}=this,{onStart:t}=this.props;e&&(this.activated=!0,this.documentListeners.add(k.Click,C,{capture:!0}),this.removeTextSelection(),this.documentListeners.add(k.SelectionChange,this.removeTextSelection),t(e))}handleMove(e){var t;const{activated:n,initialCoordinates:i,props:a}=this,{onMove:o,options:{activationConstraint:s}}=a;if(!i)return;const r=null!=(t=v(e))?t:w,l=p(i,r);if(!n&&s){if(D(s)){if(null!=s.tolerance&&x(l,s.tolerance))return this.handleCancel();if(x(l,s.distance))return this.handleStart()}return S(s)&&x(l,s.tolerance)?this.handleCancel():void 0}e.cancelable&&e.preventDefault(),o(r)}handleEnd(){const{onEnd:e}=this.props;this.detach(),e()}handleCancel(){const{onCancel:e}=this.props;this.detach(),e()}handleKeydown(e){e.code===E.Esc&&this.handleCancel()}removeTextSelection(){var e;null==(e=this.document.getSelection())||e.removeAllRanges()}}const L={move:{name:"pointermove"},end:{name:"pointerup"}};(class extends _{constructor(e){const{event:t}=e,n=h(t.target);super(e,L,n)}}).activators=[{eventName:"onPointerDown",handler:(e,t)=>{let{nativeEvent:n}=e,{onActivation:i}=t;return!(!n.isPrimary||0!==n.button||(null==i||i({event:n}),0))}}];const T={move:{name:"mousemove"},end:{name:"mouseup"}};var M;!function(e){e[e.RightClick=2]="RightClick"}(M||(M={})),class extends _{constructor(e){super(e,T,h(e.event.target))}}.activators=[{eventName:"onMouseDown",handler:(e,t)=>{let{nativeEvent:n}=e,{onActivation:i}=t;return n.button!==M.RightClick&&(null==i||i({event:n}),!0)}}];const B={move:{name:"touchmove"},end:{name:"touchend"}};var A,R,z,O,U;(class extends _{constructor(e){super(e,B)}static setup(){return window.addEventListener(B.move.name,e,{capture:!1,passive:!1}),function(){window.removeEventListener(B.move.name,e)};function e(){}}}).activators=[{eventName:"onTouchStart",handler:(e,t)=>{let{nativeEvent:n}=e,{onActivation:i}=t;const{touches:a}=n;return!(a.length>1||(null==i||i({event:n}),0))}}],function(e){e[e.Pointer=0]="Pointer",e[e.DraggableRect=1]="DraggableRect"}(A||(A={})),function(e){e[e.TreeOrder=0]="TreeOrder",e[e.ReversedTreeOrder=1]="ReversedTreeOrder"}(R||(R={})),b.Backward,b.Forward,b.Backward,b.Forward,function(e){e[e.Always=0]="Always",e[e.BeforeDragging=1]="BeforeDragging",e[e.WhileDragging=2]="WhileDragging"}(z||(z={})),function(e){e.Optimized="optimized"}(O||(O={})),z.WhileDragging,O.Optimized,Map,function(e){e[e.Uninitialized=0]="Uninitialized",e[e.Initializing=1]="Initializing",e[e.Initialized=2]="Initialized"}(U||(U={})),E.Down,E.Right,E.Up,E.Left;(0,e.registerBlockType)(t.UU,{edit:function({attributes:e,setAttributes:s}){const{id:r,title:l,subtitle:c,text:d,items:u=[]}=e,[h,m]=(0,n.useState)(!1),[p,v]=(0,n.useState)("tabContent"),g={isModalOpen:h,activeTab:p},w=(0,i.useBlockProps)();return(0,n.createElement)("div",{id:r,...w},(({data:e})=>{const[t,s]=(0,a.useState)(!1);return(0,a.useEffect)((()=>{const e=setTimeout((()=>{s(!0)}),1500);return()=>clearTimeout(e)}),[]),(0,n.createElement)(n.Fragment,null,(0,n.createElement)(i.BlockControls,null,(0,n.createElement)(o.ToolbarGroup,null,(0,n.createElement)("span",null,e.blockName))),t?(0,n.createElement)("div",{className:"app-block app-block--preview app-block--preview-full"},(0,n.createElement)("div",{className:"app-block__header"},(0,n.createElement)("div",{className:"app-block__group"},(0,n.createElement)("div",{className:"app-block__index"},"1"),(0,n.createElement)("div",{className:"app-block__name"},"Block - ",e.blockName)),(0,n.createElement)("div",{className:"app-block__group app-block__group--actions"},(0,n.createElement)(o.Button,{className:"app-icon -view app-js-tooltip",onClick:e.handleViewBlock,type:"button",title:"View Block"},(0,n.createElement)("svg",{xmlns:"http://www.w3.org/2000/svg",width:"20px",height:"20px",viewBox:"0 0 24 24",fill:"none",stroke:"#000000",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round",className:"feather feather-eye"},(0,n.createElement)("path",{d:"M1 12s4-8 11-8 11 8 11 8-4 8-11 8-11-8-11-8z"}),(0,n.createElement)("circle",{cx:"12",cy:"12",r:"3"}))),(0,n.createElement)(o.Button,{onClick:e.handleDeleteBlock,className:"app-icon -minus app-js-tooltip",type:"button",title:"Remove Block"},(0,n.createElement)("svg",{xmlns:"http://www.w3.org/2000/svg",width:"20px",height:"20px",viewBox:"0 0 24 24",fill:"none",stroke:"#000000",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round",className:"feather feather-minus-circle"},(0,n.createElement)("circle",{cx:"12",cy:"12",r:"10"}),(0,n.createElement)("line",{x1:"8",y1:"12",x2:"16",y2:"12"}))))),(0,n.createElement)("div",{className:"app-block__body"},(0,n.createElement)(o.Button,{className:"btn-none btn--edit-block",onClick:()=>e.openModal(),type:"button",title:"Edit block"},(0,n.createElement)("svg",{xmlns:"http://www.w3.org/2000/svg",fill:"#000000",width:"16px",height:"16px",viewBox:"-2.5 -2.5 24 24",preserveAspectRatio:"xMinYMin",className:"jam jam-pencil"},(0,n.createElement)("path",{d:"M12.238 5.472L3.2 14.51l-.591 2.016 1.975-.571 9.068-9.068-1.414-1.415zM13.78 3.93l1.414 1.414 1.318-1.318a.5.5 0 0 0 0-.707l-.708-.707a.5.5 0 0 0-.707 0L13.781 3.93zm3.439-2.732l.707.707a2.5 2.5 0 0 1 0 3.535L5.634 17.733l-4.22 1.22a1 1 0 0 1-1.237-1.241l1.248-4.255 12.26-12.26a2.5 2.5 0 0 1 3.535 0z"}))),e.defaultPreview())):(0,n.createElement)("div",{className:"app-block app-block--preview app-block--preview-full"},(0,n.createElement)("div",{className:"app-block__header skeleton-header"},(0,n.createElement)("div",{className:"app-block__group"},(0,n.createElement)("div",{className:"app-block__index skeleton"}),(0,n.createElement)("div",{className:"app-block__name skeleton"})),(0,n.createElement)("div",{className:"app-block__group app-block__group--actions skeleton"})),(0,n.createElement)("div",{className:"app-block__body skeleton-body skeleton-bg"},(0,n.createElement)("button",{className:"btn-none skeleton"}))))})({setIsModalOpen:m,blockName:t.DD,blockIndex:"1"}),h&&(({data:e})=>(0,n.createElement)(o.Modal,{title:`Block - ${e.blockName}`,className:"modal block-modal-xl",onRequestClose:()=>e.closeModal()},(0,n.createElement)("div",{className:"modal__wrapper"},(({data:e})=>{const t=e.activeTab;return(0,n.createElement)("div",{className:"tabs tabs--vertical"},(0,n.createElement)("div",{className:"tabs-navigation",style:{position:"relative"}},e.tabList.map((i=>(0,n.createElement)(o.Button,{key:i.key,className:"tabs-navigation__item "+(t===i.key?"active":""),onClick:()=>(t=>{e.setActiveTab(t)})(i.key)},i.label))),(0,n.createElement)("div",{className:"tabs-slider",style:{top:`${(t=>{const n=e.tabList.findIndex((e=>e.key===t));return-1!==n?60*n:0})(t)}px`,position:"absolute",transition:"top 0.3s ease"}})),(0,n.createElement)("div",{className:"tabs-content"},e.tabList.map((i=>t===i.key&&(0,n.createElement)("div",{key:i.key,className:"tabs-content__item active"},e[i.key]())))))})({data:e}))))(...g,s,e,p,v,m,(()=>(0,n.createElement)("div",{className:"form-group"})),(()=>(0,n.createElement)("div",null)),(()=>(0,n.createElement)("div",null,(0,n.createElement)("h2",null,"Style Settings"))),(()=>(0,n.createElement)("div",null,(0,n.createElement)("h2",null,"View Settings")))))},save:function({attributes:e}){i.useBlockProps.save();const{id:t,title:a,text:o,imageUrl:s,buttonText:r,buttonUrl:l,buttonOpenInNewTab:c,sectionAlignment:d,backgroundUrl:u,gradientColor1:h,gradientColor2:m,buttonColor:p,sectionOverlay:v,sectionPadding:g,sectionVisibility:w,items:b}=e;return(0,n.createElement)("div",null,b.map(((e,t)=>(0,n.createElement)("div",{key:t,className:"repeater-item"},(0,n.createElement)("h4",null,e.title),e.imageUrl&&(0,n.createElement)("img",{src:e.imageUrl,alt:""})))))}})})();