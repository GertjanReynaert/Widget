/** @jsx React.DOM */
var List = React.createClass({
  getInitialState: function() {
    return { items: this.props.items || [] };
  },

  handleValue: function(e) {
    this.setState({ tempItemValue: e.target.value });
  },

  addItem: function(e) {
    if (e.keyCode === 13) {
      newItem = {
        checked: false,
        text: this.state.tempItemValue,
      };
      var items = this.state.items;
      items.push(newItem);
      this.setState({ items: items });
      this.setState({ tempItemValue: '' });
    }
  },

  handleDelete: function(index) {
    var items = this.state.items;
    items.splice(index, 1);
    this.setState({ items: items });
  },

  render: function() {
    var items = this.state.items.map(function(item, index) {
      var clickHandler = this.handleDelete.bind(this, index);
      return <Item key={index} checked={item.checked} text={item.text} deleteItem={clickHandler}/>;
    }, this);

    return (
      <div className="list">
        <header>{this.props.title}</header>
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
