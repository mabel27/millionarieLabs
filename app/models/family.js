import DS from 'ember-data';

var Family = DS.Model.extend({
	familyName: DS.attr('string')
});

export default Family;
