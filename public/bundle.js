(function e(t,n,r){function s(o,u){if(!n[o]){if(!t[o]){var a=typeof require=="function"&&require;if(!u&&a)return a(o,!0);if(i)return i(o,!0);var f=new Error("Cannot find module '"+o+"'");throw f.code="MODULE_NOT_FOUND",f}var l=n[o]={exports:{}};t[o][0].call(l.exports,function(e){var n=t[o][1][e];return s(n?n:e)},l,l.exports,e,t,n,r)}return n[o].exports}var i=typeof require=="function"&&require;for(var o=0;o<r.length;o++)s(r[o]);return s})({1:[function(require,module,exports){
// Define some components
var Foo = Vue.extend({
    template: '<p>This is foo!</p>'
})

var Bar = Vue.extend({
	template: '<p>This is bar!</p>'
})

// The router needs a root component to render.
// For demo purposes, we will just use an empty one
// because we are using the HTML as the app template.
var App = Vue.extend({
	data: function () {
    	return { message: 'default' }
  	},
  	methods: {
    notify: function () {
      console.log(this.message);
    }
  }
})

// Create a router instance.
var router = new VueRouter({
  history: true,
  saveScrollPosition: true
});

// Define some routes.
// Each route should map to a component. The "component" can
// either be an actual component constructor created via
// Vue.extend(), or just a component options object.
router.map({
    '/foo': {
        component: Foo
    },
    '/bar': {
        component: Bar
    },
    '/': {
        component: require('./components/home.vue')
    },
})

// Now we can start the app!
// The router will create an instance of App and mount to
// the element matching the selector #app.
router.start(App, '#app')

},{"./components/home.vue":2}],2:[function(require,module,exports){
module.exports = {
  template: 'this is {{msg}}',
  replace: true,
  data: function () {
    return {
      msg: 'I am component A!'
    }
  }
}
},{}]},{},[1]);
