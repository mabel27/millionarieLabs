// app/views/blog.js

import Ember from 'ember';

export default Ember.View.extend({
  classNames: ['blog-page-top'],
  didInsertElement: function() {
    window.scrollTo(0, 0);
  }
});