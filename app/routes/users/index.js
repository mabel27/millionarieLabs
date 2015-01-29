// app/models/users/index.js

import Ember from 'ember';

export default Ember.Route.extend({
  model: function() {
    return this.store.find('user',1);
  }
});
