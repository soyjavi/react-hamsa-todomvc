var Hamsa = require("hamsa");
var Task;

module.exports = (function() {

  _extends(Task, Hamsa);

  function Task() {
    return Task.__super__.constructor.apply(this, arguments);
  }

  Task.define({
    name        : { type: String },
    completed   : { type: Boolean, default: false },
    created_at  : { type: Date, default: new Date() }
  });

  Task.filter = function(completed) {
    return this.find(function(instance) {
      if (completed === instance.completed) { return instance; }
    });
  };

  Task.all = function() {
    return this.find();
  }

  Task.active = function() {
    return this.filter(false);
  }

  Task.completed = function() {
    return this.filter(true);
  }

  return Task;

})();
