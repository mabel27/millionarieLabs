// app/adapters/application.js

import DS from 'ember-data';

export default DS.ActiveModelAdapter.extend({
  host: 'https://millionaire-labs.herokuapp.com',
  namespace: 'v1'
});
