$(document).ready (function () {

   $(".intro").show()

   $(".cover").hide()
   $(".title").hide()
   $(".artist").hide()

   function Jukebox(){

      this.tracks = [{
                "track": 1,
                "albumcover": "https://bigotherbigother.files.wordpress.com/2011/10/hatful-of-hollow.jpg",
                "title": "Please, Please, Please, Let Me Get What I Want",
                "artist": "The<br>Smiths",
                "src": "https://a.tumblr.com/tumblr_n9h7wtHye91sk2by0o1.mp3"
            }, {
                "track": 2,
                "albumcover": "http://cdn4.pitchfork.com/albums/18013/5cfdc584.jpg",
                "title": "Cry Like A Ghost",
                "artist": "Passion<br>Pit",
                "src": "https://a.tumblr.com/tumblr_my62v8kywS1s5vxywo1.mp3"
            }, {
                "track": 3,
                "albumcover": "http://i65.fastpic.ru/big/2015/0120/f8/f3df0c86265b4d8e2426454953aa7ef8.jpg",
                "title": "Interstellar Theme Song",
                "artist": "Hans<br>Zimmer",
                "src": "https://a.tumblr.com/tumblr_noos9br63h1tqmylco1.mp3"
            }, {
                "track": 4,
                "albumcover": "http://arcadefire.com/reflektorpreorder/assets/images/the-suburbs.jpg",
                "title": "Sprawl II",
                "artist": "Arcade<br>Fire",
                "src": "https://a.tumblr.com/tumblr_ncr4dcPXX41tqmylco1.mp3"
            }, {
                "track": 5,
                "albumcover": "https://s-media-cache-ak0.pinimg.com/736x/3f/90/e9/3f90e99fe0cfc0e84ce24e760d153823.jpg",
                "title": "Young Men Dead",
                "artist": "The<br>Black<br>Angels",
                "src": "https://a.tumblr.com/tumblr_n1mpq3CaEI1qmi6fmo1.mp3"
            }, {
                "track": 6,
                "albumcover": "https://31.media.tumblr.com/tumblr_mtjwb7wRk91ql76eno1_1379893076_cover.jpg",
                "title": "Prehistoric",
                "artist": "Now,<br>Now",
                "src": "https://a.tumblr.com/tumblr_o2nuvt4zJw1ur27e7o1.mp3"
            }, {
                "track": 7,
                "albumcover": "https://loreto12w1group4.files.wordpress.com/2012/11/xxyyxx.jpg",
                "title": "About You",
                "artist": "XXYYXX",
                "src": "https://a.tumblr.com/tumblr_n96v8a4uqD1thpvkpo1.mp3"
            }, {
                "track": 8,
                "albumcover": "https://i1.sndcdn.com/artworks-000032287861-xj6v54-t500x500.jpg",
                "title": "Medicine",
                "artist": "Daughter",
                "src": "https://a.tumblr.com/tumblr_nsuxkvPk3j1tqmylco1.mp3"
            }]

      var i = 0;     
      var player = $('#player');
      var cover = $('.cover'); 
      var titleArtist = $('.title-artist');
      var songTitle = $('.title');
      var songArtist = $('.artist');
      var song = new Audio(this.tracks[0].src)


      this.play_pause_song = function(){
         if (song.paused) {
            song.play();
            $(".intro").hide()
            $("#play_pause_img").attr("src","images/pause.svg")
            $(cover).fadeIn().attr("src",this.tracks[i].albumcover)
            $(songTitle).fadeIn().html(this.tracks[i].title)
            $(songArtist).fadeIn().html(this.tracks[i].artist)

         } else {
            song.pause();
            $(".intro").hide()
            $("#play_pause_img").attr("src","images/play.svg")
         }
      }

      // play next/prev song in array. when you reach the end, go back to the beginning
      // you can't play next song if the current one is on pause
      this.next_song = function(){ 
         if (i < this.tracks.length - 1){
            i +=1;
         } else {
            i = 0
         };
      console.log(i);
      if (song.paused) {
         $(".intro").hide()
         song.pause();
      } else {
         song.setAttribute("src", this.tracks[i].src);
         $("#play_pause_img").attr("src","images/pause.svg")
         $(cover).fadeIn().attr("src",this.tracks[i].albumcover)
         $(songTitle).fadeIn().html(this.tracks[i].title)
         $(songArtist).fadeIn().html(this.tracks[i].artist)
         $(".intro").hide()
         song.play();
      }
   }

      this.previous_song = function(){ 
         if(i > 0 ){
            i -= 1;
         } else {
            i = this.tracks.length - 1;
         };
      console.log(i);
      if (song.paused) {
         $(".intro").hide()
      } else {
         song.setAttribute("src", this.tracks[i].src);
         $("#play_pause_img").attr("src","images/pause.svg")
         $(cover).fadeIn().attr("src",this.tracks[i].albumcover)
         $(songTitle).fadeIn().html(this.tracks[i].title)
         $(songArtist).fadeIn().html(this.tracks[i].artist)
         $(".intro").hide()
         song.play();
      }
   }

   this.random_song = function(){
      if (song.paused) {
         $(".intro").hide()
      } else {
         var random = Math.floor((Math.random() * this.tracks.length));
         i = random
         song.setAttribute("src", this.tracks[i].src);
         $("#play_pause_img").attr("src","images/pause.svg")
         $(cover).fadeIn().attr("src",this.tracks[i].albumcover)
         $(songTitle).fadeIn().html(this.tracks[i].title)
         $(songArtist).fadeIn().html(this.tracks[i].artist)
         $(".intro").hide()
         song.play();
      }
   }


   }



var jukebox = new Jukebox()

$("#play_pause").click(function(){
   jukebox.play_pause_song()
})

$("#next").click(function(){
   jukebox.next_song()
})

$("#previous").click(function(){
   jukebox.previous_song()
})

$("#shuffle").click(function(){
   jukebox.random_song()
})


})




