(this["webpackJsonpwhatsapp-clone"]=this["webpackJsonpwhatsapp-clone"]||[]).push([[0],{69:function(e,t,c){},70:function(e,t,c){},71:function(e,t,c){},76:function(e,t,c){},86:function(e,t,c){},87:function(e,t,c){},89:function(e,t,c){"use strict";c.r(t);var a=c(2),s=c.n(a),n=c(31),i=c.n(n),r=(c(69),c(12)),o=(c(70),c(71),c(108)),j=c(35),d=c(34),l=d.a.initializeApp({apiKey:"AIzaSyAz_kjVkTHwWnblpEtKfQ8BmmebHeTOa34",authDomain:"whatsapp-clone-7310d.firebaseapp.com",projectId:"whatsapp-clone-7310d",storageBucket:"whatsapp-clone-7310d.appspot.com",messagingSenderId:"346904842624",appId:"1:346904842624:web:1d730c4fd418c6e114f165",measurementId:"G-JNT1PHR770"}).firestore(),h=d.a.auth(),b=new d.a.auth.GoogleAuthProvider,u=l,m=(c(76),c(4));var O=function(e){var t,c=e.addNewChat,s=e.name,n=e.id,i=Object(a.useState)(""),d=Object(r.a)(i,2),l=d[0],h=d[1],b=Object(a.useState)(""),O=Object(r.a)(b,2),p=O[0],x=O[1];return Object(a.useEffect)((function(){n&&u.collection("rooms").doc(n).collection("messages").orderBy("timestamp","desc").onSnapshot((function(e){return x(e.docs.map((function(e){return e.data()})))}))}),[n]),Object(a.useEffect)((function(){h(Math.floor(5e3*Math.random()))}),[]),c?Object(m.jsx)("div",{onClick:function(){var e=prompt("Please enter the name for chat room");e&&u.collection("rooms").add({name:e})},className:"sidebarChat",children:Object(m.jsx)("h2",{children:"Add New Chat"})}):Object(m.jsx)(j.b,{to:"/rooms/".concat(n),children:Object(m.jsxs)("div",{className:"sidebarChat",children:[Object(m.jsx)(o.a,{src:"https://avatars.dicebear.com/api/human/".concat(l,".svg")}),Object(m.jsxs)("div",{className:"sidebarChat__info",children:[Object(m.jsx)("h2",{children:s}),Object(m.jsx)("p",{children:null===(t=p[0])||void 0===t?void 0:t.message})]})]})})},p=c(103),x=c(54),f=c.n(x),v=c(55),g=c.n(v),N=c(56),_=c.n(N),S=c(57),w=c.n(S),C=Object(a.createContext)(),y=function(e){var t=e.reducer,c=e.initialState,s=e.children;return Object(m.jsx)(C.Provider,{value:Object(a.useReducer)(t,c),children:s})},I=function(){return Object(a.useContext)(C)};var k=function(){var e=Object(a.useState)([]),t=Object(r.a)(e,2),c=t[0],s=t[1],n=I(),i=Object(r.a)(n,2),j=i[0].user;return i[1],Object(a.useEffect)((function(){u.collection("rooms").onSnapshot((function(e){return s(e.docs.map((function(e){return{id:e.id,data:e.data()}})))}))}),[]),Object(m.jsxs)("div",{className:"sidebar",children:[Object(m.jsxs)("div",{className:"sidebar__header",children:[Object(m.jsx)(o.a,{src:null===j||void 0===j?void 0:j.photoURL}),Object(m.jsxs)("div",{className:"sidebar__headerRight",children:[Object(m.jsx)(p.a,{children:Object(m.jsx)(f.a,{})}),Object(m.jsx)(p.a,{children:Object(m.jsx)(g.a,{})}),Object(m.jsx)(p.a,{children:Object(m.jsx)(_.a,{})})]})]}),Object(m.jsx)("div",{className:"sidebar__search",children:Object(m.jsxs)("div",{className:"sidebar__searchContainer",children:[Object(m.jsx)(w.a,{}),Object(m.jsx)("input",{placeholder:"Search or start a New Chat",type:"text"})]})}),Object(m.jsxs)("div",{className:"sidebar__chats",children:[Object(m.jsx)(O,{addNewChat:!0}),c.map((function(e){return Object(m.jsx)(O,{id:e.id,name:e.data.name},e.id)})),";"]})]})},T=c(104),E=c(105),A=c(106),D=c(59),P=c.n(D),B=c(58),M=c.n(B),R=(c(86),c(10));var F=function(){var e,t,c=Object(a.useState)(""),s=Object(r.a)(c,2),n=s[0],i=s[1],j=Object(a.useState)(""),l=Object(r.a)(j,2),h=l[0],b=l[1],O=Object(R.f)().roomId,x=Object(a.useState)(""),f=Object(r.a)(x,2),v=f[0],g=f[1],N=Object(a.useState)([]),_=Object(r.a)(N,2),S=_[0],w=_[1],C=I(),y=Object(r.a)(C,2),k=y[0].user;return y[1],Object(a.useEffect)((function(){O&&(u.collection("rooms").doc(O).onSnapshot((function(e){g(e.data().name)})),u.collection("rooms").doc(O).collection("messages").orderBy("timestamp","asc").onSnapshot((function(e){w(e.docs.map((function(e){return e.data()})))})))}),[O]),Object(a.useEffect)((function(){b(Math.floor(5e3*Math.random()))}),[O]),Object(m.jsxs)("div",{className:"chat",children:[Object(m.jsxs)("div",{className:"chat_header",children:[Object(m.jsx)(o.a,{src:"https://avatars.dicebear.com/api/human/".concat(h,".svg")}),Object(m.jsxs)("div",{className:"chat_headerInfo",children:[Object(m.jsx)("h3",{className:"chat-room-name",children:v}),Object(m.jsxs)("p",{className:"chat-room-last-seen",children:["last seen "," ",new Date(null===(e=S[S.length-1])||void 0===e||null===(t=e.timestamp)||void 0===t?void 0:t.toDate()).toUTCString()]})]}),Object(m.jsxs)("div",{className:"chat_headerRight",children:[Object(m.jsx)(p.a,{children:Object(m.jsx)(T.a,{})}),Object(m.jsx)(p.a,{children:Object(m.jsx)(E.a,{})}),Object(m.jsx)(p.a,{children:Object(m.jsx)(A.a,{})})]})]}),Object(m.jsx)("div",{className:"chat_body",children:S.map((function(e){var t;return Object(m.jsxs)("p",{className:"chat_message ".concat(e.name==k.displayName&&"chat_receiver"),children:[Object(m.jsx)("span",{className:"chat_name",children:e.name}),e.message,Object(m.jsx)("span",{className:"chat_timestemp",children:new Date(null===(t=e.timestamp)||void 0===t?void 0:t.toDate()).toUTCString()})]})}))}),Object(m.jsxs)("div",{className:"chat_footer",children:[Object(m.jsx)(M.a,{}),Object(m.jsxs)("form",{children:[Object(m.jsx)("input",{value:n,onChange:function(e){return i(e.target.value)},type:"text",placeholder:"Type a message"}),Object(m.jsx)("button",{type:"submit",onClick:function(e){e.preventDefault(),u.collection("rooms").doc(O).collection("messages").add({message:n,name:k.displayName,timestamp:d.a.firestore.FieldValue.serverTimestamp()}),i("")},children:" Send a Message"})]}),Object(m.jsx)(P.a,{})]})]})},W=c(60),U=c(107),z=(c(87),c(48)),G="SET_USER",H=function(e,t){switch(t.type){case G:return Object(z.a)(Object(z.a)({},e),{},{user:t.user});default:return e}};var J=function(){var e=I(),t=Object(r.a)(e,2);Object(W.a)(t[0]);var c=t[1];return Object(m.jsx)("div",{className:"login",children:Object(m.jsxs)("div",{className:"login__container",children:[Object(m.jsx)("img",{src:"https://upload.wikimedia.org/wikipedia/commons/thumb/6/6b/WhatsApp.svg/897px-WhatsApp.svg.png",alt:"logo"}),Object(m.jsx)("div",{className:"login__text",children:Object(m.jsx)("h1",{children:"Sign in to Whatsapp"})}),Object(m.jsx)(U.a,{onClick:function(){h.signInWithPopup(b).then((function(e){c({type:G,user:e.user})})).catch((function(e){return alert(e.message)}))},children:"Sign In with Google"})]})})};var L=function(){var e=I(),t=Object(r.a)(e,2),c=t[0].user;return t[1],Object(m.jsx)("div",{className:"app",children:c?Object(m.jsx)("div",{className:"app__body",children:Object(m.jsxs)(j.a,{children:[Object(m.jsx)(k,{}),Object(m.jsxs)(R.c,{children:[Object(m.jsx)(R.a,{path:"/rooms/:roomId",children:Object(m.jsx)(F,{})}),Object(m.jsx)(R.a,{path:"/",children:Object(m.jsx)(F,{})})]})]})}):Object(m.jsx)(J,{})})},K=function(e){e&&e instanceof Function&&c.e(3).then(c.bind(null,109)).then((function(t){var c=t.getCLS,a=t.getFID,s=t.getFCP,n=t.getLCP,i=t.getTTFB;c(e),a(e),s(e),n(e),i(e)}))};i.a.render(Object(m.jsx)(s.a.StrictMode,{children:Object(m.jsx)(y,{initialState:{user:null},reducer:H,children:Object(m.jsx)(L,{})})}),document.getElementById("root")),K()}},[[89,1,2]]]);
//# sourceMappingURL=main.89fc2a09.chunk.js.map