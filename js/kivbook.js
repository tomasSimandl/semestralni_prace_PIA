
$(document).ready(function () {

    // load datepicker
    $('.date').datepicker({
        startDate: "1.1.1900"
    });
});

/**
 * Open editing of profile on Profile page
 */
function open_edit_profile() {
    $('#profile_edit').show();
    $('#profile_info').hide();
}

/**
 * Close editing of profile on Profile page
 */
function close_edit_profile() {
    $('#profile_edit').hide();
    $('#profile_info').show();
}