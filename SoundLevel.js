function SoundLevel(k, s, hhc, hho, ak, as, ahhc, ahho, tempo, spot, points) {
  this.k = k;
  this.s = s;
  this.hhc = hhc;
  this.hho = hho;
  // ...
}

function SoundLevel(music, answers) {
  this.music = {
    track: t,
    artist: a,
    year: y,
    kick: k,
    snare: s,
    hhclosed: hhc,
    hhopened: hho,
    tempo: tempo,
    spot: spot,
  };
  this.answers = {
    answerKick: ak,
    answerSnare: as,
    answerHhclosed: aahc,
    answerHhcopened: aaho,
    points: points,
  };
}
