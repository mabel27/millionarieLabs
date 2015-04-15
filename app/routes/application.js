// app/routes/application.js

import Ember from 'ember';
import ApplicationRouteMixin from 'simple-auth/mixins/application-route-mixin';

export
default Ember.Route.extend(ApplicationRouteMixin, {
  actions: {
    sessionAuthenticationFailed: function (error) {
      this.controllerFor('signIn').set('signInErrorMessage', error.message);
    },

    invalidateSession: function () {
      this.get('session').invalidate();
    },

    sessionAuthenticationSucceeded: function () {
      var role = this.get('session').get('user_role');
      var family = this.get('session').get('has_family');

      if (role === 'parent' && family === true) {

          this.transitionTo('users.home');
        }
        else
        {
          this.transitionTo('users.family');
          
      }if( role === 'child'){
        this.transitionTo('child.home');
      }
    }


  }
});