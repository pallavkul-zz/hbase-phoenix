define('hbase-view/tests/test-helper', ['exports', 'hbase-view/tests/helpers/resolver', 'ember-qunit'], function (exports, _hbaseViewTestsHelpersResolver, _emberQunit) {

  (0, _emberQunit.setResolver)(_hbaseViewTestsHelpersResolver['default']);
});