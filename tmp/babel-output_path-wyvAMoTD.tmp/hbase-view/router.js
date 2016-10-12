define('hbase-view/router', ['exports', 'ember', 'hbase-view/config/environment'], function (exports, _ember, _hbaseViewConfigEnvironment) {

  var Router = _ember['default'].Router.extend({
    location: _hbaseViewConfigEnvironment['default'].locationType,
    rootURL: _hbaseViewConfigEnvironment['default'].rootURL
  });

  Router.map(function () {});

  exports['default'] = Router;
});