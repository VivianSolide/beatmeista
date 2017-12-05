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
});


$('#gg1').click(function(){
  sl2.play();
  sl2.html();
  //    Box
  ///   1st track
  ////  hho
  $("#tracks > div.track0 > button").click(function() {
    $(this).toggleClass("hho");
    if (sl.answers.answerHhOpened[$(this).attr("position")] == 0) {
      new Audio(
        "/home/vivian/Bureau/IRON HACK/2_PROJECTS/beatmeista/sounds/2/hho.wav"
      ).play();
      sl.answers.answerHhOpened.splice($(this).attr("position"), 1, 1);
    } else if (sl.answers.answerHhOpened[$(this).attr("position")] == 1) {
      sl.answers.answerHhOpened.splice($(this).attr("position"), 1, 0);
    }
  });
  ////  hhc
  $("#tracks > div.track1 > button").click(function() {
    $(this).toggleClass("hhc");
    if (sl.answers.answerHhClosed[$(this).attr("position")] == 0) {
      new Audio(
        "/home/vivian/Bureau/IRON HACK/2_PROJECTS/beatmeista/sounds/2/hhc.wav"
      ).play();
      sl.answers.answerHhClosed.splice($(this).attr("position"), 1, 1);
    } else if (sl.answers.answerHhClosed[$(this).attr("position")] == 1) {
      sl.answers.answerHhClosed.splice($(this).attr("position"), 1, 0);
    }
  });
  ////  snare
  $("#tracks > div.track2 > button").click(function() {
    $(this).toggleClass("s");
    if (sl.answers.answerSnare[$(this).attr("position")] == 0) {
      new Audio(
        "/home/vivian/Bureau/IRON HACK/2_PROJECTS/beatmeista/sounds/2/s.wav"
      ).play();
      sl.answers.answerSnare.splice($(this).attr("position"), 1, 1);
    } else if (sl.answers.answerSnare[$(this).attr("position")] == 1) {
      sl.answers.answerSnare.splice($(this).attr("position"), 1, 0);
    }
  });
  ////  kick
  $("#tracks > div.track3 > button").click(function() {
    $(this).toggleClass("k");
    if (sl.answers.answerKick[$(this).attr("position")] == 0) {
      new Audio(
        "/home/vivian/Bureau/IRON HACK/2_PROJECTS/beatmeista/sounds/2/k.wav"
      ).play();
      sl.answers.answerKick.splice($(this).attr("position"), 1, 1);
    } else if (sl.answers.answerKick[$(this).attr("position")] == 1) {
      sl.answers.answerKick.splice($(this).attr("position"), 1, 0);
    }
  });

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

  ///check
  setInterval(function() {
    ////hhopened
    if (_.isEqual(sl.answers.answerHhOpened, check[0].checkHhOpened))
      $("#tracks > div.track0 > img.nope")
        .removeClass()
        .addClass("item align-top");
    else if (!_.isEqual(sl.answers.answerHhOpened, check[0].checkHhOpened))
      $("#tracks > div.track0 > img.nope")
        .removeClass()
        .addClass("nope");
    ////hhclosed
    if (_.isEqual(sl.answers.answerHhClosed, check[0].checkHhClosed))
      $("#tracks > div.track1 > img.nope")
        .removeClass()
        .addClass("item align-top");
    else if (!_.isEqual(sl.answers.answerHhClosed, check[0].checkHhClosed))
      $("#tracks > div.track1 > img.nope")
        .removeClass()
        .addClass("nope");
    ////snare
    if (_.isEqual(sl.answers.answerSnare, check[0].checkSnare))
      $("#tracks > div.track2 > img.nope")
        .removeClass()
        .addClass("item align-top");
    else if (!_.isEqual(sl.answers.answerSnare, check[0].checkSnare))
      $("#tracks > div.track2 > img.nope")
        .removeClass()
        .addClass("nope");
    ////kick
    if (_.isEqual(sl.answers.answerKick, check[0].checkKick))
      $("#tracks > div.track3 > img.nope")
        .removeClass()
        .addClass("item align-top");
    else if (!_.isEqual(sl.answers.answerKick, check[0].checkKick))
      $("#tracks > div.track3 > img.nope")
        .removeClass()
        .addClass("nope");
    if (
      _.isEqual(sl.answers.answerHhOpened, check[0].checkHhOpened) &&
      _.isEqual(sl.answers.answerHhClosed, check[0].checkHhClosed) &&
      _.isEqual(sl.answers.answerSnare, check[0].checkSnare) &&
      _.isEqual(sl.answers.answerKick, check[0].checkKick)
    ) {
      $("#gg1").removeClass("nope");
      $("#s1 > div > div > div.col-lg-12.text-right > h2").text(check[0].pts);
    }
  }, 100);
});