(this.webpackJsonpcalculator=this.webpackJsonpcalculator||[]).push([[0],[,,,,,,,,function(module,__webpack_exports__,__webpack_require__){"use strict";var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__(0),react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default=__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__),_home_danbeaumont95_Documents_Javascript_projects_react_calculator_calculator_node_modules_babel_runtime_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__(2),_home_danbeaumont95_Documents_Javascript_projects_react_calculator_calculator_node_modules_babel_runtime_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_2__=__webpack_require__(3),_home_danbeaumont95_Documents_Javascript_projects_react_calculator_calculator_node_modules_babel_runtime_helpers_esm_inherits__WEBPACK_IMPORTED_MODULE_3__=__webpack_require__(5),_home_danbeaumont95_Documents_Javascript_projects_react_calculator_calculator_node_modules_babel_runtime_helpers_esm_createSuper__WEBPACK_IMPORTED_MODULE_4__=__webpack_require__(4),react__WEBPACK_IMPORTED_MODULE_5__=__webpack_require__(1),react__WEBPACK_IMPORTED_MODULE_5___default=__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_5__),_App_css__WEBPACK_IMPORTED_MODULE_6__=__webpack_require__(18),_App_css__WEBPACK_IMPORTED_MODULE_6___default=__webpack_require__.n(_App_css__WEBPACK_IMPORTED_MODULE_6__),_Components_KeyPadComponent__WEBPACK_IMPORTED_MODULE_7__=__webpack_require__(9),_Components_ResultComponent__WEBPACK_IMPORTED_MODULE_8__=__webpack_require__(10),App=function(_Component){Object(_home_danbeaumont95_Documents_Javascript_projects_react_calculator_calculator_node_modules_babel_runtime_helpers_esm_inherits__WEBPACK_IMPORTED_MODULE_3__.a)(App,_Component);var _super=Object(_home_danbeaumont95_Documents_Javascript_projects_react_calculator_calculator_node_modules_babel_runtime_helpers_esm_createSuper__WEBPACK_IMPORTED_MODULE_4__.a)(App);function App(){var _this;return Object(_home_danbeaumont95_Documents_Javascript_projects_react_calculator_calculator_node_modules_babel_runtime_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_1__.a)(this,App),_this=_super.call(this),_this.onClick=function(_){"="===_?_this.calculate():"C"===_?_this.reset():"CE"===_?_this.backspace():_this.setState({result:_this.state.result+_})},_this.calculate=function(){try{_this.setState({result:(eval(_this.state.result)||"")+""})}catch(e){_this.setState({result:"error"})}},_this.reset=function(){_this.setState({result:""})},_this.backspace=function(){_this.setState({result:_this.state.result.slice(0,-1)})},_this.state={result:""},_this}return Object(_home_danbeaumont95_Documents_Javascript_projects_react_calculator_calculator_node_modules_babel_runtime_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_2__.a)(App,[{key:"render",value:function(){return Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("div",{children:Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div",{className:"calculator-body",children:[Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("h1",{children:"Simple Calculator"}),Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_Components_ResultComponent__WEBPACK_IMPORTED_MODULE_8__.a,{result:this.state.result}),Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_Components_KeyPadComponent__WEBPACK_IMPORTED_MODULE_7__.a,{onClick:this.onClick})]})})}}]),App}(react__WEBPACK_IMPORTED_MODULE_5__.Component);__webpack_exports__.a=App},function(_,e,t){"use strict";var n=t(0),r=t(2),c=t(3),a=t(5),o=t(4),s=t(1),u=function(_){Object(a.a)(t,_);var e=Object(o.a)(t);function t(){return Object(r.a)(this,t),e.apply(this,arguments)}return Object(c.a)(t,[{key:"render",value:function(){var _=this;return Object(n.jsxs)("div",{className:"button",children:[Object(n.jsx)("button",{name:"(",onClick:function(e){return _.props.onClick(e.target.name)},children:"("}),Object(n.jsx)("button",{name:"CE",onClick:function(e){return _.props.onClick(e.target.name)},children:"CE"}),Object(n.jsx)("button",{name:")",onClick:function(e){return _.props.onClick(e.target.name)},children:")"}),Object(n.jsx)("button",{name:"C",onClick:function(e){return _.props.onClick(e.target.name)},children:"C"}),Object(n.jsx)("button",{name:"1",onClick:function(e){return _.props.onClick(e.target.name)},children:"1"}),Object(n.jsx)("button",{name:"2",onClick:function(e){return _.props.onClick(e.target.name)},children:"2"}),Object(n.jsx)("button",{name:"3",onClick:function(e){return _.props.onClick(e.target.name)},children:"3"}),Object(n.jsx)("button",{name:"+",onClick:function(e){return _.props.onClick(e.target.name)},children:"+"}),Object(n.jsx)("button",{name:"4",onClick:function(e){return _.props.onClick(e.target.name)},children:"4"}),Object(n.jsx)("button",{name:"5",onClick:function(e){return _.props.onClick(e.target.name)},children:"5"}),Object(n.jsx)("button",{name:"6",onClick:function(e){return _.props.onClick(e.target.name)},children:"6"}),Object(n.jsx)("button",{name:"-",onClick:function(e){return _.props.onClick(e.target.name)},children:"-"}),Object(n.jsx)("button",{name:"7",onClick:function(e){return _.props.onClick(e.target.name)},children:"7"}),Object(n.jsx)("button",{name:"8",onClick:function(e){return _.props.onClick(e.target.name)},children:"8"}),Object(n.jsx)("button",{name:"9",onClick:function(e){return _.props.onClick(e.target.name)},children:"9"}),Object(n.jsx)("button",{name:"*",onClick:function(e){return _.props.onClick(e.target.name)},children:"*"}),Object(n.jsx)("button",{name:".",onClick:function(e){return _.props.onClick(e.target.name)},children:"."}),Object(n.jsx)("button",{name:"0",onClick:function(e){return _.props.onClick(e.target.name)},children:"0"}),Object(n.jsx)("button",{name:"=",onClick:function(e){return _.props.onClick(e.target.name)},children:"="}),Object(n.jsx)("button",{name:"/",onClick:function(e){return _.props.onClick(e.target.name)},children:"/"})]})}}]),t}(s.Component);e.a=u},function(_,e,t){"use strict";var n=t(0),r=t(2),c=t(3),a=t(5),o=t(4),s=t(1),u=function(_){Object(a.a)(t,_);var e=Object(o.a)(t);function t(){return Object(r.a)(this,t),e.apply(this,arguments)}return Object(c.a)(t,[{key:"render",value:function(){var _=this.props.result;return Object(n.jsx)("div",{className:"result",children:Object(n.jsx)("p",{children:_})})}}]),t}(s.Component);e.a=u},function(_,e,t){"use strict";t.r(e);var n=t(0),r=t(1),c=t.n(r),a=t(7),o=t.n(a),s=(t(17),t(8));o.a.render(Object(n.jsx)(c.a.StrictMode,{children:Object(n.jsx)(s.a,{})}),document.getElementById("root"))},,,,,,function(_,e,t){},function(_,e,t){}],[[11,1,2]]]);
//# sourceMappingURL=main.0c9907df.chunk.js.map