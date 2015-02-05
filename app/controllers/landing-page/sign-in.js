// app/controllers/landing-page/sign-in.js

import Ember from 'ember';

export default Ember.Controller.extend({
  userName: '',
  password: '',
  
    actions: {
      
    login: function () {
      this.set('user.userName',this.get('userName'));
      this.set('user.password',this.get('password'));
      this.get('user').save();
    }
  }

});