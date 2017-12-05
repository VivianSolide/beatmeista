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
        hhopened: [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
        hhclosed: [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
        snare: [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
        kick: [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
        answerTempo: [1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1]
    };
    this.check = {
        id: check.id,
        kick: check.kick,
        snare: check.snare,
        hhclosed: check.hhclosed,
        hhopened: check.hhopened,
        points: check.points
    };
}

/// Music it's people ...
////  Ressources : https://songbpm.com
var music = [{
        id: "1",
        track: "Revolution 909",
        artist: "Daft Punk",
        year: "1998",
        beatbox: "tr-909", // classe CSS
        sounds: {
            kick: "sounds/1/kick.wav",
            snare: "sounds/1/snare.wav",
            hhclosed: "sounds/1/hhclosed.wav",
            hhopened: "sounds/1/hhopened.wav"
        },
        tempo: 128,
        times: 16,
        spot: '<iframe src="https://open.spotify.com/embed/track/5pgZpHqfv4TSomtkfGZGrG" width="300" height="380" frameborder="0" allowtransparency="true"></iframe>'
    },
    {
        id: "2",
        track: "You Spin Me Round",
        artist: "Dead or Alive",
        year: "1998",
        beatbox: "linn",
        sounds: {
            kick: "sounds/2/kick.wav",
            snare: "sounds/2/snare.wav",
            hhclosed: "sounds/2/hhclosed.wav",
            hhopened: "sounds/2/hhopened.wav"
        },
        tempo: 128,
        times: 16,
        step: 0,
        spot: '<iframe src="https://open.spotify.com/embed/track/0BB9eUBBaaX6GALSYNcEp7" width="300" height="380" frameborder="0" allowtransparency="true"></iframe>'
    }
];

/// Check one, two
var check = [{
        id: "1", // https://www.youtube.com/watch?v=xLCVNUj40I0 //
        hhopened: [0, 0, 1, 0, 0, 0, 1, 0, 0, 0, 1, 0, 0, 0, 1, 0],
        hhclosed: [1, 1, 0, 0, 0, 0, 0, 1, 1, 0, 0, 0, 0, 1, 0, 1],
        snare: [1, 0, 0, 0, 1, 0, 0, 0, 1, 0, 0, 0, 1, 0, 0, 0],
        kick: [1, 0, 0, 0, 1, 0, 0, 0, 1, 0, 0, 0, 1, 0, 0, 0],
        pts: 100
    },
    {
        id: "2",
        kick: [],
        snare: [],
        hhclosed: [],
        hhopened: [],
        pts: 200
    }
];

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

SoundLevel.prototype.play = function() {
    var that = this;
    this.i = -1;
    /// Playmobil
    setInterval(function() {
        that.i = (that.i + 1) % that.music.times;

        //// kick
        if (that.answers.kick[that.i] === 1) {
            new Audio(that.music.sounds.kick).play();
        }
        //// snare
        if (that.answers.snare[that.i] === 1) {
            new Audio(that.music.sounds.snare).play();
        }
        //// hhclosed
        if (that.answers.hhclosed[that.i] === 1) {
            new Audio(that.music.sounds.hhclosed).play();
        }
        //// hhopened
        if (that.answers.hhopened[that.i] === 1) {
            new Audio(that.music.sounds.hhopened).play();
        }
        //// hhopened
        if (that.answers.hhopened[that.i] === 1) {
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
            if (that.i == (that.music.times - 1)) {
                $("div.track.tempo > button[position='0']").toggleClass("shine");
            }
            if (that.i === 0) {
                $("div.track.tempo > button[position=" + (that.music.times - 1) + "]")
                    .removeClass()
                    .addClass("box");
            }
        }
    }, 60000 / that.music.tempo / 4);
};

SoundLevel.prototype.track = function() {
    var that = this;
    var arrayKeys = Object.keys(this.answers);
    for (let i = 0; i < arrayKeys.length - 1; i++) {
        $("#tracks > div.track" + i + " > button").click(function() {
            //$(this).toggleClass(Object.keys(that.answers).reverse()[i + 1]);
            $(this).toggleClass(arrayKeys[i]);
            if (that.answers[arrayKeys[i]][$(this).attr("position")] == 0) {
                new Audio(
                    "/home/vivian/Bureau/IRON HACK/2_PROJECTS/beatmeista/sounds/" +
                    that.music.id +
                    "/" + arrayKeys[i] + ".wav"
                ).play();
                that.answers[arrayKeys[i]].splice($(this).attr("position"), 1, 1);
                // console.log(that.answers[i].splice($(this).attr("position"), 1, 1));
            } else if (that.answers[arrayKeys[i]][$(this).attr("position")] == 1) {
                that.answers[arrayKeys[i]].splice($(this).attr("position"), 1, 0);
            }
        });
    }
};

SoundLevel.prototype.checking = function() {
    var that = this;
    var arrayKeys = Object.keys(this.answers);
    /*console.log(this.answers[arrayKeys[1]], this.check[arrayKeys[1]]);*/
    for (let i = 0; i < arrayKeys.length - 1; i++) {
        setInterval(function() {
            if (_.isEqual(that.answers[arrayKeys[i]], that.check[arrayKeys[i]]))
            $("#tracks > div.track" + i + " > img.nope")
                .removeClass()
                .addClass("item align-top");
            else if (!_.isEqual(that.answers[arrayKeys[i]], that.check[arrayKeys[i]]))
              $("#tracks > div.track" + i + " > img.nope")
                .removeClass()
                .addClass("nope");
        }, 1000);
    }
};

var sl1 = new SoundLevel(music[0], check[0]);

/*    ////hhopened
    if (_.isEqual(sl.answers.answerHhOpened, check[0].checkHhOpened))
      $("#tracks > div.track0 > img.nope")
        .removeClass()
        .addClass("item align-top");
    else if (!_.isEqual(sl.answers.answerHhOpened, check[0].checkHhOpened))
      $("#tracks > div.track0 > img.nope")
        .removeClass()
        .addClass("nope");*/