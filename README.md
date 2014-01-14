notifly.js
==========

A lightweight library to generate user messages.

Usage
==========

JS

    var notification = new Notifly({ 
      container: $('.notifly'),
      message: 'You did it!',
      class: 'success',
      linger: 2000 }
    );
      
CSS

    .notifly {
      display: none;
    }
    
HTML

    <div class="notifly"></div>

Notifly accepts a variety of parameters:

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
