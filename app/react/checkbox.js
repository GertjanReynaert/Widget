/** @jsx React.DOM */
var Checkbox = React.createClass({
  getInitialState: function() {
    return {
      checked: this.props.checked || false,
      changed: false
    };
  },

  toggleState: function() {
    this.setState({
      checked: !this.state.checked,
      changed: true
    });
  },

  componentDidUpdate: function() {
    if (this.state.changed) {
      this.props.handleToggle(this.state.checked);
      this.setState({changed: false});
    }
  },

  render: function() {
    return (
      <div className="checkbox" onClick={this.toggleState}>
        <div className={this.state.checked ? 'checked' : 'unchecked'}>&#10003;</div>
      </div>
    );
  }
});
