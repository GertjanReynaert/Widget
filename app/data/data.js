function Data(adapters, serializers) {
  this.adapter = new AdapterManager();
  this.serializer = new Serializer();

  if (adapters) {
    for(var i = 0; i < adapters.length; i++) {
      if (adapters[i].rules) {
        this.adapter.registerAdapter(adapters[i].adapter, adapters[i].rules);
      } else {
        this.adapter.registerAdapter(adapters[i]);
      }
    }
  }

  if (serializers) {
    for(var j = 0; j < adapters.length; j++) {
      this.serializer.registerSerializer(serializers[j]);
    }
  }
}

Data.prototype.find = function(model, id) {
  var adapter = this.adapter.getAdapter();
  var result = adapter.find(model, id);

  return this.serializer.deserialize(model, result);
};

Data.prototype.all = function(model) {
  return this.find(model);
};

Data.prototype.createRecord = function(model, object) {
  object = this.serializer.serialize(model, object);

  var adapter = this.adapter.getAdapter();
  var result = adapter.createRecord(model, object);

  return this.serializer.deserialize(model, result);
};

Data.prototype.update = function(model, id, object) {
  object = this.serializer.serialize(model, object);

  var adapter = this.adapter.getAdapter();
  var result = adapter.update(model, id, object);

  return this.serializer.deserialize(model, result);
};

Data.prototype.destroyRecord = function(model, id) {
  var adapter = this.adapter.getAdapter();
  var result = adapter.destroyRecord(model, id);

  return this.serializer.deserialize(model, result);
};
