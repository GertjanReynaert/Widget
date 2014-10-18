var TodoList = function(title, items) {
  this.id = 0;
  this.modelName = 'TodoList';
  this.title = title || 'Another title';
  this.items = items || [];

  this.toJSON = function() {
    return {
      id: this.id,
      modelName: this.modelName,
      title: this.title,
      items: this.items
    };
  };
};
