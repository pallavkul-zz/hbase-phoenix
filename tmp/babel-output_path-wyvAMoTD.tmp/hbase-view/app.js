define('hbase-view/app', ['exports', 'ember', 'hbase-view/resolver', 'ember-load-initializers', 'hbase-view/config/environment'], function (exports, _ember, _hbaseViewResolver, _emberLoadInitializers, _hbaseViewConfigEnvironment) {

  var App = undefined;

  _ember['default'].MODEL_FACTORY_INJECTIONS = true;

  App = _ember['default'].Application.extend({
    modulePrefix: _hbaseViewConfigEnvironment['default'].modulePrefix,
    podModulePrefix: _hbaseViewConfigEnvironment['default'].podModulePrefix,
    Resolver: _hbaseViewResolver['default']
  });

  (0, _emberLoadInitializers['default'])(App, _hbaseViewConfigEnvironment['default'].modulePrefix);

  exports['default'] = App;
});