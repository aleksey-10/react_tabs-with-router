(this["webpackJsonpreact_tabs-with-router"]=this["webpackJsonpreact_tabs-with-router"]||[]).push([[0],{16:function(e,t,a){e.exports=a(28)},21:function(e,t,a){},28:function(e,t,a){"use strict";a.r(t);var i=a(0),u=a.n(i),n=a(14),s=a.n(n),o=(a(21),a(6)),l=a(1),r=function(){return u.a.createElement("ul",{className:"menu align-center"},u.a.createElement("li",null,u.a.createElement(o.b,{activeClassName:"is-active",to:"/"},"Home")),u.a.createElement("li",null,u.a.createElement(o.b,{activeClassName:"is-active",to:"/tabs"},"Tabs")))},m=function(){return u.a.createElement("h3",null,"Hello World!")},c=function(e){var t=e.tabs,a=e.active;return u.a.createElement("ul",{className:"tabs","data-tabs":!0,id:"example-tabs"},t.map((function(e){return u.a.createElement("li",{className:"tabs-title",key:e.id},u.a.createElement(o.b,{to:"/tabs/".concat(e.id),"aria-selected":a===e.id},e.title))})))},d=function(e){var t=e.tabs,a=Object(l.f)().pathname,n=Object(l.e)().push,s=a.match(/^\/tabs\/(.+)$/),o=s?s[1].replace("/",""):t[0].id;Object(i.useEffect)((function(){s||n("tabs/".concat(t[0].id))}));var r=t.find((function(e){return o===e.id}));return t.length?t.some((function(e){return e.id===o}))?u.a.createElement("div",{className:"row"},u.a.createElement("div",{className:"columns"},u.a.createElement(c,{tabs:t,active:o})),u.a.createElement("div",{className:"tabs-content"},u.a.createElement("div",{className:"tabs-panel is-active"},u.a.createElement("h5",null,null===r||void 0===r?void 0:r.title),u.a.createElement("p",null,null===r||void 0===r?void 0:r.content)))):u.a.createElement("h3",null,"Tab not found."):u.a.createElement("h5",null,"No tabs")},p=[{id:"tab-1",title:"Tab 1",content:"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum."},{id:"tab-2",title:"Tab 2",content:"Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo. Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt. Neque porro quisquam est, qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit, sed quia non numquam eius modi tempora incidunt ut labore et dolore magnam aliquam quaerat voluptatem. Ut enim ad minima veniam, quis nostrum exercitationem ullam corporis suscipit laboriosam, nisi ut aliquid ex ea commodi consequatur? Quis autem vel eum iure reprehenderit qui in ea voluptate velit esse quam nihil molestiae consequatur, vel illum qui dolorem eum fugiat quo voluptas nulla pariatur?"},{id:"tab-3",title:"Tab 3",content:"At vero eos et accusamus et iusto odio dignissimos ducimus qui blanditiis praesentium voluptatum deleniti atque corrupti quos dolores et quas molestias excepturi sint occaecati cupiditate non provident, similique sunt in culpa qui officia deserunt mollitia animi, id est laborum et dolorum fuga. Et harum quidem rerum facilis est et expedita distinctio. Nam libero tempore, cum soluta nobis est eligendi optio cumque nihil impedit quo minus id quod maxime placeat facere possimus, omnis voluptas assumenda est, omnis dolor repellendus. Temporibus autem quibusdam et aut officiis debitis aut rerum necessitatibus saepe eveniet ut et voluptates repudiandae sint et molestiae non recusandae. Itaque earum rerum hic tenetur a sapiente delectus, ut aut reiciendis voluptatibus maiores alias consequatur aut perferendis doloribus asperiores repellat."}],b=function(){return u.a.createElement(o.a,null,u.a.createElement("div",{className:"App grid-container"},u.a.createElement("h1",null,"Tabs with router"),u.a.createElement(r,null),u.a.createElement(l.a,{exact:!0,path:"/",component:m}),u.a.createElement(l.a,{path:"/tabs",render:function(){return u.a.createElement(d,{tabs:p})}})))};a(27);s.a.render(u.a.createElement(b,null),document.getElementById("root"))}},[[16,1,2]]]);
//# sourceMappingURL=main.d5cbb47e.chunk.js.map