(this["webpackJsonpgoit-react-hw-02-feedback"]=this["webpackJsonpgoit-react-hw-02-feedback"]||[]).push([[0],{14:function(e,t,n){"use strict";n.r(t);var c=n(1),a=n.n(c),r=n(3),s=n.n(r),o=n(4),i=n(5),d=n(6),j=n(8),l=n(7),u=n(0),b=function(e){return Object(u.jsxs)("div",{children:[Object(u.jsxs)("p",{children:["Good: ",Object(u.jsx)("span",{children:e.good})]}),Object(u.jsxs)("p",{children:["Neutral: ",Object(u.jsx)("span",{children:e.neutral})]}),Object(u.jsxs)("p",{children:["Bad: ",Object(u.jsx)("span",{children:e.bad})]}),Object(u.jsxs)("p",{children:["Total: ",Object(u.jsx)("span",{children:e.total})]}),Object(u.jsxs)("p",{children:["Positive feedback: ",Object(u.jsx)("span",{children:e.positivePercentage})]})]})},h=function(e){return Object(u.jsxs)("section",{children:[Object(u.jsx)("h2",{children:e.title}),e.children]})},O=function(e){var t=e.options,n=e.onLeaveFeedback;return Object(u.jsx)("div",{children:t.map((function(e){return Object(u.jsx)("button",{onClick:function(){return n(e)},type:"button",children:e},e)}))})},p=function(e){var t=e.message;return Object(u.jsx)("h2",{children:t})},f=function(e){Object(j.a)(n,e);var t=Object(l.a)(n);function n(){var e;Object(i.a)(this,n);for(var c=arguments.length,a=new Array(c),r=0;r<c;r++)a[r]=arguments[r];return(e=t.call.apply(t,[this].concat(a))).state={good:0,neutral:0,bad:0},e.handleIncrease=function(t){e.setState((function(e){return Object(o.a)({},t,e[t]+1)}))},e.countTotal=function(){return e.state.good+e.state.bad+e.state.neutral},e.countPositivePercent=function(){return"".concat(Math.round(e.state.good/e.countTotal()*100)||0,"%")},e.feedback=function(){return 0===e.state.good&&0===e.state.neutral&&0===e.state.bad},e}return Object(d.a)(n,[{key:"render",value:function(){return Object(u.jsxs)(u.Fragment,{children:[Object(u.jsx)(h,{title:"Please leave feedback",children:Object(u.jsx)(O,{options:["good","neutral","bad"],onLeaveFeedback:this.handleIncrease})}),Object(u.jsx)(h,{title:"Statistics",children:this.feedback()?Object(u.jsx)(p,{message:"There is no feedback"}):Object(u.jsx)(b,{good:this.state.good,neutral:this.state.neutral,bad:this.state.bad,total:this.countTotal(),positivePercentage:this.countPositivePercent()})})]})}}]),n}(c.Component),x=f;s.a.render(a.a.createElement(x),document.getElementById("root"))}},[[14,1,2]]]);
//# sourceMappingURL=main.2b2e0a85.chunk.js.map