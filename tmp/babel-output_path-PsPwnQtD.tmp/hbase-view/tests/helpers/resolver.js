define('hbase-view/tests/helpers/resolver', ['exports', 'hbase-view/resolver', 'hbase-view/config/environment'], function (exports, _hbaseViewResolver, _hbaseViewConfigEnvironment) {

  var resolver = _hbaseViewResolver['default'].create();

  resolver.namespace = {
    modulePrefix: _hbaseViewConfigEnvironment['default'].modulePrefix,
    podModulePrefix: _hbaseViewConfigEnvironment['default'].podModulePrefix
  };

  exports['default'] = resolver;
});