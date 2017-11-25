//    Box
///   1st track
////  hho
$('#s1 > div > div > div.col-9 > div:nth-child(1) > button').click(function(){
  $(this).toggleClass('hho');
  new Audio('/home/vivian/Bureau/IRON HACK/2_PROJECTS/beatmeista/sounds/1/hho.wav').play();
});
////  hhc
$('#s1 > div > div > div.col-9 > div:nth-child(2) > button').click(function(){
  $(this).toggleClass('hhc');
  new Audio('/home/vivian/Bureau/IRON HACK/2_PROJECTS/beatmeista/sounds/1/hhc.wav').play();
});
////  snare
$('#s1 > div > div > div.col-9 > div:nth-child(3) > button').click(function(){
  $(this).toggleClass('s');
  new Audio('/home/vivian/Bureau/IRON HACK/2_PROJECTS/beatmeista/sounds/1/s.wav').play();
});
////  kick
$('#s1 > div > div > div.col-9 > div:nth-child(4) > button').click(function(){
  $(this).toggleClass('k');
  new Audio('/home/vivian/Bureau/IRON HACK/2_PROJECTS/beatmeista/sounds/1/k.wav').play();
});