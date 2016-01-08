import Hamsa from 'Hamsa';
var Task;

module.exports = (function() {

  _extends(Task, Hamsa);

  function Task() {
    return Task.__super__.constructor.apply(this, arguments);
  }

  Task.define({
    name: { type: String },
    completed: { type: Boolean, default: false },
    created_at: { type: Date, default: new Date() }
  });

  Task.all = function() {
    return this.find();
  }

  Task.active = function() {
    return this.find({ completed: false });
  }

  Task.completed = function() {
    return this.find({ completed: true });
  }

  return Task;

})();
