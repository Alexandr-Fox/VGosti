(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{150:function(e,t,a){e.exports=a(235)},233:function(e,t,a){},235:function(e,t,a){"use strict";a.r(t);a(151),a(202);var n=a(0),c=a.n(n),r=a(28),i=a.n(r),l=a(24),o=a.n(l),s=a(82),u=a(83),d=a(88),m=a(84),f=a(89),p=a(12),h=(a(232),function(e){var t=e.id,a=e.go;e.fetchedUser;return c.a.createElement(p.f,{id:t},c.a.createElement(p.g,null,"\u0412\u0413\u043e\u0441\u0442\u0438: \u0412\u0430\u0448\u0438 \u0433\u043e\u0441\u0442\u0438 \u0412\u043a\u043e\u043d\u0442\u0430\u043a\u0442\u0435"),c.a.createElement(p.c,{title:""},c.a.createElement(p.b,null,c.a.createElement(p.a,{size:"xl",level:"2",onClick:a,"data-to":"persik"},"\u041f\u0435\u0440\u0441\u0438\u043a"))))}),E=a(85),b=a.n(E),g=(a(233),a(86)),k=a.n(g),v=a(87),w=a.n(v),U=Object(p.i)(),j=function(e){return c.a.createElement(p.f,{id:e.id},c.a.createElement(p.g,{left:c.a.createElement(p.d,{onClick:e.go,"data-to":"home"},U===p.e?c.a.createElement(k.a,null):c.a.createElement(w.a,null))},"\u041f\u0435\u0440\u0441\u0438\u043a"),c.a.createElement("img",{className:"Persik",src:b.a,alt:"Persik The Cat"}))},O=function(e){function t(e){var a;return Object(s.a)(this,t),(a=Object(d.a)(this,Object(m.a)(t).call(this,e))).go=function(e){a.setState({activePanel:e.currentTarget.dataset.to})},a.state={activePanel:"home",fetchedUser:null},a}return Object(f.a)(t,e),Object(u.a)(t,[{key:"componentDidMount",value:function(){var e=this;o.a.subscribe(function(t){switch(t.detail.type){case"VKWebAppGetUserInfoResult":e.setState({fetchedUser:t.detail.data});break;default:console.log(t.detail.type)}}),o.a.send("VKWebAppGetUserInfo",{})}},{key:"render",value:function(){return c.a.createElement(p.h,{activePanel:this.state.activePanel},c.a.createElement(h,{id:"home",fetchedUser:this.state.fetchedUser,go:this.go}),c.a.createElement(j,{id:"persik",go:this.go}))}}]),t}(c.a.Component);o.a.send("VKWebAppInit",{}),i.a.render(c.a.createElement(O,null),document.getElementById("root"))},85:function(e,t,a){e.exports=a.p+"static/media/persik.4e1ec840.png"}},[[150,1,2]]]);
//# sourceMappingURL=main.c31e698d.chunk.js.map