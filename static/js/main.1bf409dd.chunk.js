(window.webpackJsonpmonster=window.webpackJsonpmonster||[]).push([[0],[,,,,,,,,function(e,t,n){e.exports=n(18)},,,,,function(e,t,n){},function(e,t,n){},function(e,t,n){},function(e,t,n){},function(e,t,n){},function(e,t,n){"use strict";n.r(t);var a=n(0),r=n.n(a),c=n(2),o=n.n(c),s=(n(13),n(3)),l=n(4),i=n(6),u=n(5),m=n(7),h=(n(14),function(e){var t=e.monster;return r.a.createElement("div",{className:"card-container"},r.a.createElement("img",{alt:t.name,src:"https://robohash.org/".concat(t.id,"?set=set2&size=180x180")}),r.a.createElement("h4",null,t.name),r.a.createElement("p",null,t.email))}),f=(n(15),function(e){var t=e.monsters;return r.a.createElement("div",{className:"card-list"},t.map(function(e){return r.a.createElement(h,{key:e.id,monster:e})}))}),d=(n(16),function(e){var t=e.changeHandler,n=e.placeholder;return r.a.createElement("input",{className:"search",type:"text",onChange:t,placeholder:n})}),p=(n(17),function(e){function t(){var e;return Object(s.a)(this,t),(e=Object(i.a)(this,Object(u.a)(t).call(this))).changeHandler=function(t){e.setState({searchfilter:t.target.value},function(){console.log(e.state)})},e.state={monsters:[],searchfilter:""},e}return Object(m.a)(t,e),Object(l.a)(t,[{key:"componentDidMount",value:function(){var e=this;fetch("https://jsonplaceholder.typicode.com/users").then(function(e){return e.json()}).then(function(t){return e.setState({monsters:t},function(){console.log(e.state)})})}},{key:"render",value:function(){var e=this,t=this.state,n=t.searchfilter,a=t.monsters.filter(function(e){return e.name.toLowerCase().includes(n.toLowerCase())});return r.a.createElement("div",{className:"App"},r.a.createElement("h1",null,"Monsters"),r.a.createElement(d,{placeholder:"search",changeHandler:function(t){return e.changeHandler(t)}}),r.a.createElement(f,{monsters:a}))}}]),t}(a.Component));o.a.render(r.a.createElement(p,null),document.getElementById("root"))}],[[8,1,2]]]);
//# sourceMappingURL=main.1bf409dd.chunk.js.map