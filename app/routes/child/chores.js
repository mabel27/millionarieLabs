import Ember from 'ember';

export
default Ember.Route.extend({

  model: function () {
    return this.store.find('chore');

  },
  

  actions: {
    
    createChore: function(){
      
      alert('hellooo');   
    },

  
setupController: function(controller, model) {
    this._super(controller, model);
    controller.set('chores', this.store.createRecord('chore', {}));
  }
                           }

});