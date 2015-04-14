// app/controllers/users/activity.js

import Ember from 'ember';

export default Ember.Controller.extend({

	selectedFamilyId: null,
		description: '',
	reward: 0,
	actions: {

		createActivity: function ()
		{
			var onSuccess = function() {
	        alert('Activity created');
	        //self.transitionToRoute('signIn');
	      };

	      var onFail = function(response) {
	        // deal with the failure here
	      };
      		this.set('activity.familyId', this.get('selectedFamilyId'));
      		this.set('activity.description', this.get('description'));
      		this.set('activity.reward', this.get('reward'));
      		this.get('activity').save().then(onSuccess,onFail);
		}
	}
});