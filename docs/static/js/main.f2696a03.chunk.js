(this["webpackJsonpjournal-app"]=this["webpackJsonpjournal-app"]||[]).push([[0],{158:function(e,t,n){},159:function(e,t,n){"use strict";n.r(t);var a=n(1),c=n(28),r=n.n(c),o=n(6),s=n(7),i=n.n(s),u=n(9),l=n(17),j=n(18),d=n(8),b=n(26);n(71),n(73);b.a.initializeApp({apiKey:"AIzaSyCTYSpbtbTVKgrW81ikyhcGLXB4ttBgMws",authDomain:"curso-react-3f2e6.firebaseapp.com",projectId:"curso-react-3f2e6",storageBucket:"curso-react-3f2e6.appspot.com",messagingSenderId:"518634465542",appId:"1:518634465542:web:547d55b851c0874e6dd687"});var p=b.a.firestore(),h=new b.a.auth.GoogleAuthProvider,O=n(4),f=n(19),m=n.n(f),x=function(){var e=Object(u.a)(i.a.mark((function e(t){var n,a,c;return i.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return"https://api.cloudinary.com/v1_1/dxuj1ywwo/upload",(n=new FormData).append("upload_preset","react-journal"),n.append("file",t),e.prev=4,e.next=7,fetch("https://api.cloudinary.com/v1_1/dxuj1ywwo/upload",{method:"POST",body:n});case 7:if(!(a=e.sent).ok){e.next=15;break}return e.next=11,a.json();case 11:return c=e.sent,e.abrupt("return",c.secure_url);case 15:return e.abrupt("return",null);case 16:e.next=21;break;case 18:e.prev=18,e.t0=e.catch(4),console.log(e.t0);case 21:case"end":return e.stop()}}),e,null,[[4,18]])})));return function(t){return e.apply(this,arguments)}}(),v=function(){var e=Object(u.a)(i.a.mark((function e(t){var n,a;return i.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,p.collection("".concat(t,"/journal/notes")).get();case 2:return n=e.sent,a=[],n.forEach((function(e){a.push(Object(O.a)({id:e.id},e.data()))})),e.abrupt("return",a);case 6:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}(),g="[Auth] Login",y="[Auth] Logout",_="[UI] Set Error",w="[UI] Remove Error",N="[UI] Start loading",k="[UI] Finish loading",C="[Notes] New note",E="[Notes] Set active note",S="[Notes] Load notes",I="[Notes] Updated note",L="[Notes] Delete note",P="[Notes] Logout note",D=function(e,t){return{type:E,payload:Object(O.a)({id:e},t)}},A=function(e,t){return{type:C,payload:Object(O.a)({id:e},t)}},U=function(e){return function(){var t=Object(u.a)(i.a.mark((function t(n){var a;return i.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,v(e);case 2:a=t.sent,n(T(a));case 4:case"end":return t.stop()}}),t)})));return function(e){return t.apply(this,arguments)}}()},T=function(e){return{type:S,payload:e}},M=function(e){return function(){var t=Object(u.a)(i.a.mark((function t(n,a){var c,r;return i.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return c=a().auth.uid,e.url||delete e.url,delete(r=Object(O.a)({},e)).id,t.next=6,p.doc("".concat(c,"/journal/notes/").concat(e.id)).update(r);case 6:n(B(e.id,e)),m.a.fire("Saved",e.title,"success");case 8:case"end":return t.stop()}}),t)})));return function(e,n){return t.apply(this,arguments)}}()},B=function(e,t){return{type:I,payload:{id:e,note:Object(O.a)({id:e},t)}}},R=function(e){return{type:L,payload:e}},W=n(30),G=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},t=Object(a.useState)(e),n=Object(l.a)(t,2),c=n[0],r=n[1],o=function(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:e;r(t)},s=function(e){var t=e.target;r(Object(O.a)(Object(O.a)({},c),{},Object(W.a)({},t.name,t.value)))};return[c,s,o]},q=n(0),z=function(){var e=Object(o.b)(),t=Object(o.c)((function(e){return e.notes})).active;return Object(q.jsxs)("div",{className:"notes__appbar",children:[Object(q.jsx)("span",{children:"Hola crayola"}),Object(q.jsx)("input",{id:"fileSelector",type:"file",name:"file",style:{display:"none"},onChange:function(t){var n=t.target.files[0];n&&e(function(e){return function(){var t=Object(u.a)(i.a.mark((function t(n,a){var c,r;return i.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return c=a().notes.active,m.a.fire({title:"Uploading...",text:"Things are happening...",allowOutsideClick:!1,showConfirmButton:!1,willOpen:function(){m.a.showLoading()}}),t.next=4,x(e);case 4:r=t.sent,c.url=r,n(M(c)),m.a.close();case 8:case"end":return t.stop()}}),t)})));return function(e,n){return t.apply(this,arguments)}}()}(n))}}),Object(q.jsxs)("div",{children:[Object(q.jsx)("button",{className:"btn",onClick:function(){document.querySelector("#fileSelector").click()},children:"Picture"}),Object(q.jsx)("button",{className:"btn",onClick:function(){e(M(t))},children:"Save"})]})]})},J=function(){var e=Object(o.c)((function(e){return e.notes})).active,t=G(e),n=Object(l.a)(t,3),c=n[0],r=n[1],s=n[2],j=c.body,d=c.title,b=Object(o.b)(),h=Object(a.useRef)(e.id);Object(a.useEffect)((function(){e.id!==h.current&&(s(e),h.current=e.id)}),[e,s]),Object(a.useEffect)((function(){b(D(c.id,Object(O.a)({},c)))}),[c,b]);return Object(q.jsxs)("div",{className:"notes__main-content",children:[Object(q.jsx)(z,{}),Object(q.jsxs)("div",{className:"notes__content",children:[Object(q.jsx)("input",{type:"text",placeholder:"Un titulo bien guapo",className:"notes__title-input",autoComplete:"off",name:"title",value:d,onChange:r}),Object(q.jsx)("textarea",{placeholder:"What did you do today",className:"notes__textarea",name:"body",value:j,onChange:r}),e.url&&Object(q.jsx)("div",{className:"notes__image",children:Object(q.jsx)("img",{src:e.url,alt:"un barquito"})})]}),Object(q.jsx)("button",{className:"btn btn-danger",onClick:function(){var e;b((e=c.id,function(){var t=Object(u.a)(i.a.mark((function t(n,a){var c;return i.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return c=a().auth.uid,t.next=3,p.doc("".concat(c,"/journal/notes/").concat(e)).delete();case 3:n(R(e));case 4:case"end":return t.stop()}}),t)})));return function(e,n){return t.apply(this,arguments)}}()))},children:"Delete note"})]})},X=function(){return Object(q.jsxs)("div",{className:"nothing__main-content",children:[Object(q.jsxs)("p",{children:["Select something",Object(q.jsx)("br",{}),"or create an entry!"]}),Object(q.jsx)("i",{className:"far fa-star fa-4x mt-5"})]})},Y=function(e){return{type:_,payload:e}},F=function(){return{type:w}},K=function(){return{type:k}},V=function(e,t){return function(n){return n({type:N}),b.a.auth().signInWithEmailAndPassword(e,t).then((function(e){var t=e.user;n(H(t.uid,t.displayName)),n(K())})).catch((function(e){console.log(e),n(K()),m.a.fire("Error",e.message,"error")}))}},H=function(e,t){return{type:g,payload:{uid:e,displayName:t}}},Q=function(){return{type:y}},Z=n(57),$=n.n(Z),ee=function(e){var t=e.id,n=e.date,a=e.title,c=e.body,r=e.url,s=$()(n),i=Object(o.b)();return Object(q.jsxs)("div",{className:"journal__entry pointer",onClick:function(){i(D(t,{title:a,body:c,date:n,url:r}))},children:[r&&Object(q.jsx)("div",{className:"journal__entry-picture",style:{backgroundSize:"cover",backgroundImage:"url(".concat(r,")")}}),Object(q.jsxs)("div",{className:"journal__entry-body",children:[Object(q.jsx)("p",{className:"journal__entry-title",children:a}),Object(q.jsx)("p",{className:"journal__entry-content",children:c})]}),Object(q.jsx)("div",{className:"journal__entry-date-box",children:Object(q.jsx)("span",{children:s.format("MMM Do YY")})})]})},te=function(){var e=Object(o.c)((function(e){return e.notes})).notes;return Object(q.jsx)("div",{className:"journal__entries",children:e.map((function(e){return Object(q.jsx)(ee,Object(O.a)({},e),e.id)}))})},ne=function(){var e=Object(o.b)(),t=Object(o.c)((function(e){return e.auth})).name;return Object(q.jsxs)("aside",{className:"journal__sidebar",children:[Object(q.jsxs)("div",{className:"journal__sidebar-navbar",children:[Object(q.jsxs)("h3",{className:"mt-5",children:[Object(q.jsx)("i",{className:"far fa-moon"}),Object(q.jsxs)("span",{children:[" ",t," "]})]}),Object(q.jsx)("button",{className:"btn",onClick:function(){e(function(){var e=Object(u.a)(i.a.mark((function e(t){return i.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,b.a.auth().signOut();case 2:t(Q()),t({type:P});case 4:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}())},children:"Logout"})]}),Object(q.jsxs)("div",{className:"journal__new-entry",onClick:function(){e(function(){var e=Object(u.a)(i.a.mark((function e(t,n){var a,c,r;return i.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return a=n().auth.uid,c={title:"",body:"",date:(new Date).getTime()},e.prev=2,e.next=5,p.collection("".concat(a,"/journal/notes")).add(c);case 5:r=e.sent,t(D(r.id,c)),t(A(r.id,c)),e.next=13;break;case 10:e.prev=10,e.t0=e.catch(2),console.log(e.t0);case 13:case"end":return e.stop()}}),e,null,[[2,10]])})));return function(t,n){return e.apply(this,arguments)}}())},children:[Object(q.jsx)("i",{className:"far fa-calendar-plus fa-5x"}),Object(q.jsx)("p",{className:"mt-5",children:"New Entry"})]}),Object(q.jsx)(te,{})]})},ae=function(){var e=Object(o.c)((function(e){return e.notes})).active;return Object(q.jsxs)("div",{className:"journal__main-content",children:[Object(q.jsx)(ne,{}),Object(q.jsx)("main",{children:e?Object(q.jsx)(J,{}):Object(q.jsx)(X,{})})]})},ce=n(31),re=n.n(ce),oe=function(){var e=Object(o.b)(),t=Object(o.c)((function(e){return e.ui})),n=t.msgError,a=t.loading,c=G({email:"",password:""}),r=Object(l.a)(c,2),s=r[0],i=r[1],u=s.email,d=s.password,p=function(){return re.a.isEmail(u)?d.length<6?(e(Y("Password must be 6 characters or more")),!1):(e(F()),!0):(e(Y("Must be a valid email")),!1)};return Object(q.jsxs)("div",{children:[Object(q.jsx)("h3",{className:"auth__title",children:"Login"}),Object(q.jsxs)("form",{onSubmit:function(t){t.preventDefault(),p()&&e(V(u,d))},children:[n&&Object(q.jsx)("div",{className:"auth__alert-error",children:"".concat(n)}),Object(q.jsx)("input",{type:"text",placeholder:"Email",name:"email",className:"auth__input",autoComplete:"off",value:u,onChange:i}),Object(q.jsx)("input",{type:"password",placeholder:"Password",name:"password",className:"auth__input",value:d,onChange:i}),a?Object(q.jsx)("div",{children:Object(q.jsx)("i",{className:"fas fa-spinner btn btn-primary"})}):Object(q.jsx)("button",{type:"submit",className:"btn btn-primary btn-block",children:"Login"}),Object(q.jsx)("hr",{}),Object(q.jsxs)("div",{className:"auth__social-networks",children:[Object(q.jsx)("p",{children:"Social Login"}),Object(q.jsxs)("div",{className:"google-btn",onClick:function(){e((function(e){b.a.auth().signInWithPopup(h).then((function(t){var n=t.user;e(H(n.uid,n.displayName))}))}))},children:[Object(q.jsx)("div",{className:"google-icon-wrapper",children:Object(q.jsx)("img",{className:"google-icon",src:"https://upload.wikimedia.org/wikipedia/commons/5/53/Google_%22G%22_Logo.svg",alt:"google button"})}),Object(q.jsx)("p",{className:"btn-text",children:Object(q.jsx)("b",{children:"Sign in with google"})})]})]}),Object(q.jsx)(j.b,{to:"/auth/register",className:"link",children:"Create new account"})]})]})},se=function(){var e=Object(o.b)(),t=Object(o.c)((function(e){return e.ui})).msgError,n=G({name:"Chris",email:"correo@pruebas.com",password:"123456",password2:"123456"}),a=Object(l.a)(n,2),c=a[0],r=a[1],s=c.name,d=c.email,p=c.password,h=c.password2,O=function(){return 0===s.trim().length?(e(Y("Name is required")),!1):re.a.isEmail(d)?p.length<5?(e(Y("Password need to be at least 6 characters")),!1):p!==h?(e(Y("Passwords need to match")),!1):(e(F()),!0):(e(Y("Email is not valid")),!1)};return Object(q.jsxs)("div",{children:[Object(q.jsx)("h3",{className:"auth__title",children:"Register"}),Object(q.jsxs)("form",{onSubmit:function(t){t.preventDefault(),O()&&e(function(e,t,n){return function(a){b.a.auth().createUserWithEmailAndPassword(e,t).then(function(){var e=Object(u.a)(i.a.mark((function e(t){var c;return i.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return c=t.user,e.next=3,c.updateProfile({displayName:n});case 3:console.log(c),a(H(c.uid,c.displayName));case 5:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}()).catch((function(e){console.log(e),m.a.fire("Error",e.message,"error")}))}}(d,p,s))},children:[t&&Object(q.jsx)("div",{className:"auth__alert-error",children:"".concat(t)}),Object(q.jsx)("input",{type:"text",placeholder:"Name",name:"name",className:"auth__input",autoComplete:"off",value:s,onChange:r}),Object(q.jsx)("input",{type:"text",placeholder:"Email",name:"email",className:"auth__input",autoComplete:"off",value:d,onChange:r}),Object(q.jsx)("input",{type:"password",placeholder:"Password",name:"password",className:"auth__input",value:p,onChange:r}),Object(q.jsx)("input",{type:"password",placeholder:"Confirm",name:"password2",className:"auth__input",value:h,onChange:r}),Object(q.jsx)("button",{type:"submit",className:"btn btn-primary btn-block mb-5",children:"Register"}),Object(q.jsx)(j.b,{to:"/auth/login",className:"link",children:"Already registered? Login"})]})]})},ie=function(){return Object(q.jsx)("div",{className:"auth__main",children:Object(q.jsx)("div",{className:"auth__box-container",children:Object(q.jsxs)(d.d,{children:[Object(q.jsx)(d.b,{path:"/auth/login",component:oe}),Object(q.jsx)(d.b,{path:"/auth/register",component:se}),Object(q.jsx)(d.a,{to:"/auth/login"})]})})})},ue=n(32),le=function(e){var t=e.isLoggedIn,n=e.component,a=Object(ue.a)(e,["isLoggedIn","component"]);return Object(q.jsx)(d.b,Object(O.a)(Object(O.a)({},a),{},{component:function(e){return t?Object(q.jsx)(n,Object(O.a)({},e)):Object(q.jsx)(d.a,{to:"/auth/login"})}}))},je=function(e){var t=e.isLoggedIn,n=e.component,a=Object(ue.a)(e,["isLoggedIn","component"]);return Object(q.jsx)(d.b,Object(O.a)(Object(O.a)({},a),{},{component:function(e){return t?Object(q.jsx)(d.a,{to:"/"}):Object(q.jsx)(n,Object(O.a)({},e))}}))},de=function(){var e=Object(o.b)(),t=Object(a.useState)(!0),n=Object(l.a)(t,2),c=n[0],r=n[1],s=Object(a.useState)(!1),p=Object(l.a)(s,2),h=p[0],O=p[1];return Object(a.useEffect)((function(){b.a.auth().onAuthStateChanged(function(){var t=Object(u.a)(i.a.mark((function t(n){return i.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:(null===n||void 0===n?void 0:n.uid)?(e(H(n.uid,n.displayName)),O(!0),e(U(n.uid))):O(!1),r(!1);case 2:case"end":return t.stop()}}),t)})));return function(e){return t.apply(this,arguments)}}())}),[e,r,O]),c?Object(q.jsx)("h1",{children:"Just a moment..."}):Object(q.jsx)(j.a,{children:Object(q.jsx)("div",{children:Object(q.jsxs)(d.d,{children:[Object(q.jsx)(je,{path:"/auth",component:ie,isLoggedIn:h}),Object(q.jsx)(le,{exact:!0,path:"/",component:ae,isLoggedIn:h}),Object(q.jsx)(d.a,{to:"/auth/login"})]})})})},be=n(20),pe=n(59),he=n(41),Oe={notes:[],active:null},fe={loading:!1,msgError:null},me="undefined"!==typeof window&&window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__||be.d,xe=Object(be.c)({auth:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},t=arguments.length>1?arguments[1]:void 0;switch(t.type){case g:return{uid:t.payload.uid,name:t.payload.displayName};case y:return{};default:return e}},ui:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:fe,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case _:return Object(O.a)(Object(O.a)({},e),{},{msgError:t.payload});case w:return Object(O.a)(Object(O.a)({},e),{},{msgError:null});case N:return Object(O.a)(Object(O.a)({},e),{},{loading:!0});case k:return Object(O.a)(Object(O.a)({},e),{},{loading:!1});default:return e}},notes:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:Oe,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case E:return Object(O.a)(Object(O.a)({},e),{},{active:Object(O.a)({},t.payload)});case C:return Object(O.a)(Object(O.a)({},e),{},{notes:[t.payload].concat(Object(he.a)(e.notes))});case S:return Object(O.a)(Object(O.a)({},e),{},{notes:Object(he.a)(t.payload)});case I:return Object(O.a)(Object(O.a)({},e),{},{notes:e.notes.map((function(e){return e.id===t.payload.id?t.payload.note:e}))});case L:return Object(O.a)(Object(O.a)({},e),{},{active:null,notes:e.notes.filter((function(e){return e.id!==t.payload}))});case P:return Object(O.a)(Object(O.a)({},e),{},{active:null,notes:[]});default:return e}}}),ve=Object(be.e)(xe,me(Object(be.a)(pe.a))),ge=function(){return Object(q.jsx)(o.a,{store:ve,children:Object(q.jsx)(de,{})})};n(158);r.a.render(Object(q.jsx)(ge,{}),document.getElementById("root"))}},[[159,1,2]]]);
//# sourceMappingURL=main.f2696a03.chunk.js.map