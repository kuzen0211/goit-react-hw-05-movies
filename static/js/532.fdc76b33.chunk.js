"use strict";(self.webpackChunkreact_homework_template=self.webpackChunkreact_homework_template||[]).push([[532],{5345:function(e,t,r){r.d(t,{Fn:function(){return n},MY:function(){return u},bl:function(){return a},wR:function(){return c}});var n="669f3cb1f35b3303e76bb3fe15475760",a="https://api.themoviedb.org/3",c={TRENDING:"trending",SEARCH:"search"},u="https://image.tmdb.org/t/p/w500"},8170:function(e,t,r){r.d(t,{PA:function(){return v},T1:function(){return i},VQ:function(){return f},aO:function(){return p}});var n=r(5861),a=r(7757),c=r.n(a),u=r(3263),o=r(5345),s=r(7596),i=function(){var e=(0,n.Z)(c().mark((function e(t,r){var n,a;return c().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return n=t===o.wR.TRENDING?"".concat(o.bl,"/trending/movie/day?api_key=").concat(o.Fn):"".concat(o.bl,"/search/movie?api_key=").concat(o.Fn,"&query=").concat(r),e.prev=1,e.next=4,u.Z.get(n);case 4:if(200===(a=e.sent).status){e.next=7;break}throw new Error("The service is unavailable.");case 7:return e.abrupt("return",a.data);case 10:e.prev=10,e.t0=e.catch(1),s.Am.error(e.t0.message);case 13:case"end":return e.stop()}}),e,null,[[1,10]])})));return function(t,r){return e.apply(this,arguments)}}(),f=function(){var e=(0,n.Z)(c().mark((function e(t){var r,n;return c().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return r="".concat(o.bl,"/movie/").concat(t,"?api_key=").concat(o.Fn),e.prev=1,e.next=4,u.Z.get(r);case 4:if(200===(n=e.sent).status){e.next=7;break}throw new Error("The service is unavailable.");case 7:return e.abrupt("return",n.data);case 10:e.prev=10,e.t0=e.catch(1),s.Am.error(e.t0.message);case 13:case"end":return e.stop()}}),e,null,[[1,10]])})));return function(t){return e.apply(this,arguments)}}(),p=function(){var e=(0,n.Z)(c().mark((function e(t){var r,n;return c().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return r="".concat(o.bl,"/movie/").concat(t,"/credits?api_key=").concat(o.Fn),e.prev=1,e.next=4,u.Z.get(r);case 4:if(200===(n=e.sent).status){e.next=7;break}throw new Error("The service is unavailable.");case 7:return e.abrupt("return",n.data);case 10:e.prev=10,e.t0=e.catch(1),s.Am.error(e.t0.message);case 13:case"end":return e.stop()}}),e,null,[[1,10]])})));return function(t){return e.apply(this,arguments)}}(),v=function(){var e=(0,n.Z)(c().mark((function e(t){var r,n;return c().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return r="".concat(o.bl,"/movie/").concat(t,"/reviews?api_key=").concat(o.Fn),e.prev=1,e.next=4,u.Z.get(r);case 4:if(200===(n=e.sent).status){e.next=7;break}throw new Error("The service is unavailable.");case 7:return e.abrupt("return",n.data);case 10:e.prev=10,e.t0=e.catch(1),s.Am.error(e.t0.message);case 13:case"end":return e.stop()}}),e,null,[[1,10]])})));return function(t){return e.apply(this,arguments)}}()},532:function(e,t,r){r.r(t);var n=r(9439),a=r(2791),c=r(7689),u=r(8170),o=r(184);t.default=function(){var e=(0,c.UO)().movieId,t=(0,a.useState)([]),r=(0,n.Z)(t,2),s=r[0],i=r[1];return(0,a.useEffect)((function(){e&&(0,u.PA)(e).then((function(e){var t=e.results;i(t.map((function(e){return{author:e.author,content:e.content,id:e.id}})))})).catch((function(e){return e.message}))}),[e]),(0,o.jsx)(o.Fragment,{children:(0,o.jsx)("ul",{children:s.length?s.map((function(e){var t=e.author,r=e.content,n=e.id;return(0,o.jsxs)("li",{children:[(0,o.jsxs)("p",{children:["Author: ",t]}),(0,o.jsx)("p",{children:r})]},n)})):"We don't have any reviews for this movie."})})}}}]);
//# sourceMappingURL=532.fdc76b33.chunk.js.map