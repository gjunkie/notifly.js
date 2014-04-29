/**
 * Notifly class
 *
 */

(function(){

  /**
   * Class initiation.
   *
   * @param {Object} options: Object containing option overrides.
   */
  var Notifly = function () {
    this.activeQueue = [], self = this;
    $(window).on('NotiflyClosed', function(){
      self.unqueue();
      self.show();
    });
  };

  
  /**
   * Creates the notification.
   */
  Notifly.prototype.create = function (options) {
    var notification = new NotiflyMessage(options);
    this.queue(notification);
  }

  /**
   * Queues the notification.
   */
  Notifly.prototype.queue = function (notification) {
    this.activeQueue.push(notification);
    this.show();
  };

  /**
   * Removes a notification from the queue.
   */
  Notifly.prototype.unqueue = function () {
    this.activeQueue.splice(0,1);
  };

  /**
   * Displays a notification.
   */
  Notifly.prototype.show = function () {
    if (this.activeQueue.length) {
      var current = this.activeQueue[0], self = this;
      $('body').append(current.options.container);
      current.options.container.fadeIn(current.options.fadeIn);
    }
  };



  /**
   * Class initiation.
   *
   * @param {Object} options: Object containing option overrides.
   */
  var NotiflyMessage = function (options) {
    var defaults = {
      container: false,
      message: 'Generic user message',
      sticky: false,
      class: 'notification',
      linger: 2000,
      fadeIn: 200,
      fadeOut: 300,
      hoverPause: false,
      closeElem: false,
      priority: 0,
      onShow: function(){},
      onClose: function(){}
    };

    var self = this, timeout;

    this.options = $.extend({}, defaults, options || {});
    if(! this.options.container){
      this.options.container = $('<div class="notifly modal" />');
      this.options.container.append($('<div class="notifly-text" />'));
      //this.options.container.appendTo($('body'));
    }
    this.options.container.text(this.options.message);

    this.options.container.addClass(this.options.class);
    this.options.container = (this.options.container !== null) ? this.options.container: this.options.container.children('.notifly-text');
    this.options.closeElem = (this.options.closeElem) ? this.options.closeElem : this.options.container;
    this.options.closeElem.bind('click', function(){
      self.close();
    });

    if (!this.options.sticky) {
      this.startTimer();

      if (this.options.hoverPause) {
        this.stopTimer();
      }
    }

    this.options.onShow();
  };

  /**
   * Starts the notification timer.
   */
  NotiflyMessage.prototype.startTimer = function () {
    var self = this;
    timeout = setTimeout(function() {
      self.close();
    }, self.options.linger);
  };

  /**
   * Stops the notification timer.
   */
  NotiflyMessage.prototype.stopTimer = function () {
    var self = this;
    $(this.options.container).hover(function() {
        clearTimeout(timeout);
      }, function() {
        self.startTimer();
      }
    );
  };

  /**
   * Closes a notification.
   */
  NotiflyMessage.prototype.close = function () {
    var self = this;
    this.options.container.fadeOut(this.options.fadeOut, function(){
      self.options.onClose();
      self.options.container.remove();
      $(window).trigger('NotiflyClosed');
    });
  };

  window.Notifly = new Notifly;

}());
