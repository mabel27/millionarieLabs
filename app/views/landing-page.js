// app/views/landing-page.js

import Ember from 'ember';

export default Ember.View.extend({
  actions: {
    transitionAndScroll: function(route, pageLocation) {

      this.get('controller').send('transitionToRoute', route);
      this.send('scrollTo', pageLocation);
    },
    scrollTo: function(pageLocation) {
      console.log('>>> try to scroll to top');
      console.log('>>> $().scrollTop() ' + this.$().offset().top);
      this.$().animate({
        scrollTop: this.$(pageLocation).offset().top
      });
    }
  }
});