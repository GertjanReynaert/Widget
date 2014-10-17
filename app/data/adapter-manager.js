function AdapterManager() {
  this.adapters = [];
}

AdapterManager.prototype.registerAdapter = function(adapter, rules) {
  this.adapters.push({
    adapter: adapter,
    rules: rules
  });
};

AdapterManager.prototype.getAdapter = function() {
  for(var i = 0; i < this.adapters.length; i++) {
    if((this.adapters[i].rules === undefined) || this.adapters[i].rules()) {
      return this.adapters[i].adapter;
    }
  }

  return new LSAdapter();
};
