$(function () {

    var active = true;

    $('#collapse').click(function () {
        if (active) {
            active = false;
            $('.panel-collapse').collapse('show');
            $('.panel-heading').attr('data-toggle', '');
            $(this).text('Enable accordion behavior');
        } else {
            active = true;
            $('.panel-collapse').collapse('hide');
            $('.panel-heading').attr('data-toggle', 'collapse');
            $(this).text('Disable accordion behavior');
        }

    });
    
    $('#accordion').on('show.bs.collapse', function () {
        if (active) $('#accordion .in').collapse('hide');
    });

$('.collapse').on('show.bs.collapse', function(){
  var i = $(this).parent().find('.collapse-icon')
  i.toggleClass('fa-chevron-up fa-chevron-down');
}).on('hide.bs.collapse', function(){
  var i = $(this).parent().find('.collapse-icon')
  i.toggleClass('fa-chevron-down fa-chevron-up');
});

});

