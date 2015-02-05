// app/mixins/reset-scroll.js

import Ember from 'ember';

export default Ember.Mixin.create({
  activate: function() {
    this._super();
    window.scrollTo(0,0);
  }
});