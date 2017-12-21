import { getServerConfig, getInstance } from 'dummy/utils/rollbar';
import { module, test } from 'qunit';
import { setupTest } from 'ember-qunit';

module('Unit | Utility | rollbar', function(hooks) {
  setupTest(hooks);

  test('getServerConfig', function(assert) {
    let result = getServerConfig(this.owner);
    assert.deepEqual(result, {
      enabled: true,
      accessToken: 'TEST_SERVER_TOKEN'
    });
  });

  test('getInstance', function(assert) {
    let rollbar = getInstance(this.owner);
    // There's not really much to do here other than check that it looks like Rollbar?
    assert.ok(rollbar.critical, 'critical exists');
    assert.ok(rollbar.debug, 'debug exists');
    assert.ok(rollbar.warning, 'warning exists');
    assert.ok(rollbar.info, 'info exists');
    assert.ok(rollbar.error, 'error exists');
    assert.ok(rollbar.configure, 'configure exists');
  });
});