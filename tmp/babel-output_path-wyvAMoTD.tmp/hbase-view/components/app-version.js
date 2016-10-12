define('hbase-view/components/app-version', ['exports', 'ember-cli-app-version/components/app-version', 'hbase-view/config/environment'], function (exports, _emberCliAppVersionComponentsAppVersion, _hbaseViewConfigEnvironment) {

  var name = _hbaseViewConfigEnvironment['default'].APP.name;
  var version = _hbaseViewConfigEnvironment['default'].APP.version;

  exports['default'] = _emberCliAppVersionComponentsAppVersion['default'].extend({
    version: version,
    name: name
  });
});