(this.webpackJsonpclient=this.webpackJsonpclient||[]).push([[0],{17:function(e,n,t){e.exports=t(30)},22:function(e,n,t){},28:function(e,n,t){},29:function(e,n,t){},30:function(e,n,t){"use strict";t.r(n);var o=t(0),r=t.n(o),i=t(4),a=t.n(i),c=(t(22),t(5)),s=t(6),u=t(9),l=t(7),d=t(10),f=t(8),h=(t(28),t(2)),v=t(16),p=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:[],n=arguments.length>1?arguments[1]:void 0,t=n.type,o=n.payload;switch(t){case"GET_ADDRESS_HISTORY":return o;default:return e}},g=Object(h.c)({address:p}),b=[v.a],w=window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__||h.d,y=Object(h.e)(g,w(h.a.apply(void 0,b))),O=(t(29),function(e){function n(e){var t;return Object(c.a)(this,n),(t=Object(u.a)(this,Object(l.a)(n).call(this,e))).state={address:""},t}return Object(d.a)(n,e),Object(s.a)(n,[{key:"componentDidMount",value:function(){}},{key:"handleChange",value:function(e){this.setState({address:e.target.value})}},{key:"handleClick",value:function(){console.log(this.state.address),this.props.getAddressReceiveHistory(this.state.address)}},{key:"render",value:function(){var e=this;return r.a.createElement("div",null,r.a.createElement("input",{type:"text",onChange:function(n){return e.handleChange(n)}}),r.a.createElement("input",{type:"button",value:"Alert the text input",onClick:function(n){return e.handleClick(n)}}))}}]),n}(o.Component)),k=Object(f.b)((function(e){return{address:e.address}}),(function(e){return{getAddressReceiveHistory:function(n){return e(function(e){return function(n){return fetch("".concat("https://blockchain.info/q","/").concat("getreceivedbyaddress","/").concat(e)).then((function(e){return e.json()})).then((function(e){return n({type:"GET_ADDRESS_HISTORY",payload:e})}))}}(n))}}}))(O),m=function(e){function n(){return Object(c.a)(this,n),Object(u.a)(this,Object(l.a)(n).apply(this,arguments))}return Object(d.a)(n,e),Object(s.a)(n,[{key:"render",value:function(){return r.a.createElement(f.a,{store:y},r.a.createElement("div",{className:"App"},r.a.createElement(k,null)))}}]),n}(o.Component),E=Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));function j(e,n){navigator.serviceWorker.register(e).then((function(e){e.onupdatefound=function(){var t=e.installing;null!=t&&(t.onstatechange=function(){"installed"===t.state&&(navigator.serviceWorker.controller?(console.log("New content is available and will be used when all tabs for this page are closed. See https://bit.ly/CRA-PWA."),n&&n.onUpdate&&n.onUpdate(e)):(console.log("Content is cached for offline use."),n&&n.onSuccess&&n.onSuccess(e)))})}})).catch((function(e){console.error("Error during service worker registration:",e)}))}a.a.render(r.a.createElement(m,null),document.getElementById("root")),function(e){if("serviceWorker"in navigator){if(new URL("",window.location.href).origin!==window.location.origin)return;window.addEventListener("load",(function(){var n="".concat("","/service-worker.js");E?(!function(e,n){fetch(e,{headers:{"Service-Worker":"script"}}).then((function(t){var o=t.headers.get("content-type");404===t.status||null!=o&&-1===o.indexOf("javascript")?navigator.serviceWorker.ready.then((function(e){e.unregister().then((function(){window.location.reload()}))})):j(e,n)})).catch((function(){console.log("No internet connection found. App is running in offline mode.")}))}(n,e),navigator.serviceWorker.ready.then((function(){console.log("This web app is being served cache-first by a service worker. To learn more, visit https://bit.ly/CRA-PWA")}))):j(n,e)}))}}()}},[[17,1,2]]]);
//# sourceMappingURL=main.4f6ba42f.chunk.js.map