// app/controllers/sign-in.js

import Ember from 'ember';
import LoginControllerMixin from 'simple-auth/mixins/login-controller-mixin';

export
default Ember.Controller.extend(LoginControllerMixin, {
  // specify Devise authenticator to be used
  authenticator: 'simple-auth-authenticator:devise',
  actions: {

    authenticate: function() {
      
      var data = this._super();
      return this.get('session').authenticate('authenticator', data);

    }
  }
});