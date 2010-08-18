/**
    simple jQuery plug-in that concatinates a html list element to show
	only a specified number of li's on initial view
	
	created June 2008, Ross Bruniges 
	Updated by Bruce Williams
	
	called like so (with optional over-rides):
	
		$('big_list').truncate({
			init_shown : 10
		});
**/

jQuery.fn.truncate = function(settings) {
  
    settings = jQuery.extend({
        init_shown : 5,
        displayed_class : 'displayed',
        link_suffix : ''
    }, settings);
    
    
    var list = $(this);
    var full_number = list.find('li').length;
    
    if (list[0].nodeName.toUpperCase() != "UL" && list[0].nodeName.toUpperCase() != "OL") {
        return $(this);
    } 
    if (settings.init_shown >= full_number) {
        return $(this);
    }

    var link_text = 'Show all ' +  full_number + ' ' + settings.link_suffix;
    var anchor = $('<a href="#" class="show_all">' +  link_text + '</a>').click(function() {
        list.toggleClass('truncated');
        if ($(this).text() == link_text) {
            $(this).text("Show less"); 
        } else {
            $(this).text(link_text);             
        }
        return false;
    });
    
    list.addClass('truncated')
        .find('li:lt(' + settings.init_shown +')')
        .each(function() {
            $(this).addClass(settings.displayed_class);
        })
        .end()
        .after($("<p class='expand'></p>").append(anchor));
        
    return $(this);
};