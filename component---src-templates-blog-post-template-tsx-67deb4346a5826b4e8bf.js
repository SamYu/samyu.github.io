(window.webpackJsonp=window.webpackJsonp||[]).push([[7],{"Cye+":function(e,t,a){"use strict";a("rGqo"),a("yt8O"),a("Btvt"),a("RW0V"),a("91GP");var o=a("q1tI"),n=a.n(o),r=a("DYRK"),i=a("cekd"),c=a("aGjT"),s=a("j8Pq"),l=Object(r.createUseStyles)((function(e){return{sidebar:{width:"25%",display:"flex",flexDirection:"column","@media (max-width: 768px)":{width:"100%"}},tagsContainer:{display:"flex",flexDirection:"column"},otherPosts:{display:"flex",flexDirection:"column",marginTop:50},subtitle:Object.assign({},e.subtitle),categoryTag:{marginBottom:15}}}));t.a=function(e){var t=e.tags,a=e.pageContext,o=e.tagTitle,u=e.allTags,m=void 0!==u&&u,d=l({theme:Object(r.useTheme)()}),g=t;return m&&(g=Object.keys(c.tagCategories)),console.log(g),n.a.createElement("div",{className:d.sidebar},n.a.createElement("div",{className:d.tagsContainer},n.a.createElement("h2",{className:d.subtitle},o),g&&g.map((function(e){return n.a.createElement(i.a,{className:d.categoryTag,text:e,size:"L"})}))),a&&a.previous&&a.next&&n.a.createElement("div",{className:d.otherPosts},n.a.createElement("h2",{className:d.subtitle},"other posts"),n.a.createElement(s.a,{post:a.previous,size:"S"}),n.a.createElement(s.a,{post:a.next,size:"S"})))}},TSYQ:function(e,t,a){var o;a("LK8F"),function(){"use strict";var a={}.hasOwnProperty;function n(){for(var e=[],t=0;t<arguments.length;t++){var o=arguments[t];if(o){var r=typeof o;if("string"===r||"number"===r)e.push(o);else if(Array.isArray(o)&&o.length){var i=n.apply(null,o);i&&e.push(i)}else if("object"===r)for(var c in o)a.call(o,c)&&o[c]&&e.push(c)}}return e.join(" ")}e.exports?(n.default=n,e.exports=n):void 0===(o=function(){return n}.apply(t,[]))||(e.exports=o)}()},aGjT:function(e,t){t.tagCategories={music:{backgroundColor:"#FFD39F",color:"#B06000"},software:{backgroundColor:"#BFF49F",color:"#2F7C00"},misc:{backgroundColor:"#95C6FF",color:"#00479B"}},t.getTagSizeFromString=function(e){switch(e){case"S":return{width:50,height:15,fontSize:9};case"L":return{width:150,height:30,fontSize:18};default:return{width:100,height:20,fontSize:11}}}},cekd:function(e,t,a){"use strict";var o=a("q1tI"),n=a.n(o),r=a("DYRK"),i=a("aGjT"),c=a("TSYQ"),s=a.n(c),l=a("Wbzz"),u=Object(r.createUseStyles)({categoryTag:{borderRadius:16,color:function(e){return e.color.color},backgroundColor:function(e){return e.color.backgroundColor},width:function(e){return e.sizing.width},textAlign:"center",fontSize:function(e){return e.sizing.fontSize},fontFamily:"Roboto",fontWeight:"300",lineHeight:1.8,height:function(e){return e.sizing.height},margin:0,marginRight:10,textDecoration:"none"},clickable:{"&:hover":{opacity:"0.7",cursor:"pointer"}}});t.a=function(e){var t=e.text,a=e.size,o=e.className,r=e.clickable,c=void 0===r||r,m=t&&i.tagCategories[t]?i.tagCategories[t]:i.tagCategories.misc,d=u({color:m,clickable:c,sizing:Object(i.getTagSizeFromString)(a)});return c?n.a.createElement(l.Link,{to:c&&"/blog/"+t,className:s()(d.categoryTag,d.clickable,o)},t):n.a.createElement("p",{className:s()(d.categoryTag,o)},t)}},"eL/R":function(e,t,a){"use strict";a.r(t),a.d(t,"pageQuery",(function(){return u}));a("91GP");var o=a("q1tI"),n=a.n(o),r=a("DYRK"),i=a("soUV"),c=a("vrFN"),s=a("Cye+"),l=Object(r.createUseStyles)((function(e){return{postContainer:{width:"70%","@media (max-width: 768px)":{width:"100%"}},postTitle:{fontFamily:"Roboto",fontSize:"36px",fontWeight:"bold","@media (max-width: 768px)":{fontSize:"24px"}},postDate:Object.assign(Object.assign({},e.subtitle),{},{fontSize:20}),pageContainer:{padding:e.pagePadding,marginTop:50,display:"flex",justifyContent:"space-between","@media (max-width: 768px)":{flexDirection:"column"}},bodySection:{color:e.colors.textPrimary,"& h1, h2, h3, h4, h5, h6":{fontFamily:"Roboto",fontWeight:"bold"},"& p, li, table, figcaption":{fontFamily:"Lato",fontWeight:"400"},"& a":{color:e.colors.textPrimary},"& blockquote":{color:e.colors.textList,borderColor:e.colors.textSecondary,borderLeft:"3px solid",paddingLeft:"10px",fontSize:18,fontStyle:"italic"},"& li > p":{marginBottom:0},"& table":{margin:"20px 0",borderSpacing:"0","& tr":{borderTop:"1px solid #c6cbd1"},"& td, th":{border:"1px solid #dfe2e5",padding:"6px 13px"},"& tr:nth-child(2n)":{backgroundColor:"#f6f8fa"}},"& figcaption":{textAlign:"center",fontStyle:"italic",color:e.colors.textList}}}}));t.default=function(e){var t=e.data,a=e.pageContext,o=e.location,u=l({theme:Object(r.useTheme)()}),m=t.markdownRemark,d=t.site.siteMetadata.title;return n.a.createElement(i.a,{location:o,title:d},n.a.createElement(c.a,{title:m.frontmatter.title,description:m.frontmatter.description||m.excerpt}),n.a.createElement("div",{className:u.pageContainer},n.a.createElement("article",{className:u.postContainer},n.a.createElement("header",null,n.a.createElement("h1",{className:u.postTitle},m.frontmatter.title),n.a.createElement("p",{className:u.postDate},m.frontmatter.date)),n.a.createElement("section",{className:u.bodySection,dangerouslySetInnerHTML:{__html:m.html}})),n.a.createElement(s.a,{tags:m.frontmatter.tags,tagTitle:"tags",pageContext:a})))};var u="2766055661"},j8Pq:function(e,t,a){"use strict";var o=a("q1tI"),n=a.n(o),r=a("DYRK"),i=a("Wbzz"),c=a("cekd"),s=Object(r.createUseStyles)((function(e){return{postCard:{width:"100%",height:function(e){return e.sizing.height},boxShadow:"0px 2px 4px rgba(0, 0, 0, 0.25)",borderRadius:"22px",color:"black",padding:"1rem 2rem",boxSizing:"border-box",marginBottom:20,overflow:"hidden","&:hover":{boxShadow:"0px 2px 4px rgba(0, 0, 0, 0.5)"}},postTitle:{fontFamily:"Roboto",fontWeight:"bold",fontSize:function(e){return e.sizing.titleSize},margin:function(e){return e.sizing.descSize+2+"px 0"}},postCardLink:{textDecoration:"none"},postCardInfo:{display:"flex",justifyContent:"space-between"},postDesc:{fontFamily:"Lato",fontSize:function(e){return e.sizing.descSize},color:e.colors.textSecondary,overflow:function(e){return e.sizing.truncDesc&&"hidden"},textOverflow:function(e){return e.sizing.truncDesc&&"ellipsis"},whiteSpace:function(e){return e.sizing.truncDesc&&"nowrap"}},postDate:{fontFamily:"Roboto",fontSize:12,color:e.colors.textSecondary,textTransform:"lowercase",margin:0,marginLeft:"auto"}}}));t.a=function(e){var t=e.post,a=e.size,o=void 0===a?"M":a;if(!t)return null;var l=function(e){switch(e){case"S":return{height:100,titleSize:13,descSize:10,truncDesc:!0};default:return{height:150,titleSize:18,descSize:13}}}(o),u=s({sizing:l,theme:Object(r.useTheme)()}),m=t.frontmatter.tags;return"S"===o&&t.frontmatter.tags&&(m=t.frontmatter.tags.slice(0,2)),n.a.createElement(i.Link,{className:u.postCardLink,to:t.fields.slug},n.a.createElement("div",{className:u.postCard},n.a.createElement("div",{className:u.postCardInfo},m&&m.map((function(e){return n.a.createElement(c.a,{text:e,size:o,clickable:!1})})),n.a.createElement("p",{className:u.postDate},t.frontmatter.date)),n.a.createElement("h3",{className:u.postTitle},t.frontmatter.title),n.a.createElement("p",{className:u.postDesc},t.frontmatter.description)))}},soUV:function(e,t,a){"use strict";var o=a("q1tI"),n=a.n(o),r=a("gF/r");t.a=function(e){var t=e.children;return n.a.createElement(n.a.Fragment,null,n.a.createElement(r.a,{hideTitle:!1}),n.a.createElement("main",null,t))}}}]);
//# sourceMappingURL=component---src-templates-blog-post-template-tsx-67deb4346a5826b4e8bf.js.map