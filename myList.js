$("#load-more").click(function(e) {
    // show the next hidden div.group, then disable load more once all divs have been displayed
    var t = $(this);
    if (t.data('disabled')){
        return;
    }
    
    var hiddenGroups = $('.group:not(:visible)');
    if (hiddenGroups.length > 0){
        hiddenGroups.first().show();
    } else{
        t.data('disabled', true);
    }
});