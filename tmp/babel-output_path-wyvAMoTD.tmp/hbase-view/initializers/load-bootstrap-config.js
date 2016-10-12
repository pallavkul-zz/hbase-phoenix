define('hbase-view/initializers/load-bootstrap-config', ['exports', 'hbase-view/config/environment', 'ember-bootstrap/config'], function (exports, _hbaseViewConfigEnvironment, _emberBootstrapConfig) {
  exports.initialize = initialize;

  function initialize() /* container, application */{
    _emberBootstrapConfig['default'].load(_hbaseViewConfigEnvironment['default']['ember-bootstrap'] || {});
  }

  exports['default'] = {
    name: 'load-bootstrap-config',
    initialize: initialize
  };
});