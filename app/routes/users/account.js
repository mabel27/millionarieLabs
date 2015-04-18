// app/routes/account.js

import Ember from 'ember';
import AuthenticatedRouteMixin from 'simple-auth/mixins/authenticated-route-mixin';

export default Ember.Route.extend(AuthenticatedRouteMixin, {
  model: function () {
    return this.store.find('account');
  },
  setupController: function(controller, model) {
    this._super(controller, model);
    controller.set('account', this.store.createRecord('account', {}));
  }
});