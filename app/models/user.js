import DS from 'ember-data';

var User = DS.Model.extend({

  username: DS.attr('string'),
  email: DS.attr('string'),
  password: DS.attr('string')

});

export default User;



