const MembershipState = require('./MembershipState');

class GoldState extends MembershipState {
  getName() { return 'Gold'; }
  getDescription() { return 'Premium membership. Full access to all classes and content.'; }
  canBookClass() { return true; }
  canAccessContent() { return true; }
  allowedTransitions() { return ['Iron', 'Silver']; }
}

module.exports = GoldState;
