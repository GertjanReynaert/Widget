function TodoList(properties) {
  var title = properties.title || 'List title';
  var items = properties.items || [];
}

var model = new Model();
model.extend('TodoList', TodoList);
