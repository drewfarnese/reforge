(window.webpackJsonp=window.webpackJsonp||[]).push([[0],[,,,,,,,,,function(t,e,n){t.exports=n.p+"static/media/reforge_logo_v3.9a618feb.png"},function(t,e,n){t.exports=n(21)},,,,,,function(t,e,n){},function(t,e,n){},function(t,e,n){},function(t,e,n){},function(t,e,n){},function(t,e,n){"use strict";n.r(e);var a=n(0),c=n.n(a),i=n(8),l=n.n(i),r=n(2),s=n(3),o=n(5),u=n(4),h=n(6),m=(n(16),n(9)),d=n.n(m),b=function(t){function e(){return Object(r.a)(this,e),Object(o.a)(this,Object(u.a)(e).apply(this,arguments))}return Object(h.a)(e,t),Object(s.a)(e,[{key:"render",value:function(){return c.a.createElement("nav",null,c.a.createElement("img",{src:d.a,alt:""}))}}]),e}(c.a.Component),f=n(1),O=(n(17),[4,6,8,10,12]),j=function(t){function e(t){var n;return Object(r.a)(this,e),(n=Object(o.a)(this,Object(u.a)(e).call(this,t))).state={count:0,roll:0,status:null},n.handleClick=n.handleClick.bind(Object(f.a)(n)),n.roll=n.roll.bind(Object(f.a)(n)),n.increment=n.increment.bind(Object(f.a)(n)),n.decrement=n.decrement.bind(Object(f.a)(n)),n.clear=n.clear.bind(Object(f.a)(n)),n}return Object(h.a)(e,t),Object(s.a)(e,[{key:"increment",value:function(t){this.state.count>=0&&this.state.count<4&&this.setState({count:this.state.count+1})}},{key:"decrement",value:function(t){this.state.count>0&&this.state.count<5&&this.setState({count:this.state.count-1})}},{key:"roll",value:function(t){this.setState({roll:Math.floor(Math.random()*O[this.state.count]+1)})}},{key:"clear",value:function(t){this.setState({status:"Done"})}},{key:"handleClick",value:function(t){var e=document.getElementById("die");e.classList.add("rolling"),this.roll(),setTimeout(function(){e.classList.remove("rolling")},750),setTimeout(function(){this.setState({status:null})}.bind(this),750)}},{key:"render",value:function(){return c.a.createElement("die",null,c.a.createElement("p",{id:"level"},"LEVEL ","D"+O[this.state.count]),c.a.createElement("div",{className:"die-container",onClick:this.handleClick},c.a.createElement("div",{id:"die",className:"d"+O[this.state.count]})),c.a.createElement("forge",null,c.a.createElement("div",{id:"deforge",onClick:this.decrement}),c.a.createElement("p",null,c.a.createElement("p",{id:"count"},this.state.roll)),c.a.createElement("div",{id:"reforge",onClick:this.increment})))}}]),e}(c.a.Component),E=(n(18),[0,5,10,15,20,25,30,35,40,45,50,55,60,65,70,75,80,85,90,95,100]),v=function(t){function e(t){var n;return Object(r.a)(this,e),(n=Object(o.a)(this,Object(u.a)(e).call(this,t))).state={count:20},n.increment=n.increment.bind(Object(f.a)(n)),n.decrement=n.decrement.bind(Object(f.a)(n)),n}return Object(h.a)(e,t),Object(s.a)(e,[{key:"increment",value:function(t){this.state.count>=0&&this.state.count<20&&this.setState({count:this.state.count+1})}},{key:"decrement",value:function(t){this.state.count>0&&this.state.count<=20&&this.setState({count:this.state.count-1})}},{key:"render",value:function(){return c.a.createElement("health",null,c.a.createElement("p",{id:"hp"},"HIT POINTS"),c.a.createElement("div",{className:"health-bar"},c.a.createElement("div",{className:"filler",style:{width:E[this.state.count]+"%"}},this.state.count)),c.a.createElement("button",{id:"life",onClick:this.decrement},"-"),c.a.createElement("button",{id:"life",onClick:this.increment},"+"))}}]),e}(c.a.Component),k=(n(19),function(t){function e(){return Object(r.a)(this,e),Object(o.a)(this,Object(u.a)(e).apply(this,arguments))}return Object(h.a)(e,t),Object(s.a)(e,[{key:"render",value:function(){return c.a.createElement("main",null,c.a.createElement(b,null),c.a.createElement(v,null),c.a.createElement(j,null))}}]),e}(c.a.Component));n(20);l.a.render(c.a.createElement(k,null),document.getElementById("root"))}],[[10,1,2]]]);
//# sourceMappingURL=main.83f10218.chunk.js.map