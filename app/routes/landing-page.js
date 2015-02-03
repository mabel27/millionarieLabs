// app/routes/landing-page.js

import Ember from 'ember';
import ResetScroll from '../mixins/reset-scroll';

export default Ember.Route.extend(ResetScroll, {
  activate: function() {
    this._super.apply(this, arguments);
  }
});