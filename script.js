//    Start game
$("#go").click(function() {
  sl1.html();
  sl1.play();
  sl1.track();
  sl1.checking();
  ///bds
/*  $("#bds").click(function() {
    sl1.answers = {
      answerKick: [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
      answerSnare: [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
      answerHhClosed: [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
      answerHhOpened: [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
      answerTempo: [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 0, 0]
    };
    $("button.box")
      .removeClass()
      .addClass("box");
  });*/
})




$('#gg1').click(function(){
  sl1 = 0;
  sl2.inito();
  sl2.html();
  sl2.play();
  sl2.track();
  sl2.checking();
  //    Box
  ///   1st track
  ////  hho
  

  ///bds
  $("#bds").click(function() {
    sl.answers = {
      answerKick: [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
      answerSnare: [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
      answerHhClosed: [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
      answerHhOpened: [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
      answerTempo: [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0]
    };
    $("button.box")
      .removeClass()
      .addClass("box");
  });
});