function SoundLevel(music, check) {
  this.music = {
    id: id,
    track: t,
    artist: a,
    year: y,
    kick: k, // .mp3
    snare: s, // .mp3
    hhclosed: hhc, // .mp3
    hhopened: hho, // .mp3
    tempo: tempo, // 140
    spot: spot // url
  };
  this.answers = {
    answerKick: [], // null
    answerSnare: [],
    answerHhClosed: [],
    answerHhOpened: []
  };
  this.check = {
    answerKick: ck, // [1,0,0,0,1]
    answerSnare: cs,
    answerHhClosed: chhc,
    answerHhOpened: chho,
    points: pts
  };
}

/// Music it's people ...
var music = [
  {
    id: "1",
    track: "Revolution 909",
    artist: "Daft Punk",
    year: "1998",
    kick: "sounds/1/k.wav",
    snare: "sounds/1/s.wav",
    hhclosed: "sounds/1/hhc.wav",
    hhopened: "sounds/1/hho.wav",
    tempo: 140,
    spot:
      '<iframe src="https://open.spotify.com/embed/track/5pgZpHqfv4TSomtkfGZGrG" width="300" height="380" frameborder="0" allowtransparency="true"></iframe>'
  },
  {
    id: "2",
    track: "It's Tricky",
    artist: "RUN D.M.C",
    year: "1998",
    kick: "sounds/2/k.wav",
    snare: "sounds/2/s.wav",
    hhclosed: "sounds/2/hhc.wav",
    hhopened: "sounds/2/hho.wav",
    tempo: 110,
    spot:
      '<iframe src="https://open.spotify.com/embed/track/6jBCehpNMkwFVF3dz4nLIW" width="300" height="380" frameborder="0" allowtransparency="true"></iframe>2'
  }
];
