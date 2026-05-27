const MembershipState = require('./MembershipState');

class IronState extends MembershipState {
  getName() { return 'Iron'; }
  getDescription() { return 'Basic membership. Browse content only.'; }
  canBookClass() { return false; }
  canAccessContent() { return true; }
  allowedTransitions() { return ['Silver', 'Gold']; }
}

module.exports = IronState;
