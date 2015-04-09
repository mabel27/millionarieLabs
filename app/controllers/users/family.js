// app/controllers/users/family.js

import Ember from 'ember';

export default Ember.Controller.extend({
	familyName: '',
	actions: {

		createFamily: function ()
		{
			alert("dwqdwqdwqdqw");
			var onSuccess = function() {
	        alert('User has been created, please sign in!');
	        //self.transitionToRoute('signIn');
	      };

	      var onFail = function(response) {
	        // deal with the failure here
	      };
      		this.set('family.familyName', this.get('familyName'));
      		this.get('family').save().then(onSuccess,onFail);
		}
	}
});