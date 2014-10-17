function Serializer() {
  this.serializers = [];
}

Serializer.prototype.registerSerializer = function(serializer) {
  if (serializer) {
    this.serializers.push({
      model: serializer.modelName,
      serializer: serializer
    });
  }
};

Serializer.prototype.serialize = function(model, object) {
  for(var i = 0; i < this.serializers.length; i++) {
    if (this.serializers[i].model === model) {
      var serializer = this.serializers[i].serializer;
      return serializer.serialize(object);
    }
  }
  return object;
};

Serializer.prototype.deserialize = function(model, object) {
  for(var i = 0; i < this.serializers.length; i++) {
    if (this.serializers[i].model === model) {
      var serializer = this.serializers[i].serializer;
      return serializer.deserialize(object);
    }
  }
  return object;
};
