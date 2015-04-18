import DS from 'ember-data';

var Account = DS.Model.extend({
    userName: DS.attr('string'),
    checkBalance: DS.attr('number'),
    creditBalance: DS.attr('number')
});

export default Account;