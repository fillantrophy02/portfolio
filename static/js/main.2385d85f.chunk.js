(this.webpackJsonpportfolio=this.webpackJsonpportfolio||[]).push([[0],{61:function(e,t,a){},65:function(e,t,a){},88:function(e,t,a){"use strict";a.r(t);var s=a(2),i=a(44),n=a.n(i),r=(a(61),a(14)),o=a(15),c=a(17),l=a(16),d=a(38),h=(a(64),a(65),a(45)),j=a(12),m=a.n(j),p=a(1),b=function(e){Object(c.a)(a,e);var t=Object(l.a)(a);function a(){return Object(r.a)(this,a),t.apply(this,arguments)}return Object(o.a)(a,[{key:"render",value:function(){if(!this.props.data)return null;var e="images/"+this.props.data.image,t=this.props.data.linkedin,a=this.props.data.github,s=this.props.data.name,i=this.props.data.description;return Object(p.jsxs)("header",{id:"home",children:[Object(p.jsx)(h.a,{type:"circle",bg:!0}),Object(p.jsxs)("nav",{id:"nav-wrap",children:[Object(p.jsx)("a",{className:"mobile-btn",href:"#nav-wrap",title:"Show navigation",children:"Show navigation"}),Object(p.jsx)("a",{className:"mobile-btn",href:"#home",title:"Hide navigation",children:"Hide navigation"}),Object(p.jsxs)("ul",{id:"nav",className:"nav",children:[Object(p.jsx)("li",{className:"current",children:Object(p.jsx)("a",{className:"smoothscroll",href:"#home",children:"Home"})}),Object(p.jsx)("li",{children:Object(p.jsx)("a",{className:"smoothscroll",href:"#resume",children:"Skills"})}),Object(p.jsx)("li",{children:Object(p.jsx)("a",{className:"smoothscroll",href:"#portfolio",children:"Projects"})})]})]}),Object(p.jsx)("div",{className:"row banner",children:Object(p.jsxs)("div",{className:"banner-text",children:[Object(p.jsx)(m.a,{bottom:!0,children:Object(p.jsx)("img",{className:"profile-pic-home",src:e,alt:"Vy Dinh Profile Pic"})}),Object(p.jsx)(m.a,{bottom:!0,children:Object(p.jsx)("h1",{className:"responsive-headline",children:s})}),Object(p.jsx)(m.a,{bottom:!0,duration:1200,children:Object(p.jsxs)("h3",{children:[i,"."]})}),Object(p.jsx)("hr",{}),Object(p.jsx)(m.a,{bottom:!0,duration:2e3,children:Object(p.jsxs)("ul",{className:"social",children:[Object(p.jsxs)("a",{href:t,className:"button btn linkedin-btn",children:[Object(p.jsx)("i",{className:"fa fa-book"}),"Linkedin"]}),Object(p.jsxs)("a",{href:a,className:"button btn github-btn",children:[Object(p.jsx)("i",{className:"fa fa-github"}),"Github"]})]})})]})}),Object(p.jsx)("p",{className:"scrolldown",children:Object(p.jsx)("a",{className:"smoothscroll",href:"#about",children:Object(p.jsx)("i",{className:"icon-down-circle"})})})]})}}]),a}(s.Component),u=b,g=function(e){Object(c.a)(a,e);var t=Object(l.a)(a);function a(){return Object(r.a)(this,a),t.apply(this,arguments)}return Object(o.a)(a,[{key:"render",value:function(){if(!this.props.data)return null;var e=this.props.data.social.map((function(e){return Object(p.jsx)("li",{children:Object(p.jsx)("a",{href:e.url,children:Object(p.jsx)("i",{className:e.className})})},e.name)}));return Object(p.jsx)("footer",{children:Object(p.jsxs)("div",{className:"row",children:[Object(p.jsx)(m.a,{bottom:!0,children:Object(p.jsxs)("div",{className:"twelve columns",children:[Object(p.jsx)("ul",{className:"social-links",children:e}),Object(p.jsx)("ul",{className:"copyright",children:Object(p.jsxs)("li",{children:["Original template by ",Object(p.jsx)("a",{title:"Nordic Giant",href:"https://github.com/nordicgiant2/react-nice-resume",children:"Nordic Giant"})]})})]})}),Object(p.jsx)("div",{id:"go-top",children:Object(p.jsx)("a",{className:"smoothscroll",title:"Back to Top",href:"#home",children:Object(p.jsx)("i",{className:"icon-up-open"})})})]})})}}]),a}(s.Component),x=g,O=(s.Component,function(e){Object(c.a)(a,e);var t=Object(l.a)(a);function a(){return Object(r.a)(this,a),t.apply(this,arguments)}return Object(o.a)(a,[{key:"getRandomColor",value:function(){for(var e="#",t=0;t<6;t++)e+="0123456789ABCDEF"[Math.floor(16*Math.random())];return e}},{key:"render",value:function(){var e=this;if(!this.props.data)return null;this.props.data.skillmessage;var t=this.props.data.education.map((function(e){return Object(p.jsxs)("div",{children:[Object(p.jsx)("h3",{children:e.school}),Object(p.jsxs)("p",{className:"info",children:[e.degree," ",Object(p.jsx)("span",{children:"\u2022"}),Object(p.jsx)("em",{className:"date",children:e.graduated})]}),Object(p.jsx)("p",{children:e.description})]},e.school)})),a=(this.props.data.work.map((function(e){return Object(p.jsxs)("div",{children:[Object(p.jsx)("h3",{children:e.company}),Object(p.jsxs)("p",{className:"info",children:[e.title,Object(p.jsx)("span",{children:"\u2022"})," ",Object(p.jsx)("em",{className:"date",children:e.years})]}),Object(p.jsx)("p",{children:e.description})]},e.company)})),this.props.data.skills.map((function(t){var a=e.getRandomColor(),s="bar-expand "+t.name.toLowerCase(),i=t.level;return Object(p.jsxs)("li",{children:[Object(p.jsx)("span",{style:{width:i,backgroundColor:a},className:s}),Object(p.jsx)("em",{children:t.name})]},t.name)})));return Object(p.jsxs)("section",{id:"resume",children:[Object(p.jsx)(m.a,{left:!0,duration:1300,children:Object(p.jsxs)("div",{className:"row education",children:[Object(p.jsx)("div",{className:"three columns header-col",children:Object(p.jsx)("h1",{children:Object(p.jsx)("span",{children:"Education"})})}),Object(p.jsx)("div",{className:"nine columns main-col",children:Object(p.jsx)("div",{className:"row item",children:Object(p.jsx)("div",{className:"twelve columns",children:t})})})]})}),Object(p.jsx)(m.a,{left:!0,duration:1300,children:Object(p.jsxs)("div",{className:"row skill",children:[Object(p.jsx)("div",{className:"three columns header-col",children:Object(p.jsx)("h1",{children:Object(p.jsx)("span",{children:"Skills"})})}),Object(p.jsx)("div",{className:"nine columns main-col",children:Object(p.jsx)("div",{className:"bars",children:Object(p.jsx)("ul",{className:"skills",children:a})})})]})})]})}}]),a}(s.Component)),f=O,v=(s.Component,a(46)),y=a.n(v),w=a(119),k=a(118),N=a(115),C=function(e){Object(c.a)(a,e);var t=Object(l.a)(a);function a(){return Object(r.a)(this,a),t.apply(this,arguments)}return Object(o.a)(a,[{key:"render",value:function(){console.log(this.props);var e="images/"+this.props.imgSrc,t=this.props.paperUrl||this.props.videoUrl||this.props.playUrl,a="string"===typeof this.props.skillTags?this.props.skillTags.split(","):[];return Object(p.jsxs)(k.a,{elevation:3,sx:{paddingBottom:.8},children:[Object(p.jsx)("img",{class:"image",src:e}),Object(p.jsxs)(N.a,{ml:2,mr:2,fontSize:"2.5rem",children:[Object(p.jsx)("div",{className:"project-title",children:Object(p.jsx)("h1",{children:this.props.title})}),Object(p.jsx)("div",{className:"date",children:this.props.dateRange}),Object(p.jsx)("div",{className:"card-body",children:this.props.bodyText}),Object(p.jsx)("div",{className:"skills",children:a.map((function(e){return Object(p.jsxs)("text",{children:["#",e,"\xa0\xa0\xa0\xa0"]})}))}),t?Object(p.jsxs)(w.a,{display:"flex",justifyContent:"center",alignItems:"center",className:"box",children:[this.props.paperUrl?Object(p.jsx)("a",{href:this.props.paperUrl,className:"button paper",children:Object(p.jsx)("i",{className:"button-text",children:"Paper"})}):null,this.props.videoUrl?Object(p.jsx)("a",{href:this.props.videoUrl,className:"button video",children:Object(p.jsx)("i",{className:"button-text",children:"Video"})}):null,this.props.playUrl?Object(p.jsx)("a",{href:this.props.playUrl,className:"button play",children:Object(p.jsx)("i",{className:"button-text",children:"Play!"})}):null]}):null]})]})}}]),a}(s.Component),S=C,T=a(117),D=0,U=function(e){Object(c.a)(a,e);var t=Object(l.a)(a);function a(){return Object(r.a)(this,a),t.apply(this,arguments)}return Object(o.a)(a,[{key:"render",value:function(){if(!this.props.data)return null;this.props.data.projects.map((function(e){var t="images/portfolio/"+e.image;return Object(p.jsx)("div",{className:"columns portfolio-item",children:Object(p.jsxs)("div",{className:"item-wrap",children:[Object(p.jsx)(y.a,{alt:e.title,src:t}),Object(p.jsx)("div",{style:{textAlign:"center"},children:e.title})]})},D++)}));return Object(p.jsx)("section",{id:"portfolio",children:Object(p.jsx)(m.a,{left:!0,duration:1e3,distance:"40px",children:Object(p.jsxs)("div",{className:"row",children:[Object(p.jsx)("h1",{children:Object(p.jsx)("span",{children:"Internships/Projects"})}),Object(p.jsx)(N.a,{sx:{paddingTop:6},children:Object(p.jsxs)(T.a,{container:!0,spacing:3,children:[Object(p.jsx)(T.a,{item:!0,xs:6,children:Object(p.jsx)(S,{imgSrc:"razer.jpg",title:"Test Automation intern",dateRange:"May 2022 - Sep 2022",bodyText:"Razer Synapse is a cloud-based hardware configuration tool for Razer devices. For every new product launched, testers repeat the same set of tests to ensure that the new product is working in sync with Razer Synapse. Using a combination of browser and desktop automation tools, I wrote test cases for mouse, keyboard, and other devices to automate this testing process. I also used Jenkins to implement the CI/CD pipeline for the deployment and execution of the automated test cases.",skillTags:"python,robot,selenium,jenkins"})}),Object(p.jsx)(T.a,{item:!0,xs:6,children:Object(p.jsx)(S,{imgSrc:"hadtech.png",title:"Software Engineer Intern",dateRange:"Dec 2020 - Oct 2021",bodyText:"HADTech JSC is a Vietnamese start-up whose main goal is to develop a personalized learning platform for K-12 students. As a backend and later full stack intern, I directed a team of 5 in the construction of course recommendation and math solver algorithms for using Django and other libraries. I also took part in the development of APIs using the NestJS framework, generated sequence diagrams through several development cycles, and wrote the MongoDB database schema.",skillTags:"python,javascript,nestjs,django,mongodb"})}),Object(p.jsx)(T.a,{item:!0,xs:6,children:Object(p.jsx)(S,{imgSrc:"astar.png",title:"Research Intern",dateRange:"Apr 2019 - Jun 2020",bodyText:"As part of a deep learning project, I worked in a team of 3 to develop an end-to-end software for analyzing heart blockage severity in fluoroscopy scans. My main responsibilities involved preprocessing the dataset provided by the National Heart Center consisting of 102 videos, training and tuning the stage one image classification model, and writing the code for geometrically processing vessel width and blockage. I also contributed to another project that involving building defenses against adversarial attacks.",skillTags:"python,keras,sklearn",paperUrl:"https://arxiv.org/pdf/2101.12505.pdf"})}),Object(p.jsx)(T.a,{item:!0,xs:6,children:Object(p.jsx)(S,{imgSrc:"coldbrew.jpg",title:"Project ColdBrew",dateRange:"Jul 2022",bodyText:"ColdBrew: Linkedin for Volunteering is an NLP-powered platform for connecting volunteers and organizations. Aside from suggesting opportunities to perspective volunteers, the app generates training programs (e.g. logistic planning training) that organizations can hold to attract prospective volunteers. Working in a team of 4, I implemented the program suggestion feature via an unsupervised text classification model and pre-labeled categories using Python. This app won Theme Runner Up at LifeHack 2022.",skillTags:"python,gensim",videoUrl:"https://youtu.be/UimYhsvEW6U"})}),Object(p.jsx)(T.a,{item:!0,xs:6,children:Object(p.jsx)(S,{imgSrc:"coldbrew.jpg",title:"Microbform Game",dateRange:"Sep 2021",bodyText:"Microbform is an interactive, humorous and entertaining game that follows the adventures of a microbe with social anxiety. Through the game, players may find themselves relating to the main character\u2019s conundrums or woes, and will get to select different responses to various situations that may cause social anxiety, and manage an \u201canxiety bar\u201d as the character goes through events in a day. This game was made by a team of 4 passionate friends who love classic role-playing games with Undertale vibes.",skillTags:"javascript,godot",playUrl:"https://tkaixiang.itch.io/microbform"})})]})})]})})})}}]),a}(s.Component),I=U,R={main:{name:"Vy Dinh",description:"Hello! I am a CS undergraduate at Singapore University of Technology and Design (SUTD)",image:"profilepic.jpg",bio:"Use this bio section as your way of describing yourself and saying what you do, what technologies you like to use or feel most comfortable with, describing your personality, or whatever else you feel like throwing in.",contactmessage:"Here is where you should write your message to readers to have them get in contact with you.",email:"youremailhere@gmail.com",phone:"555-555-5555",github:"https://github.com/fillantrophy02",linkedin:"https://www.linkedin.com/in/vy-dinh-22b990148/",address:{street:"(Your Street)",city:"(Your City)",state:"(Your State)",zip:"(Your Zip/Postal Code)"},website:"http://www.timbakerdev.com",resumedownload:"http://timbakerdev.com",social:[{name:"linkedin",url:"https://www.linkedin.com/in/vy-dinh-22b990148/",className:"fa fa-linkedin"},{name:"github",url:"https://github.com/fillantrophy02",className:"fa fa-github"}]},resume:{skillmessage:"",education:[{school:"Singapore University of Technology and Design (SUTD)",degree:"Computer Science and Design",graduated:"May 2025",description:"As the vice president of 3DC/Google Developer Student Club, my most recent activity was teaching a series of data structure and algorithm workshops. "}],work:[],skills:[{name:"Python",level:"90%"},{name:"Javascript",level:"70%"},{name:"Java",level:"50%"},{name:"HTML",level:"70%"},{name:"React",level:"50%"},{name:"Selenium",level:"80%"},{name:"Robot Framework",level:"80%"},{name:"Django",level:"40%"},{name:"MongoDB",level:"70%"},{name:"Keras",level:"60%"}]},portfolio:{projects:[]}},P=function(e){Object(c.a)(a,e);var t=Object(l.a)(a);function a(e){var s;return Object(r.a)(this,a),(s=t.call(this,e)).state={foo:"bar",resumeData:R},d.a.initialize("UA-110570651-1"),d.a.pageview(window.location.pathname),s}return Object(o.a)(a,[{key:"componentDidMount",value:function(){}},{key:"render",value:function(){return Object(p.jsxs)("div",{className:"App",children:[Object(p.jsx)(u,{data:this.state.resumeData.main}),Object(p.jsx)(f,{data:this.state.resumeData.resume}),Object(p.jsx)(I,{data:this.state.resumeData.portfolio}),Object(p.jsx)(x,{data:this.state.resumeData.main})]})}}]),a}(s.Component),A=function(e){e&&e instanceof Function&&a.e(3).then(a.bind(null,120)).then((function(t){var a=t.getCLS,s=t.getFID,i=t.getFCP,n=t.getLCP,r=t.getTTFB;a(e),s(e),i(e),n(e),r(e)}))};n.a.render(Object(p.jsx)(P,{}),document.getElementById("root")),A()}},[[88,1,2]]]);
//# sourceMappingURL=main.2385d85f.chunk.js.map