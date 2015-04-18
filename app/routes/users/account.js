// app/routes/account.js

import Ember from 'ember';
import AuthenticatedRouteMixin from 'simple-auth/mixins/authenticated-route-mixin';

export default Ember.Route.extend(AuthenticatedRouteMixin, {
  model: function () {
    //return this.store.find('account');
  },
  setupController: function(controller, model) {
    this._super(controller, model);
    controller.set('account', this.store.createRecord('account', {}));
    
     Ember.$.getJSON('http://localhost:3000/v1/accounts', function( data ) {
    	var accountSelection = [];
		data = data['accounts'];
    
		Ember.$.each(data, function(i, item) {
			
		    accountSelection.push(item);
		});
    	controller.set('accountSelection', accoutnsSelection);
    });
    
  }
});