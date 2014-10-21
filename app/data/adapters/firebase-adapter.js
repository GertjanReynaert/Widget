function FirebaseAdapter(url) {
  if(navigator.onLine) {
    this.ref = new Firebase(url);
  }
}

FirebaseAdapter.prototype.find = function(model, id) {
  console.error('FirebaseAdapter find method is not implemented!');
  return;
  var childUrl = model + (id ? ('/' + id) : '');
  var modelRef = this.ref.child(childUrl);

  modelRef.on('value', function (snapshot) {
    var results = snapshot.val();
    for( result in results) {
      var item = results[result];
      console.log(item);
    }
    debugger;
  }, function (errorObject) {
    console.log('FirebaseAdapter: The read failed: ' + errorObject.code);
  });
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
