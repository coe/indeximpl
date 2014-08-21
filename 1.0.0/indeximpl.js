var indeximpl;

module.exports = indeximpl = (function() {

  function indeximpl($) {}

  indeximpl.init = function($) {
    $.index.addEventListener("open", function(e) {
      var _ref;
      if ((e != null ? (_ref = e.source) != null ? _ref.activeTab : void 0 : void 0) != null) {
        return Alloy.Globals.currentTab = e.source.activeTab;
      }
    });
    $.index.addEventListener("focus", function(e) {
      if ((e != null ? e.tab : void 0) != null) {
        return Alloy.Globals.currentTab = e.tab;
      }
    });
    $.index.addEventListener("close", function() {
      return $.destroy();
    });
    return $.index.open();
  };

  return indeximpl;

})();
