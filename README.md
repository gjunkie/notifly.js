notifly.js
==========

A lightweight library to generate user messages. Notifly.js comes with no default styles to give you a blank canvas. Positioning, dimensions, and colors are up to you.

##Installation

Install with [Bower](http://bower.io): `bower install --save notifly.js`

##Usage

JS

    var notification = new Notifly({ 
      container: $('.notifly'),
      message: 'You did it!',
      class: 'success',
      linger: 2000
    });
      
CSS

    .notifly {
      display: none;
    }
    
HTML

    <div class="notifly"></div>

Notifly accepts a variety of parameters. Change how fast it fades in and out, how long it stays visible for, or make it sticky to stay visible. Pass in a custom class for styling. All notifications are dismissable on click.

    var notification = new Notifly({ 
      container: $('.textContainer'),
      message: 'You did it!',
      class: 'success',
      sticky: true,
      linger: 2000,
      fadeIn: 100,
      fadeOut: 300
    });
      
The class parameter will default to 'passive'; pass in anything you like for styling.

##Requirements

- [jQuery](http://jquery.com/)
- I'm currently changing it up to make it jQuery independent. Stay tuned.
