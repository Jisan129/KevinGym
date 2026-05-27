const IronState = require('./IronState');
const SilverState = require('./SilverState');
const GoldState = require('./GoldState');

const STATE_MAP = { Iron: IronState, Silver: SilverState, Gold: GoldState };

class MembershipContext {
  constructor(stateName = 'Iron') {
    const StateClass = STATE_MAP[stateName];
    if (!StateClass) throw new Error(`Unknown membership state: ${stateName}`);
    this.state = new StateClass();
  }

  transitionTo(targetStateName) {
    const allowed = this.state.allowedTransitions();
    if (!allowed.includes(targetStateName)) {
      throw new Error(`Cannot transition from ${this.state.getName()} to ${targetStateName}`);
    }
    this.state = new STATE_MAP[targetStateName]();
  }

  getName() { return this.state.getName(); }
  getDescription() { return this.state.getDescription(); }
  canBookClass() { return this.state.canBookClass(); }
  canAccessContent() { return this.state.canAccessContent(); }
  allowedTransitions() { return this.state.allowedTransitions(); }
}

module.exports = MembershipContext;
