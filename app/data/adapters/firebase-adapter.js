function FirebaseAdapter(url) {
  if(navigator.onLine) {
    this.ref = new Firebase(url);
  }
}

FirebaseAdapter.prototype.find = function(model, id) {
  console.error('FirebaseAdapter find method is not implemented!');
};

FirebaseAdapter.prototype.create = function(model, object) {
  console.error('FirebaseAdapter create method is not implemented!');
};

FirebaseAdapter.prototype.update = function(model, id, object) {
  console.error('FirebaseAdapter update method is not implemented!');
};

FirebaseAdapter.prototype.remove = function(model, id) {
  console.error('FirebaseAdapter remove method is not implemented!');
};
