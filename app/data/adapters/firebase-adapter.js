function FirebaseAdapter(url) {
  this.ref = new Firebase(url);
}

FirebaseAdapter.prototype.find = function(model, id) {
  console.error('LSAdapter find method is not implemented!');
};

FirebaseAdapter.prototype.create = function(model, object) {
  console.error('LSAdapter create method is not implemented!');
};

FirebaseAdapter.prototype.update = function(model, id, object) {
  console.error('LSAdapter update method is not implemented!');
};

FirebaseAdapter.prototype.remove = function(model, id) {
  console.error('LSAdapter remove method is not implemented!');
};
