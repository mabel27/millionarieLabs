import DS from 'ember-data';

var Chore = DS.Model.extend({
    title: DS.attr('string'),
    isCompleted: DS.attr('boolean')
});

export default Chore;