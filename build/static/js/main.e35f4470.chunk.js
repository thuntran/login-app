(this["webpackJsonplogin-app"]=this["webpackJsonplogin-app"]||[]).push([[0],{18:function(e,n,t){},22:function(e,n,t){"use strict";t.r(n);var c=t(3),o=t.n(c),i=t(7),a=t.n(i),r=(t(18),t(8)),s=t(9),u=t(10),l=t(13),b=t(12),h=t(5);t(19);h.a.initializeApp({apiKey:"AIzaSyC6fklFadegUexGNFtenpp7IkSD0JmMY4c",authDomain:"login-app-387bd.firebaseapp.com",projectId:"login-app-387bd",storageBucket:"login-app-387bd.appspot.com",messagingSenderId:"60218145221",appId:"1:60218145221:web:c7bea0ae1648103bf633ac"});var d=h.a,p=t(1),f=function(e){Object(l.a)(t,e);var n=Object(b.a)(t);function t(){var e;Object(s.a)(this,t);for(var c=arguments.length,o=new Array(c),i=0;i<c;i++)o[i]=arguments[i];return(e=n.call.apply(n,[this].concat(o))).handleChange=function(n){var t=n.target,c=t.name,o=t.value;e.setState(Object(r.a)({},c,o))},e.configureCaptcha=function(){window.recaptchaVerifier=new d.auth.RecaptchaVerifier("sign-in-button",{size:"invisible",callback:function(n){e.onSubmitPhoneNumber(),console.log("reCAPTCHA verified.")},defaultCountry:"US"})},e.onSubmitPhoneNumber=function(n){n.preventDefault(),e.configureCaptcha();var t="+1"+e.state.mobile;console.log(t);var c=window.recaptchaVerifier;d.auth().signInWithPhoneNumber(t,c).then((function(e){window.confirmationResult=e,console.log("Access code has been sent.")})).catch((function(e){console.log("Error: Fail to send access code.")}))},e.onSubmitAccessCode=function(n){n.preventDefault();var t=e.state.accesscode;console.log(t),window.confirmationResult.confirm(t).then((function(e){var n=e.user;console.log(JSON.stringify(n)),alert("Access code verified.")})).catch((function(e){alert("Wrong access code, please try again.")}))},e}return Object(u.a)(t,[{key:"render",value:function(){return Object(p.jsxs)("div",{children:[Object(p.jsx)("h2",{children:"Enter phone number:"}),Object(p.jsxs)("form",{onSubmit:this.onSubmitPhoneNumber,children:[Object(p.jsx)("div",{id:"sign-in-button"}),Object(p.jsx)("input",{type:"number",name:"mobile",placeholder:"Your phone number here",required:!0,onChange:this.handleChange}),Object(p.jsx)("button",{type:"submit",children:"Submit"})]}),Object(p.jsx)("h2",{children:"Enter access code:"}),Object(p.jsxs)("form",{onSubmit:this.onSubmitAccessCode,children:[Object(p.jsx)("input",{type:"number",name:"accesscode",placeholder:"Your access code here",required:!0,onChange:this.handleChange}),Object(p.jsx)("button",{type:"submit",children:"Submit"})]})]})}}]),t}(o.a.Component),m=f,g=function(e){e&&e instanceof Function&&t.e(3).then(t.bind(null,23)).then((function(n){var t=n.getCLS,c=n.getFID,o=n.getFCP,i=n.getLCP,a=n.getTTFB;t(e),c(e),o(e),i(e),a(e)}))};a.a.render(Object(p.jsx)(o.a.StrictMode,{children:Object(p.jsx)(m,{})}),document.getElementById("root")),g()}},[[22,1,2]]]);
//# sourceMappingURL=main.e35f4470.chunk.js.map