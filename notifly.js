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
  var Notifly = function (template, options) {
    var defaults = {
      container: null,
      message: 'Generic user message',
      sticky: false,
      class: 'notification',
      linger: 1000,
      fadeIn: 100,
      fadeOut: 300,
      hoverPause: false,
      closeElem: false,
      onShow: function(){},
      onClose: function(){}
    };

    var self = this, timeout;

    this.options = $.extend({}, defaults, options || {});
    this.el = $(template.html());
    this.el.addClass(this.options.class);
    this.options.container = (this.options.container !== null) ? this.options.container: this.el.children('.notifly-text');
    this.options.closeElem = (this.options.closeElem) ? this.options.closeElem : this.el;
    this.options.closeElem.bind('click', function(){
      self.close();
    });

    // start timer
    this.startTimer = function() {
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
   * Displays the notification.
   */
  Notifly.prototype.show = function () {
    $('body').append(this.el);
    this.options.container.text(this.options.message);
    this.el.fadeIn(this.options.fadeIn);
    if (!this.options.sticky) this.startTimer();
    this.options.onShow();
  };

  /**
   * Closes the notification.
   */
  Notifly.prototype.close = function () {
    var self = this;
    this.el.fadeOut(this.options.fadeOut, function(){
      self.options.onClose();
      self.el.remove();
    });
  };

  window.Notifly = Notifly;

}());
