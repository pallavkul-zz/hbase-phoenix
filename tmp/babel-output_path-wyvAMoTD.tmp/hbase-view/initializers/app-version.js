define('hbase-view/initializers/app-version', ['exports', 'ember-cli-app-version/initializer-factory', 'hbase-view/config/environment'], function (exports, _emberCliAppVersionInitializerFactory, _hbaseViewConfigEnvironment) {
  exports['default'] = {
    name: 'App Version',
    initialize: (0, _emberCliAppVersionInitializerFactory['default'])(_hbaseViewConfigEnvironment['default'].APP.name, _hbaseViewConfigEnvironment['default'].APP.version)
  };
});