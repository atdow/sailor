;/*!store/Page.ts*/
amis.define("c3d9fbb",function(e,t){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.PageStore=void 0;var i=e("2426036");t.PageStore=i.types.model("Page",{id:i.types.identifier,icon:"",path:"",label:"",schema:i.types.frozen({})}).views(function(){return{}}).actions(function(e){function t(t){e.schema=t}return{updateSchema:t}})});
;/*!store/index.ts*/
amis.define("8586189",function(e,t){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.MainStore=void 0;var n=e("849c8c1"),o=e("2426036"),i=e("c3d9fbb"),a=e("784eaf1"),c=1;t.MainStore=o.types.model("MainStore",{pages:o.types.optional(o.types.array(i.PageStore),[{id:""+c,path:"hello-world",label:"Hello world",icon:"fa fa-file",schema:{type:"page",title:"Hello world",body:"初始页面"}}]),theme:"default",asideFixed:!0,asideFolded:!1,offScreen:!1,addPageIsOpen:!1,preview:!1,isMobile:!1,schema:o.types.frozen()}).views(function(e){return{get fetcher(){return o.getEnv(e).fetcher},get notify(){return o.getEnv(e).notify},get alert(){return o.getEnv(e).alert},get copy(){return o.getEnv(e).copy}}}).actions(function(e){function t(){e.asideFolded=!e.asideFolded}function r(){e.asideFixed=!e.asideFixed}function d(){e.offScreen=!e.offScreen}function s(t){e.addPageIsOpen=t}function f(t){e.pages.push(i.PageStore.create(n.__assign(n.__assign({},t),{id:""+ ++c})))}function l(t){e.pages.splice(t,1)}function u(t){e.pages[t].updateSchema(e.schema)}function g(t){e.schema=t}function p(t){e.preview=t}function S(t){e.isMobile=t}return{toggleAsideFolded:t,toggleAsideFixed:r,toggleOffScreen:d,setAddPageIsOpen:s,addPage:f,removePageAt:l,updatePageSchemaAt:u,updateSchema:g,setPreview:p,setIsMobile:S,afterCreate:function(){if("undefined"!=typeof window&&window.localStorage){var t=window.localStorage.getItem("store");t&&o.applySnapshot(e,JSON.parse(t)),a.reaction(function(){return o.getSnapshot(e)},function(e){window.localStorage.setItem("store",JSON.stringify(e))})}}}})});
;/*!route/index.tsx*/
amis.define("11207ed",function(e,t){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var n=e("849c8c1"),r=n.__importDefault(e("cc4bbf0")),a=e("167c905"),l=e("f7998ad"),o=e("024943c"),u=r.default.lazy(function(){return Promise.resolve().then(function(){return new Promise(function(t){e(["816c31c"],function(e){t(n.__importStar(e))})})})}),c=r.default.lazy(function(){return Promise.resolve().then(function(){return new Promise(function(t){e(["218f7cb"],function(e){t(n.__importStar(e))})})})});t.default=o.observer(function(e){var t=e.store;return r.default.createElement(l.HashRouter,null,r.default.createElement("div",{className:"routes-wrapper"},r.default.createElement(a.ToastComponent,{key:"toast",position:"top-right",theme:t.theme}),r.default.createElement(a.AlertComponent,{key:"alert",theme:t.theme}),r.default.createElement(r.default.Suspense,{fallback:r.default.createElement(a.Spinner,{overlay:!0,className:"m-t-lg",size:"lg"})},r.default.createElement(l.Switch,null,r.default.createElement(l.Redirect,{to:"/hello-world",from:"/",exact:!0}),r.default.createElement(l.Route,{path:"/edit/:id",component:c}),r.default.createElement(l.Route,{component:u})))))})});
;/*!App.tsx*/
amis.define("4c5556c",function(t,e){"use strict";function r(){var t=window.store=c.MainStore.create({},{fetcher:function(t){var e=t.url,r=t.method,a=t.data,o=t.config;return o=o||{},o.headers=o.headers||{},o.withCredentials=!0,"post"!==r&&"put"!==r&&"patch"!==r?(a&&(o.params=a),i.default[r](e,o)):(a&&a instanceof FormData||!a||"string"==typeof a||a instanceof Blob||a instanceof ArrayBuffer||(a=JSON.stringify(a),o.headers["Content-Type"]="application/json"),i.default[r](e,a,o))},isCancel:function(t){return i.default.isCancel(t)},notify:function(t,e){f.toast[t]?f.toast[t](e,"error"===t?"系统错误":"系统消息"):console.warn("[Notify]",t,e),console.log("[notify]",t,e)},alert:f.alert,confirm:f.confirm,copy:function(t,e){void 0===e&&(e={});var r=l.default(t,e);return r&&(!e||e.shutup!==!0)&&f.toast.info("内容已拷贝到剪切板"),r}});return o.default.createElement(n.Provider,{store:t},o.default.createElement(u.default,{store:t}))}Object.defineProperty(e,"__esModule",{value:!0});var a=t("849c8c1"),o=a.__importDefault(t("cc4bbf0")),n=t("024943c"),f=t("167c905"),i=a.__importDefault(t("a5149e9")),c=t("8586189"),u=a.__importDefault(t("11207ed")),l=a.__importDefault(t("6f82c2d"));e.default=r});