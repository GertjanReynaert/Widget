function FirebaseAdapter(url) {
  if(navigator.onLine) {
    this.ref = new Firebase(url);
  }
}

FirebaseAdapter.prototype.find = function(model, id) {
  console.error('FirebaseAdapter find method is not implemented!');
};

FirebaseAdapter.prototype.create = function(model, object) {
  var modelRef = this.ref.child(model);
  var result = modelRef.push(object);
  object.id = result.name();
  return object;
};

FirebaseAdapter.prototype.update = function(model, id, object) {
  var modelRef = this.ref.child(model + '/' + id);
  var result = modelRef.update(object);
};

FirebaseAdapter.prototype.remove = function(model, id) {
  console.error('FirebaseAdapter remove method is not implemented!');
};
