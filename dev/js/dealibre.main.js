import chat from "../components/chat.vue"
//var chat = require('../components/chat.vue');

var routes = [
   {
       path: "/",
       component: chat
   }
]

const router = new VueRouter({
   routes
});

var app = new Vue({
   el: "#ungov",
   router: router,
})
