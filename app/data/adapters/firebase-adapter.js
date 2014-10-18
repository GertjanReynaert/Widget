function FirebaseAdapter(url) {
  this.ref = new Firebase(url);
}

FirebaseAdapter.prototype.find = function(model, id) {
  console.error('LSAdapter find method is not implemented!');
};

FirebaseAdapter.prototype.createRecord = function(model, object) {
  console.error('LSAdapter createRecord method is not implemented!');
};

FirebaseAdapter.prototype.update = function(model, id, object) {
  console.error('LSAdapter update method is not implemented!');
};

FirebaseAdapter.prototype.destroyRecord = function(model, id) {
  console.error('LSAdapter destroyRecord method is not implemented!');
};
