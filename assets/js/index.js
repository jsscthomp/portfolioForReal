$(document).ready(function() {
    $('.parallax').parallax();

    $('.scrollspy').scrollSpy();

    var options = [
        {selector: '#staggered-test', offset: 400, callback: function(el) {
            Materialize.showStaggeredList($(el));
        } },
      ];
      Materialize.scrollFire(options);
})