import Ember from 'ember';
import {
  module,
  test
} from 'qunit';
import startApp from 'ec-new/tests/helpers/start-app';
import dom from 'ec-new/tests/helpers/dom-helpers';
import factory from 'ec-new/tests/helpers/factory-helpers';

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
  factory_clear()
  factory_let({
    item: [{name: 'rear differential'}]
  });

  visit('/items');

  andThen(function() {
    assert.equal(currentPath(), 'items');
    exists(assert,".item .name:contains('rear differential')");
  });
});
