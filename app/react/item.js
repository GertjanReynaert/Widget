/** @jsx React.DOM */
var Item = React.createClass({
  getInitialState: function() {
    return {
      item: this.props.item,
      text: this.props.item.text,
      checked: this.props.item.checked,
      changed: false
    };
  },

  componentDidUpdate: function() {
    if (this.state.changed) {
      var item = this.state.item;
      item.text = this.state.text;
      item.checked = this.state.checked;

      this.props.store.update('Item', item.id, item);
      this.setState({changed: false});
    }
  },

  toggleCheckbox: function(checked) {
    this.setState({
      checked: checked,
      changed: true
    });
  },

  deleteMe: function() {
    this.props.store.destroyRecord('Item', this.state.item.id);
    this.props.deleteItem();
  },

  render: function() {
    return (
      <div className="item">
        <Checkbox checked={this.state.checked} handleToggle={this.toggleCheckbox}/>
        <p>{this.state.text}</p>
        <div className="delete-item btn danger" onClick={this.deleteMe}>X</div>
      </div>
    );
  }
});

