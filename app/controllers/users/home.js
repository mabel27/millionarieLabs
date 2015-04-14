// app/controllers/users/home.js

import Ember from 'ember';

export default Ember.Controller.extend({

	userName: '',
	selectedUsers: [],
	actions: {

		searchUser: function ()
		{
			var self = this;
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
    };
  });
}

onSuccess('http://localhost:3000/v1/users?user_name=sunjie1234').then(function(json) {
  alert('onSuccess');
}, function(reason) {
 alert('fail');
});		},
		clearUserField: function ()
		{
			
		},
		addChildToFamily: function ()
		{
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