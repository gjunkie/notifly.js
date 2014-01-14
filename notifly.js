/**
 * Notifly class
 *
 */

(function(){

  /**
   * Class initiation.
   *
   * @param {String} string: The string that should be displayed as a notification.
   * @param {Object} options: Object containing option overrides.
   */
  var Notifly = function (selector, options) {
    var defaults = {
      debug: false,
      message: 'Generic user message',
      sticky: false,
      class: 'passive',
      linger: 1000
    };

    var self = this;
    this.options = $.extend({}, defaults, options || {});
    this.el = selector;
    this.el.addClass(this.options.class);
    this.el.text(this.options.message);
    this.el.on('click', function(){
      self.close();
    });

    this.show();
  };

  /**
   * Displays a notification.
   */
  Notifly.prototype.show = function () {
    var self = this;
    this.el.fadeIn(100);

    if (!this.options.sticky) {
      var timer = window.setTimeout(function(){
            self.close();
          }, this.options.linger);
    }
  };

  /**
   * Closes a notification.
   */
  Notifly.prototype.close = function () {
    this.el.fadeOut(300);
  };

  window.Notifly = Notifly;

}());
