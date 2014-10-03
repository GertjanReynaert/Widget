/** @jsx React.DOM */
var Item = React.createClass({
  render: function() {
    return (
      <div className="item">
        <Checkbox checked={this.props.checked} />
        <p>{this.props.text}</p>
        <div className="delete-item btn danger" onClick={this.props.deleteItem}>X</div>
      </div>
    );
  }
});

