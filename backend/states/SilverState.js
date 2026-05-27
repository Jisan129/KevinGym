const MembershipState = require('./MembershipState');

class SilverState extends MembershipState {
  getName() { return 'Silver'; }
  getDescription() { return 'Standard membership. Book classes and access content.'; }
  canBookClass() { return true; }
  canAccessContent() { return true; }
  allowedTransitions() { return ['Iron', 'Gold']; }
}

module.exports = SilverState;
