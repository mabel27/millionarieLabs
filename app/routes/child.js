// app/routes/child.js

import Ember from 'ember';
import AuthenticatedRouteMixin from 'simple-auth/mixins/authenticated-route-mixin';

export
default Ember.Route.extend(AuthenticatedRouteMixin, {

  beforeModel: function () {

    var role = this.get('session').get('user_role');

    if (role === 'parent')

      this.transitionTo('users.home');

  }

});