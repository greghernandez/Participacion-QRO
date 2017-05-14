function like(){
  var like = document.getElementById("like").innerHTML;
  like++;
  document.getElementById("like").innerHTML = like;
}

function dislike(){
  var dislike = document.getElementById("dislike").innerHTML;
  dislike++;
  document.getElementById("dislike").innerHTML = dislike;
}
