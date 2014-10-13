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

  removeList: function(index) {
    var lists = this.state.lists;
    lists.splice(index, 1);
    this.setState({ lists: lists });
  },

  render: function() {
    var lists = this.state.lists.map(function(list, index) {
      var clickHandler = this.removeList.bind(this, index);
      return <List key={index} title={list.title} items={list.items} deleteList={clickHandler}/>;
    }, this);

    return (
      <div className="lists">
        {lists}
        <div className="add-list" onClick={this.addList}>Add a list</div>
      </div>
    );
  }
});
