notifly.js
==========

A lightweight library to generate modal messages. Notifly.js comes with no default styles to give you a blank canvas. Positioning, dimensions, and colors are up to you.

##Installation

Install with [Bower](http://bower.io): `bower install --save notifly.js`

##Usage

JS

    var notification = new Notifly($('.notifly'), { 
      container: $('.copy'),
      message: 'You did it!',
      class: 'success',
      linger: 2000
    });
    
HTML

    <script id="notiflyTemplate" type="text/template">
      <div class="notifly">
        <p class="notifly-text"></p>
      </div>
    </script>

Notifly accepts a variety of parameters. Change how fast it fades in and out, how long it stays visible for, or make it sticky to stay visible. Pass in a custom class for styling. You also have the option to pause the notification on hover and to specify any element to close it on click. If no close element is specified, clicking anywhere on the notification will close it. Nesting an element with the class `.notifly-text` is the only required HTML if you do not wish to specify your own text container. You also have the option to pass in two callbacks. One for when the notification first shows, and one for when it closes.

    var notification = new Notifly($('.notifly'), { 
      container: $('.textContainer'),
      message: 'You did it!',
      class: 'success',
      sticky: true,
      linger: 2000,
      fadeIn: 100,
      fadeIn: 100,
      fadeOut: 300
      hoverPause: false,
      closeElem: $('.close-button'),
      onShow: function(){},
      onClose: function(){},
    });
      
##Requirements

- [jQuery](http://jquery.com/)
