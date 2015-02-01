import DS from 'ember-data';

var User = DS.Model.extend({
  // id: DS.attr('number'),
  email: DS.attr('string')
});

export default User;
