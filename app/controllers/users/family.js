// app/controllers/users/family.js

import Ember from 'ember';

export default Ember.Controller.extend({
	familyName: '',
	actions: {

		createFamily: function ()
		{
          var self = this;
			var onSuccess = function() {
	        alert('Family has been created!');
	        self.transitionToRoute('users.home');
	      };

	      var onFail = function(response) {
	        // deal with the failure here
	      };
      		this.set('family.familyName', this.get('familyName'));
      		this.get('family').save().then(onSuccess,onFail);
		}
	}
});