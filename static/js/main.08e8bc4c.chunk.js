(this.webpackJsonpclient=this.webpackJsonpclient||[]).push([[0],{132:function(e,t){},134:function(e,t){},149:function(e,t,a){},150:function(e,t,a){"use strict";a.r(t);var n=a(0),c=a(9),i=a.n(c),r=a(22),l=a(190),s=a(185),o=a(180),d=a(183),j=a(151),u=a(19),b=a(85),m=a(55),x=a.n(m),O=a(4),p=Object(n.createContext)(),f=Object(b.io)("http://localhost:5000"),h=function(e){var t=e.children,a=Object(n.useState)(null),c=Object(u.a)(a,2),i=c[0],r=c[1],l=Object(n.useState)(""),s=Object(u.a)(l,2),o=s[0],d=s[1],j=Object(n.useState)({}),b=Object(u.a)(j,2),m=b[0],h=b[1],g=Object(n.useState)(!1),v=Object(u.a)(g,2),C=v[0],w=v[1],y=Object(n.useState)(!1),N=Object(u.a)(y,2),k=N[0],I=N[1],S=Object(n.useState)(""),D=Object(u.a)(S,2),B=D[0],A=D[1],R=Object(n.useRef)(),V=Object(n.useRef)(),E=Object(n.useRef)();Object(n.useEffect)((function(){navigator.mediaDevices.getUserMedia({video:!0,audio:!0}).then((function(e){r(e),R.current.srcObject=e})),f.on("me",(function(e){return d(e)})),f.on("calluser",(function(e){var t=e.from,a=e.name,n=e.signal;h({isReceivedCall:!0,from:t,name:a,signal:n})}))}),[]);return Object(O.jsx)(p.Provider,{value:{call:m,callAccepted:C,myVideo:R,userVideo:V,stream:i,name:B,setName:A,callEnded:k,me:o,callUser:function(e){var t=new x.a({initiator:!0,trickle:!1,stream:i});t.on("signal",(function(t){f.emit("calluser",{userToCall:e,signalData:t,from:o,name:B})})),t.on("stream",(function(e){V.current.srcObject=e})),f.on("callaccepted",(function(e){w(!0),t.signal(e)})),E.current=t},leaveCall:function(){I(!0),E.current.destroy(),window.location.reload()},answerCall:function(){w(!0);var e=new x.a({initiator:!1,trickle:!1,stream:i});e.on("signal",(function(e){f.emit("answercall",{signal:e,to:m.from})})),e.on("stream",(function(e){V.current.srcObject=e})),e.signal(m.signal),E.current=e}},children:t})},g=Object(o.a)((function(e){return{video:Object(r.a)({width:"550px"},e.breakpoints.down("xs"),{width:"300px"}),gridContainer:Object(r.a)({justifyContent:"center"},e.breakpoints.down("xs"),{flexDirection:"column"}),paper:{padding:"10px",border:"2px solid black",margin:"10px"}}})),v=function(){var e=Object(n.useContext)(p),t=e.name,a=e.callAccepted,c=e.myVideo,i=e.userVideo,r=e.callEnded,l=e.stream,o=e.call,u=g();return Object(O.jsxs)(d.a,{container:!0,className:u.gridContainer,children:[l&&Object(O.jsx)(j.a,{className:u.paper,children:Object(O.jsxs)(d.a,{item:!0,xs:12,md:6,children:[Object(O.jsx)(s.a,{variant:"h5",gutterBottom:!0,children:t||"Name"}),Object(O.jsx)("video",{playsInline:!0,muted:!0,ref:c,autoPlay:!0,className:u.video})]})}),a&&!r&&Object(O.jsx)(j.a,{className:u.paper,children:Object(O.jsxs)(d.a,{item:!0,xs:12,md:6,children:[Object(O.jsx)(s.a,{variant:"h5",gutterBottom:!0,children:o.name||"Name"}),Object(O.jsx)("video",{playsInline:!0,ref:i,autoPlay:!0,className:u.video})]})})]})},C=a(192),w=function(){var e=Object(n.useContext)(p),t=e.answerCall,a=e.call,c=e.callAccepted;return Object(O.jsx)(O.Fragment,{children:a.isReceivedCall&&!c&&Object(O.jsxs)("div",{style:{idsplay:"flex",justifyContent:"center"},children:[Object(O.jsxs)("h1",{children:[a.name," is calling: "]}),Object(O.jsx)(C.a,{variant:"contained",color:"primary",onClick:t,children:"Answer"})]})})},y=a(186),N=a(191),k=a(91),I=a(187),S=a(188),D=a(189),B=Object(o.a)((function(e){return{root:{display:"flex",flexDirection:"column"},gridContainer:Object(r.a)({width:"100%"},e.breakpoints.down("xs"),{flexDirection:"column"}),container:Object(r.a)({width:"600px",margin:"35px 0",padding:0},e.breakpoints.down("xs"),{width:"80%"}),margin:{marginTop:20},padding:{padding:20},paper:{padding:"10px 20px",border:"2px solid black"}}})),A=function(e){var t=e.children,a=Object(n.useContext)(p),c=a.me,i=a.callAccepted,r=a.name,l=a.setName,o=a.callEnded,b=a.leaveCall,m=a.callUser,x=Object(n.useState)(""),f=Object(u.a)(x,2),h=f[0],g=f[1],v=B();return Object(O.jsx)(y.a,{className:v.container,children:Object(O.jsxs)(j.a,{elevation:10,className:v.paper,children:[Object(O.jsx)("form",{className:v.root,noValidate:!0,autoComplete:"off",children:Object(O.jsxs)(d.a,{container:!0,className:v.gridContainer,children:[Object(O.jsxs)(d.a,{item:!0,xs:12,md:6,className:v.padding,children:[Object(O.jsx)(s.a,{gutterBottom:!0,variant:"h6",children:"Account Info"}),Object(O.jsx)(N.a,{label:"Name",value:r,onChange:function(e){return l(e.target.value)},fullWidth:!0}),console.log(c),Object(O.jsx)(k.CopyToClipboard,{text:c,className:v.margin,children:Object(O.jsx)(C.a,{variant:"contained",color:"primary",fullWidth:!0,startIcon:Object(O.jsx)(I.a,{fontSize:"large"}),children:"Copy Your ID"})})]}),Object(O.jsxs)(d.a,{item:!0,xs:12,md:6,className:v.padding,children:[Object(O.jsx)(s.a,{gutterBottom:!0,variant:"h6",children:"Make a call"}),Object(O.jsx)(N.a,{label:"ID to Call",value:h,onChange:function(e){return g(e.target.value)},fullWidth:!0}),i&&!o?Object(O.jsx)(C.a,{variant:"contained",color:"secondary",startIcon:Object(O.jsx)(S.a,{fontSize:"large"}),fullWidth:!0,onClick:b,className:v.margin,children:"Hang up"}):Object(O.jsx)(C.a,{variant:"contained",color:"primary",startIcon:Object(O.jsx)(D.a,{fontSize:"large"}),fullWidth:!0,onClick:function(){return m(h)},className:v.margin,children:"Call"})]})]})}),t]})})},R=Object(o.a)((function(e){return{appBar:Object(r.a)({borderRadius:15,margin:"30px 100px",display:"flex",flexDirection:"row",justifyContent:"center",alignItems:"center",width:"600px",border:"2px solid black"},e.breakpoints.down("xs"),{width:"90%"}),wrapper:{display:"flex",flexDirection:"column",alignItems:"center",width:"100%"}}})),V=function(){var e=R();return Object(O.jsxs)("div",{className:e.wrapper,children:[Object(O.jsx)(l.a,{className:e.appBar,position:"static",color:"inherit",children:Object(O.jsx)(s.a,{variant:"h2",align:"center",children:"Video Chat"})}),Object(O.jsx)(v,{}),Object(O.jsx)(A,{children:Object(O.jsx)(w,{})})]})};a(149);i.a.render(Object(O.jsx)(h,{children:Object(O.jsx)(V,{})}),document.getElementById("root"))}},[[150,1,2]]]);
//# sourceMappingURL=main.08e8bc4c.chunk.js.map