/** @jsx React.DOM */
var Checkbox = React.createClass({
  getInitialState: function() {
    return { checked: this.props.checked || false };
  },

  toggleState: function() {
    this.setState({ checked: !this.state.checked });
  },

  render: function() {
    return (
      <div className="checkbox" onClick={this.toggleState}>
        <div className={this.state.checked ? 'checked' : 'unchecked'}>&#10003;</div>
      </div>
    );
  }
});
