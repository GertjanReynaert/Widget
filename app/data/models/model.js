function Model() {
  this.id = 0;
  this.modelName = 'model';

  this.save = function() {
    console.log('Model: save not yet implemented');
  };

  this.destroyRecord = function() {
    console.log('Model: destroyRecord not yet implemented');
  };
}

Model.prototype.extend = function(name, model) {
  this.modelName = name;
  model.prototype = new Model();
};

Model.extend = function(name, model) {
  var newModel = new Model();
  newModel.modelName = name;
  model.prototype = newModel;
};
