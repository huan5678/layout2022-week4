let state = 'closed';
$('.menu').on('click', () => {
  $('.nav__list').toggleClass('max-h-0 h-0 pb-4');
  if (state === 'open') {
    $('.menu').children("span:contains('close')").text('menu');
    return (state = 'closed');
  }
  if (state === 'closed') {
    $('.menu').children("span:contains('menu')").text('close');
    return (state = 'open');
  }
});
