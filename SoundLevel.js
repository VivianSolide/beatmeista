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
    answerHhOpened: [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0]
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
  this.i = 0;
  /// Playmobil
  setInterval(function() {
    that.i = (that.i + 1) % that.music.times;
    //// kick
    if (that.answers.answerKick[that.i] === 1) {
      new Audio(that.music.sounds.kick).play();
    } 
    // else if (that.answers.answerKick[that.i] === 0) {
    //   $("button[position=" + that.i + "]").toggleClass("shine");
    //   // $( "button[position=" + that.i + "]").previous().removeClass();
    //   console.log($("button[position=" + that.i + "]"));
    // }
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
  }, that.music.tempo);
}

/// Music it's people ...
////  Ressources : https://songbpm.com
var music = [
  {
    id: "1",
    track: "Revolution 909",
    artist: "Daft Punk",
    year: "1998",
    sounds: {
      kick: "sounds/1/k.wav",
      snare: "sounds/1/s.wav",
      hhclosed: "sounds/1/hhc.wav",
      hhopened: "sounds/1/hho.wav"
    },
    tempo: 127,
    times: 16,
    spot:
      '<iframe src="https://open.spotify.com/embed/track/5pgZpHqfv4TSomtkfGZGrG" width="300" height="380" frameborder="0" allowtransparency="true"></iframe>'
  },
  {
    id: "2",
    track: "It's Tricky",
    artist: "RUN D.M.C",
    year: "1998",
    sounds: {
      kick: "sounds/2/k.wav",
      snare: "sounds/2/s.wav",
      hhclosed: "sounds/2/hhc.wav",
      hhopened: "sounds/2/hho.wav"
    },
    tempo: 110,
    times: 16,
    step: 0,
    spot:
      '<iframe src="https://open.spotify.com/embed/track/6jBCehpNMkwFVF3dz4nLIW" width="300" height="380" frameborder="0" allowtransparency="true"></iframe>2'
  }
];

/// Check one, two
var check = [
  {
    id: "1",
    checkKick: [1, 0, 0, 0, 1, 0, 0, 0, 1, 0, 0, 0, 1, 0, 0, 0],
    checkSnare: [1, 0, 0, 0, 1, 0, 0, 0, 1, 0, 0, 0, 1, 0, 0, 0],
    checkHhClosed: [1, 0, 0, 0, 1, 0, 0, 0, 1, 0, 0, 0, 1, 0, 0, 0],
    checkHhOpened: [1, 0, 0, 0, 1, 0, 0, 0, 1, 0, 0, 0, 1, 0, 0, 0],
    pts: 100
  },
  {
    id: "2",
    checkKick: [1, 0, 0, 0, 1, 0, 0, 0, 1, 0, 0, 0, 1, 0, 0, 0],
    checkSnare: [1, 0, 0, 0, 1, 0, 0, 0, 1, 0, 0, 0, 1, 0, 0, 0],
    checkHhClosed: [1, 0, 0, 0, 1, 0, 0, 0, 1, 0, 0, 0, 1, 0, 0, 0],
    checkHhOpened: [1, 0, 0, 0, 1, 0, 0, 0, 1, 0, 0, 0, 1, 0, 0, 0],
    pts: 100
  }
];

var sl = new SoundLevel(music[0], check[0]);
