//    Box
///   1st track
////  hho
$("#s1 > div > div > div.col-9 > div:nth-child(5) > button").click(function() {
  $(this).toggleClass("hho");
  if (sl.answers.answerHhOpened[$(this).attr("position")] == 0) {
    new Audio(
      "/home/vivian/Bureau/IRON HACK/2_PROJECTS/beatmeista/sounds/1/hho.wav"
    ).play();
    sl.answers.answerHhOpened.splice($(this).attr("position"), 1, 1);
  } else if (sl.answers.answerHhOpened[$(this).attr("position")] == 1) {
    sl.answers.answerHhOpened.splice($(this).attr("position"), 1, 0);
  }
});
////  hhc
$("#s1 > div > div > div.col-9 > div:nth-child(6) > button").click(function() {
  $(this).toggleClass("hhc");
  if (sl.answers.answerHhClosed[$(this).attr("position")] == 0) {
    new Audio(
      "/home/vivian/Bureau/IRON HACK/2_PROJECTS/beatmeista/sounds/1/hhc.wav"
    ).play();
    sl.answers.answerHhClosed.splice($(this).attr("position"), 1, 1);
  } else if (sl.answers.answerHhClosed[$(this).attr("position")] == 1) {
    sl.answers.answerHhClosed.splice($(this).attr("position"), 1, 0);
  }
});
////  snare
$("#s1 > div > div > div.col-9 > div:nth-child(7) > button").click(function() {
  $(this).toggleClass("s");
  if (sl.answers.answerSnare[$(this).attr("position")] == 0) {
    new Audio(
      "/home/vivian/Bureau/IRON HACK/2_PROJECTS/beatmeista/sounds/1/s.wav"
    ).play();
    sl.answers.answerSnare.splice($(this).attr("position"), 1, 1);
  } else if (sl.answers.answerSnare[$(this).attr("position")] == 1) {
    sl.answers.answerSnare.splice($(this).attr("position"), 1, 0);
  }
});
////  kick
$("#s1 > div > div > div.col-9 > div:nth-child(8) > button").click(function() {
  $(this).toggleClass("k");
  if (sl.answers.answerKick[$(this).attr("position")] == 0) {
    new Audio(
      "/home/vivian/Bureau/IRON HACK/2_PROJECTS/beatmeista/sounds/1/k.wav"
    ).play();
    sl.answers.answerKick.splice($(this).attr("position"), 1, 1);
  } else if (sl.answers.answerKick[$(this).attr("position")] == 1) {
    sl.answers.answerKick.splice($(this).attr("position"), 1, 0);
  }
});
