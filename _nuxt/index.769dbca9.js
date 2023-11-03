import{_ as d,q as i,s as c,J as M,d as m,i as B,K as R,L as g,t,x as b,M as I,v as r,N as v,O as h,z as D,A as G,B as Q}from"./entry.c9e14595.js";const j=""+new URL("logo.e7c4e58b.png",import.meta.url).href;const S={},U={class:"app-logo",src:j};function N(e,A){return i(),c("img",U)}const y=d(S,[["render",N],["__scopeId","data-v-5742cda4"]]),E=M("options",{state:()=>({fullSize:!1}),getters:{getFullSize:e=>e.fullSize},actions:{toggleSize(){this.fullSize=!this.fullSize}}}),p=M("products",{state:()=>({products:[{id:1,name:"Flip 6",price:129.95,thumbnail:"flip-6.png",selected:!0,variants:[{name:"Black",asset:"https://jblstore.manuelguido.dev/_models/flip-6/flip-6-black.glb",color_image:"flip-6-black.png",selected:!0},{name:"Blue",asset:"https://jblstore.manuelguido.dev/_models/flip-6/flip-6-blue.glb",color_image:"flip-6-blue.png",selected:!1},{name:"Teal",asset:"https://jblstore.manuelguido.dev/_models/flip-6/flip-6-teal.glb",color_image:"flip-6-teal.png",selected:!1},{name:"Red",asset:"https://jblstore.manuelguido.dev/_models/flip-6/flip-6-red.glb",color_image:"flip-6-red.png",selected:!1},{name:"Grey",asset:"https://jblstore.manuelguido.dev/_models/flip-6/flip-6-grey.glb",color_image:"flip-6-grey.png",selected:!1},{name:"Camo",asset:"https://jblstore.manuelguido.dev/_models/flip-6/flip-6-camo.glb",color_image:"flip-6-camo.png",selected:!1}]},{id:2,name:"Clip 4",price:79.95,thumbnail:"clip-4.png",selected:!1,variants:[{name:"Black",asset:"https://jblstore.manuelguido.dev/_models/clip-4/clip-4-black.glb",color_image:"clip-4-black.png",selected:!0},{name:"Blue",asset:"https://jblstore.manuelguido.dev/_models/clip-4/clip-4-blue.glb",color_image:"clip-4-blue.png",selected:!1},{name:"Pink",asset:"https://jblstore.manuelguido.dev/_models/clip-4/clip-4-pink.glb",color_image:"clip-4-pink.png",selected:!1},{name:"Grey Pink",asset:"https://jblstore.manuelguido.dev/_models/clip-4/clip-4-grey-pink.glb",color_image:"clip-4-grey-pink.png",selected:!1},{name:"Red",asset:"https://jblstore.manuelguido.dev/_models/clip-4/clip-4-red.glb",color_image:"clip-4-red.png",selected:!1},{name:"Camo",asset:"https://jblstore.manuelguido.dev/_models/clip-4/clip-4-camo.glb",color_image:"clip-4-camo.png",selected:!1}]},{id:3,name:"Go 3",price:49.95,thumbnail:"go-3.png",selected:!1,variants:[{name:"Black",asset:"https://jblstore.manuelguido.dev/_models/go-3/go-3-black.glb",color_image:"go-3-black.png",selected:!0},{name:"Blue",asset:"https://jblstore.manuelguido.dev/_models/go-3/go-3-blue.glb",color_image:"go-3-blue.png",selected:!1},{name:"Teal",asset:"https://jblstore.manuelguido.dev/_models/go-3/go-3-teal.glb",color_image:"go-3-teal.png",selected:!1},{name:"Dark Grey",asset:"https://jblstore.manuelguido.dev/_models/go-3/go-3-dark-grey.glb",color_image:"go-3-dark-grey.png",selected:!1},{name:"Red",asset:"https://jblstore.manuelguido.dev/_models/go-3/go-3-red.glb",color_image:"go-3-red.png",selected:!1},{name:"Pink",asset:"https://jblstore.manuelguido.dev/_models/go-3/go-3-pink.glb",color_image:"go-3-pink.png",selected:!1},{name:"Green",asset:"https://jblstore.manuelguido.dev/_models/go-3/go-3-green.glb",color_image:"go-3-green.png",selected:!1},{name:"Camo",asset:"https://jblstore.manuelguido.dev/_models/go-3/go-3-camo.glb",color_image:"go-3-camo.png",selected:!1}]},{id:4,name:"Xtreme 3",price:279.95,thumbnail:"xtreme-3.png",selected:!1,variants:[{name:"Black",asset:"https://jblstore.manuelguido.dev/_models/xtreme-3/xtreme-3-black.glb",color_image:"jbl_xtreme_3/xtreme-3-black.png",selected:!0},{name:"Blue",asset:"https://jblstore.manuelguido.dev/_models/xtreme-3/xtreme-3-blue.glb",color_image:"jbl_xtreme_3/xtreme-3-blue.png",selected:!1},{name:"Camo",asset:"https://jblstore.manuelguido.dev/_models/xtreme-3/xtreme-3-camo.glb",color_image:"jbl_xtreme_3/xtreme-3-camo.png",selected:!1}]}]}),getters:{getProducts:e=>e.products,selectedProduct:e=>e.products.filter(A=>A.selected)[0],selectedProductVariant:e=>e.products.filter(A=>A.selected)[0].variants.filter(A=>A.selected)[0]},actions:{setSelectedProduct(e){this.getProducts.forEach(A=>{A.selected=e.name===A.name})},setSelectedVariant(e){this.selectedProduct.variants.forEach(A=>{A.selected=e.name===A.name})}}}),T=m({__name:"asset-model",setup(e){const A=p();return(s,n)=>{const l=B("model-viewer");return i(),R(l,{src:g(A).selectedProductVariant.asset,"ios-src":"https://modelviewer.dev/shared-assets/models/Astronaut.usdz",alt:"A 3D model of an astronaut",ar:"","auto-rotate":"","camera-controls":""},null,8,["src"])}}});const Y=d(T,[["__scopeId","data-v-d18320e9"]]),O=m({__name:"options",setup(e){const A=E();function s(){A.toggleSize()}return(n,l)=>(i(),c("div",null,[t("button",{class:"toggle-button",onClick:l[0]||(l[0]=o=>s())},"See full size")]))}});const k=d(O,[["__scopeId","data-v-25edb81b"]]),w={class:"logo-container"},z={class:"subsection"},Z={class:"subsection options"},C=m({__name:"index",setup(e){const A=E();return(s,n)=>{const l=y;return i(),c("div",{class:I(["section-a",{"full-size":g(A).getFullSize}])},[t("div",w,[b(l)]),t("div",z,[b(Y)]),t("div",Z,[b(k)])],2)}}});const W=d(C,[["__scopeId","data-v-ee6c8d0b"]]),V="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADIAAAAyCAIAAACRXR/mAAAAGXRFWHRTb2Z0d2FyZQBBZG9iZSBJbWFnZVJlYWR5ccllPAAAAyZpVFh0WE1MOmNvbS5hZG9iZS54bXAAAAAAADw/eHBhY2tldCBiZWdpbj0i77u/IiBpZD0iVzVNME1wQ2VoaUh6cmVTek5UY3prYzlkIj8+IDx4OnhtcG1ldGEgeG1sbnM6eD0iYWRvYmU6bnM6bWV0YS8iIHg6eG1wdGs9IkFkb2JlIFhNUCBDb3JlIDUuNi1jMDY3IDc5LjE1Nzc0NywgMjAxNS8wMy8zMC0yMzo0MDo0MiAgICAgICAgIj4gPHJkZjpSREYgeG1sbnM6cmRmPSJodHRwOi8vd3d3LnczLm9yZy8xOTk5LzAyLzIyLXJkZi1zeW50YXgtbnMjIj4gPHJkZjpEZXNjcmlwdGlvbiByZGY6YWJvdXQ9IiIgeG1sbnM6eG1wPSJodHRwOi8vbnMuYWRvYmUuY29tL3hhcC8xLjAvIiB4bWxuczp4bXBNTT0iaHR0cDovL25zLmFkb2JlLmNvbS94YXAvMS4wL21tLyIgeG1sbnM6c3RSZWY9Imh0dHA6Ly9ucy5hZG9iZS5jb20veGFwLzEuMC9zVHlwZS9SZXNvdXJjZVJlZiMiIHhtcDpDcmVhdG9yVG9vbD0iQWRvYmUgUGhvdG9zaG9wIENDIDIwMTUgKFdpbmRvd3MpIiB4bXBNTTpJbnN0YW5jZUlEPSJ4bXAuaWlkOkI0RUE3OTkxODMzOTExRTdBREM1QjUyMUQxQTQ1REI3IiB4bXBNTTpEb2N1bWVudElEPSJ4bXAuZGlkOkI0RUE3OTkyODMzOTExRTdBREM1QjUyMUQxQTQ1REI3Ij4gPHhtcE1NOkRlcml2ZWRGcm9tIHN0UmVmOmluc3RhbmNlSUQ9InhtcC5paWQ6QjRFQTc5OEY4MzM5MTFFN0FEQzVCNTIxRDFBNDVEQjciIHN0UmVmOmRvY3VtZW50SUQ9InhtcC5kaWQ6QjRFQTc5OTA4MzM5MTFFN0FEQzVCNTIxRDFBNDVEQjciLz4gPC9yZGY6RGVzY3JpcHRpb24+IDwvcmRmOlJERj4gPC94OnhtcG1ldGE+IDw/eHBhY2tldCBlbmQ9InIiPz7O+FtKAAAAIUlEQVR42uzBMQEAAADCoPVPbQhfoAAAAAAAAAD4TYABAB1+AAHfuCxlAAAAAElFTkSuQmCC",f=Object.freeze(Object.defineProperty({__proto__:null,default:V},Symbol.toStringTag,{value:"Module"})),F="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAEYAAABGCAYAAABxLuKEAAAABmJLR0QA/wD/AP+gvaeTAAAACXBIWXMAAAsTAAALEwEAmpwYAAAAB3RJTUUH5AoPCSwL8uByagAAAB1pVFh0Q29tbWVudAAAAAAAQ3JlYXRlZCB3aXRoIEdJTVBkLmUHAAAAcUlEQVR42u3QMQEAIAgAMLGe1QxBUwjAQ4AtwuL9rMNwFYgRI0aMGDFixIgRIwYxYsSIESNGjBgxYsQgRowYMWLEiBEjRowYxIgRI0aMGDFixIgRgxgxYsSIESNGjBgxYsQgRowYMWLEiBEjRowYxOw0aw0DApkkjFEAAAAASUVORK5CYII=",J=Object.freeze(Object.defineProperty({__proto__:null,default:F},Symbol.toStringTag,{value:"Module"})),x=""+new URL("clip-4-camo.a5ba8071.png",import.meta.url).href,L=Object.freeze(Object.defineProperty({__proto__:null,default:x},Symbol.toStringTag,{value:"Module"})),P="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAEYAAABGCAYAAABxLuKEAAAABmJLR0QA/wD/AP+gvaeTAAAACXBIWXMAAAsTAAALEwEAmpwYAAAAB3RJTUUH5AoPCjAss9skBQAAAB1pVFh0Q29tbWVudAAAAAAAQ3JlYXRlZCB3aXRoIEdJTVBkLmUHAAABtElEQVR42u3bWW7CMBCA4WlIuUCrLNz/DG1vEiAgQQCpXKCirH3IQ6mylCReZvsPYEufxpZf/PT28X4DrVKgBNUm2QpCZfht/HWA1/UnBNebTkwdih6lBhSFaUBRGAB4KfYVFACQfflOslUtiuiJaUMRCzPJ1q0oImFKlKu+fPugiILpgiIGpiuKCJg+KOxh+qKwhkmn/VHYwqTTNYwu10FrBIoiAMYUCisYkyhsYEyjsICxgUIexhYKaRibKGRhbKOQhHGBQg7GFQopGJcoZGBco5CA8YGCHiadFV5QUMMkswJG54u3/QOsKKFHFJQwGFDQwWBBQQWDCQUNDDYUFDAYUbzDJHOcKF5hknkB4QknijcY7CheYCigOIehguIUJplvyKA4gylRzkCpQFE8wCQ5TRSrMEm+gfBIE8UaTEwcxQpMnG/gmTiKcRguKEZhOKEYg+GGYgSGI8pgGK4og2DifMsWpTdMiXICzgWKYgBGCkonGEkoD8NIQ3kIRiLKvzDRQiZKK0y03MH4WyYKQMNP/WixFY1SOzHRYicepQJTohxBu4Mp7xRF+QMTLXcwPijKfT8FrxDsnCc6VwAAAABJRU5ErkJggg==",H=Object.freeze(Object.defineProperty({__proto__:null,default:P},Symbol.toStringTag,{value:"Module"})),X="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAEYAAABGAQMAAABL4HDHAAAAIGNIUk0AAHomAACAhAAA+gAAAIDoAAB1MAAA6mAAADqYAAAXcJy6UTwAAAAGUExURfDEyv///7Uuxr0AAAABYktHRAH/Ai3eAAAAB3RJTUUH5wobFjMCCPOSewAAAAFvck5UAc+id5oAAAAldEVYdGRhdGU6Y3JlYXRlADIwMjMtMTAtMjdUMjI6NTE6MDErMDA6MDDAliVoAAAAJXRFWHRkYXRlOm1vZGlmeQAyMDIzLTEwLTI3VDIyOjUxOjAxKzAwOjAwscud1AAAACh0RVh0ZGF0ZTp0aW1lc3RhbXAAMjAyMy0xMC0yN1QyMjo1MTowMiswMDowMNc2ppYAAABaZVhJZk1NACoAAAAIAAUBEgADAAAAAQABAAABGgAFAAAAAQAAAEoBGwAFAAAAAQAAAFIBKAADAAAAAQACAAACEwADAAAAAQABAAAAAAAAAAAASAAAAAEAAABIAAAAAR9S9zQAAAAPSURBVCjPY2AYBaNgaAIAArwAAW2SHXQAAAAASUVORK5CYII=",K=Object.freeze(Object.defineProperty({__proto__:null,default:X},Symbol.toStringTag,{value:"Module"})),$="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADIAAAAyCAYAAAAeP4ixAAAABmJLR0QA/wD/AP+gvaeTAAAACXBIWXMAAAsTAAALEwEAmpwYAAAAB3RJTUUH5QoaCDYT/PgO2AAAAEpJREFUaN7tz0ERACAIADAkhAXsH8g00IIHtzXY+fdVLJCxhIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiMiMBvFGAnVyRdPXAAAAAElFTkSuQmCC",q=Object.freeze(Object.defineProperty({__proto__:null,default:$},Symbol.toStringTag,{value:"Module"})),ee="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADIAAAAyCAIAAACRXR/mAAAAGXRFWHRTb2Z0d2FyZQBBZG9iZSBJbWFnZVJlYWR5ccllPAAAAyZpVFh0WE1MOmNvbS5hZG9iZS54bXAAAAAAADw/eHBhY2tldCBiZWdpbj0i77u/IiBpZD0iVzVNME1wQ2VoaUh6cmVTek5UY3prYzlkIj8+IDx4OnhtcG1ldGEgeG1sbnM6eD0iYWRvYmU6bnM6bWV0YS8iIHg6eG1wdGs9IkFkb2JlIFhNUCBDb3JlIDUuNi1jMDY3IDc5LjE1Nzc0NywgMjAxNS8wMy8zMC0yMzo0MDo0MiAgICAgICAgIj4gPHJkZjpSREYgeG1sbnM6cmRmPSJodHRwOi8vd3d3LnczLm9yZy8xOTk5LzAyLzIyLXJkZi1zeW50YXgtbnMjIj4gPHJkZjpEZXNjcmlwdGlvbiByZGY6YWJvdXQ9IiIgeG1sbnM6eG1wPSJodHRwOi8vbnMuYWRvYmUuY29tL3hhcC8xLjAvIiB4bWxuczp4bXBNTT0iaHR0cDovL25zLmFkb2JlLmNvbS94YXAvMS4wL21tLyIgeG1sbnM6c3RSZWY9Imh0dHA6Ly9ucy5hZG9iZS5jb20veGFwLzEuMC9zVHlwZS9SZXNvdXJjZVJlZiMiIHhtcDpDcmVhdG9yVG9vbD0iQWRvYmUgUGhvdG9zaG9wIENDIDIwMTUgKFdpbmRvd3MpIiB4bXBNTTpJbnN0YW5jZUlEPSJ4bXAuaWlkOkI0RUE3OTkxODMzOTExRTdBREM1QjUyMUQxQTQ1REI3IiB4bXBNTTpEb2N1bWVudElEPSJ4bXAuZGlkOkI0RUE3OTkyODMzOTExRTdBREM1QjUyMUQxQTQ1REI3Ij4gPHhtcE1NOkRlcml2ZWRGcm9tIHN0UmVmOmluc3RhbmNlSUQ9InhtcC5paWQ6QjRFQTc5OEY4MzM5MTFFN0FEQzVCNTIxRDFBNDVEQjciIHN0UmVmOmRvY3VtZW50SUQ9InhtcC5kaWQ6QjRFQTc5OTA4MzM5MTFFN0FEQzVCNTIxRDFBNDVEQjciLz4gPC9yZGY6RGVzY3JpcHRpb24+IDwvcmRmOlJERj4gPC94OnhtcG1ldGE+IDw/eHBhY2tldCBlbmQ9InIiPz7O+FtKAAAAIUlEQVR42uzBMQEAAADCoPVPbQhfoAAAAAAAAAD4TYABAB1+AAHfuCxlAAAAAElFTkSuQmCC",Ae=Object.freeze(Object.defineProperty({__proto__:null,default:ee},Symbol.toStringTag,{value:"Module"})),te="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADIAAAAyCAIAAACRXR/mAAAAGXRFWHRTb2Z0d2FyZQBBZG9iZSBJbWFnZVJlYWR5ccllPAAAAyZpVFh0WE1MOmNvbS5hZG9iZS54bXAAAAAAADw/eHBhY2tldCBiZWdpbj0i77u/IiBpZD0iVzVNME1wQ2VoaUh6cmVTek5UY3prYzlkIj8+IDx4OnhtcG1ldGEgeG1sbnM6eD0iYWRvYmU6bnM6bWV0YS8iIHg6eG1wdGs9IkFkb2JlIFhNUCBDb3JlIDUuNi1jMDY3IDc5LjE1Nzc0NywgMjAxNS8wMy8zMC0yMzo0MDo0MiAgICAgICAgIj4gPHJkZjpSREYgeG1sbnM6cmRmPSJodHRwOi8vd3d3LnczLm9yZy8xOTk5LzAyLzIyLXJkZi1zeW50YXgtbnMjIj4gPHJkZjpEZXNjcmlwdGlvbiByZGY6YWJvdXQ9IiIgeG1sbnM6eG1wPSJodHRwOi8vbnMuYWRvYmUuY29tL3hhcC8xLjAvIiB4bWxuczp4bXBNTT0iaHR0cDovL25zLmFkb2JlLmNvbS94YXAvMS4wL21tLyIgeG1sbnM6c3RSZWY9Imh0dHA6Ly9ucy5hZG9iZS5jb20veGFwLzEuMC9zVHlwZS9SZXNvdXJjZVJlZiMiIHhtcDpDcmVhdG9yVG9vbD0iQWRvYmUgUGhvdG9zaG9wIENDIDIwMTUgKFdpbmRvd3MpIiB4bXBNTTpJbnN0YW5jZUlEPSJ4bXAuaWlkOkFEN0Q1NkEyMjFDRDExRTg5NjA3QkMxNjZGN0Y0RDQyIiB4bXBNTTpEb2N1bWVudElEPSJ4bXAuZGlkOkFEN0Q1NkEzMjFDRDExRTg5NjA3QkMxNjZGN0Y0RDQyIj4gPHhtcE1NOkRlcml2ZWRGcm9tIHN0UmVmOmluc3RhbmNlSUQ9InhtcC5paWQ6QUQ3RDU2QTAyMUNEMTFFODk2MDdCQzE2NkY3RjRENDIiIHN0UmVmOmRvY3VtZW50SUQ9InhtcC5kaWQ6QUQ3RDU2QTEyMUNEMTFFODk2MDdCQzE2NkY3RjRENDIiLz4gPC9yZGY6RGVzY3JpcHRpb24+IDwvcmRmOlJERj4gPC94OnhtcG1ldGE+IDw/eHBhY2tldCBlbmQ9InIiPz5ceBhgAAAAQklEQVR42uzOMQEAMAgAIF0uQxjB/imWwN8DEpDVE/e8OElLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tr8wUYABA1AVDNYM1zAAAAAElFTkSuQmCC",le=Object.freeze(Object.defineProperty({__proto__:null,default:te},Symbol.toStringTag,{value:"Module"})),oe=""+new URL("flip-6-camo.2be5d63d.png",import.meta.url).href,ie=Object.freeze(Object.defineProperty({__proto__:null,default:oe},Symbol.toStringTag,{value:"Module"})),ae="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADIAAAAyCAIAAACRXR/mAAAACXBIWXMAAAsTAAALEwEAmpwYAAAAB3RJTUUH4wMHCgsH9nRIWwAAAEVpVFh0Q29tbWVudAAAAAAAQ1JFQVRPUjogZ2QtanBlZyB2MS4wICh1c2luZyBJSkcgSlBFRyB2NjIpLCBxdWFsaXR5ID0gODAKZl8tdwAAADxJREFUWMPtzjEBAAAIAyC1f4G1NYG/BySgk9Q/Uy9paWlpaWlpaWlpaWlpaWlpaWlpaWlpaWlpaWlpXRbA1AIv0ubd0wAAAABJRU5ErkJggg==",ce=Object.freeze(Object.defineProperty({__proto__:null,default:ae},Symbol.toStringTag,{value:"Module"})),se="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADIAAAAyCAYAAAAeP4ixAAAABmJLR0QA/wD/AP+gvaeTAAAACXBIWXMAAAsTAAALEwEAmpwYAAAAB3RJTUUH5QoaCDYT/PgO2AAAAEpJREFUaN7tz0ERACAIADAkhAXsH8g00IIHtzXY+fdVLJCxhIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiMiMBvFGAnVyRdPXAAAAAElFTkSuQmCC",ne=Object.freeze(Object.defineProperty({__proto__:null,default:se},Symbol.toStringTag,{value:"Module"})),ge="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADIAAAAyCAYAAAAeP4ixAAAABmJLR0QA/wD/AP+gvaeTAAAACXBIWXMAAAsTAAALEwEAmpwYAAAAB3RJTUUH5QoaCDUBJGwsUwAAAEhJREFUaN7tz0ERACAIADAkn+E1EbTgwW0Ndu77FQtkLCEiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIyowGFyQNQdhp4owAAAABJRU5ErkJggg==",de=Object.freeze(Object.defineProperty({__proto__:null,default:ge},Symbol.toStringTag,{value:"Module"})),me="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADIAAAAyCAIAAACRXR/mAAAAGXRFWHRTb2Z0d2FyZQBBZG9iZSBJbWFnZVJlYWR5ccllPAAAAyZpVFh0WE1MOmNvbS5hZG9iZS54bXAAAAAAADw/eHBhY2tldCBiZWdpbj0i77u/IiBpZD0iVzVNME1wQ2VoaUh6cmVTek5UY3prYzlkIj8+IDx4OnhtcG1ldGEgeG1sbnM6eD0iYWRvYmU6bnM6bWV0YS8iIHg6eG1wdGs9IkFkb2JlIFhNUCBDb3JlIDUuNi1jMDY3IDc5LjE1Nzc0NywgMjAxNS8wMy8zMC0yMzo0MDo0MiAgICAgICAgIj4gPHJkZjpSREYgeG1sbnM6cmRmPSJodHRwOi8vd3d3LnczLm9yZy8xOTk5LzAyLzIyLXJkZi1zeW50YXgtbnMjIj4gPHJkZjpEZXNjcmlwdGlvbiByZGY6YWJvdXQ9IiIgeG1sbnM6eG1wPSJodHRwOi8vbnMuYWRvYmUuY29tL3hhcC8xLjAvIiB4bWxuczp4bXBNTT0iaHR0cDovL25zLmFkb2JlLmNvbS94YXAvMS4wL21tLyIgeG1sbnM6c3RSZWY9Imh0dHA6Ly9ucy5hZG9iZS5jb20veGFwLzEuMC9zVHlwZS9SZXNvdXJjZVJlZiMiIHhtcDpDcmVhdG9yVG9vbD0iQWRvYmUgUGhvdG9zaG9wIENDIDIwMTUgKFdpbmRvd3MpIiB4bXBNTTpJbnN0YW5jZUlEPSJ4bXAuaWlkOkI0RUE3OTkxODMzOTExRTdBREM1QjUyMUQxQTQ1REI3IiB4bXBNTTpEb2N1bWVudElEPSJ4bXAuZGlkOkI0RUE3OTkyODMzOTExRTdBREM1QjUyMUQxQTQ1REI3Ij4gPHhtcE1NOkRlcml2ZWRGcm9tIHN0UmVmOmluc3RhbmNlSUQ9InhtcC5paWQ6QjRFQTc5OEY4MzM5MTFFN0FEQzVCNTIxRDFBNDVEQjciIHN0UmVmOmRvY3VtZW50SUQ9InhtcC5kaWQ6QjRFQTc5OTA4MzM5MTFFN0FEQzVCNTIxRDFBNDVEQjciLz4gPC9yZGY6RGVzY3JpcHRpb24+IDwvcmRmOlJERj4gPC94OnhtcG1ldGE+IDw/eHBhY2tldCBlbmQ9InIiPz7O+FtKAAAAIUlEQVR42uzBMQEAAADCoPVPbQhfoAAAAAAAAAD4TYABAB1+AAHfuCxlAAAAAElFTkSuQmCC",be=Object.freeze(Object.defineProperty({__proto__:null,default:me},Symbol.toStringTag,{value:"Module"})),pe="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADIAAAAyCAIAAACRXR/mAAAAGXRFWHRTb2Z0d2FyZQBBZG9iZSBJbWFnZVJlYWR5ccllPAAAAyZpVFh0WE1MOmNvbS5hZG9iZS54bXAAAAAAADw/eHBhY2tldCBiZWdpbj0i77u/IiBpZD0iVzVNME1wQ2VoaUh6cmVTek5UY3prYzlkIj8+IDx4OnhtcG1ldGEgeG1sbnM6eD0iYWRvYmU6bnM6bWV0YS8iIHg6eG1wdGs9IkFkb2JlIFhNUCBDb3JlIDUuNi1jMTQyIDc5LjE2MDkyNCwgMjAxNy8wNy8xMy0wMTowNjozOSAgICAgICAgIj4gPHJkZjpSREYgeG1sbnM6cmRmPSJodHRwOi8vd3d3LnczLm9yZy8xOTk5LzAyLzIyLXJkZi1zeW50YXgtbnMjIj4gPHJkZjpEZXNjcmlwdGlvbiByZGY6YWJvdXQ9IiIgeG1sbnM6eG1wPSJodHRwOi8vbnMuYWRvYmUuY29tL3hhcC8xLjAvIiB4bWxuczp4bXBNTT0iaHR0cDovL25zLmFkb2JlLmNvbS94YXAvMS4wL21tLyIgeG1sbnM6c3RSZWY9Imh0dHA6Ly9ucy5hZG9iZS5jb20veGFwLzEuMC9zVHlwZS9SZXNvdXJjZVJlZiMiIHhtcDpDcmVhdG9yVG9vbD0iQWRvYmUgUGhvdG9zaG9wIENDIDIwMTggKFdpbmRvd3MpIiB4bXBNTTpJbnN0YW5jZUlEPSJ4bXAuaWlkOkE4QzZDMzFFOTkzRjExRTg5QkJCRjUwMzQwQTUzQ0Q1IiB4bXBNTTpEb2N1bWVudElEPSJ4bXAuZGlkOkE4QzZDMzFGOTkzRjExRTg5QkJCRjUwMzQwQTUzQ0Q1Ij4gPHhtcE1NOkRlcml2ZWRGcm9tIHN0UmVmOmluc3RhbmNlSUQ9InhtcC5paWQ6QThDNkMzMUM5OTNGMTFFODlCQkJGNTAzNDBBNTNDRDUiIHN0UmVmOmRvY3VtZW50SUQ9InhtcC5kaWQ6QThDNkMzMUQ5OTNGMTFFODlCQkJGNTAzNDBBNTNDRDUiLz4gPC9yZGY6RGVzY3JpcHRpb24+IDwvcmRmOlJERj4gPC94OnhtcG1ldGE+IDw/eHBhY2tldCBlbmQ9InIiPz4BVvkeAAAAQUlEQVR42uzOMQEAMAgAIF0hgxjJ8kvg7wEJyOqJe16cpKWlpaWlpaWlpaWlpaWlpaWlpaWlpaWlpaWlpbX5AgwAGXgBWUWsPNQAAAAASUVORK5CYII=",re=Object.freeze(Object.defineProperty({__proto__:null,default:pe},Symbol.toStringTag,{value:"Module"})),_e=""+new URL("go-3-camo.62af8b4e.png",import.meta.url).href,Ie=Object.freeze(Object.defineProperty({__proto__:null,default:_e},Symbol.toStringTag,{value:"Module"})),ue="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADIAAAAyCAIAAACRXR/mAAAAGXRFWHRTb2Z0d2FyZQBBZG9iZSBJbWFnZVJlYWR5ccllPAAAAyhpVFh0WE1MOmNvbS5hZG9iZS54bXAAAAAAADw/eHBhY2tldCBiZWdpbj0i77u/IiBpZD0iVzVNME1wQ2VoaUh6cmVTek5UY3prYzlkIj8+IDx4OnhtcG1ldGEgeG1sbnM6eD0iYWRvYmU6bnM6bWV0YS8iIHg6eG1wdGs9IkFkb2JlIFhNUCBDb3JlIDUuNi1jMTMyIDc5LjE1OTI4NCwgMjAxNi8wNC8xOS0xMzoxMzo0MCAgICAgICAgIj4gPHJkZjpSREYgeG1sbnM6cmRmPSJodHRwOi8vd3d3LnczLm9yZy8xOTk5LzAyLzIyLXJkZi1zeW50YXgtbnMjIj4gPHJkZjpEZXNjcmlwdGlvbiByZGY6YWJvdXQ9IiIgeG1sbnM6eG1wPSJodHRwOi8vbnMuYWRvYmUuY29tL3hhcC8xLjAvIiB4bWxuczp4bXBNTT0iaHR0cDovL25zLmFkb2JlLmNvbS94YXAvMS4wL21tLyIgeG1sbnM6c3RSZWY9Imh0dHA6Ly9ucy5hZG9iZS5jb20veGFwLzEuMC9zVHlwZS9SZXNvdXJjZVJlZiMiIHhtcDpDcmVhdG9yVG9vbD0iQWRvYmUgUGhvdG9zaG9wIENDIDIwMTUuNSAoV2luZG93cykiIHhtcE1NOkluc3RhbmNlSUQ9InhtcC5paWQ6RDBDODQwQ0VDMzFFMTFFOEExNzg5MDBEOUQzMENCMTgiIHhtcE1NOkRvY3VtZW50SUQ9InhtcC5kaWQ6RDBDODQwQ0ZDMzFFMTFFOEExNzg5MDBEOUQzMENCMTgiPiA8eG1wTU06RGVyaXZlZEZyb20gc3RSZWY6aW5zdGFuY2VJRD0ieG1wLmlpZDpEMEM4NDBDQ0MzMUUxMUU4QTE3ODkwMEQ5RDMwQ0IxOCIgc3RSZWY6ZG9jdW1lbnRJRD0ieG1wLmRpZDpEMEM4NDBDREMzMUUxMUU4QTE3ODkwMEQ5RDMwQ0IxOCIvPiA8L3JkZjpEZXNjcmlwdGlvbj4gPC9yZGY6UkRGPiA8L3g6eG1wbWV0YT4gPD94cGFja2V0IGVuZD0iciI/PlkcBUQAAAA+SURBVHja7M4xAQAABAAwpPboLoHfsSVY9kz8U/GSlpaWlpaWlpaWlpaWlpaWlpaWlpaWlpaWlpaW1mUFGACAHQHWjGKK3AAAAABJRU5ErkJggg==",Re=Object.freeze(Object.defineProperty({__proto__:null,default:ue},Symbol.toStringTag,{value:"Module"})),Ee="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADIAAAAyCAYAAAAeP4ixAAAABmJLR0QA/wD/AP+gvaeTAAAACXBIWXMAABwgAAAcIAHND5ueAAAAB3RJTUUH5AkZDgkQp+sPdwAAAEhJREFUaN7tz0ERACAIADAkmn20/w9a8OC2Bjvv34oFMpYQERERERERERERERERERERERERERERERERERERERERERERERERmdGgmQKAd49VtAAAAABJRU5ErkJggg==",Me=Object.freeze(Object.defineProperty({__proto__:null,default:Ee},Symbol.toStringTag,{value:"Module"})),ve="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADIAAAAyCAYAAAAeP4ixAAAABmJLR0QA/wD/AP+gvaeTAAAACXBIWXMAABwgAAAcIAHND5ueAAAAB3RJTUUH5AkZDg0llTQOUAAAAEpJREFUaN7tzzENADAIADCGfy1LpmZywAUHaR30/HcrFshYQkRERERERERERERERERERERERERERERERERERERERERERERERGRGA7hcA5kVckyNAAAAAElFTkSuQmCC",he=Object.freeze(Object.defineProperty({__proto__:null,default:ve},Symbol.toStringTag,{value:"Module"})),Be="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADIAAAAyCAYAAAAeP4ixAAAABmJLR0QA/wD/AP+gvaeTAAAACXBIWXMAABwgAAAcIAHND5ueAAAAB3RJTUUH5AkZDhAPseOrmgAAAEpJREFUaN7tz0ERACAIADAkgC3sX8Bu0IIHtzXY+fdVLJCxhIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiMiMBpMcAlL4z2khAAAAAElFTkSuQmCC",De=Object.freeze(Object.defineProperty({__proto__:null,default:Be},Symbol.toStringTag,{value:"Module"})),Ge="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADIAAAAyCAYAAAAeP4ixAAAABmJLR0QA/wD/AP+gvaeTAAAACXBIWXMAABwgAAAcIAHND5ueAAAAB3RJTUUH5AkZDhQBMjdDmQAAAEhJREFUaN7tz0ERACAIADCkg+l9mRRa8OC2Bjv3/YoFMpYQERERERERERERERERERERERERERERERERERERERERERERERERmdGZWgK0I7fuNwAAAABJRU5ErkJggg==",Qe=Object.freeze(Object.defineProperty({__proto__:null,default:Ge},Symbol.toStringTag,{value:"Module"})),je="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADIAAAAyCAIAAACRXR/mAAAAGXRFWHRTb2Z0d2FyZQBBZG9iZSBJbWFnZVJlYWR5ccllPAAAAyZpVFh0WE1MOmNvbS5hZG9iZS54bXAAAAAAADw/eHBhY2tldCBiZWdpbj0i77u/IiBpZD0iVzVNME1wQ2VoaUh6cmVTek5UY3prYzlkIj8+IDx4OnhtcG1ldGEgeG1sbnM6eD0iYWRvYmU6bnM6bWV0YS8iIHg6eG1wdGs9IkFkb2JlIFhNUCBDb3JlIDUuNi1jMDY3IDc5LjE1Nzc0NywgMjAxNS8wMy8zMC0yMzo0MDo0MiAgICAgICAgIj4gPHJkZjpSREYgeG1sbnM6cmRmPSJodHRwOi8vd3d3LnczLm9yZy8xOTk5LzAyLzIyLXJkZi1zeW50YXgtbnMjIj4gPHJkZjpEZXNjcmlwdGlvbiByZGY6YWJvdXQ9IiIgeG1sbnM6eG1wPSJodHRwOi8vbnMuYWRvYmUuY29tL3hhcC8xLjAvIiB4bWxuczp4bXBNTT0iaHR0cDovL25zLmFkb2JlLmNvbS94YXAvMS4wL21tLyIgeG1sbnM6c3RSZWY9Imh0dHA6Ly9ucy5hZG9iZS5jb20veGFwLzEuMC9zVHlwZS9SZXNvdXJjZVJlZiMiIHhtcDpDcmVhdG9yVG9vbD0iQWRvYmUgUGhvdG9zaG9wIENDIDIwMTUgKFdpbmRvd3MpIiB4bXBNTTpJbnN0YW5jZUlEPSJ4bXAuaWlkOkI0RUE3OTkxODMzOTExRTdBREM1QjUyMUQxQTQ1REI3IiB4bXBNTTpEb2N1bWVudElEPSJ4bXAuZGlkOkI0RUE3OTkyODMzOTExRTdBREM1QjUyMUQxQTQ1REI3Ij4gPHhtcE1NOkRlcml2ZWRGcm9tIHN0UmVmOmluc3RhbmNlSUQ9InhtcC5paWQ6QjRFQTc5OEY4MzM5MTFFN0FEQzVCNTIxRDFBNDVEQjciIHN0UmVmOmRvY3VtZW50SUQ9InhtcC5kaWQ6QjRFQTc5OTA4MzM5MTFFN0FEQzVCNTIxRDFBNDVEQjciLz4gPC9yZGY6RGVzY3JpcHRpb24+IDwvcmRmOlJERj4gPC94OnhtcG1ldGE+IDw/eHBhY2tldCBlbmQ9InIiPz7O+FtKAAAAIUlEQVR42uzBMQEAAADCoPVPbQhfoAAAAAAAAAD4TYABAB1+AAHfuCxlAAAAAElFTkSuQmCC",Se=Object.freeze(Object.defineProperty({__proto__:null,default:je},Symbol.toStringTag,{value:"Module"})),Ue="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADIAAAAyCAIAAACRXR/mAAAAGXRFWHRTb2Z0d2FyZQBBZG9iZSBJbWFnZVJlYWR5ccllPAAAAyZpVFh0WE1MOmNvbS5hZG9iZS54bXAAAAAAADw/eHBhY2tldCBiZWdpbj0i77u/IiBpZD0iVzVNME1wQ2VoaUh6cmVTek5UY3prYzlkIj8+IDx4OnhtcG1ldGEgeG1sbnM6eD0iYWRvYmU6bnM6bWV0YS8iIHg6eG1wdGs9IkFkb2JlIFhNUCBDb3JlIDUuNi1jMTM4IDc5LjE1OTgyNCwgMjAxNi8wOS8xNC0wMTowOTowMSAgICAgICAgIj4gPHJkZjpSREYgeG1sbnM6cmRmPSJodHRwOi8vd3d3LnczLm9yZy8xOTk5LzAyLzIyLXJkZi1zeW50YXgtbnMjIj4gPHJkZjpEZXNjcmlwdGlvbiByZGY6YWJvdXQ9IiIgeG1sbnM6eG1wPSJodHRwOi8vbnMuYWRvYmUuY29tL3hhcC8xLjAvIiB4bWxuczp4bXBNTT0iaHR0cDovL25zLmFkb2JlLmNvbS94YXAvMS4wL21tLyIgeG1sbnM6c3RSZWY9Imh0dHA6Ly9ucy5hZG9iZS5jb20veGFwLzEuMC9zVHlwZS9SZXNvdXJjZVJlZiMiIHhtcDpDcmVhdG9yVG9vbD0iQWRvYmUgUGhvdG9zaG9wIENDIDIwMTcgKFdpbmRvd3MpIiB4bXBNTTpJbnN0YW5jZUlEPSJ4bXAuaWlkOkYxQTM2MTM0NTlBRDExRTg5Nzc3ODQxNDMwNkMxREJDIiB4bXBNTTpEb2N1bWVudElEPSJ4bXAuZGlkOkYxQTM2MTM1NTlBRDExRTg5Nzc3ODQxNDMwNkMxREJDIj4gPHhtcE1NOkRlcml2ZWRGcm9tIHN0UmVmOmluc3RhbmNlSUQ9InhtcC5paWQ6RjFBMzYxMzI1OUFEMTFFODk3Nzc4NDE0MzA2QzFEQkMiIHN0UmVmOmRvY3VtZW50SUQ9InhtcC5kaWQ6RjFBMzYxMzM1OUFEMTFFODk3Nzc4NDE0MzA2QzFEQkMiLz4gPC9yZGY6RGVzY3JpcHRpb24+IDwvcmRmOlJERj4gPC94OnhtcG1ldGE+IDw/eHBhY2tldCBlbmQ9InIiPz7r9bPHAAAAQklEQVR42uzOMQEAMAgAIF0Ic1jD/oWWwN8DEpDVE/e8OElLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tr8wUYAFl1APOEz3ppAAAAAElFTkSuQmCC",Ne=Object.freeze(Object.defineProperty({__proto__:null,default:Ue},Symbol.toStringTag,{value:"Module"})),ye=""+new URL("go-3-camo.62af8b4e.png",import.meta.url).href,Te=Object.freeze(Object.defineProperty({__proto__:null,default:ye},Symbol.toStringTag,{value:"Module"})),Ye=/(^|[/\\])([^/\\]+?)(?=(\.[^.]+)?$)/;function _(e){var A;return(A=e.match(Ye))==null?void 0:A[2]}const Oe=["src","alt"],ke={class:"variant-name text-h7"},we=m({__name:"variant",props:{variant:{type:Object,required:!0}},setup(e){const A=p(),n=Object.fromEntries(Object.entries(Object.assign({"/assets/image/color-thumbnails/clip-4-black.png":f,"/assets/image/color-thumbnails/clip-4-blue.png":J,"/assets/image/color-thumbnails/clip-4-camo.png":L,"/assets/image/color-thumbnails/clip-4-grey-pink.png":H,"/assets/image/color-thumbnails/clip-4-pink.png":K,"/assets/image/color-thumbnails/clip-4-red.png":q,"/assets/image/color-thumbnails/flip-6-black.png":Ae,"/assets/image/color-thumbnails/flip-6-blue.png":le,"/assets/image/color-thumbnails/flip-6-camo.png":ie,"/assets/image/color-thumbnails/flip-6-grey.png":ce,"/assets/image/color-thumbnails/flip-6-red.png":ne,"/assets/image/color-thumbnails/flip-6-teal.png":de,"/assets/image/color-thumbnails/go-3-black.png":be,"/assets/image/color-thumbnails/go-3-blue.png":re,"/assets/image/color-thumbnails/go-3-camo.png":Ie,"/assets/image/color-thumbnails/go-3-dark-grey.png":Re,"/assets/image/color-thumbnails/go-3-green.png":Me,"/assets/image/color-thumbnails/go-3-pink.png":he,"/assets/image/color-thumbnails/go-3-red.png":De,"/assets/image/color-thumbnails/go-3-teal.png":Qe,"/assets/image/color-thumbnails/xtreme-3-black.png":Se,"/assets/image/color-thumbnails/xtreme-3-blue.png":Ne,"/assets/image/color-thumbnails/xtreme-3-camo.png":Te})).map(([o,a])=>[_(o),a.default]));function l(o){A.setSelectedVariant(o)}return(o,a)=>(i(),c("span",{class:I(["variant",{selected:e.variant.selected}]),onClick:a[0]||(a[0]=u=>l(e.variant))},[t("img",{src:g(n)[g(_)(e.variant.color_image)],alt:`Image color ${e.variant.color_image}`},null,8,Oe),t("span",ke,r(e.variant.name),1)],2))}});const ze=d(we,[["__scopeId","data-v-469f9180"]]),Ze={class:"variant-container"},Ce="Select your style",We=m({__name:"index",setup(e){const A=p();return(s,n)=>(i(),c("div",null,[t("h5",{class:"text-h5"},r(Ce)),t("div",Ze,[(i(!0),c(v,null,h(g(A).selectedProduct.variants,(l,o)=>(i(),R(ze,{key:o,variant:l},null,8,["variant"]))),128))])]))}});const Ve=d(We,[["__scopeId","data-v-7b96ae3b"]]),fe=""+new URL("clip-4.560d816c.png",import.meta.url).href,Fe=Object.freeze(Object.defineProperty({__proto__:null,default:fe},Symbol.toStringTag,{value:"Module"})),Je=""+new URL("flip-6.7eff7b18.png",import.meta.url).href,xe=Object.freeze(Object.defineProperty({__proto__:null,default:Je},Symbol.toStringTag,{value:"Module"})),Le=""+new URL("go-3.39da14bb.png",import.meta.url).href,Pe=Object.freeze(Object.defineProperty({__proto__:null,default:Le},Symbol.toStringTag,{value:"Module"})),He=""+new URL("xtreme-3.aab14aa3.png",import.meta.url).href,Xe=Object.freeze(Object.defineProperty({__proto__:null,default:He},Symbol.toStringTag,{value:"Module"})),Ke=["src","alt"],$e={class:"variant-name text-h6"},qe=m({__name:"variant",props:{product:{type:Object,required:!0}},setup(e){const A=p(),n=Object.fromEntries(Object.entries(Object.assign({"/assets/image/product-thumbnails/clip-4.png":Fe,"/assets/image/product-thumbnails/flip-6.png":xe,"/assets/image/product-thumbnails/go-3.png":Pe,"/assets/image/product-thumbnails/xtreme-3.png":Xe})).map(([o,a])=>[_(o),a.default]));function l(o){A.setSelectedProduct(o)}return(o,a)=>(i(),c("span",{class:I(["variant",{selected:e.product.selected}]),onClick:a[0]||(a[0]=u=>l(e.product))},[t("img",{src:g(n)[g(_)(e.product.thumbnail)],alt:`JBL ${e.product.name} product`},null,8,Ke),t("span",$e,r(e.product.name),1)],2))}});const eA=d(qe,[["__scopeId","data-v-361c82d0"]]),AA={class:"product-picker"},tA={class:"product-container"},lA="Pick your product",oA=m({__name:"index",setup(e){const A=p();return(s,n)=>(i(),c("div",AA,[t("h5",{class:"text-h5"},r(lA)),t("div",tA,[(i(!0),c(v,null,h(g(A).getProducts,(l,o)=>(i(),R(eA,{key:o,product:l},null,8,["product"]))),128))])]))}});const iA=d(oA,[["__scopeId","data-v-5510a450"]]),aA=e=>(G("data-v-9b3ab53e"),e=e(),Q(),e),cA={class:"subsection"},sA={class:"text-h1 text-black-primary"},nA=aA(()=>t("span",{class:"text-primary"},"JBL ",-1)),gA={class:"subsection"},dA={class:"subsection"},mA=m({__name:"index",setup(e){const A=p(),s=E();return(n,l)=>(i(),c("div",{class:I(["section-b",{hidden:g(s).getFullSize}])},[t("div",cA,[t("h1",sA,[nA,D(r(g(A).selectedProduct.name),1)])]),t("div",gA,[b(iA)]),t("div",dA,[b(Ve)])],2))}});const bA=d(mA,[["__scopeId","data-v-9b3ab53e"]]),pA=m({});const rA={class:"homepage bg-white-primary"};function _A(e,A,s,n,l,o){const a=W,u=bA;return i(),c("div",rA,[b(a),b(u)])}const uA=d(pA,[["render",_A],["__scopeId","data-v-ff9a3276"]]);export{uA as default};