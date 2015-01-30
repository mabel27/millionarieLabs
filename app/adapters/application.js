// app/adapters/application.js

import DS from 'ember-data';

var ApplicationAdapter = DS.RESTAdapter.extend({
  host: 'https://millionaire-labs.herokuapp.com',
  namespace: 'v1'
});

export default ApplicationAdapter;
