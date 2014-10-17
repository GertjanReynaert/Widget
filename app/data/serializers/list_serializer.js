var ListSerializer  = {
  modelName: 'List',

  serialize: function(object) {
    for(var key in object) {
      if(object[key] instanceof Array && object[key].length > 0){
        if(typeof object[key][0] === "object") {
          //serialize items as sideloaded
          break;
        }
      }
    }
    console.log('ListSerializer serialize is not implemented yet');
    return object;
  },

  deserialize: function(object) {
    console.log('ListSerializer deserialize is not implemented yet');
    return object;
  }
};
