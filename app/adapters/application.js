import DS from 'ember-data';

var ApplicationAdapter = DS.RESTAdapter.extend({
  host: 'http://localhost:3000',
  namespace: 'v1'
});

export default ApplicationAdapter;

