// app/views/application.js

import Ember from 'ember';

export default Ember.View.extend({
  tagName: 'div',
  classNames: ['index'],
  attributeBindings: ['id'],
  id: 'page-top'
});