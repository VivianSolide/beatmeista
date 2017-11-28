function SoundLevel(music, check) {
  this.music = {
    id: music.id,
    track: music.track,
    artist: music.artist,
    year: music.year,
    sounds: music.sounds,
    tempo: music.tempo,
    times: music.times,
    spot: music.spot
  };
  this.answers = {
    answerKick: [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
    answerSnare: [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
    answerHhClosed: [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
    answerHhOpened: [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
    answerTempo: [1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1]
    /*    checkKick: [1, 0, 0, 0, 1, 0, 0, 0, 1, 0, 0, 0, 1, 0, 0, 0],
          checkSnare: [1, 0, 0, 0, 1, 0, 0, 0, 1, 0, 0, 0, 1, 0, 0, 0],
          checkHhClosed: [1, 1, 0, 0, 0, 0, 0, 1, 1, 0, 0, 0, 0, 1, 0, 1],
          checkHhOpened: [0, 0, 1, 0, 0, 0, 1, 0, 0, 0, 1, 0, 0, 0, 1, 0], */
  };
  this.check = {
    id: check.id,
    checkKick: check.checkKick,
    checkSnare: check.checkSnare,
    checkHhClosed: check.checkHhClosed,
    checkHhOpened: check.checkHhOpened,
    points: check.pts
  };
  var that = this;
  this.i = -1;
  /// Playmobil
  setInterval(function() {
    that.i = (that.i + 1) % that.music.times;

    //// kick
    if (that.answers.answerKick[that.i] === 1) {
      new Audio(that.music.sounds.kick).play();
    }
    //// snare
    if (that.answers.answerSnare[that.i] === 1) {
      new Audio(that.music.sounds.snare).play();
    }
    //// hhclosed
    if (that.answers.answerHhClosed[that.i] === 1) {
      new Audio(that.music.sounds.hhclosed).play();
    }
    //// hhopened
    if (that.answers.answerHhOpened[that.i] === 1) {
      new Audio(that.music.sounds.hhopened).play();
    }
    //// tempo
    // console.log(that.i);
    if (that.answers.answerTempo[that.i] === 1) {
      $("div.track.tempo > button[position=" + (that.i - 1) + "]")
        .removeClass()
        .addClass("box");
      $("div.track.tempo > button[position=" + that.i + "]").toggleClass(
        "shine"
      );
      if (that.i === 15) {
        $("div.track.tempo > button[position='0']").toggleClass("shine");
      }
      if (that.i === 0) {
        $("div.track.tempo > button[position='15']")
          .removeClass()
          .addClass("box");
      }
    }
  }, 60000 / that.music.tempo / 4);
}

/// Music it's people ...
////  Ressources : https://songbpm.com
var music = [
  {
    id: "1",
    track: "Revolution 909",
    artist: "Daft Punk",
    year: "1998",
    beatbox: "tr-909", // classe CSS
    sounds: {
      kick: "sounds/1/k.wav",
      snare: "sounds/1/s.wav",
      hhclosed: "sounds/1/hhc.wav",
      hhopened: "sounds/1/hho.wav"
    },
    tempo: 128,
    times: 16,
    spot:
      '<iframe src="https://open.spotify.com/embed/track/5pgZpHqfv4TSomtkfGZGrG" width="300" height="380" frameborder="0" allowtransparency="true"></iframe>'
  },
  {
    id: "2",
    track: "You Spin Me Round",
    artist: "Dead or Alive",
    year: "1998",
    beatbox: "linn",
    sounds: {
      kick: "sounds/2/k.wav",
      snare: "sounds/2/s.wav",
      hhclosed: "sounds/2/hhc.wav",
      hhopened: "sounds/2/hho.wav"
    },
    tempo: 128,
    times: 16,
    step: 0,
    spot:
      '<iframe src="https://open.spotify.com/embed/track/0BB9eUBBaaX6GALSYNcEp7" width="300" height="380" frameborder="0" allowtransparency="true"></iframe>'
  }
];

/// Check one, two
var check = [
  {
    id: "1", // https://www.youtube.com/watch?v=xLCVNUj40I0 //
    checkKick: [1, 0, 0, 0, 1, 0, 0, 0, 1, 0, 0, 0, 1, 0, 0, 0],
    checkSnare: [1, 0, 0, 0, 1, 0, 0, 0, 1, 0, 0, 0, 1, 0, 0, 0],
    checkHhClosed: [1, 1, 0, 0, 0, 0, 0, 1, 1, 0, 0, 0, 0, 1, 0, 1],
    checkHhOpened: [0, 0, 1, 0, 0, 0, 1, 0, 0, 0, 1, 0, 0, 0, 1, 0],
    pts: 100
  },
  {
    id: "2",
    checkKick: [],
    checkSnare: [],
    checkHhClosed: [],
    checkHhOpened: [],
    pts: 200
  }
];

SoundLevel.prototype.play = function() {};

SoundLevel.prototype.html = function() {
  $("#title").text(this.music.track);
  $("#artist").text(this.music.artist);
  $("#year").text(this.music.year);
  var html = "";
  for (var j = 0; j < Object.keys(this.music.sounds).length; j++) {
    html += '<div class="track' + j + '"><img src="">';
    for (var i = 0; i < this.music.times; i++) {
      html += '<button class="box" position="' + i + '"></button>';
    }
    html +=
      '<img src="http://cdn.onlinewebfonts.com/svg/img_237800.png" class="item align-top nope">';
    html += "</div>";
  }

  html += '<div class="track tempo"><img>';
  for (var k = 0; k < this.music.times; k++) {
    html += '<button class="box yolo" position="' + k + '"></button>';
  }
  html += "</div>";
  $("#tracks").append(html);

  $("#s1 > div > div > div.col-lg-12.text-right").append(
    "<h2>0</h2><h3>points</h3>"
  );
  $("#s1 > div > div > div.col-2.align-center").append(this.music.spot);
};

var sl = new SoundLevel(music[0], check[0]);
