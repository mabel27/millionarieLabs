import DS from 'ember-data';

var UserFamily = DS.Model.extend({
	familyName: DS.attr('string'),
	selectedUsers: DS.attr('array')
});

export default UserFamily;
