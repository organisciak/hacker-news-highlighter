/*
A script to highlight articles based on their popularity

Using Zepto(http://zeptojs.com/)
*/
//Define the upper limit of votes count. Anything below this will be a gradient

Zepto(function($) {
var max = 400;

//Add text shadow to page, for readability
$('body').css('text-shadow', '0 1px 0 rgba(255, 255, 255, 0.6)');

$('table').css('border-collapse', 'collapse');

$('.subtext').each(function() {
var points = $(this).children('span').text(),
    popularity;

if (points === null) return;

points = points.split(' ')[0];
popularity = points <= max ? points / max : 1;
//Add padding
$(this).css('padding-bottom', '2px');
$(this).parent().prev().children('td').css('padding-top', '2px');

//Minimize buffer row
$(this).parent().next().css('height', 1);

console.log(points);
//Subtext row
$(this).parent().children('td').first()
    .css('border-left', 'solid 5px rgba(255,102,0,' + popularity + ')');

//Title row
$(this).parent().prev().children('td').first()
    .css('border-left', 'solid 5px rgba(255,102,0,' + popularity + ')');

});

});
