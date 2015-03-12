import Ember from "ember";

var domHelpers = function() {

  Ember.Test.registerHelper('exists', function(app,assert,selector) {
    return assert.equal(find(selector).length >= 1, true, selector + " not found");
  });
}();

export default domHelpers;
