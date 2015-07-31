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

  Task.completed = function() {
    return this.find(function(instance) {
      if (instance.completed) { return instance; }
    });
  };

  Task.uncompleted = function() {
    return this.find(function(instance) {
      if (!instance.completed) { return instance; }
    });
  };

  return Task;

})(Hamsa);
