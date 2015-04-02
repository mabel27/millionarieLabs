// app/controllers/sign-up.js

import Ember from 'ember';

export default Ember.Controller.extend({
  userName: '',
  email: null,
  password: '',
  passwordConfirmation: '',
  role: ['parent','child'],
  selectedRole: '',
  selectedQuestion1: null,
  selectedQuestion2: null,
  answerQuestion1: '',
  answerQuestion2: '',
  
//  user: this.store.createRecord('user',{}),
  actions: {
    createUser: function () {
      var self = this;
      var onSuccess = function() {
        alert('User has been created, please sign in!')
        self.transitionToRoute('signIn');
      };

      var onFail = function(response) {
        // deal with the failure here
      };
      var role = this.get('selectedRole'),
      email = 'parent' === role ? this.get('email') : null;
      this.set('user.userName',this.get('userName'));
      this.set('user.email',email);
      this.set('user.password',this.get('password'));
      this.set('user.passwordConfirmation',this.get('passwordConfirmation'));
      this.set('user.role', this.get('selectedRole'));
      this.set('user.questionOne', this.get('selectedQuestion1'));
      this.set('user.answerOne', this.get('answerQuestion1') || '');
      this.set('user.questionTwo', this.get('selectedQuestion2'));
      this.set('user.answerTwo', this.get('answerQuestion2') || '');
      this.get('user').save().then(onSuccess,onFail);
    }
  },
  typeSelected: function()
  {

    var email = Ember.$('#email'),
    questionSection = Ember.$('#SecuritySection');



    if(this.selectedRole === 'parent')
    {
      email.show();
      questionSection.hide();
    }
    else if(this.selectedRole === 'child')
    {
      email.hide();
      questionSection.show();
    }
    else 
    {
      email.hide();
      questionSection.hide();
    }
  }.observes('selectedRole')
});