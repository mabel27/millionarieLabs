// app/controllers/users/home.js

import Ember from 'ember';

export default Ember.Controller.extend({

	userName: '',
	selectedUsers: [],
<<<<<<< HEAD
    balance: '',
    credit: '',
    
=======
	selectedFamily: '',
>>>>>>> 6052fbf25dfa14b40b4ef6407d74f2d18c6e9227
	actions: {

		searchUser: function ()
		{
			var self = this;
			var userN = self.get('userName');
			var tempUsers = self.get('selectedUsers');
			var onSuccess = function(url) {
			  return new Promise(function(resolve, reject){
			    var xhr = new XMLHttpRequest();

			    xhr.open('GET', url);
			    xhr.onreadystatechange = handler;
			    xhr.responseType = 'json';
			    xhr.setRequestHeader('Accept', 'application/json');
			    xhr.send();

			    function handler() {
			      if (this.readyState === this.DONE) {
			        if (this.status === 200) {
			          resolve(this.response);
			        } else {
			          reject(new Error('getJSON: `' + url + '` failed with status: [' + this.status + ']'));
			        }
			      }
			    }
			  });
			};

			onSuccess('http://localhost:3000/v1/users?user_name=' + userN).then(function(json) {
			
				
			  if(-1 === Ember.$.inArray(userN, tempUsers))
			  {
			  	alert('Found user, search for more');
			  	tempUsers.pushObject(userN);
		
			  	self.set('selectedUsers', tempUsers);
			  }
			  else 
			  {
			  	alert('Already selected');
			  }
			  
			}, function(reason) {
			 alert('fail');
			});		
		},
		clearUserField: function ()
		{
			this.set('selectedUsers', []);
		},
		addChildToFamily: function ()
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