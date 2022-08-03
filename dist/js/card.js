(()=>{"use strict";var e={744:(e,t)=>{t.Z=(e,t)=>{const r=e.__vccOpts||e;for(const[e,o]of t)r[e]=o;return r}}},t={};function r(o){var a=t[o];if(void 0!==a)return a.exports;var n=t[o]={exports:{}};return e[o](n,n.exports,r),n.exports}(()=>{const e=Vue;var t={key:0,class:"text-lg px-2 mb-2"},o={key:1,class:"w-full table-default",cellpadding:"0",cellspacing:"0","data-testid":"resource-table"},a={class:"group"},n={class:"text-left text-90 px-2 py-2 border-t border-gray-100 dark:border-gray-700 dark:bg-gray-800 group-hover:bg-gray-50 dark:group-hover:bg-gray-900"},l={key:0,class:"text-xs text-gray-400"},c={class:"td-fit text-right align-middle px-2 py-2 border-t border-gray-100 dark:border-gray-700 dark:bg-gray-800 group-hover:bg-gray-50 dark:group-hover:bg-gray-900"},s={class:"flex items-center justify-end space-x-0 text-gray-400"},d=["href"],i=[(0,e.createElementVNode)("svg",{xmlns:"http://www.w3.org/2000/svg",fill:"none",viewBox:"0 0 24 24",stroke:"currentColor",width:"24",height:"24",class:"inline-block",role:"presentation"},[(0,e.createElementVNode)("path",{"stroke-linecap":"round","stroke-linejoin":"round","stroke-width":"2",d:"M15 12a3 3 0 11-6 0 3 3 0 016 0z"}),(0,e.createElementVNode)("path",{"stroke-linecap":"round","stroke-linejoin":"round","stroke-width":"2",d:"M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274\n                                      4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z"})],-1)],p=["href"],g=[(0,e.createElementVNode)("svg",{xmlns:"http://www.w3.org/2000/svg",fill:"none",viewBox:"0 0 24 24",stroke:"currentColor",width:"24",height:"24",class:"inline-block",role:"presentation"},[(0,e.createElementVNode)("path",{"stroke-linecap":"round","stroke-linejoin":"round","stroke-width":"2",d:"M11 5H6a2 2 0 00-2 2v11a2 2 0 002 2h11a2 2 0 002-2v-5m-1.414-9.414a2 2 0\n                                      112.828 2.828L11.828 15H9v-2.828l8.586-8.586z"})],-1)],k={key:2,class:"px-2 text-xs text-gray-400"};const m={props:{card:{type:Object,required:!0}}};const u=(0,r(744).Z)(m,[["render",function(r,m,u,x,h,y){var b=(0,e.resolveComponent)("card",!0);return(0,e.openBlock)(),(0,e.createBlock)(b,{class:"px-4 py-4"},{default:(0,e.withCtx)((function(){return[u.card.title?((0,e.openBlock)(),(0,e.createElementBlock)("h2",t,(0,e.toDisplayString)(u.card.title),1)):(0,e.createCommentVNode)("",!0),u.card.rows.length?((0,e.openBlock)(),(0,e.createElementBlock)("table",o,[((0,e.openBlock)(!0),(0,e.createElementBlock)(e.Fragment,null,(0,e.renderList)(u.card.rows,(function(t){return(0,e.openBlock)(),(0,e.createElementBlock)("tr",a,[(0,e.createElementVNode)("td",n,[(0,e.createTextVNode)((0,e.toDisplayString)(t.title)+" ",1),t.subtitle?((0,e.openBlock)(),(0,e.createElementBlock)("div",l,(0,e.toDisplayString)(t.subtitle),1)):(0,e.createCommentVNode)("",!0)]),(0,e.createElementVNode)("td",c,[(0,e.createElementVNode)("div",s,[(0,e.createElementVNode)("a",{href:t.viewUrl,class:"toolbar-button hover:text-primary-500 px-2"},i,8,d),t.editUrl?((0,e.openBlock)(),(0,e.createElementBlock)("a",{key:0,href:t.editUrl,class:"toolbar-button hover:text-primary-500 px-2"},g,8,p)):(0,e.createCommentVNode)("",!0)])])])})),256))])):(0,e.createCommentVNode)("",!0),0===u.card.rows.length?((0,e.openBlock)(),(0,e.createElementBlock)("div",k,(0,e.toDisplayString)(r.__("There are no fields to display.")),1)):(0,e.createCommentVNode)("",!0)]})),_:1})}]]);Nova.booting((function(e){e.component("syehan-card-list",u)}))})()})();