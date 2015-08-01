var Hamsa = require("hamsa/dist/hamsa");
var Task;

module.exports = Task = (function(_super) {

  _extends(Task, _super);

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

  Task.active = function() {
    return this.filter(false);
  }

  Task.completed = function() {
    return this.filter(true);
  }

  return Task;

})(Hamsa);
