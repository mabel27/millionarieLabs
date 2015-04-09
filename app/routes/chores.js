import Ember from 'ember';

export
default Ember.Route.extend({

  model: function () {
    return this.store.find('chore');

  },
  
  setupController: function(controller, model) {
    this._super(controller, model);
    controller.set('chore', this.store.createRecord('chore', {}));
  },
  
  

  actions: {
    
    createChore: function(){
      
      alert('hellooo');   
    }

  }


});