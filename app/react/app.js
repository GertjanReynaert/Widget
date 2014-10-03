/** @jsx React.DOM */
var App = React.createClass({
  getInitialState: function() {
    return { lists: [] };
  },

  addList: function() {
    newList = {
      title: 'Initial title',
      items: []
    };
    var newLists = this.state.lists;
    newLists.push(newList);
    this.setState({ lists: newLists });
  },

  render: function() {
    var lists = this.state.lists.map(function(list, index) {
      return <List key={index} title={list.title} items={list.items}/>;
    }, this);

    return (
      <div className="lists">
        {lists}
        <div className="add-list" onClick={this.addList}>Add a list</div>
      </div>
    );
  }
});
