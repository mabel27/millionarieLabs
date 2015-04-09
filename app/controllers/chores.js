import Ember from 'ember';

export default Ember.ArrayController.extend ({
  
  newTitle: '',
  isCompleted: false,

  actions: {
    
    createChore: function(){
      
      alert('hellooo');   
    }

  }


});