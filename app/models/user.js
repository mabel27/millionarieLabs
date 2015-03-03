import DS from 'ember-data';

var User = DS.Model.extend({
  
  userName: DS.attr('string'),
  email: DS.attr('string'),
  password: DS.attr('string'),
  passwordConfirmation: DS.attr('string'),
  role: DS.attr('string')                   
  
});

export default User;
