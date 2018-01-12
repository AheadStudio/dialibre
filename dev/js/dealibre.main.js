//import home from "../components/home.vue";
//import search from "../components/search.vue";
//import chat from "../components/chat.vue";

// all path in site
var chat = require('../components/chat.vue');
var contacts = require('../components/contacts.vue');
var faq = require('../components/faq.vue');
var help = require('../components/help.vue');
var home = require('../components/home.vue');
var profile = require('../components/profile.vue');
var recover = require('../components/recover.vue');
var registerShareInit = require('../components/reg_share_1.vue');
var registerShareFile = require('../components/reg_share_file.vue');
var registerShareForm = require('../components/reg_share_form.vue');
var registerShareSuccess = require('../components/reg_share_success.vue');
var register = require('../components/register.vue');
var restore = require('../components/restore.vue');
var dashboard = require('../components/dashboard.vue');
var signin = require('../components/signin.vue');
var text = require('../components/text.vue');
// routes in site

const routes = [
    {
        path: '/',
        component: home
    },
    {
      path: '/projects/dealibre/pages/chat.html',
      component: chat
    },
    {
      path: '/projects/dealibre/pages/contacts.html',
      component: contacts
    },
    {
      path: '/projects/dealibre/pages/faq.html',
      component: faq
    },
    {
      path: '/projects/dealibre/pages/help.html',
      component: help
    },
    {
      path: '/projects/dealibre/pages/home.html',
      component: home
    },
    {
      path: '/projects/dealibre/pages/profile.html',
      component: profile
    },
    {
      path: '/projects/dealibre/pages/recover.html',
      component: recover
    },
    {
      path: '/projects/dealibre/pages/register_share_step1.html',
      component: registerShareInit
    },
    {
      path: '/projects/dealibre/pages/register_share_step2_files.html',
      component: registerShareFile
    },
    {
      path: '/projects/dealibre/pages/register_share_step2_form.html',
      component: registerShareForm
    },
    {
      path: '/projects/dealibre/pages/register_share_success.html',
      component: registerShareSuccess
    },
    {
      path: '/projects/dealibre/pages/register.html',
      component: register
    },
    {
      path: '/projects/dealibre/pages/restore.html',
      component: restore
    },
    {
      path: '/projects/dealibre/pages/dashboard.html',
      component: dashboard
    },
    {
      path: '/projects/dealibre/pages/signin.html',
      component: signin
    },
    {
      path: '/projects/dealibre/pages/text.html',
      component: text
    }
];
/*
const routes = [
    {
      path: '/pages/chat.html',
      component: chat
    },
    {
      path: '/pages/contacts.html',
      component: contacts
    },
    {
      path: '/',
      component: home
    },
    {
      path: '/pages/faq.html',
      component: faq
    },
    {
      path: '/pages/help.html',
      component: help
    },
    {
      path: '/pages/home.html',
      component: home
    },
    {
      path: '/pages/profile.html',
      component: profile
    },
    {
      path: '/pages/recover.html',
      component: recover
    },
    {
      path: '/pages/register_share_step1.html',
      component: registerShareInit
    },
    {
      path: '/pages/register_share_step2_files.html',
      component: registerShareFile
    },
    {
      path: '/pages/register_share_step2_form.html',
      component: registerShareForm
    },
    {
      path: '/pages/register_share_success.html',
      component: registerShareSuccess
    },
    {
      path: '/pages/register.html',
      component: register
    },
    {
      path: '/pages/restore.html',
      component: restore
    },
    {
      path: '/pages/dashboard.html',
      component: dashboard
    },
    {
      path: '/pages/signin.html',
      component: signin
    },
    {
      path: '/pages/text.html',
      component: text
    }
];
*/
const router = new VueRouter({
    mode: 'history',
    routes
});

var app = new Vue({
    el: "#dealibre-app",
    router
});
