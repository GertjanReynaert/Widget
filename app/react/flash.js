/** @jsx React.DOM */
var Flash = React.createClass({
  getFlashType: function() {
    if(this.props.type !== 'danger' && this.props.type !== 'success') {
      return 'default';
    }

    return this.props.type;
  },

  render: function() {
    var flash = 'flash ';
    flash += this.getFlashType();
    flash += ' ';
    flash += this.props.hidden ? 'hidden' : 'shown';

    return (
      <div className={flash}>
        {this.props.message}
      </div>
    );
  }
});
