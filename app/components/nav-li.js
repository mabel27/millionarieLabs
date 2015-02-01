// app/components/nav-li.js

import Ember from 'ember';
export default Ember.Component.extend({
  tagName: 'li',
  classNames: ['page-scroll'],
  classNameBindings: ['active'],
  // active: pass in value,
  // dataTarge: pass in value,
  // route: pass in value,
  // onClickActions: pass in value (array)
  transitionToRoute: 'transitionToRoute',
  scrollTo: 'scrollTo',
  click: function() {
    var self = this;
    console.log(self.get('onClickActions'));
    _.each(self.get('onClickActions'), function(action){
      switch (action) {
        case 'transitionToRoute': {
          console.log('>>> switch case of  ' + action);
          self.sendAction(action, self.get('route'));
          break;
        }
        case 'scrollTo': {
          console.log('>>> switch case of  ' + action);
          self.sendAction(action, self.get('pageLocation'));
          break;
        }
      }
    });
  }
});