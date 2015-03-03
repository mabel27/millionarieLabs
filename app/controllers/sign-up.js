// app/controllers/sign-up.js

import Ember from 'ember';

export default Ember.Controller.extend({
  userName: '',
  email: '',
  password: '',
  passwordConfirmation: '',
  role: ['parent','child'],
  selectedRole: '',
  
//  user: this.store.createRecord('user',{}),
  actions: {
    createUser: function () {
      this.set('user.userName',this.get('userName'));
      this.set('user.email',this.get('email'));
      this.set('user.password',this.get('password'));
      this.set('user.passwordConfirmation',this.get('passwordConfirmation'));
      this.set('user.role', this.get('selectedRole'));
      this.get('user').save().then(function(){alert("Sucessful ");},function(response){alert("dwq");});
    }
  }

});