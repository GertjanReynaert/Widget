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

  handleTextValue: function(e) {
    this.setState({ text: e.target.value });
  },

  saveItemText: function(e) {
    if (e.keyCode === 13) {
      this.setState({ changed: true});
      e.target.blur();
    }
  },

  deleteMe: function() {
    this.props.store.destroyRecord('Item', this.state.item.id);
    this.props.deleteItem();
  },

  render: function() {
    var textClass = 'item-text' + (this.state.checked ? ' done' : '');
    var disabled = this.state.checked ? 'disabled' : false;
    return (
      <div className="item">
        <Checkbox checked={this.state.checked} handleToggle={this.toggleCheckbox}/>
        <input className={textClass} type="text" onKeyDown={this.saveItemText} onChange={this.handleTextValue} value={this.state.text} disabled={disabled}/>
        <div className="delete-item btn danger" onClick={this.deleteMe}>X</div>
      </div>
    );
  }
});

