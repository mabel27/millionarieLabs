import Ember from 'ember';
import AuthenticatedRouteMixin from 'simple-auth/mixins/authenticated-route-mixin';

export default Ember.Route.extend(AuthenticatedRouteMixin, {
  model: function () {
    //return this.store.find('user');
  },
  setupController: function(controller, model) {
    this._super(controller, model);
  	Ember.$.getJSON('http://localhost:3000/v1/families', function( data ) {
    	var familiesSelection = [];
		data = data['families'];
    
		Ember.$.each(data, function(i, item) {
			
		    familiesSelection.push(item);
		});
    	controller.set('familiesSelection', familiesSelection);
   
    });
       controller.set('userFamily', this.store.createRecord('user-family', {}));
      controller.set('family', this.store.createRecord('family', {}));
  }
});