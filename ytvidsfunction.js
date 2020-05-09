/* iframe(["FPI9Rt1PIkY", "W282G4FiS9I", "0FLHal964uM", "Dx8VTOGhIXo", "J_EuWgOK88I", "ST6ojbdhv7Q", "0BWji9hBlO0", "qfmTR_CLYEo", "T1KbB0BheZs", "Zjn2F1uKP1U", "10wqmdu5S7Y", "liAzX0cO5Tg"],
	[true, false, false, false, false, false, false, false, false, false, false, false],
	[0, 1000, 2000, 3000, 4000, 5000, 6000, 7000, 8000, 9000, 10000, 11000]);
*/

iframe(["FPI9Rt1PIkY", "W282G4FiS9I", "0FLHal964uM", "Dx8VTOGhIXo", "J_EuWgOK88I", "ST6ojbdhv7Q", "0BWji9hBlO0", "qfmTR_CLYEo", "T1KbB0BheZs", "Zjn2F1uKP1U", "10wqmdu5S7Y", "liAzX0cO5Tg"],
	[true, false, false, false, false, false, false, false, false, false, false, false],
	[0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0]);

function iframe(uri, autoplay, delay) {
  var href = window.location.href;
  var origin = "origin=".concat(href);
  var autoplayTrue = "?autoplay=1&";
  var autoplayFalse = "?autoplay=0&";
  var ytEmbed = "https://www.youtube.com/embed/";
  for (var i = 0; i < uri.length; i++) {
    var furi = ytEmbed.concat(uri[i]);
    if (autoplay[i] == true) {
      var curi = furi.concat(autoplayTrue).concat(origin);
    } else {
      var curi = furi.concat(autoplayFalse).concat(origin);
    }
    var iframe = document.createElement('iframe');
    iframe.src = encodeURI(curi);
    iframe.style.width = "560px";
    iframe.style.height = "315px";
    iframe.frameborder = "0";
    iframe.allow ="autoplay; encrypted-media; allowfullscreen";
    iframe.setAttribute("allowFullScreen", "");
    document.getElementById("YTVids").appendChild(iframe);
    console.log("iframe.contentWindow =", iframe.contentWindow);
    sleep(delay[i]);
  }
}

function sleep(miliseconds) {
  var currentTime = new Date().getTime();
  while (currentTime + miliseconds >= new Date().getTime()) {}
}
