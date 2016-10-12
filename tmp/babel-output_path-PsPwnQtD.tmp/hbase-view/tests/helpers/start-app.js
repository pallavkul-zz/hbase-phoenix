define('hbase-view/tests/helpers/start-app', ['exports', 'ember', 'hbase-view/app', 'hbase-view/config/environment'], function (exports, _ember, _hbaseViewApp, _hbaseViewConfigEnvironment) {
  exports['default'] = startApp;

  function startApp(attrs) {
    var application = undefined;

    var attributes = _ember['default'].merge({}, _hbaseViewConfigEnvironment['default'].APP);
    attributes = _ember['default'].merge(attributes, attrs); // use defaults, but you can override;

    _ember['default'].run(function () {
      application = _hbaseViewApp['default'].create(attributes);
      application.setupForTesting();
      application.injectTestHelpers();
    });

    return application;
  }
});