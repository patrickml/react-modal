Meteor.startup(function () {
  var body = $('body');

  body.on('click', '.md-trigger', function (event) {
    $( '#' + $(event.currentTarget).attr( 'data-modal' ) ).addClass('md-show');
    body.addClass('modal');
  });

  body.on('click', '.md-overlay, .md-close', function (event) {
    body.removeClass('modal');
    $('.md-show').removeClass('md-show');
  });

  body.prepend("<div class='md-overlay'></div>");
});