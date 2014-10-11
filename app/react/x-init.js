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

var data = new Data(adapters, serializers);

React.renderComponent(<App data={data}/>, document.getElementById('app'));
