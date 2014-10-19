function TodoList(properties) {
  if(properties === undefined) properties = {};
  var title = properties.title || 'List title';
  var items = properties.items || [];
}

Model.extend('TodoList', TodoList);
