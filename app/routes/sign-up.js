// app/routes/sign-up.js

import Ember from 'ember';

export default Ember.Route.extend({
  model: function () {
    //return this.store.find('user');
  },
  setupController: function(controller, model) {
    this._super(controller, model);
    controller.set('user', this.store.createRecord('user', {}));
    Ember.$.getJSON('http://localhost:3000/v1/security_question', function( data ) {
    	var questionSelection = [];
		data = data['security_question'];
    
		Ember.$.each(data, function(i, item) {
			
		    questionSelection.push(item);
		});
    	controller.set('questionSelection', questionSelection);
    });
    
  }
});