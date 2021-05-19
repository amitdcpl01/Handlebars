Handlebars.registerHelper('bold', function(str) {
    str = str || '';
    return '<strong>' + str + '</strong>';
});

Handlebars.registerHelper('listAddr', function(items, options) {
    var out = "<ol>";
    for (i = 0; i < items.length; i++) {
	out += "<li>" + options.fn(items[i]) + "</li>";
    }
    return out + "</ol>";
});
