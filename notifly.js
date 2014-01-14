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
      container: null,
      message: 'Generic user message',
      sticky: false,
      class: 'passive',
      linger: 1000,
      fadeIn: 100,
      fadeOut: 300,
      hoverPause: false,
      closeElem: false
    };

    var self = this;
    var timeout;
    this.options = $.extend({}, defaults, options || {});
    this.el = selector;
    this.el.addClass(this.options.class);
    this.options.container.text(this.options.message);
    this.options.closeElem = (this.options.closeElem) ? this.options.closeElem : this.el;
    this.options.closeElem.bind('click', function(){
      self.close();
    });

    // start timer
    this.startTimer= function() {
      timeout = setTimeout(function() {
        self.close();
      }, self.options.linger);
    }

    // stop timer on hover
    $(this.el).hover(function() {
        clearTimeout(timeout);
      }, function() {
        self.startTimer();
      }
    );

    this.show();
  };

  /**
   * Displays a notification.
   */
  Notifly.prototype.show = function () {
    var self = this;
    this.el.fadeIn(this.options.fadeIn);

    if (!this.options.sticky) this.startTimer();
  };

  /**
   * Closes a notification.
   */
  Notifly.prototype.close = function () {
    this.el.fadeOut(this.options.fadeOut);
  };

  window.Notifly = Notifly;

}());
