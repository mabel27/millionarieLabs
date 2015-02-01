// app/controllers/landing-page/sign-up.js

import Ember from 'ember';

export
default Ember.Controller.extend({

  userName: null,
  email: null,
  password: null,
  passwordConfirmation: null,

  actions: {
    createUser: function () {

      var user = {

        userName: this.get('userName'),
        email: this.get('email'),
        password: this.get('password'),
        passwordConfirmation: this.get('passwordConfirmation'),

      };

      user.save();

    }
  }

});

//   createUser: function() {
//     var user = new Feapp.User;
//     user.email = this.get('email');
//     user.userName = this.get('usernljlj');

//     user.save().then(function(response) {
//       ....
//     });
//   }
// },
// onKeyUp: function() {

// }