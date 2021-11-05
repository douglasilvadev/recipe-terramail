const _path = _interopRequireDefault(require('path'));

function _interopRequireDefault(obj) {
  return obj && obj.__esModule ? obj : { default: obj };
}

module.exports = Ferdi => {
  const getMessages = function getMessages() {
    const directMessages = document.getElementsByClassName(
      'buffer conversation active unread activeBadge'
    ).length;
    const indirectMessages = document.getElementsByClassName(
      'buffer channel active unread'
    ).length;

    Ferdi.setBadge(directMessages, indirectMessages, count);
  };

  Ferdi.loop(getMessages);
};
