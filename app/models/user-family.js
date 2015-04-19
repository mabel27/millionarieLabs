import DS from 'ember-data';

var UserFamily = DS.Model.extend({
	familyName: DS.attr('string'),
	userName: DS.attr('string')
});

export default UserFamily;
