(this["webpackJsonpgoit-react-hw-02-feedback"]=this["webpackJsonpgoit-react-hw-02-feedback"]||[]).push([[0],{15:function(e,t,n){},16:function(e,t,n){},18:function(e,t,n){"use strict";n.r(t);var c=n(1),a=n.n(c),s=n(4),o=n.n(s),i=(n(14),n(15),n(5)),r=n(6),b=n(7),l=n(9),d=n(8),j=(n(16),n(2)),u=n.n(j),h=n(0),O=function(e){var t=e.onIncrement;return Object(h.jsxs)("ul",{className:u.a.feedbackButtons,children:[Object(h.jsx)("li",{className:u.a.button,children:Object(h.jsx)("button",{type:"button",name:"good",className:"btn",onClick:t,children:"good"})}),Object(h.jsx)("li",{className:u.a.button,children:Object(h.jsx)("button",{type:"button",name:"neutral",onClick:t,children:"neutral"})}),Object(h.jsx)("li",{className:u.a.button,children:Object(h.jsx)("button",{type:"button",name:"bad",onClick:t,children:"bad"})})]})},x=function(e){var t=e.good,n=e.neutral,c=e.bad,a=e.total,s=e.positivePercentage;return Object(h.jsxs)("div",{className:"statistics-section",children:[Object(h.jsx)("h2",{children:"Statistics"}),Object(h.jsxs)("ul",{children:[Object(h.jsx)("li",{children:Object(h.jsxs)("p",{children:["Good: ",t]})}),Object(h.jsx)("li",{children:Object(h.jsxs)("p",{children:["Neutral: ",n]})}),Object(h.jsx)("li",{children:Object(h.jsxs)("p",{children:["Bad: ",c]})}),Object(h.jsx)("li",{children:Object(h.jsxs)("p",{children:["Total: ",a]})}),Object(h.jsx)("li",{children:Object(h.jsxs)("p",{children:["Positive feedback: ",s," %"]})})]})]})},f=function(e){var t=e.message;return Object(h.jsx)("p",{children:t})},k=function(e){Object(l.a)(n,e);var t=Object(d.a)(n);function n(){var e;Object(r.a)(this,n);for(var c=arguments.length,a=new Array(c),s=0;s<c;s++)a[s]=arguments[s];return(e=t.call.apply(t,[this].concat(a))).state={good:0,neutral:0,bad:0},e.handleIncrement=function(t){e.setState((function(e){return Object(i.a)({},t.target.name,e[t.target.name]+1)}))},e.countTotalFeedback=function(){return Object.values(e.state).reduce((function(e,t){return e+t}),0)},e.countPositiveFeedbackPercentage=function(){return Math.round(e.state.good/e.countTotalFeedback()*100)},e}return Object(b.a)(n,[{key:"render",value:function(){return console.log("hi"),Object(h.jsxs)("section",{className:"feedbackSection",children:[Object(h.jsx)("h1",{children:"Please leave feedback"}),Object(h.jsx)(O,{className:"feedbackOptions",onIncrement:this.handleIncrement,onLeaveFeedback:this.countTotalFeedback}),this.countPositiveFeedbackPercentage()?Object(h.jsx)(x,{good:this.state.good,neutral:this.state.neutral,bad:this.state.bad,total:this.countTotalFeedback(),positivePercentage:this.countPositiveFeedbackPercentage()}):Object(h.jsx)(f,{message:"No feedback given"})]})}}]),n}(a.a.Component);o.a.render(Object(h.jsx)(a.a.StrictMode,{children:Object(h.jsx)(k,{})}),document.getElementById("root"))},2:function(e,t,n){e.exports={feedbackButtons:"FeedbackOptions_feedbackButtons__1x9Hs",button:"FeedbackOptions_button__14w9_"}}},[[18,1,2]]]);
//# sourceMappingURL=main.3f621a4b.chunk.js.map