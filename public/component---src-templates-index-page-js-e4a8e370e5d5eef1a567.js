(window.webpackJsonp=window.webpackJsonp||[]).push([[16],{"PL+z":function(e,t,a){"use strict";a.r(t),a.d(t,"IndexPageTemplate",(function(){return c})),a.d(t,"pageQuery",(function(){return m}));var n=a("q1tI"),i=a.n(n),l=a("Wbzz"),s=a("7oih"),r=a("lynl"),c=(a("v/M3"),function(e){var t=e.image,a=e.title,n=e.heading,s=e.subheading,c=e.mainpitch,m=e.description,o=e.intro;return i.a.createElement("div",null,i.a.createElement("div",{className:"full-width-image margin-top-0",style:{backgroundImage:"url("+(t.childImageSharp?t.childImageSharp.fluid.src:t)+")",backgroundPosition:"top left",backgroundAttachment:"fixed"}},i.a.createElement("div",{style:{display:"flex",height:"150px",lineHeight:"1",justifyContent:"space-around",alignItems:"left",flexDirection:"column"}},i.a.createElement("h1",{className:"has-text-weight-bold is-size-3-mobile is-size-2-tablet is-size-1-widescreen",style:{boxShadow:"#73939C 0.5rem 0px 0px, #73939C -0.5rem 0px 0px",backgroundColor:"#73939C",opacity:"0.75",color:"white",lineHeight:"1",padding:"0.25em"}},a),i.a.createElement("h3",{className:"has-text-weight-bold is-size-5-mobile is-size-5-tablet is-size-4-widescreen",style:{boxShadow:"#73939C 0.5rem 0px 0px, #73939C -0.5rem 0px 0px",backgroundColor:"#73939C",opacity:"0.75",color:"white",lineHeight:"1",padding:"0.25em"}},s))),i.a.createElement("section",{className:"section section--gradient"},i.a.createElement("div",{className:"container"},i.a.createElement("div",{className:"section"},i.a.createElement("div",{className:"columns"},i.a.createElement("div",{className:"column is-10 is-offset-1"},i.a.createElement("div",{className:"content"},i.a.createElement("div",{className:"content"},i.a.createElement("div",{className:"tile"},i.a.createElement("h1",{className:"title"},c.title)),i.a.createElement("div",{className:"tile"},i.a.createElement("h3",{className:"subtitle"},c.description))),i.a.createElement("div",{className:"columns"},i.a.createElement("div",{className:"column is-12"},i.a.createElement("h3",{className:"has-text-weight-semibold is-size-2"},n),i.a.createElement("p",null,m))),i.a.createElement(r.a,{gridItems:o.blurbs}),i.a.createElement("div",{className:"columns"},i.a.createElement("div",{className:"column is-12 has-text-centered"},i.a.createElement(l.a,{className:"btn",to:"/products"},"See all services"))))))))))});t.default=function(e){var t=e.data.markdownRemark.frontmatter;return i.a.createElement(s.a,null,i.a.createElement(c,{image:t.image,title:t.title,heading:t.heading,subheading:t.subheading,mainpitch:t.mainpitch,description:t.description,intro:t.intro}))};var m="1377013887"},lynl:function(e,t,a){"use strict";var n=a("q1tI"),i=a.n(n),l=a("I22s");t.a=function(e){var t=e.gridItems;return i.a.createElement("div",{className:"columns is-multiline"},t.map((function(e){return i.a.createElement("div",{key:e.text,className:"column is-6"},i.a.createElement("section",{className:"section"},i.a.createElement("div",{className:"has-text-centered"},i.a.createElement("div",{style:{width:"240px",display:"inline-block"}},i.a.createElement(l.a,{imageInfo:e}))),i.a.createElement("p",null,e.text)))})))}},"v/M3":function(e,t,a){"use strict";var n=a("dI71"),i=a("q1tI"),l=a.n(i),s=a("Wbzz"),r=a("I22s"),c=function(e){function t(){return e.apply(this,arguments)||this}return Object(n.a)(t,e),t.prototype.render=function(){var e=this.props.data.allMarkdownRemark.edges;return l.a.createElement("div",{className:"columns is-multiline"},e&&e.map((function(e){var t=e.node;return l.a.createElement("div",{className:"is-parent column is-6",key:t.id},l.a.createElement("article",{className:"blog-list-item tile is-child box notification "+(t.frontmatter.featuredpost?"is-featured":"")},l.a.createElement("header",null,t.frontmatter.featuredimage?l.a.createElement("div",{className:"featured-thumbnail"},l.a.createElement(r.a,{imageInfo:{image:t.frontmatter.featuredimage,alt:"featured image thumbnail for post "+t.frontmatter.title}})):null,l.a.createElement("p",{className:"post-meta"},l.a.createElement(s.a,{className:"title has-text-primary is-size-4",to:t.fields.slug},t.frontmatter.title),l.a.createElement("span",null," • "),l.a.createElement("span",{className:"subtitle is-size-5 is-block"},t.frontmatter.date))),l.a.createElement("p",null,t.excerpt,l.a.createElement("br",null),l.a.createElement("br",null),l.a.createElement(s.a,{className:"button",to:t.fields.slug},"Keep Reading →"))))})))},t}(l.a.Component);t.a=function(){return l.a.createElement(s.b,{query:"1606870023",render:function(e,t){return l.a.createElement(c,{data:e,count:t})}})}}}]);
//# sourceMappingURL=component---src-templates-index-page-js-e4a8e370e5d5eef1a567.js.map