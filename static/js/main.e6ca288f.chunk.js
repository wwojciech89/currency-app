(this["webpackJsonpcurrency-app"]=this["webpackJsonpcurrency-app"]||[]).push([[0],{21:function(e,r,t){e.exports={wrapper:"FavoritesWrapper_wrapper__2SFUb"}},23:function(e,r,t){e.exports={wrapper:"CurrencyWrapper_wrapper__291HG"}},29:function(e,r,t){},3:function(e,r,t){e.exports={wrapper:"ProfileWrapper_wrapper__80Frl",data__container:"ProfileWrapper_data__container__3KALK",name:"ProfileWrapper_name__i6YzE",city:"ProfileWrapper_city__2KvL0",picture__container:"ProfileWrapper_picture__container__1MfQA",background__picture:"ProfileWrapper_background__picture__4T4u_",picture:"ProfileWrapper_picture__3VlHC"}},30:function(e,r,t){},4:function(e,r,t){e.exports={cell__wrapper:"CurrencyCell_cell__wrapper__3zuNo",name:"CurrencyCell_name__22St6",code:"CurrencyCell_code__2UZYJ",mid:"CurrencyCell_mid__koYUy",delete:"CurrencyCell_delete__8Dtrq"}},5:function(e,r,t){e.exports={element:"CurrencyElement_element__21lbY",name:"CurrencyElement_name__1wmAV",code:"CurrencyElement_code__25wfz",mid:"CurrencyElement_mid__2swT-",picture:"CurrencyElement_picture__1tpCe"}},51:function(e,r,t){"use strict";t.r(r);var c=t(1),n=t.n(c),a=t(20),i=t.n(a),s=(t(29),t(30),t(3)),o=t.n(s),u=t(0),l=function(){return Object(u.jsxs)("div",{className:o.a.wrapper,children:[Object(u.jsxs)("div",{className:o.a.data__container,children:[Object(u.jsx)("h1",{children:"Profile"}),Object(u.jsx)("p",{className:o.a.name,children:"John Doe"}),Object(u.jsx)("p",{className:o.a.city,children:"Gda\u0144sk"})]}),Object(u.jsx)("div",{className:o.a.picture__container,children:Object(u.jsx)("div",{className:o.a.background__picture,children:Object(u.jsx)("div",{className:o.a.picture})})})]})},p=t(21),d=t.n(p),j=t(4),_=t.n(j),b=t(24),f=t(9),O=t(7),m=t.n(O),v=t(11),x=t(22),h=t.n(x);function A(e){return C.apply(this,arguments)}function C(){return(C=Object(v.a)(m.a.mark((function e(r){var t,c;return m.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,h.a.get(r);case 2:return t=e.sent,c=t.data[0].rates,e.abrupt("return",c);case 5:case"end":return e.stop()}}),e)})))).apply(this,arguments)}var w=Object(c.createContext)(),N=function(e){var r=e.children,t=Object(c.useState)([]),n=Object(f.a)(t,2),a=n[0],i=n[1];return Object(c.useEffect)(Object(v.a)(m.a.mark((function e(){return m.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.t0=i,e.next=3,A("http://api.nbp.pl/api/exchangerates/tables/a/");case 3:e.t1=e.sent,(0,e.t0)(e.t1);case 5:case"end":return e.stop()}}),e)}))),[]),Object(u.jsx)(w.Provider,{value:a,children:r})},y=Object(c.createContext)(),g=function(e){var r=e.children,t=Object(c.useState)([]),n=Object(f.a)(t,2),a=n[0],i=n[1],s=Object(c.useContext)(w);Object(c.useEffect)((function(){var e=localStorage.getItem("favoriteCodes");(e=e?JSON.parse(e):[]).length&&i(s.filter((function(r){return e.includes(r.code)})))}),[s]);return Object(c.useEffect)((function(){if(a.length){var e=a.map((function(e){return e.code}));localStorage.setItem("favoriteCodes",JSON.stringify(e))}}),[a]),Object(u.jsx)(y.Provider,{value:{favorites:a,addFavorite:function(e){var r=Object(b.a)(a),t=s.find((function(r){return r.code===e}));r.push(t),i(r)},removeFavorite:function(e){var r=a.filter((function(r){return r.code!=e}));i(r)}},children:r})},k=function(e){var r=e.data,t=Object(c.useContext)(y).removeFavorite;return Object(u.jsxs)("div",{className:_.a.cell__wrapper,children:[Object(u.jsx)("p",{className:_.a.name,children:r.currency}),Object(u.jsx)("p",{className:_.a.code,children:r.code}),Object(u.jsx)("p",{className:_.a.mid,children:r.mid}),Object(u.jsx)("div",{className:_.a.delete,onClick:function(){window.confirm("jeste\u015b pewny?")&&t(r.code)},children:"Delete"})]})},S=function(){var e=Object(c.useContext)(y).favorites,r=null===e||void 0===e?void 0:e.map((function(e){return Object(u.jsx)(k,{data:e},e.code)}));return Object(u.jsxs)("div",{className:d.a.wrapper,children:[Object(u.jsx)("h3",{children:"Favorites Currency"}),r]})},E=t(23),H=t.n(E),L=t(5),P=t.n(L),W=function(e){var r=e.data,t=Object(c.useContext)(y),n=t.addFavorite,a=t.favorites;return Object(u.jsxs)("div",{className:P.a.element,children:[Object(u.jsx)("p",{className:P.a.name,children:r.currency}),Object(u.jsx)("p",{className:P.a.code,children:r.code}),Object(u.jsx)("p",{className:P.a.mid,children:r.mid}),!a.find((function(e){return e.code===r.code}))&&Object(u.jsx)("img",{className:P.a.picture,src:"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABgAAAAYCAYAAADgdz34AAAACXBIWXMAAA7EAAAOxAGVKw4bAAABzklEQVRIx7WVv0tbURiGn+/zEu9USpFOcm7/hEChDpGCTUTBrehkp1IIIp39Q4o4tGM6iKVkiQ45F0oLUoQ6ODiJxEuH4hCCU73RczokARVNrtj7Luee77zf854fw4WcJVcn5aT8yuNXgJfAU+AM+CnIxwk/8XUz2nQASydL2pb2a4+vAi+AR8Af4LsgG7GJv10LmD+ZL6SSbgBvh2zmS4HCMkBK+hlYHOL9NO7HV3einTQASCVdHwEHWOzSPR58j/C+O5dzB1SlklSmHe5Hxiv92x/DLGZFS4HDVTPCM4MHcrgVpfegeWlagckcA4wCLscAp0CSY0CiwG6OAbsqyFZedEG2NPThNnCUA/8o9OG2NqLGhSBrOex+rRE1LhSgmBbrQP0/8uvFbrHeC+prNpl9csnlL+DZA+GtMcaeN02zDaCDatM024ouAJ0HwDuKLgzg1wIArLGH4mWO3n/gvjoTL3PW2MOrRb3piqN4T9EZ4PQe8FNFZ+Io3ru5oLe5rbH7ik4BBxngB4pOWWP3b1vUu7qssa2AoATUhsBrAUHJGtu6yyBkUDkpv/H4D8DjfqkjyPvYxLVRvZkCACpJZdLh1nvH1lVr7O+svbnqH1f9jF76O+00AAAAAElFTkSuQmCC",alt:"heart",onClick:function(){n(r.code)}})]})},F=function(){var e=Object(c.useContext)(w).map((function(e){return Object(u.jsx)(W,{data:e},e.code)}));return Object(u.jsxs)("div",{className:H.a.wrapper,children:[Object(u.jsx)("h3",{children:"Currencies"}),e]})};var G=function(){return Object(u.jsx)(N,{children:Object(u.jsxs)(g,{children:[Object(u.jsx)(l,{}),Object(u.jsxs)("div",{className:"main__wrapper",children:[Object(u.jsx)(F,{}),Object(u.jsx)(S,{})]})]})})};i.a.render(Object(u.jsx)(n.a.StrictMode,{children:Object(u.jsx)(G,{})}),document.getElementById("root"))}},[[51,1,2]]]);
//# sourceMappingURL=main.e6ca288f.chunk.js.map