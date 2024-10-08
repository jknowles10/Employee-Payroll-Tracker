// Assemble: Create/select DOM elements
const rootEl = $('#root');

// TODO: Starting from the root element, `rootEl`, make all the background color for each box white.
$('#root').children('ul').css('background-color', 'white');
// TODO: Starting from `rootEl`, create the jQuery statement that will add "O" to block the "X" from winning
$('#root').children('ul').children('li','.item-a3"').append("O");