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
  var Notifly = function (options) {
    var defaults = {
      selector: null,
      message: 'Generic user message',
      sticky: false,
      class: 'passive',
      linger: 1000,
      fadeIn: 100,
      fadeOut: 300
    };

    var self = this;
    this.options = $.extend({}, defaults, options || {});
    this.el = this.options.selector;
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
    this.el.fadeIn(this.options.fadeIn);

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
    this.el.fadeOut(this.options.fadeOut);
  };

  window.Notifly = Notifly;

}());
