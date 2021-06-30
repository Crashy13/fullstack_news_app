(this.webpackJsonpstatic=this.webpackJsonpstatic||[]).push([[0],{17:function(e,t,n){},19:function(e,t,n){},21:function(e,t,n){"use strict";n.r(t);var a=n(2),i=n.n(a),s=n(12),r=n.n(s),o=(n(17),n(3)),c=n.n(o),l=n(10),h=n(5),u=n(6),d=n(1),p=n(8),j=n(7),b=n(4),m=n.n(b),g=(n(19),n(9)),f=n(0),v=function(e){Object(p.a)(n,e);var t=Object(j.a)(n);function n(e){var a;return Object(h.a)(this,n),(a=t.call(this,e)).state={display_name:"",avatar:null,preview:""},a.handleInput=a.handleInput.bind(Object(d.a)(a)),a.handleImage=a.handleImage.bind(Object(d.a)(a)),a.handleSubmit=a.handleSubmit.bind(Object(d.a)(a)),a}return Object(u.a)(n,[{key:"componentDidMount",value:function(){var e=this;fetch("/api/v1/users/profiles/user/").then((function(e){if(!e.ok)throw new Error("Network response was not ok");return e.json()})).then((function(t){return e.setState({data:t})}))}},{key:"handleInput",value:function(e){this.setState(Object(g.a)({},e.target.name,e.target.value))}},{key:"handleImage",value:function(e){var t=this,n=e.target.files[0];this.setState({avatar:n});var a=new FileReader;a.onloadend=function(){t.setState({preview:a.result})},a.readAsDataURL(n)}},{key:"handleSubmit",value:function(){var e=Object(l.a)(c.a.mark((function e(t){var n,a,i;return c.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return t.preventDefault(),(n=new FormData).append("avatar",this.state.avatar),n.append("display_name",this.state.display_name),a={method:"POST",headers:{"X-CSRFToken":m.a.get("csrftoken")},body:n},e.next=7,fetch("/api/v1/users/profiles/",a);case 7:i=e.sent,this.setState({response:i});case 9:case"end":return e.stop()}}),e,this)})));return function(t){return e.apply(this,arguments)}}()},{key:"render",value:function(){return Object(f.jsx)(f.Fragment,{children:this.state.data?Object(f.jsxs)("div",{className:"container",children:[Object(f.jsx)("p",{children:this.state.data.display_name}),Object(f.jsx)("img",{src:this.state.data.avatar,alt:""})]}):Object(f.jsxs)("form",{onSubmit:this.handleSubmit,children:[Object(f.jsx)("input",{type:"text",name:"display_name",value:this.state.display_name,onChange:this.handleInput}),Object(f.jsx)("input",{type:"file",name:"avatar",onChange:this.handleImage}),this.state.avatar?Object(f.jsx)("img",{src:this.state.preview,alt:""}):null,Object(f.jsx)("button",{type:"submit",children:"Save profile?"})]})})}}]),n}(i.a.Component),O=function(e){Object(p.a)(n,e);var t=Object(j.a)(n);function n(e){var a;return Object(h.a)(this,n),(a=t.call(this,e)).state={username:"",email:"",password:""},a.handleInput=a.handleInput.bind(Object(d.a)(a)),a.handleSubmit=a.handleSubmit.bind(Object(d.a)(a)),a}return Object(u.a)(n,[{key:"handleInput",value:function(e){this.setState(Object(g.a)({},e.target.name,e.target.value))}},{key:"handleSubmit",value:function(e){e.preventDefault(),this.props.handleLogin(this.state)}},{key:"render",value:function(){return Object(f.jsx)("div",{className:"login_container",children:Object(f.jsxs)("form",{onSubmit:this.handleSubmit,children:[Object(f.jsx)("h3",{children:"Username"}),Object(f.jsx)("input",{type:"text",placeholder:"username",name:"username",value:this.state.username,onChange:this.handleInput}),Object(f.jsx)("h3",{children:"Email"}),Object(f.jsx)("input",{type:"email",placeholder:"email",name:"email",value:this.state.email,onChange:this.handleInput}),Object(f.jsx)("h3",{children:"Password"}),Object(f.jsx)("input",{type:"password",placeholder:"password",name:"password",value:this.state.password1,onChange:this.handleInput}),Object(f.jsx)("h5",{children:"Press to login"}),Object(f.jsx)("button",{className:"login_button",type:"Submit",children:"Login"})]})})}}]),n}(i.a.Component),x=function(e){Object(p.a)(n,e);var t=Object(j.a)(n);function n(e){var a;return Object(h.a)(this,n),(a=t.call(this,e)).state={username:"",email:"",password1:"",password2:""},a.handleInput=a.handleInput.bind(Object(d.a)(a)),a.handleSubmit=a.handleSubmit.bind(Object(d.a)(a)),a}return Object(u.a)(n,[{key:"handleInput",value:function(e){this.setState(Object(g.a)({},e.target.name,e.target.value))}},{key:"handleSubmit",value:function(e){e.preventDefault(),this.props.handleRegistration(this.state)}},{key:"render",value:function(){return Object(f.jsx)("div",{className:"registration_container",children:Object(f.jsxs)("form",{onSubmit:this.handleSubmit,children:[Object(f.jsx)("h3",{children:"Choose A Username"}),Object(f.jsx)("input",{type:"text",placeholder:"username",name:"username",value:this.state.username,onChange:this.handleInput}),Object(f.jsx)("h3",{children:"Enter Your Email Address"}),Object(f.jsx)("input",{type:"email",placeholder:"email",name:"email",value:this.state.email,onChange:this.handleInput}),Object(f.jsx)("h3",{children:"Choose A Password"}),Object(f.jsx)("input",{type:"password",placeholder:"password",name:"password1",value:this.state.password1,onChange:this.handleInput}),Object(f.jsx)("h3",{children:"Enter Your Password Again"}),Object(f.jsx)("input",{type:"password",placeholder:"enter password again",name:"password2",value:this.state.password2,onChange:this.handleInput}),Object(f.jsx)("h3",{children:"Click the button below to create your account!"}),Object(f.jsx)("button",{className:"login_button",type:"Submit",children:"Register"})]})})}}]),n}(i.a.Component);var y=function(e){return Object(f.jsxs)("nav",{children:[Object(f.jsx)("button",{className:"login",onClick:function(){return e.handleNavigation("login")},children:"Login"}),Object(f.jsx)("button",{className:"registration",onClick:function(){return e.handleNavigation("registration")},children:"Register"}),Object(f.jsx)("button",{className:"logout",onClick:function(){return e.handleLogout("logout")},children:"Logout"})]})},k=function(e){Object(p.a)(n,e);var t=Object(j.a)(n);function n(e){var a;return Object(h.a)(this,n),(a=t.call(this,e)).state={selection:m.a.get("Authorization")?"profile":"login"},a.handleRegistration=a.handleRegistration.bind(Object(d.a)(a)),a.handleLogin=a.handleLogin.bind(Object(d.a)(a)),a.handleLogout=a.handleLogout.bind(Object(d.a)(a)),a.handleNavigation=a.handleNavigation.bind(Object(d.a)(a)),a}return Object(u.a)(n,[{key:"handleNavigation",value:function(e){this.setState({selection:e})}},{key:"handleRegistration",value:function(){var e=Object(l.a)(c.a.mark((function e(t){var n,a,i,s;return c.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return n={method:"POST",headers:{"Content-Type":"application/json","X-CSRFToken":m.a.get("csrftoken")},body:JSON.stringify(t)},a=function(e){return console.warn(e)},e.next=4,fetch("/rest-auth/registration/",n).catch(a);case 4:if(!(i=e.sent).ok){e.next=11;break}return e.next=8,i.json().catch(a);case 8:s=e.sent,m.a.set("Authorization","Token ".concat(s.key)),this.setState({selection:"profile"});case 11:case"end":return e.stop()}}),e,this)})));return function(t){return e.apply(this,arguments)}}()},{key:"handleLogin",value:function(){var e=Object(l.a)(c.a.mark((function e(t){var n,a,i,s;return c.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return n={method:"POST",headers:{"Content-Type":"application/json","X-CSRFToken":m.a.get("csrftoken")},body:JSON.stringify(t)},a=function(e){return console.warn(e)},e.next=4,fetch("/rest-auth/login/",n).catch(a);case 4:if(!(i=e.sent).ok){e.next=11;break}return e.next=8,i.json().catch(a);case 8:s=e.sent,m.a.set("Authorization","Token ".concat(s.key)),this.setState({selection:"profile"});case 11:case"end":return e.stop()}}),e,this)})));return function(t){return e.apply(this,arguments)}}()},{key:"handleLogout",value:function(){var e=Object(l.a)(c.a.mark((function e(){var t,n;return c.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return t={method:"POST",headers:{"Content-Type":"application/json","X-CSRFToken":m.a.get("csrftoken")}},n=function(e){return console.warn(e)},e.next=4,fetch("/rest-auth/logout/",t).catch(n);case 4:e.sent.ok&&(m.a.remove("Authorization"),this.setState({selection:"login"}));case 6:case"end":return e.stop()}}),e,this)})));return function(){return e.apply(this,arguments)}}()},{key:"render",value:function(){return Object(f.jsxs)(f.Fragment,{children:[Object(f.jsx)(y,{handleNavigation:this.handleNavigation,isAuth:"profile"===this.state.selection,handleLogout:this.handleLogout}),Object(f.jsxs)("div",{children:["login"===this.state.selection&&Object(f.jsx)(O,{handleNavigation:this.handleNavigation,handleLogin:this.handleLogin}),"registration"===this.state.selection&&Object(f.jsx)(x,{handleNavigation:this.handleNavigation,handleRegistration:this.handleRegistration}),"profile"===this.state.selection&&Object(f.jsx)(v,{})]})]})}}]),n}(a.Component),w=function(e){e&&e instanceof Function&&n.e(3).then(n.bind(null,22)).then((function(t){var n=t.getCLS,a=t.getFID,i=t.getFCP,s=t.getLCP,r=t.getTTFB;n(e),a(e),i(e),s(e),r(e)}))};r.a.render(Object(f.jsx)(i.a.StrictMode,{children:Object(f.jsx)(k,{})}),document.getElementById("root")),w()}},[[21,1,2]]]);
//# sourceMappingURL=main.fa4a3224.chunk.js.map