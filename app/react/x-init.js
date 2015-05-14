/** @jsx React.DOM */
var firebaseAdapter = new FirebaseAdapter('https://presentationwizard.firebaseio.com/web/saving-data/presentationwizard/');
var localStorageAdapter = {
  rules: function() {
    return navigator.onLine;
  },
  adapter: new LSAdapter('widget')
};
var adapters = [localStorageAdapter, firebaseAdapter];
var serializers = [ListSerializer];

var store = new Store(adapters, serializers);

React.renderComponent(<App store={store}/>, document.getElementById('app'));
