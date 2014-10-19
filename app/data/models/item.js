function Item(properties) {
  this.title = properties.title || 'Another title';
  this.checked = properties.checked || false;
}

var model = new Model();
model.extend('Item', Item);
