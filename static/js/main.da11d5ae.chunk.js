(this.webpackJsonplcotodo=this.webpackJsonplcotodo||[]).push([[0],{14:function(t,e,n){},15:function(t,e,n){},16:function(t,e,n){"use strict";n.r(e);var i=n(0),s=n(1),A=n.n(s),c=n(4),a=n.n(c),u=(n(14),n(3)),o=n(5),l=n(6),g=n(8),d=n(7),r=(n(15),function(t){Object(g.a)(n,t);var e=Object(d.a)(n);function n(t){var i;return Object(o.a)(this,n),(i=e.call(this,t)).state={newItem:"",list:[]},i}return Object(l.a)(n,[{key:"addItem",value:function(t){if(""!==t){var e={id:Date.now(),value:t,isDone:!1},n=Object(u.a)(this.state.list);n.push(e),this.setState({list:n,newItem:""})}}},{key:"deleteItem",value:function(t){var e=Object(u.a)(this.state.list).filter((function(e){return e.id!==t}));this.setState({list:e})}},{key:"updateInput",value:function(t){this.setState({newItem:t})}},{key:"render",value:function(){var t=this;return Object(i.jsxs)("div",{children:[Object(i.jsx)("img",{src:"data:image/jpeg;base64,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",width:"200",height:"200",className:"logo"}),Object(i.jsx)("h1",{className:"app-title",children:"ToDo App"}),Object(i.jsxs)("div",{className:"container",children:["Add an Item to the list..",Object(i.jsx)("br",{}),Object(i.jsx)("input",{type:"text",className:"input-text",placeholder:"Write a Todo",required:!0,value:this.state.newItem,onChange:function(e){return t.updateInput(e.target.value)}}),Object(i.jsx)("button",{className:"add-btn",onClick:function(){return t.addItem(t.state.newItem)},disabled:!this.state.newItem.length,children:"Add Todo"}),Object(i.jsx)("div",{className:"list",children:Object(i.jsx)("ul",{children:this.state.list.map((function(e){return Object(i.jsxs)("li",{children:[Object(i.jsx)("input",{type:"checkbox",name:"idDone",checked:e.isDone,onChange:function(){}}),e.value,Object(i.jsx)("button",{className:"btn",onClick:function(){return t.deleteItem(e.id)},children:" Delete"})]},e.id)}))})})]})]})}}]),n}(A.a.Component));Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));a.a.render(Object(i.jsx)(r,{}),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(t){t.unregister()}))}},[[16,1,2]]]);
//# sourceMappingURL=main.da11d5ae.chunk.js.map