var Item = function(title, checked) {
  this.id = 0;
  this.modelName = 'Item';
  this.title = title || 'Another title';
  this.checked = checked || false;

  this.toJSON = function() {
    return {
      id: this.id,
      modelName: this.modelName,
      title: this.title,
      checked: this.checked
    };
  };
};
