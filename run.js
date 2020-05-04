$(document).ready(function () {
  const paceGetter = (m, s, d) => {
    let minute = Math.floor(m / d);
    console.log(minute);
    let minRe = Math.floor((m % d) * 60);
    console.log(minRe);
    let second = Math.floor((parseInt(s) + minRe) / d);
    console.log(second);
    let pace = `Your mile pace was ${minute}:${second}!`;
    $('#output').text(pace);
  };
  $('#submit').click(function () {
    paceGetter($('#minutes').val(), $('#seconds').val(), $('#distance').val());
    event.preventDefault();
  });
});

// fix so second zere appears in seconds output ie 2:50,

// possible solution below. check seconds to see if it has a toSting().length === 4

// let w = .1
// console.log(w.toString().length);
