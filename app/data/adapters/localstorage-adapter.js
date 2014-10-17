function LSAdapter(appName){
  this.appPrefix = appName;

  this.findIndexes = function() {
    return JSON.parse(localStorage.getItem(this.appPrefix + '_indexes')) || [];
  };

  this.persistIndexes = function(indexes) {
    localStorage.setItem(this.appPrefix + '_indexes', JSON.stringify(indexes));
  };

  this.getNewIdForModel = function(model){
    var indexes = this.findIndexes();
    for(var i = 0; i < indexes.length; i++) {
      if(indexes[i].model === model) {
        indexes[i].index = ++indexes[i].index;

        this.persistIndexes(indexes);
        return indexes[i].index;
      }
    }

    indexes.push({
      model: model,
      index: 0
    });
    this.persistIndexes(indexes);

    return 0;
  };
}

LSAdapter.prototype.find = function(model, id) {
  var table = this.appPrefix + model;
  var records = JSON.parse(localStorage.getItem(table));

  if (records && id) {
    for(var i = 0; i < this.records.length; i++) {
      if(this.records[i].id === id) {
        return this.records[i];
      }
    }
  }

  return records || [];
};

LSAdapter.prototype.create = function(model, object) {
  var newId = this.getNewIdForModel(model);
  object.id = newId;

  var records = this.find(model);
  records.push(object);

  var table = this.appPrefix + model;
  localStorage.setItem(table, JSON.stringify(records));

  return object;
};

LSAdapter.prototype.update = function(model, id, object) {
  var records = this.find(model);

  for(var i = 0; i < records.length; i++) {
    if( records[i].id === id) {
      object.id = id;
      records[i] = object;
      break;
    }
  }

  var table = this.appPrefix + model;
  localStorage.setItem(table, JSON.stringify(records));
};

LSAdapter.prototype.remove = function(model, id) {
  var records = this.find(model);

  for(var i = 0; i < records.length; i++) {
    if( records[i].id === id) {
      records.splice(i, 1);
      break;
    }
  }

  var table = this.appPrefix + model;
  localStorage.setItem(table, JSON.stringify(records));
};
