function Item(properties) {
  this.title = properties.title || 'Another title';
  this.checked = properties.checked || false;
}

Model.extend('Item', Item);
