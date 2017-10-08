
$(document).ready(function () {

    // load datepicker
    $('.date').datepicker({
        startDate: "1.1.1900"
    });

    $('[data-toggle="popover"]').popover({
        html: true,
        content: function() {
            return $('#popover-content').html();
        }
    });

    $('#post_input')
        .focus(function () {this.rows = 4;})
        .blur(function () {this.rows = 1;});
});

/**
 * Open editing of profile on Profile page
 */
function open_edit_profile() {
    $('#profile_edit').show();
    $('#btn_image_input').show();
    $('#profile_info').hide();
}

/**
 * Close editing of profile on Profile page
 */
function close_edit_profile() {
    $('#profile_edit').hide();
    $('#btn_image_input').hide();
    $('#profile_info').show();
}