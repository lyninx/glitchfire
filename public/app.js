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
