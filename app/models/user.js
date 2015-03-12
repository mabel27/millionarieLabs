import DS from 'ember-data';

var User = DS.Model.extend({
  
  userName: DS.attr('string'),
  email: DS.attr('string'),
  password: DS.attr('string'),
  passwordConfirmation: DS.attr('string'),
  role: DS.attr('string'),      
  questionOne: DS.attr('number'),
  answerOne: DS.attr('string'),
  questionTwo: DS.attr('number'),
  answerTwo: DS.attr('string')             
  
});

export default User;
