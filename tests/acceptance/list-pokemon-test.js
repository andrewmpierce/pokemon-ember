import { test } from 'qunit';
import moduleForAcceptance from 'poke-ember/tests/helpers/module-for-acceptance';

moduleForAcceptance('Acceptance | list pokemon');

test('visiting /', function(assert) {
  visit('/');

  andThen(function() {
    assert.equal(currentURL(), '/');
  });
});
