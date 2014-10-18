/** @jsx React.DOM */
var App = React.createClass({
  getInitialState: function() {
    return { lists: this.props.data.all('List') || [] };
  },

  addList: function() {
    var newList = new TodoList('Initial title');
    var newLists = this.state.lists;
    newLists.push(newList);
    newList = this.props.data.createRecord('List', newList);
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
      return <List key={list.id} list={list} data={this.props.data} deleteList={clickHandler} />;
    }, this);

    return (
      <div className="lists">
        {lists}
        <div className="add-list" onClick={this.addList}>Add a list</div>
      </div>
    );
  }
});
