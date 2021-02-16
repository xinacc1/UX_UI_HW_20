$("#firstproject").hover(
    function(){$(this).animate({"width": "425px", "height": "412px", "left": "-10px"},500);},
    function(){$(this).animate({"width": "405px", "height": "392px", "left": "0px"},1000);},
);

$("#secondproject").hover(
    function(){$(this).animate({"width": "425px", "height": "412px", "left": "-10px"},500);},
    function(){$(this).animate({"width": "405px", "height": "392px", "left": "0px"},1000);},
);

$("#thirdproject").hover(
    function(){$(this).animate({"width": "425px", "height": "412px", "left": "-10px"},500);},
    function(){$(this).animate({"width": "405px", "height": "392px", "left": "0px"},1000);},
);

$("#fourthproject").hover(
    function(){$(this).animate({"width": "425px", "height": "412px", "left": "-10px"},500);},
    function(){$(this).animate({"width": "405px", "height": "392px", "left": "0px"},1000);},
);

$("#fifthproject").hover(
    function(){$(this).animate({"width": "425px", "height": "412px", "left": "-10px"},500);},
    function(){$(this).animate({"width": "405px", "height": "392px", "left": "0px"},1000);},
);

$("#sixthproject").hover(
    function(){$(this).animate({"width": "425px", "height": "412px", "left": "-10px"},500);},
    function(){$(this).animate({"width": "405px", "height": "392px", "left": "0px"},1000);},
);
 
 

var collapseElementList = [].slice.call(document.querySelectorAll('.collapse'))
var collapseList = collapseElementList.map(function (collapseEl) {
  return new bootstrap.Collapse(collapseEl)
})

var dropdownElementList = [].slice.call(document.querySelectorAll('.dropdown-toggle'))
var dropdownList = dropdownElementList.map(function (dropdownToggleEl) {
  return new bootstrap.Dropdown(dropdownToggleEl)
})