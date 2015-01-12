import Ember from 'ember';
import config from './config/environment';

var Router = Ember.Router.extend({
  location: config.locationType
});

Router.map(function() {
  this.resource('landingPage', { path: '/' }, function() {
    this.resource('blog', function() {
      this.route('1');
    });
  });
});

export default Router;
