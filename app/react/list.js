/** @jsx React.DOM */
var List = React.createClass({
  getInitialState: function() {
    return {
      list: this.props.list,
      title: this.props.list.title,
      items: this.props.store.find('Item'),
      changed: false
    };
  },

  componentDidUpdate: function() {
    if (this.state.changed) {
      var list = this.state.list;
      list.title = this.state.title;
      list.items = this.state.items;

      this.props.store.update('List', list.id, list);
      this.setState({changed: false});
    }
  },

  handleValue: function(e) {
    this.setState({ tempItemValue: e.target.value });
  },

  addItem: function(e) {
    if (e.keyCode === 13 && this.state.tempItemValue) {
    var newItem = new Item(this.state.tempItemValue);
      newItem = this.props.store.createRecord('Item', newItem);
      var items = this.state.items;
      items.push(newItem);
      this.setState({
        items: items,
        tempItemValue: '',
        changed: true
      });
    }
  },

  removeItem: function(index) {
    var items = this.state.items;
    items.splice(index, 1);
    this.setState({
      items: items,
      changed: true
    });
  },

  handleTitleValue: function(e) {
    this.setState({ title: e.target.value });
  },

  saveListTitle: function(e) {
    if (e.keyCode === 13) {
      this.setState({ changed: true});
      e.target.blur();
    }
  },

  deleteMe: function() {
    this.props.store.destroyRecord('List', this.state.list.id);
    this.props.deleteList();
  },

  compareItems:function(item1, item2) {
    if(item1.checked === item2.checked) {
      return 0;
    } else if (item1.checked && !item2.checked) {
      return -1;
    } else if (!item1.checked && item2.checked) {
      return 1;
    }
  },

  render: function() {
    var items = this.state.items.sort(this.compareItems);
    items = items.map(function(item, index) {
      var clickHandler = this.removeItem.bind(this, index);
      return <Item key={item.id} item={item} store={this.props.store} deleteItem={clickHandler}/>;
    }, this);

    return (
      <div className="list">
        <header>
          <input className="list-title" type="text" onKeyDown={this.saveListTitle} onChange={this.handleTitleValue} value={this.state.title}/>
          <div className="delete-list btn danger" onClick={this.deleteMe}>X</div>
        </header>
        <div className="items">
          {items}
          <div className="item add-item">
            <input type="text" onKeyDown={this.addItem} onChange={this.handleValue} value={this.state.tempItemValue} placeholder="New item"/>
          </div>
        </div>
      </div>
    );
  }
});
