var elem = document.querySelector('.gallery-inner');
var msnry = new Masonry( elem, {
  itemSelector: '.grid-inner__photo',
  columnWidth: 200
});
var msnrySec = new Masonry( '.grid', {
});
