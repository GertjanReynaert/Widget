/** @jsx React.DOM */
var firebaseAdapter = new FirebaseAdapter('https://presentationwizard.firebaseio.com/');
var localStorageAdapter = {
  rules: function() {
    return !navigator.onLine;
  },
  adapter: new LSAdapter('widget')
};
var adapters = [localStorageAdapter];
if(firebaseAdapter.ref) {
  adapters.push(firebaseAdapter);
}
var serializers = [ListSerializer];

var data = new Data(adapters, serializers);

React.renderComponent(<App data={data}/>, document.getElementById('app'));
