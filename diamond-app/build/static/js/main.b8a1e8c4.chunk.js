(window["webpackJsonpdiamond-app"]=window["webpackJsonpdiamond-app"]||[]).push([[0],{378:function(e,a,t){e.exports=t(595)},383:function(e,a,t){},594:function(e,a){},595:function(e,a,t){"use strict";t.r(a);var n=t(0),r=t.n(n),l=t(21),o=t.n(l);t(383),Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));var i=t(113),c=t(47),s=t(3),u=t(339),m=t(666),d=t(685),p=t(667),h=t(264),b=t(654),g=t(102),f=t(669),E=t(261),y=t(668),v=t(670),C=t(658),w=t(179),S=t(665),k=t(356),O=t.n(k),x=t(358),F=t.n(x),j=t(357),I=t.n(j),D=t(606),N=t(651),V=t(251),P=t(333),L=t.n(P),G=t(337),B=t.n(G),A=t(338),R=t.n(A),z=t(335),T=t.n(z),M=t(336),H=t.n(M),K=t(334),W=t.n(K),_=t(328),X=t(200),J=t(331),U=t(236);function q(e){return r.a.createElement("div",null,r.a.createElement(_.a,{placement:"right",title:"4 Cs"},r.a.createElement(D.a,{button:!0,onClick:e.aboutOpen("Cs")},r.a.createElement(N.a,null,r.a.createElement(L.a,null)),r.a.createElement(V.a,{primary:"The 4C's"}))),r.a.createElement(_.a,{placement:"right",title:"Carat"},r.a.createElement(D.a,{button:!0,onClick:e.aboutOpen("Carat")},r.a.createElement(N.a,null,r.a.createElement(W.a,null)),r.a.createElement(V.a,{primary:"Carat"}))),r.a.createElement(_.a,{placement:"right",title:"Color"},r.a.createElement(D.a,{button:!0,onClick:e.aboutOpen("Color")},r.a.createElement(N.a,null,r.a.createElement(T.a,null)),r.a.createElement(V.a,{primary:"Color"}))),r.a.createElement(_.a,{placement:"right",title:"Cut"},r.a.createElement(D.a,{button:!0,onClick:e.aboutOpen("Cut")},r.a.createElement(N.a,null,r.a.createElement(H.a,null)),r.a.createElement(V.a,{primary:"Cut"}))),r.a.createElement(_.a,{placement:"right",title:"Clarity"},r.a.createElement(D.a,{button:!0,onClick:e.aboutOpen("Clarity")},r.a.createElement(N.a,null,r.a.createElement(B.a,null)),r.a.createElement(V.a,{primary:"Clarity"}))))}function Y(e){return r.a.createElement("div",null,r.a.createElement(_.a,{placement:"right",title:"Blog"},r.a.createElement(D.a,{button:!0,component:"a",href:"https://towardsdatascience.com/full-stack-machine-learning-on-azure-f0f6b77be07e"},r.a.createElement(N.a,null,r.a.createElement(X.a,{icon:J.a,size:"2x"})),r.a.createElement(V.a,{primary:"Notebooks"}))),r.a.createElement(_.a,{placement:"right",title:"Notebooks"},r.a.createElement(D.a,{button:!0,component:"a",href:"https://nbviewer.jupyter.org/github/dougfoo/machineLearning/blob/master/diamonds/Diamond-Analysis-4.ipynb"},r.a.createElement(N.a,null,r.a.createElement(X.a,{icon:U.b,size:"2x"})),r.a.createElement(V.a,{primary:"Notebooks"}))),r.a.createElement(_.a,{placement:"right",title:"About Diamonds"},r.a.createElement(D.a,{button:!0,onClick:e.aboutOpen("About")},r.a.createElement(N.a,null,r.a.createElement(X.a,{icon:U.a,size:"2x"})),r.a.createElement(V.a,{primary:"About Diamonds"}))),r.a.createElement(_.a,{placement:"right",title:"About Foo"},r.a.createElement(D.a,{button:!0,component:"a",href:"http://foostack.ai/"},r.a.createElement(N.a,null,r.a.createElement(R.a,null)),r.a.createElement(V.a,{primary:"About Foo"}))))}function Z(e){return r.a.createElement(g.a,{component:"h2",variant:"h6",color:"primary",gutterBottom:!0},e.children)}var Q=t(121),$=t.n(Q),ee=Object(u.a)({depositContext:{flex:1}});function ae(){var e=ee(),a=Object(n.useState)({price:0,carat:0,color:"",cut:"",clarity:"",skus:""}),t=Object(i.a)(a,2),l=t[0],o=t[1];Object(n.useEffect)((function(){console.log("axios ...","/diamonds/daily/"),$.a.get("/diamonds/daily/").then((function(e){o({price:e.data.price,color:e.data.color,cut:e.data.cut,clarity:e.data.clarity,carat:e.data.carat,skus:e.data.skus}),console.log(e.data)})).catch((function(e){console.log(e)}))}),[]);var c="https://www.bluenile.com/diamond-details/"+l.skus;return r.a.createElement(r.a.Fragment,null,r.a.createElement(Z,null,"Random Diamond Featured"),r.a.createElement(g.a,{component:"p",variant:"h4"},l.price.toLocaleString("en-US",{style:"currency",currency:"USD"})),r.a.createElement(g.a,{component:"p",variant:"subtitle2"},"Carat: ",l.carat),r.a.createElement(g.a,{component:"p",variant:"subtitle2"},"Color: ",l.color),r.a.createElement(g.a,{component:"p",variant:"subtitle2"},"Clarity: ",l.clarity),r.a.createElement(g.a,{component:"p",variant:"subtitle2"},"Cut: ",l.cut),r.a.createElement(g.a,{color:"textSecondary",className:e.depositContext},"Go buy it on BlueNile ",r.a.createElement("a",{target:"_blank",href:c},l.skus)))}var te=t(263),ne=t(281),re=t(663),le=t(330),oe=t(178),ie=t.n(oe),ce=t(675),se=t(657),ue=t(354),me=t.n(ue),de=t(355),pe=t.n(de),he=t(360),be=t(327),ge=t(188),fe=t.n(ge),Ee=t(189),ye=t.n(Ee),ve=t(672);function Ce(e){var a=e.children,t=e.value,n=e.index,l=Object(he.a)(e,["children","value","index"]);return r.a.createElement(g.a,Object.assign({component:"div",role:"tabpanel",hidden:t!==n,id:"nav-tabpanel-".concat(n),"aria-labelledby":"nav-tab-".concat(n)},l),r.a.createElement(ve.a,{p:3},a))}function we(e){var a=e.className,t=e.checked,n=e.onChange,l=e.value;return r.a.createElement(be.a,{style:{width:3,height:3},icon:r.a.createElement(fe.a,{style:{fontSize:16}}),checkedIcon:r.a.createElement(ye.a,{style:{fontSize:16}}),className:a,onChange:n,value:l,checked:t})}function Se(e){var a=e.children,t=e.open,n=e.value,l=r.a.useRef(null);return r.a.useEffect((function(){l.current&&l.current.update()})),r.a.createElement(_.a,{PopperProps:{popperRef:l},open:t,enterTouchDelay:0,placement:"top",title:n},a)}var ke=t(83),Oe=t(84),xe=t(87),Fe=t(85),je=t(88),Ie=t(674),De=t(680),Ne=t(676),Ve=t(678),Pe=t(190),Le=t.n(Pe),Ge=function(e){function a(e){var t;return Object(ke.a)(this,a),(t=Object(xe.a)(this,Object(Fe.a)(a).call(this,e))).state={},t}return Object(je.a)(a,e),Object(Oe.a)(a,[{key:"render",value:function(){return r.a.createElement(r.a.Fragment,null,0===this.props.diamonds.length?r.a.createElement("div",null,r.a.createElement(g.a,{gutterBottom:!0,variant:"h6",color:"secondary"},"Loading..."),r.a.createElement(Le.a,{type:"bars",color:"red"})):r.a.createElement("div",{style:{display:"flex",flexWrap:"wrap"}},r.a.createElement(Ie.a,{height:200,width:150,style:{parent:{maxWidth:"30%"}},padding:{top:10,bottom:20,left:40,right:10}},r.a.createElement(De.a,{style:{axis:{stroke:"blue"},tickLabels:{fill:"blue",fontSize:6}}}),r.a.createElement(De.a,{dependentAxis:!0,style:{axis:{stroke:"blue"},tickLabels:{fill:"blue",fontSize:6}},tickFormat:function(e){return"".concat(e.toLocaleString("en-US",{style:"currency",currency:"USD",maximumFractionDigits:0,minimumFractionDigits:0}))}}),r.a.createElement(Ne.a,{boxWidth:20,data:this.props.diamonds,x:"carat",y:"price"})),r.a.createElement(Ie.a,{height:200,width:350,style:{parent:{maxWidth:"70%"}},padding:{top:10,bottom:20,left:40,right:10}},r.a.createElement(De.a,{style:{axis:{stroke:"blue"},tickLabels:{fill:"blue",fontSize:6}}}),r.a.createElement(Ve.a,{style:{data:{fill:function(e){var a=e.datum;return"D"===a.color?"#FF0000":"E"===a.color?"#FF8000":"F"===a.color?"#FFFF00":"G"===a.color?"#80FF00":"H"===a.color?"#3399FF":"#000000"}},parent:{border:"1px solid #ccc"}},size:1,data:this.props.diamonds,x:"carat",y:"price",scale:{x:"linear",y:"linear"}}))))}}]),a}(n.Component),Be=t(289),Ae=t(267),Re=t(262),ze=t(286),Te=t(268),Me=Object(u.a)((function(e){return{root:{width:"100%"},paper:{marginTop:e.spacing(3),width:"100%",overflowX:"auto",marginBottom:e.spacing(2)},table:{minWidth:250}}}));function He(e){var a=Me(),t=e.data;return console.log(t),r.a.createElement("div",{className:a.root},r.a.createElement(w.a,{className:a.paper},r.a.createElement(Be.a,{className:a.table,size:"small","aria-label":"a dense table"},r.a.createElement(ze.a,null,r.a.createElement(Te.a,null,r.a.createElement(Re.a,{align:"right"},"Price"),r.a.createElement(Re.a,{align:"right"},"Model"))),r.a.createElement(Ae.a,null,t.map((function(e){return r.a.createElement(Te.a,{key:e.name},r.a.createElement(Re.a,{align:"right"},e.price.toLocaleString("en-US",{style:"currency",currency:"USD"})),r.a.createElement(Re.a,{align:"right"},r.a.createElement(_.a,{placement:"top",title:"Click for Model Info"},r.a.createElement("a",{href:e.url,target:"_blank"},e.name))))}))))))}function Ke(e,a){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);a&&(n=n.filter((function(a){return Object.getOwnPropertyDescriptor(e,a).enumerable}))),t.push.apply(t,n)}return t}function We(e){for(var a=1;a<arguments.length;a++){var t=null!=arguments[a]?arguments[a]:{};a%2?Ke(t,!0).forEach((function(a){Object(c.a)(e,a,t[a])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):Ke(t).forEach((function(a){Object.defineProperty(e,a,Object.getOwnPropertyDescriptor(t,a))}))}return e}var _e=Object(u.a)((function(e){return{rightIcon:{marginLeft:e.spacing(1)},button:{margin:e.spacing(1)},container:{display:"flex",flexWrap:"wrap"},formGroup:{display:"flex",flexDirection:"row",flexWrap:"wrap"},textField:{marginLeft:e.spacing(1),marginRight:e.spacing(1),width:80},dense:{marginTop:19},menu:{width:200},paper:{padding:e.spacing(2),display:"flex",overflow:"auto",flexDirection:"column"},paper2:{padding:e.spacing(2),background:"#e8f5e9"}}})),Xe="https://www.bluenile.com/diamond-details/",Je=[{value:"",label:"*"},{value:"FL",label:"FL"},{value:"IF",label:"IF"},{value:"VS1",label:"VS1"},{value:"VS2",label:"VS2"},{value:"VVS1",label:"VVS1"},{value:"VVS2",label:"VVS2"},{value:"SI1",label:"SI1"},{value:"SI2",label:"SI2"}],Ue=[{value:"",label:"*"},{value:"Astor Ideal",label:"Ideal+"},{value:"Ideal",label:"Ideal"},{value:"Good",label:"Good"},{value:"Very Good",label:"Very Good"}],qe=[{value:"",label:"*"},{value:"D",label:"D"},{value:"E",label:"E"},{value:"F",label:"F"},{value:"G",label:"G"},{value:"H",label:"H"},{value:"I",label:"I"},{value:"J",label:"J"},{value:"K",label:"K"}];function Ye(e){var a,t=_e(),n=r.a.useState({tab:0,diamonds:[],color:"",clarity:"",carat:1.1,cut:"",price:0,LRprice:0,RFprice:0,NNprice:0,XGBprice:0,XGB2price:0,ISOprice:0,showPrices:!1,showDiamonds:!1}),l=Object(i.a)(n,2),o=l[0],s=l[1],u=function(e){return function(a){console.log(e,a),"undefined"!==typeof a.target.checked?s((function(t){return We({},t,Object(c.a)({},e,a.target.checked))})):s((function(t){return We({},t,Object(c.a)({},e,a.target.value))})),console.log(a)}};return r.a.createElement(r.a.Fragment,null,r.a.createElement(Z,null,"Price Your Diamond (Machine Learned on 100k+ samples)"),r.a.createElement(re.a,{className:t.formGroup},r.a.createElement(le.a,{id:"standard-number",label:"Carats",value:o.carat,onChange:(a="carat",function(e){console.log(a,e),s(We({},o,Object(c.a)({},a,Number(e.target.value))))}),type:"number",className:t.textField,InputLabelProps:{shrink:!0},helperText:"Choose #.# of carats",margin:"normal"}),r.a.createElement(le.a,{id:"standard-select-clarity",select:!0,label:"Clarity",className:t.textField,value:o.clarity,onChange:u("clarity"),SelectProps:{MenuProps:{className:t.menu}},helperText:"Choose clarity",margin:"normal"},Je.map((function(e){return r.a.createElement(te.a,{key:e.value,value:e.value},e.label)}))),r.a.createElement(le.a,{id:"standard-select-cut",select:!0,label:"Cut",className:t.textField,value:o.cut,onChange:u("cut"),SelectProps:{MenuProps:{className:t.menu}},helperText:"Choose cut",margin:"normal"},Ue.map((function(e){return r.a.createElement(te.a,{key:e.value,value:e.value},e.label)}))),r.a.createElement(le.a,{id:"standard-select-color",select:!0,label:"Color",className:t.textField,value:o.color,onChange:u("color"),SelectProps:{MenuProps:{className:t.menu}},helperText:"Choose color",margin:"normal"},qe.map((function(e){return r.a.createElement(te.a,{key:e.value,value:e.value},e.label)}))),r.a.createElement(ne.a,{variant:"contained",color:"primary",onClick:function(e){s(We({},o,{diamonds:[]}));var a=o;delete a.diamonds,console.log("submit filter, state:",a);var t=JSON.stringify(a);console.log("json to post: ",t);var n="/diamonds";console.log("axios pricing ...",n),$.a.post(n+"/price/",a,{headers:{"Content-Type":"application/json",Authorization:"Bearer xEiYevI6XBSLgc7GkYPCLtFL1yMbcYKPNNI4V9/N40Amdi/AU8AnNl1/6ZxKs3x50PAWMoiXgY36rlZjMNwkgQ=="}}).then((function(e){var a=e.data;console.log(a),s((function(e){return We({},e,{LRprice:Number(a.filter((function(e){return"LR"===e.model}))[0].price),NNprice:Number(a.filter((function(e){return"NN"===e.model}))[0].price),XGBprice:Number(a.filter((function(e){return"XGB"===e.model}))[0].price),XGB2price:Number(a.filter((function(e){return"XGB2"===e.model}))[0].price),ISOprice:Number(a.filter((function(e){return"ISO"===e.model}))[0].price),LR3price:Number(a.filter((function(e){return"LR3"===e.model}))[0].price),RFprice:Number(a.filter((function(e){return"RF"===e.model}))[0].price),showPrices:!0})}))})).catch((function(e){console.log(e)})),console.log("axios matches ...",n),s((function(e){return We({},e,{diamonds:[],showDiamonds:!0})}));$.a.post(n+"/q2/",o).then((function(e){var a=e.data;s((function(e){return We({},e,{diamonds:a,showDiamonds:!0})})),console.log(a)})).catch((function(e){console.log(e)})),console.log("axios matches ... all done, ")},className:t.button},"Price")),!0===o.showPrices?r.a.createElement(w.a,{className:t.paper2},r.a.createElement(He,{data:[{name:"XG Boost (SKLearn)",price:o.XGB2price,url:"https://scikit-learn.org/stable/modules/generated/sklearn.ensemble.GradientBoostingRegressor.html"},{name:"Random Forest (SKLearn)",price:o.RFprice,url:"https://scikit-learn.org/stable/modules/generated/sklearn.ensemble.RandomForestRegressor.html"},{name:"Linear Regression (SKLearn)",price:o.LR3price,url:"https://scikit-learn.org/stable/modules/generated/sklearn.linear_model.LinearRegression.html"},{name:"ISO Regression - single feature (SKLearn)",price:o.ISOprice,url:"https://scikit-learn.org/stable/modules/isotonic.html"},{name:"Linear Regression (Azure ML Studio)",price:o.LRprice,url:"https://docs.microsoft.com/en-us/azure/machine-learning/studio-module-reference/linear-regression"},{name:"XG Boost (Azure ML Studio)",price:o.XGBprice,url:"https://docs.microsoft.com/en-us/azure/machine-learning/studio-module-reference/boosted-decision-tree-regression"},{name:"Neural Net (Azure ML Studio *Defect)",price:o.NNprice,url:"https://docs.microsoft.com/en-us/azure/machine-learning/studio-module-reference/neural-network-regression"}]})):r.a.createElement(w.a,null),!0===o.showDiamonds?r.a.createElement(r.a.Fragment,null,r.a.createElement(ce.a,{value:o.tab,onChange:function(e,a){s((function(e){return We({},e,{tab:a})}))},variant:"fullWidth",indicatorColor:"primary",textColor:"primary","aria-label":"icon tabs example"},r.a.createElement(se.a,{icon:r.a.createElement(me.a,null),"aria-label":"plot"}),r.a.createElement(se.a,{icon:r.a.createElement(pe.a,null),"aria-label":"data"})),r.a.createElement(Ce,{value:o.tab,index:0},r.a.createElement(Ge,{diamonds:o.diamonds})),r.a.createElement(Ce,{value:o.tab,index:1},r.a.createElement(ie.a,{title:"Real Diamonds of same caliber",columns:[{title:"Price",field:"price",type:"currency"},{title:"Carat",field:"carat"},{title:"Cut",field:"cut"},{title:"Clarity",field:"clarity"},{title:"Color",field:"color"},{title:"SKUS",field:"skus",render:function(e){return r.a.createElement("a",{target:"_blank",href:Xe+e.skus,style:{width:50,borderRadius:"50%"}},"Buy")}}],data:o.diamonds,options:{search:!1}}))):r.a.createElement(g.a,null))}var Ze=t(7),Qe=t(684),$e=t(280),ea=t(287),aa=function(e){function a(e){var t;return Object(ke.a)(this,a),(t=Object(xe.a)(this,Object(Fe.a)(a).call(this,e))).state={diamonds:[]},t}return Object(je.a)(a,e),Object(Oe.a)(a,[{key:"render",value:function(){return r.a.createElement(ie.a,{title:"Diamond Raw Inventory",columns:[{title:"Price",field:"_id.price",type:"currency"},{title:"Carat",field:"_id.carat"},{title:"Cut",field:"_id.cut"},{title:"Clarity",field:"_id.clarity"},{title:"Color",field:"_id.color"},{title:"Count",field:"count"}],data:this.props.diamonds,options:{search:!1}})}}]),a}(n.Component),ta=function(e){function a(e){var t;return Object(ke.a)(this,a),(t=Object(xe.a)(this,Object(Fe.a)(a).call(this,e))).state={},t}return Object(je.a)(a,e),Object(Oe.a)(a,[{key:"render",value:function(){return r.a.createElement(r.a.Fragment,null,0===this.props.diamonds.length?r.a.createElement("div",null,r.a.createElement(g.a,{gutterBottom:!0,variant:"h6",color:"secondary"},"Loading..."),r.a.createElement(Le.a,{type:"bars",color:"red"})):r.a.createElement("div",null,r.a.createElement(g.a,{gutterBottom:!0,variant:"h6"},"Price to Carat [by Color] (",r.a.createElement("font",{color:"#FF0000"},"D"),",",r.a.createElement("font",{color:"FF8000"},"E"),",",r.a.createElement("font",{color:"FFFF00"},"F"),",",r.a.createElement("font",{color:"80FF00"},"G"),",",r.a.createElement("font",{color:"3399FF"},"H"),",",r.a.createElement("font",{color:"000000"}),"Other)"),r.a.createElement(Ie.a,{height:130,width:400,padding:{top:10,bottom:20,left:40,right:10}},r.a.createElement(De.a,{style:{axis:{stroke:"blue"},tickLabels:{fill:"blue",fontSize:5}}}),r.a.createElement(De.a,{dependentAxis:!0,style:{axis:{stroke:"blue"},tickLabels:{fill:"blue",fontSize:5}},tickFormat:function(e){return"".concat(e.toLocaleString("en-US",{style:"currency",currency:"USD",maximumFractionDigits:0,minimumFractionDigits:0}))}}),r.a.createElement(Ve.a,{style:{data:{fill:function(e){var a=e.datum;return"D"===a._id.color?"#FF0000":"E"===a._id.color?"#FF8000":"F"===a._id.color?"#FFFF00":"G"===a._id.color?"#80FF00":"H"===a._id.color?"#3399FF":"#000000"}},parent:{border:"1px solid #ccc"}},size:1,data:this.props.diamonds,x:"_id.carat",y:"_id.price",scale:{x:"linear",y:"linear"}}))))}}]),a}(n.Component);function na(e,a){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);a&&(n=n.filter((function(a){return Object.getOwnPropertyDescriptor(e,a).enumerable}))),t.push.apply(t,n)}return t}function ra(e){for(var a=1;a<arguments.length;a++){var t=null!=arguments[a]?arguments[a]:{};a%2?na(t,!0).forEach((function(a){Object(c.a)(e,a,t[a])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):na(t).forEach((function(a){Object.defineProperty(e,a,Object.getOwnPropertyDescriptor(t,a))}))}return e}var la=function(e){function a(e){var t;return Object(ke.a)(this,a),(t=Object(xe.a)(this,Object(Fe.a)(a).call(this,e))).marks=[{value:.5,label:"0.5"},{value:1,label:"1.0"},{value:1.7,label:"1.7"},{value:2.5,label:"2.5"},{value:3.3,label:"3.3"},{value:4,label:"4.0"}],t.handleChange=function(e){return function(a){t.setState(ra({},t.state,Object(c.a)({},e.k,a.target.checked))),console.log("change, name:",e)}},t.handleTabChange=function(e,a){t.setState(ra({},t.state,{tab:a}))},t.handleSubmit=function(e){t.setState(ra({},t.state,{diamonds:[]}));var a=t.state;delete a.diamonds;var n=JSON.stringify(a);console.log("json to post: ",n);console.log("axios ...","/diamonds/q/"),$.a.post("/diamonds/q/",t.state).then((function(e){var a=e.data;t.setState(ra({},t.state,{diamonds:a}))})).catch((function(e){console.log(e)})),console.log("axios ... done ?")},t.handleCaratChange=function(e,a){t.setState(ra({},t.state,{CaratLow:a[0],CaratHigh:a[1]})),console.log("carat change, value:",e,a)},t.state={tab:0,diamonds:[],D:!0,E:!0,F:!0,G:!0,H:!0,I:!0,J:!1,K:!1,AstorIdeal:!1,Ideal:!0,VeryGood:!0,Good:!0,FL:!1,IF:!0,VVS1:!0,VVS2:!0,VS1:!0,VS2:!0,SI1:!1,SI2:!1,CaratLow:1,CaratHigh:3},t}return Object(je.a)(a,e),Object(Oe.a)(a,[{key:"componentDidMount",value:function(){this.handleSubmit()}},{key:"render",value:function(){var e=this,a=this.state,t=a.D,n=a.E,l=a.F,o=a.G,i=a.H,c=a.I,s=a.J,u=a.K,m=a.AstorIdeal,d=a.Ideal,p=a.Good,h=a.VeryGood,b=a.FL,f=a.IF,E=a.VVS1,y=a.VVS2,v=a.VS1,C=a.VS2,S=a.SI1,k=a.SI2,O={D:t,E:n,F:l,G:o,H:i,I:c,J:s,K:u},x={AstorIdeal:m,Ideal:d,Good:p,VeryGood:h},F={FL:b,IF:f,VVS1:E,VVS2:y,VS1:v,VS2:C,SI1:S,SI2:k},j=this.props.classes;return r.a.createElement(r.a.Fragment,null,r.a.createElement(Z,null,"Filter Diamonds"),r.a.createElement($e.a,{component:"fieldset"},r.a.createElement(re.a,{row:!0},r.a.createElement(g.a,{gutterBottom:!0,variant:"subtitle2"},"Color"),Object.keys(O).map((function(a,t){return r.a.createElement(ea.a,{class:j.typography,key:a,label:a,control:r.a.createElement(we,{checked:O[a],onChange:e.handleChange({k:a}),value:O[a]})})}))),r.a.createElement(re.a,{row:!0,variant:"subtitle2"},r.a.createElement(g.a,{gutterBottom:!0,variant:"subtitle2"},"Cut"),Object.keys(x).map((function(a,t){return r.a.createElement(ea.a,{class:j.typography,key:a,label:a,control:r.a.createElement(we,{checked:x[a],onChange:e.handleChange({k:a}),value:x[a]})})}))),r.a.createElement(re.a,{row:!0,variant:"subtitle2"},r.a.createElement(g.a,{gutterBottom:!0,variant:"subtitle2"},"Clarity"),Object.keys(F).map((function(a,t){return r.a.createElement(ea.a,{class:j.typography,key:a,label:a,control:r.a.createElement(we,{checked:F[a],onChange:e.handleChange({k:a}),value:F[a]})})}))),r.a.createElement(re.a,{row:!0,variant:"subtitle2"},r.a.createElement(g.a,{gutterBottom:!0,variant:"subtitle2"},"Carat Chooser"),r.a.createElement(Qe.a,{marks:this.marks,valueLabelDisplay:"on",ValueLabelComponent:Se,onChange:this.handleCaratChange,min:.5,max:4,step:.1,className:j.slider,defaultValue:[1,3]}),r.a.createElement(ne.a,{variant:"contained",color:"primary",onClick:this.handleSubmit,className:j.button},"Search"))),r.a.createElement(w.a,{square:!0,className:j.root},r.a.createElement(ce.a,{value:this.state.tab,onChange:this.handleTabChange,variant:"fullWidth",indicatorColor:"primary",textColor:"primary","aria-label":"icon tabs example"},r.a.createElement(se.a,{"aria-label":"plot",label:"Plot"}),r.a.createElement(se.a,{"aria-label":"data",label:"Data"})),r.a.createElement(Ce,{value:this.state.tab,index:0},r.a.createElement(ta,{diamonds:this.state.diamonds})),r.a.createElement(Ce,{value:this.state.tab,index:1},r.a.createElement(aa,{diamonds:this.state.diamonds}))))}}]),a}(n.Component),oa=Object(Ze.a)({button:{height:36,width:76},typography:{fontSize:10},checklabel:{fontSize:10,color:"black"},margin:{height:"5px"},formControl:{marginRight:30},slider:{width:300,marginRight:30,marginLeft:30},paper:{display:"flex",overflow:"auto",flexDirection:"column",fontSize:20,backgroundColor:"Yellow",border:"2px solid #000",boxShadow:"5px 10px",padding:"10px"}})(la),ia=t(608),ca=t(656),sa=t(607),ua=t(671),ma=t(664),da=t(359);function pa(e,a){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);a&&(n=n.filter((function(a){return Object.getOwnPropertyDescriptor(e,a).enumerable}))),t.push.apply(t,n)}return t}function ha(e){for(var a=1;a<arguments.length;a++){var t=null!=arguments[a]?arguments[a]:{};a%2?pa(t,!0).forEach((function(a){Object(c.a)(e,a,t[a])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):pa(t).forEach((function(a){Object.defineProperty(e,a,Object.getOwnPropertyDescriptor(t,a))}))}return e}var ba=Object(da.a)({basename:""}),ga=new ma.a,fa=new ua.a({config:{instrumentationKey:"458001d5-9bee-48de-94ba-1b43967aff71",extensions:[ga],enableAutoRouteTracking:!0,disableFetchTracking:!1,extensionConfig:Object(c.a)({},ga.identifier,{history:ba})}});function Ea(){return r.a.createElement(g.a,{variant:"body2",color:"textSecondary",align:"center"},"Copyright \xa9 ",r.a.createElement(S.a,{color:"inherit",href:"http://foostack.ai/"},"FooStack.Ai")," ",(new Date).getFullYear(),".")}fa.loadAppInsights();var ya=Object(u.a)((function(e){return{typography:{fontSize:8,htmlFontSize:8},root:{display:"flex"},toolbar:{paddingRight:24},toolbarIcon:ha({display:"flex",alignItems:"center",justifyContent:"flex-end",padding:"0 8px"},e.mixins.toolbar),appBar:{zIndex:e.zIndex.drawer+1,transition:e.transitions.create(["width","margin"],{easing:e.transitions.easing.sharp,duration:e.transitions.duration.leavingScreen})},appBarShift:{marginLeft:240,width:"calc(100% - ".concat(240,"px)"),transition:e.transitions.create(["width","margin"],{easing:e.transitions.easing.sharp,duration:e.transitions.duration.enteringScreen})},menuButton:{marginRight:36},menuButtonHidden:{display:"none"},title:{flexGrow:1},drawerPaper:{position:"relative",whiteSpace:"nowrap",width:240,transition:e.transitions.create("width",{easing:e.transitions.easing.sharp,duration:e.transitions.duration.enteringScreen})},drawerPaperClose:Object(c.a)({overflowX:"hidden",transition:e.transitions.create("width",{easing:e.transitions.easing.sharp,duration:e.transitions.duration.leavingScreen}),width:e.spacing(7)},e.breakpoints.up("sm"),{width:e.spacing(9)}),appBarSpacer:e.mixins.toolbar,content:{flexGrow:1,height:"100vh",overflow:"auto"},container:{paddingTop:e.spacing(4),paddingBottom:e.spacing(4)},modal:{display:"flex",alignItems:"center",justifyContent:"center"},modalpaper:{backgroundColor:e.palette.background.paper,border:"2px solid #000",maxWidth:"75%",boxShadow:e.shadows[5],padding:e.spacing(2,4,3)},paper:{padding:e.spacing(2),display:"flex",overflow:"auto",flexDirection:"column"},fixedHeight:{height:280}}})),va=r.a.createElement(r.a.Fragment,null,r.a.createElement("h2",{id:"transition-modal-title"},"About Diamonds"),r.a.createElement("p",{id:"transition-modal-description"},"This site utilizes various technologies and data sources as a semi classic MERN."),r.a.createElement("ul",null,r.a.createElement("li",null,"React.js front end (Material-UI)"),r.a.createElement("li",null,"Victory Visualization (React Component)"),r.a.createElement("li",null,"Express.js backend"),r.a.createElement("li",null,"MongoDB object persistance (using Mongoose)"),r.a.createElement("li",null,"Scikit Learn Machine Learning models"),r.a.createElement("li",null,"Azure Machine Learning webservices & hosting")),r.a.createElement("p",null,"Env: ","production")),Ca={Cs:{Name:"4-C's",Title:"About the 4-C's",Desc:"Each of the 4 C\u2019s (Cut, Color, Clarity and Carat) play a role in a diamond\u2019s beauty, though it is difficult to decipher one component by itself. As a comprehensive whole, the 4 C\u2019s interact with one another within each diamond.",Desc2:""},Color:{Name:"Color",Title:"About Color",Desc:"The finest quality as per color grading is totally colorless, which is graded as D color diamond across the globe, meaning it is absolutely free from any color. The next grade has a very slight trace of color, which can be observed by any expert diamond valuer/grading laboratory. However, when studded in jewellery these very light colored diamonds do not show any color or it is not possible to make out color shades. These are graded as E color or F color diamonds.  Diamonds which show very little traces of color are graded as G or H color diamonds. Slightly colored diamonds are graded as I or J or K color. A diamond can be found in any color in addition to colorless. Some of the colored diamonds, such as pink, are very rare.",Desc2:"Color codes go from D (Clear-Best), to E,F,G .. down to K (least desirable)"},Carat:{Name:"Carat",Title:"About Carat Weight",Desc:"The carat weight measures the mass of a diamond. One carat is defined as 200 milligrams (about 0.007 ounces avoirdupois). The point unit\u2014equal to one one-hundredth of a carat (0.01 carat, or 2 mg)\u2014is commonly used for diamonds of less than one carat. All else being equal, the price per carat increases with carat weight, since larger diamonds are both rarer and more desirable for use as gemstones.",Desc2:""},Clarity:{Name:"Clarity",Title:"About Clarity",Desc:"Clarity is a measure of internal defects of a diamond called inclusions. Inclusions may be crystals of a foreign material or another diamond crystal, or structural imperfections such as tiny cracks that can appear whitish or cloudy. The number, size, color, relative location, orientation, and visibility of inclusions can all affect the relative clarity of a diamond. The Gemological Institute of America (GIA) and other organizations have developed systems to grade clarity, which are based on those inclusions which are visible to a trained professional when a diamond is viewed under 10\xd7 magnification.",Desc2:"Clarity ratings range from perfect FL (Flawless), IF (Internally Flawless), to VSS1/2, VS1/2 down to SI1/2 which are the least desireable."},Cut:{Name:"Cut",Title:"About Cut",Desc:"Diamond cutting is the art and science of creating a gem-quality diamond out of mined rough. The cut of a diamond describes the manner in which a diamond has been shaped and polished from its beginning form as a rough stone to its final gem proportions. The cut of a diamond describes the quality of workmanship and the angles to which a diamond is cut. Often diamond cut is confused with shape",Desc2:"Cut ratings go from vendor specific (like Astor Ideal), and GIA standard Ideal, Excellent, to Very Good, and Good."}};var wa=function(){var e,a=ya(),t=r.a.useState(!1),n=Object(i.a)(t,2),l=n[0],o=n[1],c=r.a.useState(!1),u=Object(i.a)(c,2),S=u[0],k=u[1],x=r.a.useState("About"),j=Object(i.a)(x,2),D=j[0],N=j[1],V=function(e){return function(a){fa.trackEvent({name:"aboutClicked "+e}),console.log(e),N(e),k(!0)}};return r.a.createElement("div",null,r.a.createElement("div",null,r.a.createElement(ia.a,{"aria-labelledby":"transition-modal-title","aria-describedby":"transition-modal-description",className:a.modal,open:S,onClose:function(){k(!1)},closeAfterTransition:!0,BackdropComponent:ca.a,BackdropProps:{timeout:300}},r.a.createElement(sa.a,{in:S},r.a.createElement("div",{className:a.modalpaper},"About"===D?va:(e=D,console.log("about: ",Ca,e),r.a.createElement(r.a.Fragment,null,r.a.createElement("h2",{id:"transition-modal-title",variant:"h2"},Ca[e].Title),r.a.createElement("p",{id:"transition-modal-description"},Ca[e].Desc),r.a.createElement("p",{id:"transition-modal-description"},Ca[e].Desc2))))))),r.a.createElement("div",{className:a.root},r.a.createElement(m.a,null),r.a.createElement(p.a,{position:"absolute",className:Object(s.a)(a.appBar,l&&a.appBarShift)},r.a.createElement(h.a,{className:a.toolbar},r.a.createElement(E.a,{edge:"start",color:"inherit","aria-label":"open drawer",onClick:function(){o(!0)},className:Object(s.a)(a.menuButton,l&&a.menuButtonHidden)},r.a.createElement(O.a,null)),r.a.createElement(g.a,{component:"h1",variant:"h6",color:"inherit",noWrap:!0,className:a.title},"Diamond Analytics"),r.a.createElement(E.a,{color:"inherit"},r.a.createElement(y.a,{badgeContent:0,color:"secondary"},r.a.createElement(I.a,{onClick:V("About")}))))),r.a.createElement(d.a,{variant:"permanent",classes:{paper:Object(s.a)(a.drawerPaper,!l&&a.drawerPaperClose)},open:l},r.a.createElement("div",{className:a.toolbarIcon},r.a.createElement(E.a,{onClick:function(){o(!1)}},r.a.createElement(F.a,null))),r.a.createElement(f.a,null),r.a.createElement(b.a,null,r.a.createElement(q,{aboutOpen:V})),r.a.createElement(f.a,null),r.a.createElement(b.a,null,r.a.createElement(Y,{aboutOpen:V}))),r.a.createElement("main",{className:a.content},r.a.createElement("div",{className:a.appBarSpacer}),r.a.createElement(v.a,{maxWidth:"lg",className:a.container},r.a.createElement(C.a,{container:!0,spacing:3},r.a.createElement(C.a,{item:!0,xs:12,md:10,lg:8},r.a.createElement(w.a,{className:a.paper},r.a.createElement(Ye,null))),r.a.createElement(C.a,{item:!0,xs:12,md:6,lg:4},r.a.createElement(w.a,{className:a.paper},r.a.createElement(ae,null))),r.a.createElement(C.a,{item:!0,xs:12,md:12,lg:12},r.a.createElement(w.a,{className:a.paper},r.a.createElement(oa,null))))),r.a.createElement(Ea,null))))};function Sa(e,a){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);a&&(n=n.filter((function(a){return Object.getOwnPropertyDescriptor(e,a).enumerable}))),t.push.apply(t,n)}return t}function ka(e){for(var a=1;a<arguments.length;a++){var t=null!=arguments[a]?arguments[a]:{};a%2?Sa(t,!0).forEach((function(a){Object(c.a)(e,a,t[a])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):Sa(t).forEach((function(a){Object.defineProperty(e,a,Object.getOwnPropertyDescriptor(t,a))}))}return e}function Oa(e){var a=e.children,t=e.open,n=e.value,l=r.a.useRef(null);return r.a.useEffect((function(){l.current&&l.current.update()})),r.a.createElement(_.a,{PopperProps:{popperRef:l},open:t,enterTouchDelay:0,placement:"top",title:n},a)}var xa={button:{background:"linear-gradient(45deg, #FE6B8B 30%, #FF8E53 90%)",border:0,borderRadius:3,boxShadow:"0 3px 5px 2px rgba(255, 105, 135, .3)",color:"white",height:48,padding:"0 30px"},root:{background:"linear-gradient(45deg, #FE6B8B 30%, #FF8E53 90%)",fontSize:7},typography:{fontSize:10},checklabel:{fontSize:10,color:"black"},formControl:{border:1,borderRadius:3,borderColor:"red",fontSize:8},formGroup:{border:1,borderRadius:3,borderColor:"green",fontSize:10},slider:{width:300,marginRight:30,marginLeft:30},paper:{display:"flex",overflow:"auto",flexDirection:"column",fontSize:20,backgroundColor:"Yellow",border:"2px solid #000",boxShadow:"5px 10px",padding:"10px"}};function Fa(e){var a=e.className,t=e.checked,n=e.onChange,l=e.value;return r.a.createElement(be.a,{style:{width:3,height:3},icon:r.a.createElement(fe.a,{style:{fontSize:16}}),checkedIcon:r.a.createElement(ye.a,{style:{fontSize:16}}),className:a,onChange:n,value:l,checked:t})}var ja=function(e){function a(e){var t;return Object(ke.a)(this,a),(t=Object(xe.a)(this,Object(Fe.a)(a).call(this,e))).marks=[{value:.5,label:"0.5"},{value:1,label:"1.0"},{value:1.7,label:"1.7"},{value:2.5,label:"2.5"},{value:3.3,label:"3.3"},{value:4,label:"4.0"}],t.handleChange=function(e){return function(a){t.setState(ka({},t.state,Object(c.a)({},e.k,a.target.checked))),t.handleSubmit(),console.log("change, name:",e)}},t.handleSubmit=function(e){console.log("submit filter, state:",t.state)},t.handleCaratChange=function(e,a){t.setState(ka({},t.state,{CaratLow:a[0],CaratHigh:a[1]})),t.handleSubmit(),console.log("carat change, value:",e,a)},t.state={D:!0,E:!0,F:!0,G:!0,H:!0,I:!0,J:!1,K:!1,AstorIdeal:!1,Ideal:!0,VeryGood:!0,Good:!0,FL:!1,IF:!0,VVS1:!0,VVS2:!0,VS1:!0,VS2:!0,SI1:!1,SI2:!1,CaratLow:1,CaratHigh:3},t}return Object(je.a)(a,e),Object(Oe.a)(a,[{key:"componentDidMount",value:function(){this.handleSubmit()}},{key:"render",value:function(){var e=this,a=this.state,t=a.D,n=a.E,l=a.F,o=a.G,i=a.H,c=a.I,s=a.J,u=a.K,m=a.AstorIdeal,d=a.Ideal,p=a.Good,h=a.VeryGood,b=a.FL,f=a.IF,E=a.VVS1,y=a.VVS2,v=a.VS1,C=a.VS2,S=a.SI1,k=a.SI2,O={D:t,E:n,F:l,G:o,H:i,I:c,J:s,K:u},x={AstorIdeal:m,Ideal:d,Good:p,VeryGood:h},F={FL:b,IF:f,VVS1:E,VVS2:y,VS1:v,VS2:C,SI1:S,SI2:k},j=this.props.classes;return r.a.createElement(w.a,null,r.a.createElement(Z,null,"Filter Diamonds"),r.a.createElement($e.a,{component:"fieldset"},r.a.createElement(re.a,{row:!0,className:j.formGroup},r.a.createElement(g.a,null,"Color"),Object.keys(O).map((function(a,t){return r.a.createElement(ea.a,{className:j.checklabel,key:a,control:r.a.createElement(Fa,{className:j.checklabel,checked:O[a],onChange:e.handleChange({k:a}),value:O[a]}),label:r.a.createElement(g.a,{style:xa.checklabel},a)})}))),r.a.createElement(re.a,{row:!0,variant:"subtitle2"},r.a.createElement(g.a,null,"Cut"),Object.keys(x).map((function(a,t){return r.a.createElement(ea.a,{key:a,control:r.a.createElement(be.a,{checked:x[a],onChange:e.handleChange({k:a}),value:x[a]}),label:a})}))),r.a.createElement(re.a,{row:!0,variant:"subtitle2"},r.a.createElement(g.a,{gutterBottom:!0,variant:"subtitle2"},"Clarity"),Object.keys(F).map((function(a,t){return r.a.createElement(ea.a,{key:a,control:r.a.createElement(be.a,{checked:F[a],onChange:e.handleChange({k:a}),value:F[a]}),label:a})}))),r.a.createElement(re.a,{row:!0,variant:"subtitle2"},r.a.createElement(g.a,{gutterBottom:!0,variant:"subtitle2"},"Carat Chooser"),r.a.createElement(Qe.a,{marks:this.marks,valueLabelDisplay:"on",ValueLabelComponent:Oa,onChange:this.handleCaratChange,min:.5,max:4,step:.1,className:j.slider,defaultValue:[1,3]}))),r.a.createElement(ne.a,{className:j.button},"The Button"))}}]),a}(n.Component);Object(Ze.a)(xa)(ja);t(591),t(592).polyfill(),t(593).polyfill(),window.navigator.userAgent.indexOf("MSIE")>0?alert("IE 10 or older does not very well with React, please use a modern browser (Chrome, Firefox, Edge, etc)"):navigator.userAgent.match(/Trident\/7\./)&&alert("IE 11 does not work very well with React, please use a modern browser (Chrome, Firefox, Edge, etc)"),o.a.render(r.a.createElement(wa,null),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()}))}},[[378,1,2]]]);
//# sourceMappingURL=main.b8a1e8c4.chunk.js.map