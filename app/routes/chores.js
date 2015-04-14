import Ember from 'ember';

export
default Ember.Route.extend({

  model: function () {
    return this.store.find('chore');

  },
  

  actions: {
    
    createChore: function(){
      
      alert('hellooo');   
    }

  }


});