(this.webpackJsonpyummi_pizza=this.webpackJsonpyummi_pizza||[]).push([[0],{101:function(e,t,a){e.exports=a(144)},105:function(e,t,a){},126:function(e,t,a){e.exports=a.p+"static/media/1.8b7ac1b0.jpg"},137:function(e,t,a){},144:function(e,t,a){"use strict";a.r(t);var n=a(0),r=a.n(n),l=a(20),o=a.n(l),c=(a(105),a(93)),i=a(30),s=a(7),u=a(8),m=a(10),d=a(9),p=a(151),E=a(99),h=a(150),f=a(11),v=function(e){return{type:"ORDER_NEW_ITEM",item:e}},g=function(e){return{type:"OPEN_MODAL",modal:e}},b=function(e){return{type:"MAKE_FAVORITE",item:e}},O=function(e){return{type:"REMOVE_FAVORITE",id:e}},_=a(13),y=function(e){Object(m.a)(a,e);var t=Object(d.a)(a);function a(){var e;Object(s.a)(this,a);for(var n=arguments.length,r=new Array(n),l=0;l<n;l++)r[l]=arguments[l];return(e=t.call.apply(t,[this].concat(r))).openModal=function(){e.props._openModal("login")},e.signup=function(){e.props._signUp()},e}return Object(u.a)(a,[{key:"render",value:function(){var e=this;return r.a.createElement(p.a,{bg:"dark",expand:"lg",variant:"dark"},r.a.createElement(p.a.Brand,{href:"/"},"YUMMI_PIZZA"),r.a.createElement(p.a.Toggle,{"aria-controls":"basic-navbar-nav"}),r.a.createElement(p.a.Collapse,{id:"basic-navbar-nav"},r.a.createElement(E.a,{className:"mr-auto"},r.a.createElement(E.a.Link,{href:"/"},"Home"),r.a.createElement(E.a.Link,{href:"/menu"},"Menu"),r.a.createElement(E.a.Link,{href:"/orders"},"Orders Log"),this.props.user?r.a.createElement(h.a,{title:this.props.user.name,id:"basic-nav-dropdown"},r.a.createElement(h.a.Item,{onClick:function(){e.signup()}},"LogOut ")):r.a.createElement(E.a.Link,{onClick:this.openModal},"LogIn")),r.a.createElement("a",{href:"#"},r.a.createElement(_.Feather,{name:"instagram",color:"#fff",size:30})),r.a.createElement("a",{href:"#"},r.a.createElement(_.Feather,{name:"facebook",color:"#fff",size:30})),r.a.createElement("a",{href:"#"},r.a.createElement(_.Feather,{name:"twitter",color:"#fff",size:30}))))}}]),a}(n.Component),j=Object(f.b)((function(e){return{user:e.user.user}}),(function(e){return{_openModal:function(t){e(g(t))},_signUp:function(){e({type:"SIGN_OUT"})}}}))(y),C=a(152),w=function(e){Object(m.a)(a,e);var t=Object(d.a)(a);function a(){var e;return Object(s.a)(this,a),(e=t.call(this)).handleSelect=function(t,a){e.setState({index:t})},e.state={index:1},e}return Object(u.a)(a,[{key:"render",value:function(){return r.a.createElement(C.a,{touch:!0,activeIndex:this.state.index,onSelect:this.handleSelect},r.a.createElement(C.a.Item,null,r.a.createElement("div",{className:"cover cover1"}),r.a.createElement(C.a.Caption,null,r.a.createElement("h3",null,"First slide label"),r.a.createElement("p",null,"Nulla vitae elit libero, a pharetra augue mollis interdum."))),r.a.createElement(C.a.Item,null,r.a.createElement("div",{className:"cover cover2"}),r.a.createElement(C.a.Caption,null,r.a.createElement("h3",null,"Second slide label"),r.a.createElement("p",null,"Lorem ipsum dolor sit amet, consectetur adipiscing elit."))),r.a.createElement(C.a.Item,null,r.a.createElement("div",{className:"cover cover3"}),r.a.createElement(C.a.Caption,null,r.a.createElement("h3",null,"Third slide label"),r.a.createElement("p",null,"Praesent commodo cursus magna, vel scelerisque nisl consectetur."))))}}]),a}(n.Component),N=a(84),M=a.n(N),k=a(153),x=a(45),I=a(85),R=a(149),S=function(e){Object(m.a)(n,e);var t=Object(d.a)(n);function n(){var e;return Object(s.a)(this,n),(e=t.call(this)).addOrderItem=function(t){e.props._orderNewItem(t)},e.handelFavorite=function(t){e.props.storage.favorites.some((function(e){return e.id==t.id}))?e.props._handelRemoveFavorite(t.id):e.props._handelNewFavorite(t)},e.state={items:null},e}return Object(u.a)(n,[{key:"render",value:function(){var e=this,t=this.props.Testimonials?this.props.rate.map((function(e){return r.a.createElement("div",{className:"TestimonialsView"},r.a.createElement(k.a,null,r.a.createElement(k.a.Body,null,r.a.createElement(R.a,{src:a(126),roundedCircle:!0}),r.a.createElement(k.a.Title,null,e.user.name),r.a.createElement(k.a.Text,null,e.comment),r.a.createElement(I.a,{className:"rate",value:e.rate,size:23}))))})):this.props.bestMenu?this.props.menu.map((function(t){return r.a.createElement("div",null,r.a.createElement(k.a,{style:{width:"18rem"}},r.a.createElement("figure",null,r.a.createElement(k.a.Img,{variant:"top",src:t.image})),r.a.createElement("div",{className:"favorite",onClick:function(){e.handelFavorite(t)}},e.props.storage.favorites.some((function(e){return e.id==t.id}))?r.a.createElement(_.FontAwesome,{name:"heart",color:"red"}):r.a.createElement(_.FontAwesome,{name:"heart"})),r.a.createElement("div",{className:"price"},r.a.createElement("p",null,t.price," EGP")),r.a.createElement(k.a.Body,null,r.a.createElement(k.a.Title,null,t.name),r.a.createElement(k.a.Text,null,t.content),r.a.createElement(x.a,{className:"form-control",onClick:function(){e.addOrderItem(t)}},"Order"))))})):this.props.favoriteSlider?this.props.favorite.map((function(t){return r.a.createElement("div",null,r.a.createElement(k.a,{style:{width:"18rem"}},r.a.createElement("figure",null,r.a.createElement(k.a.Img,{variant:"top",src:t.image})),r.a.createElement("div",{className:"favorite",onClick:function(){e.handelFavorite(t)}},e.props.storage.favorites.some((function(e){return e.id==t.id}))?r.a.createElement(_.FontAwesome,{name:"heart",color:"red"}):r.a.createElement(_.FontAwesome,{name:"heart"})),r.a.createElement("div",{className:"price"},r.a.createElement("p",null,t.price," EGP")),r.a.createElement(k.a.Body,null,r.a.createElement(k.a.Title,null,t.name),r.a.createElement(k.a.Text,null,t.content),r.a.createElement(x.a,{className:"form-control",onClick:function(){e.addOrderItem(t)}},"Order"))))})):null,n={className:"slick",dots:!0,focusOnSelect:!1,arrows:!1,infinite:!0,slidesPerRow:this.props.Testimonials?1:4,autoplay:!!this.props.Testimonials,responsive:[{breakpoint:1100,settings:{slidesPerRow:this.props.Testimonials?1:3,infinite:!0,dots:!0}},{breakpoint:600,settings:{slidesPerRow:this.props.Testimonials?1:2,initialSlide:2}},{breakpoint:480,settings:{slidesPerRow:(this.props.Testimonials,1)}}]};return 0==t.length?r.a.createElement("div",{className:"noItem"},r.a.createElement("h4",null,"Choose Your Favorites")):r.a.createElement(M.a,n,t)}}]),n}(n.Component),T=Object(f.b)((function(e){return{storage:e.user_storage}}),(function(e){return{_orderNewItem:function(t){e(v(t))},_handelNewFavorite:function(t){e(b(t))},_handelRemoveFavorite:function(t){e(O(t))}}}))(S),L=function(e){Object(m.a)(a,e);var t=Object(d.a)(a);function a(){return Object(s.a)(this,a),t.apply(this,arguments)}return Object(u.a)(a,[{key:"render",value:function(){return r.a.createElement("footer",{class:"footer"},r.a.createElement("div",{class:"footer_top"},r.a.createElement("div",{class:"container"},r.a.createElement("div",{class:"row"},r.a.createElement("div",{class:"col-xl-4 col-md-6 col-lg-4"},r.a.createElement("div",{class:"footer_widget text-center "},r.a.createElement("h3",{class:"footer_title pos_margin"},"KSA"),r.a.createElement("p",null,"5th flora, 700/D kings road, ",r.a.createElement("br",null),"green lane Mka-1782 ",r.a.createElement("br",null),r.a.createElement("a",{href:"#"},"info@yummipizza.com")),r.a.createElement("a",{class:"number",href:"#"},"+10 378 483 6782"))),r.a.createElement("div",{class:"col-xl-4 col-md-6 col-lg-4"},r.a.createElement("div",{class:"footer_widget text-center "},r.a.createElement("h3",{class:"footer_title pos_margin"},"Egypt"),r.a.createElement("p",null,"5th flora, 700/D kings road, ",r.a.createElement("br",null),"green lane Mansour-1782 ",r.a.createElement("br",null),r.a.createElement("a",{href:"#"},"info@yummipizza.com")),r.a.createElement("a",{class:"number",href:"#"},"+10 378 483 6782"))),r.a.createElement("div",{class:"col-xl-4 col-md-12 col-lg-4"},r.a.createElement("div",{class:"footer_widget"},r.a.createElement("h3",{class:"footer_title"},"Stay Connected"),r.a.createElement("div",{class:"row justify-content-center"},r.a.createElement("div",null,r.a.createElement("div",{class:"socail_links text-center"},r.a.createElement("ul",null,r.a.createElement("li",null,r.a.createElement("a",{href:"#"},r.a.createElement(_.Feather,{name:"facebook",color:"#F0542C",size:30}))),r.a.createElement("li",null,r.a.createElement("a",{href:"#"},r.a.createElement(_.Feather,{name:"twitter",color:"#F0542C",size:30}))),r.a.createElement("li",null,r.a.createElement("a",{href:"#"},r.a.createElement(_.Feather,{name:"instagram",color:"#F0542C",size:30}))),r.a.createElement("li",null,r.a.createElement("a",{href:"#"},r.a.createElement(_.Feather,{name:"mail",color:"#F0542C",size:30})))))))))))),r.a.createElement("div",{class:"copy-right_view"},r.a.createElement("div",{class:"container"},r.a.createElement("div",{class:"footer_border"}),r.a.createElement("div",{class:"row"},r.a.createElement("div",{class:"col-xl-12 copy_right_text"},"Copyright \xa92020 All rights reserved to  ",r.a.createElement("b",null,r.a.createElement("a",{href:"https://api.whatsapp.com/send?phone=++201121388128",class:"copy_right_name"},"M_Taher")," "))))))}}]),a}(n.Component),A=a(86),F=a(68),z=a(90),D=a(87),P=a.n(D),q=a(29),V=a(14),G=a(88),B=a(67),K=a(5),Y=function(e){Object(m.a)(a,e);var t=Object(d.a)(a);function a(){var e;return Object(s.a)(this,a),(e=t.call(this)).closeModal=function(){e.props._closeModal()},e.handleValueChange=function(t,a,n){e.setState(Object(q.a)({},n,Object(V.a)({},e.state.login,{},e.state.register,Object(q.a)({},a,{value:t.target.value,error:""}))))},e.handleLoginSubmits=function(t){t.preventDefault(),fetch("https://taher-pizza.herokuapp.com/api/login",{method:"post",headers:{"Content-Type":"application/json"},body:JSON.stringify({email:e.state.login.login_email.value,password:e.state.login.login_password.value})}).then((function(e){return e.json()})).then((function(t){1==t.status?(e.props._signIn(t.data),e.props._closeModal()):e.setState({login:Object(V.a)({},e.state.login,{},e.state.register,{error:"This Data doesn't match our data"})})}),(function(e){console.log(e)}))},e.handleRegisterSubmits=function(t){t.preventDefault(),fetch("https://taher-pizza.herokuapp.com/api/register",{method:"post",headers:{"Content-Type":"application/json"},body:JSON.stringify({name:e.state.register.name.value,email:e.state.register.email.value,password:e.state.register.password.value,password_confirmation:e.state.register.password_confirmation.value,phone:e.state.register.contact.value})}).then((function(e){return e.json()})).then((function(t){console.log(t),1==t.status?(e.props._signIn(t.data),e.props._closeModal()):e.setState({register:Object(V.a)({},e.state.register,{name:Object(V.a)({},e.state.register.name,{error:t.data.name}),email:Object(V.a)({},e.state.register.email,{error:t.data.email}),password:{value:"",error:t.data.password},password_confirmation:{value:""},contact:Object(V.a)({},e.state.register.contact,{error:t.data.contact})})})}),(function(e){console.log(e)}))},e.state={login:{login_email:{value:"",error:""},login_password:{value:"",error:""},error:""},register:{name:{value:"",error:""},email:{value:"",error:""},password:{value:"",error:""},password_confirmation:{value:"",error:""},contact:{value:"",error:""}}},e}return Object(u.a)(a,[{key:"componentDidMount",value:function(){}},{key:"render",value:function(){var e=this;return r.a.createElement(G.a,{defaultActiveKey:"login",id:"uncontrolled-tab-example"},r.a.createElement(B.a,{eventKey:"login",title:"Login"},r.a.createElement(K.a,{onSubmit:this.handleLoginSubmits},r.a.createElement("h2",null," Login"),r.a.createElement(K.a.Text,{className:"text-muted"},this.state.login.error),r.a.createElement(K.a.Group,null,r.a.createElement(K.a.Label,null,"Email"),r.a.createElement(K.a.Control,{type:"email",placeholder:"Enter Email",required:!0,value:this.state.login.login_email.value,onChange:function(t){e.handleValueChange(t,"login_email","login")}})),r.a.createElement(K.a.Group,null,r.a.createElement(K.a.Label,null,"Password"),r.a.createElement(K.a.Control,{type:"Password",placeholder:"Password",required:!0,value:this.state.login.login_password.value,onChange:function(t){e.handleValueChange(t,"login_password","login")}})),r.a.createElement(x.a,{variant:"primary",className:"modal_btn",type:"submit"},"LogIn"),r.a.createElement(x.a,{onClick:this.closeModal,className:"btn btn-primary modal_btn "},"Close"))),r.a.createElement(B.a,{eventKey:"register",title:"Register"},r.a.createElement(K.a,{onSubmit:this.handleRegisterSubmits},r.a.createElement("h2",null," Register"),r.a.createElement(K.a.Group,null,r.a.createElement(K.a.Label,null,"Name"),r.a.createElement(K.a.Control,{type:"tet",placeholder:"Enter Name",required:!0,value:this.state.register.name.value,onChange:function(t){e.handleValueChange(t,"name","register")}}),r.a.createElement(K.a.Text,{className:"text-muted"},this.state.register.name.error)),r.a.createElement(K.a.Group,null,r.a.createElement(K.a.Label,null,"Email"),r.a.createElement(K.a.Control,{type:"email",placeholder:"Email",required:!0,value:this.state.register.email.value,onChange:function(t){e.handleValueChange(t,"email","register")}}),r.a.createElement(K.a.Text,{className:"text-muted"},this.state.register.email.error)),r.a.createElement(K.a.Group,null,r.a.createElement(K.a.Label,null,"Password"),r.a.createElement(K.a.Control,{type:"Password",placeholder:"Password",required:!0,value:this.state.register.password.value,onChange:function(t){e.handleValueChange(t,"password","register")}}),r.a.createElement(K.a.Text,{className:"text-muted"},this.state.register.password.error)),r.a.createElement(K.a.Group,null,r.a.createElement(K.a.Label,null,"Confirm Password"),r.a.createElement(K.a.Control,{type:"Password",placeholder:"confirm Password",required:!0,value:this.state.register.password_confirmation.value,onChange:function(t){e.handleValueChange(t,"password_confirmation","register")}}),r.a.createElement(K.a.Text,{className:"text-muted"},this.state.register.password.error)),r.a.createElement(K.a.Group,null,r.a.createElement(K.a.Label,null,"Contact"),r.a.createElement(K.a.Control,{type:"text",placeholder:"Contact",required:!0,value:this.state.register.contact.value,onChange:function(t){e.handleValueChange(t,"contact","register")}}),r.a.createElement(K.a.Text,{className:"text-muted"},this.state.register.contact.error)),r.a.createElement(x.a,{variant:"primary",className:"modal_btn",type:"submit"},"register"),r.a.createElement(x.a,{onClick:this.closeModal,className:"btn btn-primary modal_btn"},"Close"))))}}]),a}(n.Component),U=Object(f.b)(null,(function(e){return{_closeModal:function(){e({type:"CLOSE_MODAL"})},_signIn:function(t){e({type:"SIGN_IN",user:t})}}}))(Y),W=a(46),J=(a(79),function(e){Object(m.a)(a,e);var t=Object(d.a)(a);function a(){var e;return Object(s.a)(this,a),(e=t.call(this)).handleValueChange=function(t,a,n){e.setState(Object(q.a)({},n,Object(V.a)({},e.state.order,Object(q.a)({},a,{value:t.target.value,error:""}))))},e.handleSubmits=function(t){t.preventDefault(),e.state.order.name.value&&e.state.order.address.value&&e.state.order.contact.value&&(e.props._orderInfo(e.state.order),e.confirmAlert())},e.confirmAlert=function(){Object(W.confirmAlert)({title:"Confirm Order",message:"Are you sure you want to confirm?.",buttons:[{label:"Yes",onClick:function(){e.props.orderInfo()}},{label:"No"}]})},e.closeModal=function(){e.props._closeModal()},e.state={order:{name:{value:"",error:""},address:{value:"",error:""},contact:{value:"",error:""}}},e}return Object(u.a)(a,[{key:"componentDidMount",value:function(){}},{key:"render",value:function(){var e=this;return r.a.createElement(K.a,{onSubmit:this.handleSubmits},r.a.createElement("h2",null,"ORDER INFO"),r.a.createElement(K.a.Group,null,r.a.createElement(K.a.Label,null,"Name"),r.a.createElement(K.a.Control,{type:"text",placeholder:"Enter Name",value:this.state.order.name.value,required:!0,onChange:function(t){e.handleValueChange(t,"name","order")}}),r.a.createElement(K.a.Text,{className:"text-muted"},this.state.order.name.error)),r.a.createElement(K.a.Group,null,r.a.createElement(K.a.Label,null,"Address"),r.a.createElement(K.a.Control,{type:"text",placeholder:"Address",required:!0,onChange:function(t){e.handleValueChange(t,"address","order")}}),r.a.createElement(K.a.Text,{className:"text-muted"},this.state.order.address.error)),r.a.createElement(K.a.Group,null,r.a.createElement(K.a.Label,null,"Contact"),r.a.createElement(K.a.Control,{type:"tel",placeholder:"Contact",required:!0,value:this.state.order.contact.value,onChange:function(t){e.handleValueChange(t,"contact","order")}}),r.a.createElement(K.a.Text,{className:"text-muted"},this.state.order.contact.error)),r.a.createElement(x.a,{variant:"primary",className:"modal_btn",type:"submit"},"Order"),r.a.createElement(x.a,{onClick:this.closeModal,className:"btn btn-primary modal_btn"},"Close"))}}]),a}(n.Component)),H=Object(f.b)((function(e){return{user:e.user.user}}),(function(e){return{_orderNewItem:function(t){e(v(t))},_closeModal:function(){e({type:"CLOSE_MODAL"})},_orderInfo:function(t){e(function(e){return{type:"ORDER_INFO",info:e}}(t))}}}))(J),Z=function(e){Object(m.a)(a,e);var t=Object(d.a)(a);function a(){var e;return Object(s.a)(this,a),(e=t.call(this)).closeModal=function(){e.props._closeModal()},e.state={},e}return Object(u.a)(a,[{key:"render",value:function(){var e=this,t="order"==this.props.modal.type?r.a.createElement(H,{orderInfo:function(){e.props.newOrder()}}):"login"==this.props.modal.type?r.a.createElement(U,null):null;return r.a.createElement("div",null,r.a.createElement(P.a,{isOpen:this.props.modal.isOpen,style:{content:{width:"350px",top:"50%",left:"50%",right:"auto",bottom:"auto",marginRight:"-50%",transform:"translate(-50%, -50%)",z_index:"200"}},contentLabel:"Example Modal"},t))}}]),a}(n.Component),$=Object(f.b)((function(e){return{modal:e.modal}}),(function(e){return{_closeModal:function(){e({type:"CLOSE_MODAL"})}}}))(Z),Q=function(e){Object(m.a)(a,e);var t=Object(d.a)(a);function a(){var e;return Object(s.a)(this,a),(e=t.call(this)).removeItem=function(t){e.props._removeOrderItem(t)},e.confirmOrder=function(t){t>0?(e.setState({total:t}),e.props._openModal("order")):Object(W.confirmAlert)({title:"Warning!",message:"You must order something",buttons:[{label:"OK"}]})},e.newOrder=function(){fetch("https://taher-pizza.herokuapp.com/api/newOrder",{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({order:e.props.order.order,user_id:e.props.user?e.props.user.id:null,total:e.state.total,info:e.props.order.info})}).then((function(e){return e.json()})).then((function(t){1==t.status&&(Object(W.confirmAlert)({title:"Done!",message:"You order has been delivered",buttons:[{label:"OK"}]}),e.props._handelNewOrder(t.order),e.props._clearOrder(),e.props._closeModal())}),(function(e){console.log(e)}))},e.state={isOpen:!1,total:0},e}return Object(u.a)(a,[{key:"render",value:function(){var e=this,t=0,a=0,n=this.props.order.order.map((function(n,l){return a+=n.price*n.qty,t++,r.a.createElement("tr",null,r.a.createElement("td",null,l+1),r.a.createElement("td",null,n.name),r.a.createElement("td",null,n.qty),r.a.createElement("td",null,n.price),r.a.createElement("td",null,r.a.createElement(x.a,{className:"close_btn",size:"sm",variant:"outline-light",onClick:function(){e.removeItem(n.id)}},r.a.createElement(_.FontAwesome,{name:"close",size:22,color:"red"}))))}));return r.a.createElement("div",null,r.a.createElement($,{newOrder:function(){e.newOrder()}}),r.a.createElement(A.a,{trigger:r.a.createElement("button",{className:"pop_up_button btn btn-primary"}," Order ",r.a.createElement(z.a,{variant:"light"},t)),position:"top center"},r.a.createElement("div",{className:"pop_up_view"},r.a.createElement(F.a,{responsive:"sm",hover:!0,className:"pop_up_table"},r.a.createElement("thead",null,r.a.createElement("tr",null,r.a.createElement("th",null,"#"),r.a.createElement("th",null,"type"),r.a.createElement("th",null,"qty"),r.a.createElement("th",null,"price"),r.a.createElement("td",null))),r.a.createElement("tbody",null,n)),r.a.createElement(F.a,null,r.a.createElement("thead",null,r.a.createElement("tr",null,r.a.createElement("th",null,"#"),r.a.createElement("th",null,"total"),r.a.createElement("th",null,a),r.a.createElement("th",null)),r.a.createElement("tr",null,r.a.createElement("th",{colspan:3,className:"confirm_tr"},r.a.createElement(x.a,{className:"confirm_btn",variant:"primary",size:"md",block:!0,onClick:function(){e.confirmOrder(a)}},"Confirm  "))))))))}}]),a}(n.Component),X=Object(f.b)((function(e){return{order:e.order,modal:e.modal.modal,user:e.user.user}}),(function(e){return{_openModal:function(t){e(g(t))},_clearOrder:function(){e({type:"CLEAR_ORDER"})},_closeModal:function(){e({type:"CLOSE_MODAL"})},_removeOrderItem:function(t){e(function(e,t){return{type:"REMOVE_ORDER_ITEM",id:e,price:t}}(t))},_handelNewOrder:function(t){e(function(e){return{type:"MAKE_ORDER",item:e}}(t))}}}))(Q),ee=function(e){Object(m.a)(a,e);var t=Object(d.a)(a);function a(){var e;return Object(s.a)(this,a),(e=t.call(this)).state={menu:[],rate:[]},e}return Object(u.a)(a,[{key:"componentDidMount",value:function(){var e=this;fetch("https://taher-pizza.herokuapp.com/api/home").then((function(e){return e.json()})).then((function(t){e.setState({menu:e.state.menu.concat(t.menu),rate:e.state.rate.concat(t.rate)})}),(function(e){console.log(e)}))}},{key:"render",value:function(){return console.log(this.state.menu),r.a.createElement("div",null,r.a.createElement(j,null),r.a.createElement(X,null),r.a.createElement(w,null),r.a.createElement("div",null,r.a.createElement("div",{className:"section_title text-center mb-80 "},r.a.createElement("span",null,"Pizza Menu"),r.a.createElement("h3",null,"Best Ever Pizza"))),r.a.createElement(T,{menu:this.state.menu,bestMenu:!0}),r.a.createElement("div",null,r.a.createElement("div",{className:"section_title text-center mb-80"},r.a.createElement("span",null,"Testimonials"),r.a.createElement("h3",null,"HAPPY CUSTOMERS"))),r.a.createElement(T,{rate:this.state.rate,Testimonials:!0}),r.a.createElement(L,null))}}]),a}(n.Component),te=a(91),ae=a(92),ne=function(e){Object(m.a)(a,e);var t=Object(d.a)(a);function a(){var e;return Object(s.a)(this,a),(e=t.call(this)).addOrderItem=function(t){e.props._orderNewItem(t)},e.fetchData=function(){e.props.fetchdate(!0)},e.handelFavorite=function(t){e.props.favorite_storage.some((function(e){return e.id==t.id}))?e.props._handelRemoveFavorite(t.id):e.props._handelNewFavorite(t)},e.state={items:[]},e}return Object(u.a)(a,[{key:"render",value:function(){var e=this,t=this.props.menu.map((function(t){return r.a.createElement("div",null,r.a.createElement(k.a,{style:{width:"18rem"}},r.a.createElement("figure",null,r.a.createElement(k.a.Img,{variant:"top",src:t.image})),r.a.createElement("div",{className:"favorite",onClick:function(){e.handelFavorite(t)}},e.props.favorite_storage.some((function(e){return e.id==t.id}))?r.a.createElement(_.FontAwesome,{name:"heart",color:"red"}):r.a.createElement(_.FontAwesome,{name:"heart"})),r.a.createElement("div",{className:"price"},r.a.createElement("p",null,t.price," EGP")),r.a.createElement(k.a.Body,null,r.a.createElement(k.a.Title,null,t.name),r.a.createElement(k.a.Text,null,t.content),r.a.createElement(x.a,{className:"form-control",onClick:function(){e.addOrderItem(t)}},"Order"))))}));return r.a.createElement(te.a,{className:"menu_card",dataLength:this.state.items.length,next:this.fetchData,hasMore:!0,loader:r.a.createElement(x.a,{variant:"primary",className:"form-control",disabled:!0},r.a.createElement(ae.a,{as:"span",animation:"grow",size:"sm",role:"status","aria-hidden":"true"}),"Loading..."),endMessage:r.a.createElement("p",{style:{textAlign:"center"}},r.a.createElement("b",null,"Yay! You have seen it all"))},t)}}]),a}(n.Component),re=Object(f.b)((function(e){return{favorite_storage:e.user_storage.favorites}}),(function(e){return{_orderNewItem:function(t){e(v(t))},_handelNewFavorite:function(t){e(b(t))},_handelRemoveFavorite:function(t){e(O(t))}}}))(ne),le=a(89),oe=function(e){Object(m.a)(a,e);var t=Object(d.a)(a);function a(){var e;return Object(s.a)(this,a),(e=t.call(this)).fetchdate=function(){e.setState({page:e.state.page+1},(function(){e.componentDidMount()}))},e.handelSearch=function(t){fetch("https://taher-pizza.herokuapp.com/api/search",{method:"post",headers:{"Content-Type":"application/json"},body:JSON.stringify({search:t.target.value})}).then((function(e){return e.json()})).then((function(t){e.setState({menu:t.menu})}),(function(e){console.log(e)}))},e.state={menu:[],page:1},e}return Object(u.a)(a,[{key:"componentDidMount",value:function(){var e=this;fetch("https://taher-pizza.herokuapp.com/api/menu?page="+this.state.page).then((function(e){return e.json()})).then((function(t){e.setState({menu:e.state.menu.concat(t.menu.data)})}),(function(e){console.log(e)}))}},{key:"render",value:function(){var e=this,t=this.props.storage.favorites;return r.a.createElement("div",null,r.a.createElement(j,null),r.a.createElement(X,null),r.a.createElement("div",null,r.a.createElement("div",{className:"section_title text-center mb-80"},r.a.createElement("span",null,"Favorite"),r.a.createElement(T,{favoriteSlider:!0,favorite:t})),r.a.createElement("div",{className:"section_title text-center mb-80 "},r.a.createElement("span",null,"Pizza Menu"),r.a.createElement("h3",null,"Best Ever Pizza"),r.a.createElement(K.a,{inline:!0,style:{justifyContent:"center"}},r.a.createElement(le.a,{type:"text",placeholder:"Search",onChange:function(t){e.handelSearch(t)},className:"mr-sm-2"}),r.a.createElement(_.FontAwesome,{name:"search"})))),r.a.createElement("div",{className:"menu"},r.a.createElement(re,{menu:this.state.menu,fetchdate:function(){return e.fetchdate()}})),r.a.createElement(L,null))}}]),a}(n.Component),ce=Object(f.b)((function(e){return{storage:e.user_storage}}),null)(oe),ie=function(e){Object(m.a)(a,e);var t=Object(d.a)(a);function a(){var e;return Object(s.a)(this,a),(e=t.call(this)).state={menu:[],rate:[]},e}return Object(u.a)(a,[{key:"componentDidMount",value:function(){}},{key:"render",value:function(){console.log(this.props.order_storage);var e=this.props.order_storage.map((function(e,t){return r.a.createElement(k.a,{className:"orderLog_card"},r.a.createElement(k.a.Body,null,r.a.createElement(k.a.Title,null,e.name),r.a.createElement(k.a.Text,null,e.total," EUR"),r.a.createElement(k.a.Text,null,e.date),r.a.createElement("hr",null),r.a.createElement("ul",null,e.order_items.map((function(e){return r.a.createElement("li",null,e.item.name," - ",e.item.price*e.qty," EUR (qty:",e.qty,")")})))))}));return r.a.createElement("div",null,r.a.createElement(j,null),r.a.createElement(X,null),r.a.createElement("div",null,r.a.createElement("div",{className:"section_title text-center mb-80 "},r.a.createElement("span",null,"YOUR ORDERS LOGS"),r.a.createElement("h3",null,"We Wish You Have A Good Meals")),r.a.createElement("div",{className:"orderLog"},e)),r.a.createElement(L,null))}}]),a}(n.Component),se=Object(f.b)((function(e){return{order_storage:e.user_storage.orders}}),null)(ie);a(134),a(135),a(136),a(137);var ue=Object(f.b)(null,null)((function(){return r.a.createElement("div",{className:"App"},r.a.createElement(c.a,null,r.a.createElement(i.c,null,r.a.createElement(i.a,{path:"/orders"},r.a.createElement(se,null)),r.a.createElement(i.a,{path:"/menu"},r.a.createElement(ce,null)),r.a.createElement(i.a,{path:"/"},r.a.createElement(ee,null)))))}));Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));var me=a(25),de=a(71),pe=a(95),Ee=a.n(pe),he=(a(141),{user:null}),fe={order:[],info:null},ve={isOpen:!1,type:null,data:null},ge={favorites:[],orders:[]},be={key:"root",storage:Ee.a},Oe=Object(me.b)({user:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:he,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case"SIGN_IN":return Object(V.a)({},e,{user:t.user});case"SIGN_OUT":return Object(V.a)({},e,{user:null});default:return e}},order:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:fe,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case"ORDER_NEW_ITEM":t.item.qty||(t.item.qty=1),e.order.map((function(e){return e.id==t.item.id?e.qty=e.qty+1:e.qty?null:e.qty=1}));var a=0==e.order.length?e.order.concat(t.item):e.order.some((function(e){return e.id==t.item.id}))?e.order:e.order.concat(t.item);return Object(V.a)({},e,{order:a});case"REMOVE_ORDER_ITEM":return Object(V.a)({},e,{order:e.order.filter((function(e){return e.id!=t.id}))});case"CLEAR_ORDER":return Object(V.a)({},e,{order:[]});case"ORDER_INFO":return Object(V.a)({},e,{info:t.info});default:return e}},modal:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:ve,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case"OPEN_MODAL":return Object(V.a)({},e,{isOpen:!0,type:t.modal});case"CLOSE_MODAL":return Object(V.a)({},e,{isOpen:!1,type:null});default:return e}},user_storage:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:ge,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case"MAKE_FAVORITE":return Object(V.a)({},e,{favorites:e.favorites.concat(t.item)});case"REMOVE_FAVORITE":return Object(V.a)({},e,{favorites:e.favorites.filter((function(e){return e.id!=t.id}))});case"MAKE_ORDER":return Object(V.a)({},e,{orders:e.orders.concat(t.item)});default:return e}}}),_e=Object(de.a)(be,Oe),ye=Object(me.c)(_e),je=Object(de.b)(ye),Ce=a(96);o.a.render(r.a.createElement(r.a.StrictMode,null,r.a.createElement(f.a,{store:ye},r.a.createElement(Ce.a,{loading:null,persistor:je},r.a.createElement(ue,null)))),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()})).catch((function(e){console.error(e.message)}))}},[[101,1,2]]]);
//# sourceMappingURL=main.c99ee421.chunk.js.map