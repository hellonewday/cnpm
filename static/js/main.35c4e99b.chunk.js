(this.webpackJsonpview=this.webpackJsonpview||[]).push([[0],{125:function(e,t,n){},126:function(e,t,n){"use strict";n.r(t);var a=n(0),c=n.n(a),l=n(8),r=n.n(l),o=(n(96),Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/)));function i(e,t){navigator.serviceWorker.register(e).then((function(e){e.onupdatefound=function(){var n=e.installing;null!=n&&(n.onstatechange=function(){"installed"===n.state&&(navigator.serviceWorker.controller?(console.log("New content is available and will be used when all tabs for this page are closed. See https://bit.ly/CRA-PWA."),t&&t.onUpdate&&t.onUpdate(e)):(console.log("Content is cached for offline use."),t&&t.onSuccess&&t.onSuccess(e)))})}})).catch((function(e){console.error("Error during service worker registration:",e)}))}var h=n(24),m=n(25),u=n(27),s=n(28),g=n(16),d=n(30),p=n(47),E=n(177),v=n(183),f=n(178),b=n(77),y=n.n(b),k=n(19),x=n.n(k),C=n(167),w=n(172),N=n(176),T=n(175),S=n(170),j=n(173),O=n(174),D=Object(C.a)({table:{minWidth:650},row:{"&:hover":{backgroundColor:"#f7f7f0",cursor:"pointer"},"&::-webkit-scrollbar":{width:10}}});function W(e){var t=e.data,n=D();return c.a.createElement(S.a,{className:"scrollbar"},c.a.createElement(w.a,{style:{width:1500},className:n.table,"aria-label":"simple table"},c.a.createElement(j.a,null,c.a.createElement(O.a,null,c.a.createElement(T.a,{align:"left"},"T\u1eeb chuy\xean ng\xe0nh"),c.a.createElement(T.a,{align:"center"},"Ch\u01b0\u01a1ng"),c.a.createElement(T.a,{align:"center"},"S\u1ed1 b\u1ea3n d\u1ecbch"),c.a.createElement(T.a,{align:"left"},"B\u1ea3n d\u1ecbch ti\xeau bi\u1ec3u"),c.a.createElement(T.a,{align:"left"},"L\u1ea7n \u0111\u1ea7u t\u1ea1o"),c.a.createElement(T.a,{align:"left"},"C\u1eadp nh\u1eadt l\u1ea7n cu\u1ed1i"))),c.a.createElement(N.a,null,t.map((function(e){return c.a.createElement(O.a,{className:n.row,key:e.id},c.a.createElement(T.a,{component:"th",align:"left"},c.a.createElement(g.b,{style:{textDecoration:"none",color:"inherit"},to:"/text/".concat(e.text)},e.text," ")),c.a.createElement(T.a,{component:"th",align:"center"},e.chapter),c.a.createElement(T.a,{component:"th",align:"center"},e.meaning_counts),c.a.createElement(T.a,{component:"th",align:"left"},e.meaning[0]),c.a.createElement(T.a,{component:"th",align:"left"},e.created_at),c.a.createElement(T.a,{component:"th",align:"left"},e.updated_at))})))))}var A={textField:{margin:10},textArea:{margin:10},button:{marginTop:14,backgroundColor:"teal",textTransform:"normal",color:"white",fontSize:12}},B=function(e){Object(s.a)(n,e);var t=Object(u.a)(n);function n(){var e;Object(h.a)(this,n);for(var a=arguments.length,c=new Array(a),l=0;l<a;l++)c[l]=arguments[l];return(e=t.call.apply(t,[this].concat(c))).state={text:"",chapter:"",data:[]},e.handleChange=function(t){e.setState(Object(p.a)({},t.target.name,t.target.value))},e.handleSubmit=function(t){t.preventDefault(),e.state.text&&e.state.chapter?x.a.get("/pieces?text=".concat(e.state.text,"&chapter=").concat(e.state.chapter)).then((function(t){e.setState({data:t.data.data}),console.log(e.state.data)})).catch((function(e){console.log(e.response)})):e.state.text&&!e.state.chapter?x.a.get("/pieces?text=".concat(e.state.text)).then((function(t){e.setState({data:t.data.data}),console.log(e.state.data)})).catch((function(e){console.log(e.response)})):!e.state.text&&e.state.chapter?x.a.get("/pieces?chapter=".concat(e.state.chapter)).then((function(t){e.setState({data:t.data.data}),console.log(e.state.data)})).catch((function(e){console.log(e.response)})):alert("Vui l\xf2ng nh\u1eadp th\xf4ng tin")},e}return Object(m.a)(n,[{key:"componentDidMount",value:function(){x.a.get("https://cnpm-e17cn1.herokuapp.com/pieces").then((function(e){console.log(e.data)})).catch((function(e){return console.log(e.response)}))}},{key:"render",value:function(){var e=this.state.data;return c.a.createElement(E.a,null,c.a.createElement("br",null),c.a.createElement(v.a,{id:"standard-basic",label:"B\u1ea1n t\xecm ki\u1ebfm t\u1eeb g\xec?",variant:"outlined",type:"text",name:"text",style:A.textField,onChange:this.handleChange,margin:"dense"})," ","hay"," ",c.a.createElement(v.a,{id:"standard-basic",label:"T\xecm ki\u1ebfm ch\u01b0\u01a1ng n\xe0o?",variant:"outlined",type:"number",name:"chapter",margin:"dense",onChange:this.handleChange,style:A.textField}),c.a.createElement(f.a,{variant:"contained",style:A.button,onClick:this.handleSubmit},c.a.createElement(y.a,{style:{fontSize:20}})," T\xecm"),c.a.createElement("br",null),c.a.createElement("br",null),e.length>0?c.a.createElement(W,{data:e}):c.a.createElement("h5",null,"Ch\u01b0a c\xf3 d\u1eef li\u1ec7u"))}}]),n}(a.Component),I=n(37),F=n(14),L=n.n(F),M=n(78),_=n.n(M),z=n(79),G=n.n(z),K=n(80),R=n.n(K),V=n(81),q=n.n(V),H=(n(124),Object(C.a)((function(e){return{icon:{marginTop:12,fontSize:30}}}))),J=function(e){var t=e.dissapear,n=Object(a.useState)("home"),l=Object(I.a)(n,2),r=l[0],o=l[1],i=H(),h=Object(d.f)();return c.a.createElement(L.a,{className:t,style:{backgroundColor:"#1a237e"},onSelect:function(e){o(e),h.push("/".concat(e))}},c.a.createElement(F.Toggle,null),c.a.createElement(F.Nav,{selected:r},c.a.createElement(F.NavItem,{eventKey:""},c.a.createElement(F.NavIcon,null,c.a.createElement(_.a,{className:i.icon})),c.a.createElement(F.NavText,null,"Trang ch\u1ee7")),c.a.createElement(F.NavItem,{eventKey:"contribute"},c.a.createElement(F.NavIcon,null,c.a.createElement(G.a,{className:i.icon})),c.a.createElement(F.NavText,null,"\u0110\xf3ng g\xf3p ki\u1ebfn th\u1ee9c")),c.a.createElement(F.NavItem,{eventKey:"search"},c.a.createElement(F.NavIcon,null,c.a.createElement(R.a,{className:i.icon})),c.a.createElement(F.NavText,null,"Tra c\u1ee9u tri th\u1ee9c")),c.a.createElement(F.NavItem,{eventKey:"training"},c.a.createElement(F.NavIcon,null,c.a.createElement(q.a,{className:i.icon})),c.a.createElement(F.NavText,null,"Luy\u1ec7n thi tr\u1eafc nghi\u1ec7m"))))},U=n(179),P=n(180),Q=n(129),Y=n(181),$=n(82),X=n.n($),Z=n(84),ee=n(185),te=Object(C.a)((function(e){return{root:{flexGrow:2},menuButton:{marginRight:e.spacing(2)},title:{flexGrow:1}}}));function ne(){var e=te(),t=c.a.useState(null),n=Object(I.a)(t,2),a=n[0],l=n[1],r=function(){l(null)};return c.a.createElement("div",{className:e.root},c.a.createElement(U.a,{position:"static"},c.a.createElement(P.a,null,c.a.createElement(Y.a,{"aria-haspopup":"true",onClick:function(e){l(e.currentTarget)},edge:"start",className:e.menuButton,color:"inherit","aria-label":"menu"},c.a.createElement(X.a,null)),c.a.createElement(Z.a,{id:"simple-menu",anchorEl:a,keepMounted:!0,open:Boolean(a),onClose:r},c.a.createElement(ee.a,{onClick:r},c.a.createElement(g.b,{style:{textDecoration:"none",color:"black"},to:"/"},"Trang ch\u1ee7")),c.a.createElement(ee.a,{onClick:r},c.a.createElement(g.b,{style:{textDecoration:"none",color:"black"},to:"/contribute"},"C\u1ed1ng hi\u1ebfn tri th\u1ee9c")),c.a.createElement(ee.a,{onClick:r},c.a.createElement(g.b,{style:{textDecoration:"none",color:"black"},to:"/search"},"T\xecm ki\u1ebfm tri th\u1ee9c")),c.a.createElement(ee.a,{onClick:r},c.a.createElement(g.b,{style:{textDecoration:"none",color:"black"},to:"/training"},"\xd4n luy\u1ec7n tr\u1eafc nghi\u1ec7m"))),c.a.createElement(Q.a,{variant:"h6",className:e.title},"Nh\u1eadp m\xf4n C\xf4ng ngh\u1ec7 ph\u1ea7n m\u1ec1m - PTIT"))))}var ae=function(){var e=Object(a.useState)([]),t=Object(I.a)(e,2),n=t[0],l=t[1];return c.a.createElement("div",null,c.a.createElement(Q.a,{variant:"h6",style:{margin:10}},"Ch\xe0o m\u1eebng c\xe1c b\u1ea1n \u0111\u1ebfn t\u1edbi trung t\xe2m h\u1ecdc t\u1eadp m\xf4n"," ",c.a.createElement("b",null,"Nh\u1eadp m\xf4n C\xf4ng ngh\u1ec7 ph\u1ea7n m\u1ec1m")," - Khoa C\xf4ng ngh\u1ec7 th\xf4ng tin",c.a.createElement("div",{style:{margin:10}},c.a.createElement(v.a,{id:"standard-basic",label:"T\xecm ki\u1ebfm nhanh",variant:"outlined",type:"text",name:"text",onChange:function(e){console.log(e.target.value),""===e.target.value?l([]):x.a.get("https://cnpm-e17cn1.herokuapp.com/pieces?text=".concat(e.target.value)).then((function(e){return l(e.data.data)})).catch((function(e){return console.log(e.response)}))},margin:"dense",fullWidth:!0}))),n.length>0?c.a.createElement(W,{data:n}):c.a.createElement("hr",null),c.a.createElement(Q.a,{variant:"h5",style:{margin:10}},c.a.createElement("b",null,"C\xf3 g\xec hay ho \u1edf \u0111\xe2y?")),c.a.createElement(Q.a,{variant:"h6",style:{margin:10}},"Vi\u1ec7c h\u1ecdc t\u1eadp th\u1eadt kh\xf3 kh\u0103n, m\xecnh ph\u1ea3i \u0111i l\xe0m c\u1ea3 ng\xe0y, d\u1ecbch b\u1ec7nh n\xe0y c\xf4ng vi\u1ec7c ng\xe0y m\u1ed9t nhi\u1ec1u h\u01a1n. V\xe0o m\u1ed9t ng\xe0y \u0111\u1eb9p tr\u1eddi, th\u1ea7y d\u1ea1y m\xf4n"," ",c.a.createElement("b",null,"Nh\u1eadp m\xf4n C\xf4ng ngh\u1ec7 ph\u1ea7n m\u1ec1m"),", m\u1ed9t ph\xf3 gi\xe1o s\u01b0 ki\xeam tr\u01b0\u1edfng khoa Software Engineering c\xf3 giao cho l\u1edbp t\xf4i m\u1ed7i tu\u1ea7n \u0111\u1ecdc 1 ch\u01b0\u01a1ng trong gi\xe1o tr\xecnh d\xe0i x\u1ea5p x\u1ec9 30 trang, \u0111\xe3 v\u1eady c\xf2n cho ch\xfang m\xecnh d\xf9ng ph\u01b0\u01a1ng ph\xe1p ",c.a.createElement("i",null,'"\u0111\u1ecdc 4 l\u1ea7n"'),". M\u1eb7c d\xf9 \u0111\u1ecdc r\u1ea5t cu\u1ed1n h\xfat, c\u0169ng th\u1ea5y nhi\u1ec1u th\u1ee9 hay ho \xe1p d\u1ee5ng trong c\xf4ng ty m\xecnh l\xe0m vi\u1ec7c, nh\u01b0ng m\xecnh kh\xf4ng th\u1ec3 s\u1eafp x\u1ebfp th\u1eddi gian \u0111\u1ec3 \u0111\u1ecdc h\u1ebft \u0111\u01b0\u1ee3c.",c.a.createElement("br",null),"H\u01a1n n\u1eefa sau khi \u0111\u1ecdc xong m\u1edb ch\u1eef d\xe0i d\u1eb1ng d\u1eb7c \u0111\xf3 th\u1ea7y c\xf2n h\u1ecfi ch\xfang t\xf4i v\u1ec1 refactoring l\xe0 g\xec, deadline l\xe0 g\xec, workflow l\xe0 g\xec, m\xf4 h\xecnh Agile,...n\xean m\xecnh c\xf3 s\xe1ng ki\u1ebfn t\u1ea1i sao kh\xf4ng c\xf9ng nhau note ra m\u1ed9t t\u1edd gi\u1ea5y nh\u1eefng g\xec \u0111\u1ecdng l\u1ea1i trong quy\u1ec3n gi\xe1o tr\xecnh nh\u1ec9? Nh\u1eefng ai ch\u0103m h\u1ecdc c\xf3 th\u1ec3 nh\xecn v\xe0o \u0111\xf3 \u0111\u1ec3 h\u1ecdc, ho\u1eb7c nh\u1eefng ai l\u01b0\u1eddi h\u1ecdc c\xf3 th\u1ec3 nh\xecn v\xe0o \u0111\xf3, g\xf5 c\xe1i ra lu\xf4n m\u1ed9t tr\xe0ng c\xe1c meaning \u0111\u1ec3 tr\u1ea3 l\u1eddi v\u1ea5n \u0111\xe1p h\xe0ng tu\u1ea7n. Tuy nhi\xean vi\u1ec7c note ra kh\xe1 v\u1ea5t v\u1ea3 th\xec kh\xe1 kh\xf3 t\xecm n\xean m\xecnh \u0111i t\u1edbi k\u1ebft lu\u1eadn l\xe0m ra trang web n\xe0y."),c.a.createElement("br",null),c.a.createElement("br",null),c.a.createElement(Q.a,{variant:"h5",style:{margin:10}},c.a.createElement("b",null,"M\xecnh l\xe0 ai?")),c.a.createElement(Q.a,{variant:"h6",style:{margin:10}},"M\xecnh hi\u1ec7n \u0111ang l\xe0 nh\xe2n vi\xean IT c\u1ee7a AFFVNA Group - Eagle Team, sinh vi\xean c\u1ee7a khoa C\xf4ng ngh\u1ec7 th\xf4ng tin h\u1ec7 Ch\u1ea5t l\u01b0\u1ee3ng cao. C\xf4ng vi\u1ec7c h\xe0ng ng\xe0y c\u1ee7a m\xecnh l\xe0 vi\u1ebft ph\u1ea7n m\u1ec1m, tool, ch\u1ea1y v\xe0 c\xe0i \u0111\u1eb7t h\u1ec7 th\u1ed1ng cho c\xe1c \u0111\u1ea7u qu\u1ea3ng c\xe1o online v\xe0 v\u1ec1 nh\xe0 c\xe0y LMHT t\u1edbi khi n\xe0o m\u1eb9 m\u1eafng \u0111i ng\u1ee7 th\xec th\xf4i.",c.a.createElement("br",null),"M\xecnh \u0111am m\xea l\u1eadp tr\xecnh Web, \u0111\u1eb7c bi\u1ec7t NodeJS, Express, Facebook Stack (GraphQL, Redux, React, React Native,...) v\xe0 MongoDB."),c.a.createElement("br",null),c.a.createElement("br",null),c.a.createElement(Q.a,{variant:"h5",style:{margin:10}},c.a.createElement("b",null,"T\xe0i li\u1ec7u h\u1ecdc")),c.a.createElement(Q.a,{variant:"h6",style:{margin:10}},c.a.createElement("a",{style:{textDecoration:"none",color:"black"},href:"https://drive.google.com/file/d/0B6kidcV4CiTFLTI4UmozWlpBS3M/view?usp=sharing"},"1. Gi\xe1o tr\xecnh"),c.a.createElement("br",null),c.a.createElement("a",{style:{textDecoration:"none",color:"black"},href:"https://drive.google.com/file/d/1kwzhnBTQX_q6DGWf9dN5HQgYhNYKv6s1/view?usp=sharing"},"2. Ng\xe2n h\xe0ng c\xe2u h\u1ecfi"),c.a.createElement("br",null),c.a.createElement("a",{style:{textDecoration:"none",color:"black"},href:"https://drive.google.com/file/d/1sY72yu2tdB7up4L9dtzLvItwoFGJ6z91/view?usp=sharing"},"3. \u0110\u1ec1 B\xe0i t\u1eadp l\u1edbn")))};var ce=function(){return c.a.createElement("div",null,c.a.createElement(E.a,null,c.a.createElement(ae,null)))},le=(n(125),n(184)),re=n(182),oe=n(83),ie=n.n(oe),he={textField:{margin:10},textArea:{margin:10}},me=function(e){Object(s.a)(n,e);var t=Object(u.a)(n);function n(){var e;Object(h.a)(this,n);for(var a=arguments.length,c=new Array(a),l=0;l<a;l++)c[l]=arguments[l];return(e=t.call.apply(t,[this].concat(c))).state={text:"",meaning:"",first_appear:"",status:""},e.handleChange=function(t){e.setState(Object(p.a)({},t.target.name,t.target.value))},e.handleSubmit=function(t){t.preventDefault();var n={text:e.state.text,meaning:e.state.meaning,first_appear:e.state.first_appear};x.a.post("https://cnpm-e17cn1.herokuapp.com/pieces",n).then((function(t){e.setState({status:t.status})})).catch((function(e){console.log(e.response),alert("C\xf3 l\u1ed7i r\u1ed3i")}))},e}return Object(m.a)(n,[{key:"render",value:function(){var e=this.state,t=e.status,n=e.text;return c.a.createElement(E.a,{fixed:!0,style:{marginTop:20}},c.a.createElement(Q.a,{style:{margin:10},variant:"h4"},"\u0110\xf3ng g\xf3p ki\u1ebfn th\u1ee9c"),c.a.createElement(v.a,{id:"standard-basic",label:"T\u1eeb chuy\xean ng\xe0nh",variant:"outlined",name:"text",style:he.textField,onChange:this.handleChange,fullWidth:!0}),c.a.createElement("br",null),c.a.createElement(v.a,{id:"standard-basic",label:"N\xf3 c\xf3 ngh\u0129a l\xe0...",name:"meaning",variant:"outlined",style:he.textArea,onChange:this.handleChange,fullWidth:!0}),c.a.createElement("br",null),c.a.createElement(v.a,{id:"standard-basic",label:"Thu\u1ed9c ch\u01b0\u01a1ng...",name:"first_appear",variant:"outlined",type:"number",style:he.textField,onChange:this.handleChange}),c.a.createElement("br",null),c.a.createElement(f.a,{variant:"contained",onClick:this.handleSubmit,color:"primary",style:he.textField},"\u0110\u0103ng t\u1ea3i ",c.a.createElement(ie.a,{style:{marginLeft:10,fontSize:30}})),c.a.createElement("br",null),201===t?c.a.createElement(le.a,{severity:"success"},c.a.createElement(re.a,null,"\u0110\u0103ng t\u1ea3i th\xe0nh c\xf4ng"),"Tri th\u1ee9c c\u1ee7a b\u1ea1n \u0111\xe3 \u0111\u01b0\u1ee3c chia s\u1ebb t\u1edbi c\u1ed9ng \u0111\u1ed3ng \u2014"," ",c.a.createElement(g.b,{to:"/text/".concat(n),style:{textDecoration:"none",color:"inherit"}},c.a.createElement("strong",null,"\u0110i xem n\xe0o!")," ")):200===t?c.a.createElement(le.a,{severity:"info"},c.a.createElement(re.a,null,"\u0110\xe3 \u0111\u01b0\u1ee3c c\u1eadp nh\u1eadt"),"B\u1ea3n d\u1ecbch c\u1ee7a b\u1ea1n \u0111\xe3 \u0111\u01b0\u1ee3c c\u1eadp nh\u1eadt v\xe0o khay b\u1ea3n d\u1ecbch c\u1ee7a t\u1eeb chuy\xean ng\xe0nh tr\xean \u2014"," ",c.a.createElement(g.b,{to:"/text/".concat(n),style:{textDecoration:"none",color:"inherit"}},c.a.createElement("strong",null,"Ki\u1ec3m tra n\xe0o!"))):t>400?c.a.createElement(le.a,{severity:"error"},c.a.createElement(re.a,null,"$",t," - Server g\u1eb7p l\u1ed7i"),"C\xf3 l\u1ed7i trong qu\xe1 tr\xecnh \u0111\u0103ng t\u1ea3i"):"")}}]),n}(a.Component),ue=function(){return c.a.createElement(E.a,{fixed:!0},c.a.createElement("h1",null,"Hi\u1ec7n t\u1ea1i c\u1ed9ng \u0111\u1ed3ng \u0111ang x\xe2y d\u1ef1ng th\xf4ng tin tra c\u1ee9u."),c.a.createElement("h3",null,"Sau khi th\xf4ng tin tra c\u1ee9u \u0111\u01b0\u1ee3c ho\xe0n thi\u1ec7n, m\xecnh s\u1ebd l\xe0m n\xf3 ngay v\xe0 lu\xf4n nha ~~"," "))},se=function(e){Object(s.a)(n,e);var t=Object(u.a)(n);function n(){var e;Object(h.a)(this,n);for(var a=arguments.length,c=new Array(a),l=0;l<a;l++)c[l]=arguments[l];return(e=t.call.apply(t,[this].concat(c))).state={data:[]},e}return Object(m.a)(n,[{key:"componentDidMount",value:function(){var e=this;x.a.get("https://cnpm-e17cn1.herokuapp.com/pieces?text=".concat(this.props.match.params.text)).then((function(t){return e.setState({data:t.data.data})})).catch((function(e){return console.log(e.response)}))}},{key:"render",value:function(){var e=this.state.data;return console.log(this.state.data),c.a.createElement(E.a,{fixed:!0},e.length>0?e.map((function(e){return c.a.createElement("div",{key:e.id},c.a.createElement("h1",null,e.text),c.a.createElement("h3",null,"L\u1ea7n \u0111\u1ea7u xu\u1ea5t hi\u1ec7n: Ch\u01b0\u01a1ng ",e.chapter),c.a.createElement("div",null,c.a.createElement("b",null,"C\xe1c b\u1ea3n d\u1ecbch ngh\u0129a:")," ",c.a.createElement("br",null),c.a.createElement("ol",null,e.meaning.map((function(e){return c.a.createElement("li",{key:e,style:{margin:10}},e)})))),c.a.createElement("p",null,c.a.createElement("b",null,"C\u1eadp nh\u1eadt l\u1ea7n cu\u1ed1i:")," ",e.updated_at))})):"No data found")}}]),n}(a.Component),ge=function(e){Object(s.a)(n,e);var t=Object(u.a)(n);function n(){return Object(h.a)(this,n),t.apply(this,arguments)}return Object(m.a)(n,[{key:"render",value:function(){return c.a.createElement(g.a,null,c.a.createElement(ne,null),c.a.createElement(J,{dissapear:"side-bar"}),c.a.createElement(d.c,null,c.a.createElement(d.a,{path:"/",exact:!0,component:function(e){return c.a.createElement(ce,null)}}),c.a.createElement(d.a,{path:"/search",component:function(e){return c.a.createElement(B,null)}}),c.a.createElement(d.a,{path:"/text/:text",component:se}),c.a.createElement(d.a,{path:"/contribute",component:function(e){return c.a.createElement(me,null)}}),c.a.createElement(d.a,{path:"/training",component:function(e){return c.a.createElement(ue,null)}})))}}]),n}(a.Component);r.a.render(c.a.createElement(ge,null),document.getElementById("root")),function(e){if("serviceWorker"in navigator){if(new URL(".",window.location.href).origin!==window.location.origin)return;window.addEventListener("load",(function(){var t="".concat(".","/service-worker.js");o?(!function(e,t){fetch(e,{headers:{"Service-Worker":"script"}}).then((function(n){var a=n.headers.get("content-type");404===n.status||null!=a&&-1===a.indexOf("javascript")?navigator.serviceWorker.ready.then((function(e){e.unregister().then((function(){window.location.reload()}))})):i(e,t)})).catch((function(){console.log("No internet connection found. App is running in offline mode.")}))}(t,e),navigator.serviceWorker.ready.then((function(){console.log("This web app is being served cache-first by a service worker. To learn more, visit https://bit.ly/CRA-PWA")}))):i(t,e)}))}}()},91:function(e,t,n){e.exports=n(126)},96:function(e,t,n){}},[[91,1,2]]]);
//# sourceMappingURL=main.35c4e99b.chunk.js.map