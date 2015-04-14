import DS from 'ember-data';

var Activity = DS.Model.extend({
	familyId: DS.attr('number'),
	description: DS.attr('string'),
  	reward: DS.attr('number')
 
});

export default Activity;
