// app/routes/family.js

import Ember from 'ember';
import AuthenticatedRouteMixin from 'simple-auth/mixins/authenticated-route-mixin';

export default Ember.Route.extend(AuthenticatedRouteMixin, {
  model: function () {
    //return this.store.find('user');
  },
  setupController: function(controller, model) {
    this._super(controller, model);
    controller.set('family', this.store.createRecord('family', {}));
  }
});