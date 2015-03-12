import Ember from 'ember';
import {
  module,
  test
} from 'qunit';
import startApp from 'ec-new/tests/helpers/start-app';
import dom from 'ec-new/tests/helpers/dom-helpers';

var application;

module('Acceptance: Items', {
  beforeEach: function() {
    application = startApp();
  },

  afterEach: function() {
    Ember.run(application, 'destroy');
  }
});

test('visiting /items', function(assert) {
  visit('/items');

  andThen(function() {
    assert.equal(currentPath(), 'items');
    exists(assert,".item .name:contains('differential')");
  });
});
