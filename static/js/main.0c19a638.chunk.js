(this["webpackJsonpmovie-app"]=this["webpackJsonpmovie-app"]||[]).push([[0],{43:function(e,t,s){},45:function(e,t,s){},46:function(e,t,s){"use strict";s.r(t);var a=s(2),n=s.n(a),r=s(14),i=s.n(r),c=s(3),o=s.n(c),m=s(5),l=s(15),u=s(16),d=s(19),j=s(18),v=s(17),p=s.n(v),h=(s(43),s(0));var b=function(e){var t=e.year,s=e.title,a=e.summary,n=e.poster,r=e.genres;return Object(h.jsxs)("div",{className:"movies__movie",children:[Object(h.jsx)("img",{src:n,alt:s,title:s}),Object(h.jsxs)("div",{className:"movie__data",children:[Object(h.jsx)("h3",{className:"movie__title",children:s}),Object(h.jsx)("h5",{className:"movie__year",children:t}),Object(h.jsx)("ul",{className:"genres",children:r.map((function(e,t){return Object(h.jsx)("li",{className:"genres__genre",children:e},t)}))}),Object(h.jsxs)("p",{className:"movie__summary",children:[a.slice(0,140),"..."]})]})]})},O=(s(45),function(e){Object(d.a)(s,e);var t=Object(j.a)(s);function s(){var e;Object(l.a)(this,s);for(var a=arguments.length,n=new Array(a),r=0;r<a;r++)n[r]=arguments[r];return(e=t.call.apply(t,[this].concat(n))).state={isLoading:!0,movies:[]},e.getMovies=Object(m.a)(o.a.mark((function t(){var s,a;return o.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,p.a.get("https://yts-proxy.now.sh/list_movies.json?sort_by=rating");case 2:s=t.sent,a=s.data.data.movies,e.setState({movies:a,isLoading:!1});case 5:case"end":return t.stop()}}),t)}))),e}return Object(u.a)(s,[{key:"componentDidMount",value:function(){var e=Object(m.a)(o.a.mark((function e(){return o.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:this.getMovies();case 1:case"end":return e.stop()}}),e,this)})));return function(){return e.apply(this,arguments)}}()},{key:"render",value:function(){var e=this.state,t=e.isLoading,s=e.movies;return Object(h.jsx)("section",{className:"container",children:t?Object(h.jsx)("div",{className:"loader",children:Object(h.jsx)("span",{className:"loader__text",children:"Loading..."})}):Object(h.jsx)("div",{className:"movies",children:s.map((function(e){return Object(h.jsx)(b,{id:e.id,year:e.year,title:e.title,summary:e.summary,poster:e.medium_cover_image,genres:e.genres},e.id)}))})})}}]),s}(n.a.Component));i.a.render(Object(h.jsx)(O,{}),document.getElementById("root"))}},[[46,1,2]]]);
//# sourceMappingURL=main.0c19a638.chunk.js.map