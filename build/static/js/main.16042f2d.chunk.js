(this["webpackJsonpjwt-boilerplate"]=this["webpackJsonpjwt-boilerplate"]||[]).push([[0],{152:function(e,t,n){},153:function(e,t,n){},161:function(e,t,n){},162:function(e,t,n){"use strict";n.r(t);var r=n(0),a=n(56),o=n.n(a),c=(n(151),n(152),n(10)),s=n(7),i=(n(153),n(9)),l=n(14),u=n(15),j=n(79),d=n(177),h=n(2);function b(e){return Object(h.jsx)(d.a,{negative:!0,children:Object(h.jsx)(d.a.Header,{children:e.error})})}var p=n(181),g=n(182),O=n(134),m=n(175),x=n(183),f=n(179);function v(){var e=localStorage.getItem("token");e&&(JSON.parse(atob(e.split(".")[1])).exp<Date.now()/1e3&&(localStorage.removeItem("token"),e=null));return e}var w={setToken:function(e){e?localStorage.setItem("token",e):localStorage.removeItem("token")},getToken:v,removeToken:function(){localStorage.removeItem("token")},getUserFromToken:function(){var e=v();return e?JSON.parse(atob(e.split(".")[1])).user:null}},k="/api/users/";var y={signup:function(e){return fetch(k+"signup",{method:"POST",body:e}).then((function(e){return e.ok?e.json():e.json().then((function(e){throw console.log(e),new Error(e.err)}))})).then((function(e){var t=e.token;return w.setToken(t)}))},logout:function(){w.removeToken()},login:function(e){return fetch(k+"login",{method:"POST",headers:new Headers({"Content-Type":"application/json"}),body:JSON.stringify(e)}).then((function(e){return e.ok?e.json():e.json().then((function(e){throw console.log(e),new Error(e.err)}))})).then((function(e){var t=e.token;return w.setToken(t)}))},getUser:function(){return w.getUserFromToken()}};function S(e,t){return e===t}function U(e){var t=Object(r.useState)({message:"",passwordError:!1}),n=Object(c.a)(t,2),a=n[0],o=n[1],d=Object(r.useState)({username:"",email:"",password:"",passwordConf:"",bio:""}),v=Object(c.a)(d,2),w=v[0],k=v[1],U=Object(r.useState)(""),C=Object(c.a)(U,2),L=C[0],E=C[1],T=Object(s.m)();function P(e){k(Object(j.a)(Object(j.a)({},w),{},Object(u.a)({},e.target.name,e.target.value)))}function A(){return(A=Object(l.a)(Object(i.a)().mark((function t(n){var r,a;return Object(i.a)().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:if(n.preventDefault(),S(w.password,w.passwordConf)){t.next=3;break}return t.abrupt("return",o({message:"Passwords Must Match!",passwordError:!0}));case 3:for(a in o({message:"",passwordError:!1}),(r=new FormData).append("photo",L),w)r.append(a,w[a]);return console.log(r," <- form Data, you cant see this!","you have to loop over it"),console.log(r.forEach((function(e){return console.log(e)}))," < This lets you see the key values in formData"),t.prev=9,t.next=12,y.signup(r);case 12:e.handleSignUpOrLogin(),T("/"),t.next=20;break;case 16:t.prev=16,t.t0=t.catch(9),console.log(t.t0),o({message:t.t0.message,passwordError:!1});case 20:case"end":return t.stop()}}),t,null,[[9,16]])})))).apply(this,arguments)}return Object(h.jsx)(p.a,{textAlign:"center",style:{height:"100vh",width:"100vw"},verticalAlign:"middle",children:Object(h.jsxs)(p.a.Column,{style:{maxWidth:450},children:[Object(h.jsxs)(g.a,{as:"h2",color:"violet",textAlign:"center",children:[Object(h.jsx)(O.a,{src:"https://i.imgur.com/gJ4XMmZ.jpg"})," Sign Up"]}),Object(h.jsxs)(m.a,{onSubmit:function(e){return A.apply(this,arguments)},children:[Object(h.jsxs)(x.a,{stacked:!0,children:[Object(h.jsx)(m.a.Input,{name:"username",placeholder:"username",value:w.username,onChange:P,required:!0}),Object(h.jsx)(m.a.Input,{type:"email",name:"email",placeholder:"email",value:w.email,onChange:P,required:!0}),Object(h.jsx)(m.a.Input,{error:a.passwordError,name:"password",type:"password",placeholder:"password",value:w.password,onChange:P,required:!0}),Object(h.jsx)(m.a.Input,{error:a.passwordError,name:"passwordConf",type:"password",placeholder:"Confirm Password",value:w.passwordConf,onChange:P,required:!0}),Object(h.jsx)(m.a.TextArea,{label:"bio",name:"bio",placeholder:"Tell us...",value:w.bio,onChange:P}),Object(h.jsx)(m.a.Field,{children:Object(h.jsx)(m.a.Input,{type:"file",name:"photo",placeholder:"upload image",onChange:function(e){console.log(e.target.files," < - this is e.target.files!"),E(e.target.files[0])}})}),Object(h.jsx)(f.a,{type:"submit",className:"btn",children:"Signup"})]}),a.message?Object(h.jsx)(b,{error:a.message}):null]})]})})}n(161);var C=n(28);function L(e){var t=Object(r.useState)(""),n=Object(c.a)(t,2),a=n[0],o=n[1],v=Object(r.useState)({email:"",password:""}),w=Object(c.a)(v,2),k=w[0],S=w[1],U=Object(s.m)();function L(e){S(Object(j.a)(Object(j.a)({},k),{},Object(u.a)({},e.target.name,e.target.value)))}function E(){return(E=Object(l.a)(Object(i.a)().mark((function t(n){return Object(i.a)().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return n.preventDefault(),t.prev=1,t.next=4,y.login(k);case 4:e.handleSignUpOrLogin(),U("/"),t.next=11;break;case 8:t.prev=8,t.t0=t.catch(1),o(t.t0.message);case 11:case"end":return t.stop()}}),t,null,[[1,8]])})))).apply(this,arguments)}return Object(h.jsx)(p.a,{textAlign:"center",style:{height:"100vh",width:"100vw"},verticalAlign:"middle",children:Object(h.jsxs)(p.a.Column,{style:{maxWidth:450},children:[Object(h.jsxs)(g.a,{as:"h2",color:"violet",textAlign:"center",children:[Object(h.jsx)(O.a,{src:"https://i.imgur.com/gJ4XMmZ.jpg"})," Log-in to your account"]}),Object(h.jsx)(m.a,{onSubmit:function(e){return E.apply(this,arguments)},children:Object(h.jsxs)(x.a,{stacked:!0,children:[Object(h.jsx)(m.a.Input,{type:"email",name:"email",placeholder:"email",value:k.email,onChange:L,required:!0}),Object(h.jsx)(m.a.Input,{name:"password",type:"password",placeholder:"password",value:k.password,onChange:L,required:!0}),Object(h.jsx)(f.a,{color:"violet",fluid:!0,size:"large",type:"submit",className:"btn",children:"Login"})]})}),Object(h.jsxs)(d.a,{children:["New to us? ",Object(h.jsx)(C.b,{to:"/signup",children:"Sign Up"})]}),a?Object(h.jsx)(b,{error:a}):null]})})}var E=function(e){var t=e.user;return Object(h.jsx)(p.a,{textAlign:"center",columns:2,children:Object(h.jsxs)(p.a.Row,{children:[Object(h.jsx)(p.a.Column,{children:Object(h.jsx)(O.a,{src:"".concat(t.photoUrl?t.photoUrl:"https://react.semantic-ui.com/images/wireframe/square-image.png"," "),avatar:!0,size:"small"})}),Object(h.jsxs)(p.a.Column,{textAlign:"left",style:{maxWidth:450},children:[Object(h.jsx)(x.a,{vertical:!0,children:Object(h.jsx)("h3",{children:t.username})}),Object(h.jsx)(x.a,{children:Object(h.jsxs)("span",{children:[" Bio: ",t.bio]})})]})]})})},T=n(176),P=n(178),A=n(83);var I=function(e){var t=e.post,n=e.isProfile,r=e.addLike,a=e.removeLike,o=e.loggedUser,c=t.likes.findIndex((function(e){return e.username===o.username})),s=c>-1?"red":"grey",i=c>-1?function(){return a(t.likes[c]._id)}:function(){return r(t._id)};return Object(h.jsxs)(T.a,{raised:!0,children:[n?"":Object(h.jsx)(T.a.Content,{textAlign:"left",children:Object(h.jsx)(T.a.Header,{children:Object(h.jsxs)(C.b,{to:"/".concat(t.user.username),children:[Object(h.jsx)(O.a,{size:"large",avatar:!0,src:t.user.photoUrl?t.user.photoUrl:"https://react.semantic-ui.com/images/wireframe/square-image.png"}),t.user.username]})})}),Object(h.jsx)(O.a,{src:"".concat(null===t||void 0===t?void 0:t.photoUrl),wrapped:!0,ui:!1}),Object(h.jsx)(T.a.Content,{children:Object(h.jsx)(T.a.Description,{children:t.caption})}),Object(h.jsxs)(T.a.Content,{extra:!0,textAlign:"right",children:[Object(h.jsx)(A.a,{name:"heart",size:"large",color:s,onClick:i}),t.likes.length," Likes"]})]},t._id)},D=n(174);function q(){return Object(h.jsx)(D.a,{size:"small",active:!0,children:"Loading"})}function z(e){var t=e.posts,n=e.numPhotosCol,r=e.isProfile,a=e.loading,o=e.removeLike,c=e.addLike,s=e.loggedUser;return Object(h.jsxs)(T.a.Group,{itemsPerRow:n,stackable:!0,children:[a?Object(h.jsxs)(x.a,{children:[Object(h.jsx)(P.a,{active:!0,inverted:!0,children:Object(h.jsx)(q,{size:"small",children:"Loading"})}),Object(h.jsx)(O.a,{src:"https://react.semantic-ui.com/images/wireframe/short-paragraph.png"})]}):null,t.map((function(e){return Object(h.jsx)(I,{post:e,isProfile:r,removeLike:o,addLike:c,loggedUser:s},e._id)}))]})}function F(e){var t=e.loggedUser,n=e.handleLogout;return console.log(t,"loggedUser in header"),Object(h.jsxs)(x.a,{clearing:!0,children:[Object(h.jsxs)(g.a,{as:"h2",floated:"right",children:[Object(h.jsx)(C.b,{to:"/",children:Object(h.jsx)(A.a,{name:"home"})}),Object(h.jsx)(C.b,{to:"",onClick:n,children:"Logout"})]}),Object(h.jsx)(g.a,{as:"h2",floated:"left",children:Object(h.jsx)(C.b,{to:"/".concat(null===t||void 0===t?void 0:t.username),children:Object(h.jsx)(O.a,{src:null!==t&&void 0!==t&&t.photoUrl?null===t||void 0===t?void 0:t.photoUrl:"https://react.semantic-ui.com/images/wireframe/square-image.png",avatar:!0})})})]})}var N="/api/";function W(e){return fetch("".concat(N,"posts/").concat(e,"/likes"),{method:"POST",headers:{Authorization:"Bearer "+w.getToken()}}).then((function(e){if(e.ok)return e.json();throw new Error(e.error)}))}function R(e){return fetch("".concat(N,"likes/").concat(e),{method:"DELETE",headers:{Authorization:"Bearer "+w.getToken()}}).then((function(e){if(e.ok)return e.json();throw new Error(e.error)}))}function B(e){var t=e.loggedUser,n=e.handleLogout,a=Object(r.useState)([]),o=Object(c.a)(a,2),u=o[0],j=o[1],d=Object(r.useState)({}),g=Object(c.a)(d,2),O=g[0],m=g[1],x=Object(r.useState)(!0),f=Object(c.a)(x,2),v=f[0],w=f[1],k=Object(r.useState)(""),S=Object(c.a)(k,2),U=S[0],C=S[1],L=Object(s.o)().username;function T(){return(T=Object(l.a)(Object(i.a)().mark((function e(t){var n;return Object(i.a)().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,W(t);case 3:n=e.sent,console.log(n,"from add like"),A(),e.next=11;break;case 8:e.prev=8,e.t0=e.catch(0),console.log(e.t0," err from server");case 11:case"end":return e.stop()}}),e,null,[[0,8]])})))).apply(this,arguments)}function P(){return(P=Object(l.a)(Object(i.a)().mark((function e(t){var n;return Object(i.a)().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,R(t);case 3:n=e.sent,console.log(n," remove like"),A(),e.next=11;break;case 8:e.prev=8,e.t0=e.catch(0),console.log(e.t0);case 11:case"end":return e.stop()}}),e,null,[[0,8]])})))).apply(this,arguments)}var A=Object(r.useCallback)(Object(l.a)(Object(i.a)().mark((function e(){var t;return Object(i.a)().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,y.getProfile(L);case 3:t=e.sent,w(!1),m(t.data.user),j(t.data.posts),console.log(t),e.next=14;break;case 10:e.prev=10,e.t0=e.catch(0),console.log(e.t0.message),C("Profile does not exist! You are in the wrong in place");case 14:case"end":return e.stop()}}),e,null,[[0,10]])}))),[L]);return Object(r.useEffect)((function(){console.log("firing!"),A()}),[L,A]),U?Object(h.jsxs)(h.Fragment,{children:[Object(h.jsx)(F,{handleLogout:n,loggedUser:t}),Object(h.jsx)(b,{error:U}),";"]}):v?Object(h.jsxs)(h.Fragment,{children:[Object(h.jsx)(F,{handleLogout:n,loggedUser:t}),Object(h.jsx)(q,{})]}):Object(h.jsxs)(p.a,{children:[Object(h.jsx)(p.a.Row,{children:Object(h.jsx)(p.a.Column,{children:Object(h.jsx)(F,{handleLogout:n,loggedUser:t})})}),Object(h.jsx)(p.a.Row,{children:Object(h.jsx)(p.a.Column,{children:Object(h.jsx)(E,{user:O})})}),Object(h.jsx)(p.a.Row,{centered:!0,children:Object(h.jsx)(p.a.Column,{style:{maxWidth:750},children:Object(h.jsx)(z,{posts:u,numPhotosCol:3,isProfile:!0,loading:v,loggedUser:t,addLike:function(e){return T.apply(this,arguments)},removeLike:function(e){return P.apply(this,arguments)}})})})]})}var J=n(29);function M(e){var t=Object(r.useState)({caption:""}),n=Object(c.a)(t,2),a=n[0],o=n[1],s=Object(r.useState)(""),i=Object(c.a)(s,2),l=i[0],u=i[1];return Object(h.jsx)(x.a,{children:Object(h.jsxs)(m.a,{onSubmit:function(t){t.preventDefault();var n=new FormData;n.append("photo",l),n.append("caption",a.caption),e.handleAddPost(n)},children:[Object(h.jsx)(m.a.Input,{className:"form-control",name:"caption",value:a.caption,placeholder:"What did you find?",onChange:function(e){o({caption:e.target.value})},required:!0}),Object(h.jsx)(m.a.Field,{children:Object(h.jsx)(m.a.Input,{type:"file",name:"photo",placeholder:"upload image",onChange:function(e){console.log(e.target.files," < - this is e.target.files!"),u(e.target.files[0])}})}),Object(h.jsx)(f.a,{type:"submit",className:"btn",children:"POST EVIDENCE"})]})})}var _="/api/posts";function H(e){return fetch(_,{method:"POST",body:e,headers:{Authorization:"Bearer "+w.getToken()}}).then((function(e){return e.ok?e.json():e.json().then((function(e){throw console.log(e),new Error(e.err)}))}))}function X(){return fetch(_,{headers:{Authorization:"Bearer "+w.getToken()}}).then((function(e){return e.ok?e.json():e.json().then((function(e){throw console.log(e),new Error(e.err)}))}))}function Z(e){var t=e.loggedUser,n=e.handleLogout,a=Object(r.useState)([]),o=Object(c.a)(a,2),s=o[0],u=o[1],j=Object(r.useState)(!0),d=Object(c.a)(j,2),g=d[0],O=d[1],m=Object(r.useState)(""),x=Object(c.a)(m,2),f=x[0],v=x[1];function w(){return(w=Object(l.a)(Object(i.a)().mark((function e(t){var n;return Object(i.a)().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,W(t);case 3:n=e.sent,console.log(n,"from add like"),S(),e.next=12;break;case 8:e.prev=8,e.t0=e.catch(0),console.log(e.t0," err from server"),v("error adding like");case 12:case"end":return e.stop()}}),e,null,[[0,8]])})))).apply(this,arguments)}function k(){return(k=Object(l.a)(Object(i.a)().mark((function e(t){var n;return Object(i.a)().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,R(t);case 3:n=e.sent,console.log(n," remove like"),S(),e.next=12;break;case 8:e.prev=8,e.t0=e.catch(0),console.log(e.t0),v("error removing like");case 12:case"end":return e.stop()}}),e,null,[[0,8]])})))).apply(this,arguments)}function y(){return(y=Object(l.a)(Object(i.a)().mark((function e(t){var n;return Object(i.a)().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,O(!0),e.next=4,H(t);case 4:n=e.sent,console.log(n),S(),O(!1),e.next=14;break;case 10:e.prev=10,e.t0=e.catch(0),console.log(e.t0.message),v("Error creating post, please try again");case 14:case"end":return e.stop()}}),e,null,[[0,10]])})))).apply(this,arguments)}function S(){return U.apply(this,arguments)}function U(){return(U=Object(l.a)(Object(i.a)().mark((function e(){var t;return Object(i.a)().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,X();case 3:t=e.sent,console.log(t," data"),u(Object(J.a)(t.data)),O(!1),e.next=13;break;case 9:e.prev=9,e.t0=e.catch(0),console.log(e.t0.message," this is the error"),O(!1);case 13:case"end":return e.stop()}}),e,null,[[0,9]])})))).apply(this,arguments)}return Object(r.useEffect)((function(){S()}),[]),f?Object(h.jsxs)(h.Fragment,{children:[Object(h.jsx)(F,{handleLogout:n,loggedUser:t}),Object(h.jsx)(b,{error:f}),";"]}):g?Object(h.jsxs)(h.Fragment,{children:[Object(h.jsx)(F,{handleLogout:n,loggedUser:t}),Object(h.jsx)(q,{})]}):Object(h.jsxs)(p.a,{centered:!0,children:[Object(h.jsx)(p.a.Row,{children:Object(h.jsx)(p.a.Column,{children:Object(h.jsx)(F,{handleLogout:n,loggedUser:t})})}),Object(h.jsx)(p.a.Row,{children:Object(h.jsx)(p.a.Column,{style:{maxWidth:450},children:Object(h.jsx)(M,{handleAddPost:function(e){return y.apply(this,arguments)}})})}),Object(h.jsx)(p.a.Row,{children:Object(h.jsx)(p.a.Column,{style:{maxWidth:450},children:Object(h.jsx)(z,{posts:s,numPhotosCol:1,isProfile:!1,loading:g,addLike:function(e){return w.apply(this,arguments)},removeLike:function(e){return k.apply(this,arguments)},loggedUser:t})})})]})}var G=function(){var e=Object(r.useState)(y.getUser()),t=Object(c.a)(e,2),n=t[0],a=t[1];function o(){a(y.getUser())}function i(){y.logout(),a(null)}return n?Object(h.jsxs)(s.d,{children:[Object(h.jsx)(s.b,{path:"/",element:Object(h.jsx)(Z,{loggedUser:n,handleLogout:i})}),Object(h.jsx)(s.b,{path:"/login",element:Object(h.jsx)(L,{handleSignUpOrLogin:o})}),Object(h.jsx)(s.b,{path:"/signup",element:Object(h.jsx)(U,{handleSignUpOrLogin:o})}),Object(h.jsx)(s.b,{path:"/:username",element:Object(h.jsx)(B,{loggedUser:n,handleLogout:i})})]}):Object(h.jsxs)(s.d,{children:[Object(h.jsx)(s.b,{path:"/login",element:Object(h.jsx)(L,{handleSignUpOrLogin:o})}),Object(h.jsx)(s.b,{path:"/signup",element:Object(h.jsx)(U,{handleSignUpOrLogin:o})}),Object(h.jsx)(s.b,{path:"/*",element:Object(h.jsx)(s.a,{to:"/login"})})]})};Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));o.a.render(Object(h.jsx)(C.a,{children:Object(h.jsx)(G,{})}),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()})).catch((function(e){console.error(e.message)}))}},[[162,1,2]]]);
//# sourceMappingURL=main.16042f2d.chunk.js.map