// app/controllers/landingpage.js

import Ember from "ember";

export default Ember.Controller.extend({
  init: function(){
    window.fnames = [];
    window.ftypes = [];
    window.fnames[0]='EMAIL';
    window.ftypes[0]='email';
    window.fnames[1]='FNAME';
    window.ftypes[1]='text';
    window.fnames[2]='LNAME';
    window.ftypes[2]='text';
  },
  $mcj:Ember.$.noConflict(true),
  navbar: {
    about: {
      text: 'About',
      route: '/',
      pageLocation: '#about',
      active: false,
      actions: ['transitionToRoute', 'scrollTo']
    },
    features: {
      text: 'Features',
      route: '/',
      pageLocation: '#portfolio',
      active: false,
      actions: ['transitionToRoute', 'scrollTo']
    },
    team: {
      text: 'Team',
      route: '/',
      pageLocation: '#team',
      active: false,
      actions: ['transitionToRoute', 'scrollTo']
    },
    blog: {
      text: 'blog',
      route: 'blog.index',
      pageLocation: '#page-top',
      active: false,
      actions: ['transitionToRoute', 'scrollTo']
    },
    signUp: {
      text: 'Sign Up',
      route: 'landingPage.signUp',
      pageLocation: '#page-top',
      active: false,
      actions: ['transitionToRoute', 'scrollTo']
    },
    signIn: {
      text: 'Sign In',
      route: 'landingPage.signIn',
      pageLocation: '#page-top',
      active: false,
      actions: ['transitionToRoute', 'scrollTo']
    }

  },
  actions: {
    scrollTo: function() {
      console.log('>>> Action scrollTo()');
    },
    transitionAndScroll: function(route, pageLocation) {
      this.send('transitionToRoute', route);
      this.send('scrollTo', pageLocation);
    }
  }
});