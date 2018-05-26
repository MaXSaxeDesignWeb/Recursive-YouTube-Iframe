var uri = ["FPI9Rt1PIkY", "W282G4FiS9I", "0FLHal964uM", "Dx8VTOGhIXo", "J_EuWgOK88I", "ST6ojbdhv7Q", "0BWji9hBlO0", "qfmTR_CLYEo", "T1KbB0BheZs", "Zjn2F1uKP1U", "10wqmdu5S7Y", "liAzX0cO5Tg"];
var autoplay = [true, false, false, false, false, false, false, false, false, false, false, false];
// var autoplay = [true, false, true, false, true, false, true, false, true, false, true, false];

// var origin = "origin=http://yt.maxfalstein.co.uk/";
var href = window.location.href;
var origin = "origin=".concat(href);
var autoplayText = "?autoplay=1&";
var questionMark = "?autoplay=0&";
var ytEmbed = "https://www.youtube.com/embed/";
iframe();
var chunky = iframe.curi();
function iframe() {
  var i;
  var curi, furi = "";
  for (i = 0; i < uri.length; i++) {
    furi = ytEmbed.concat(uri[i]);
    if (autoplay[i] == true) {
      curi = furi.concat(autoplayText).concat(origin);
	} else {
      curi = furi.concat(questionMark).concat(origin);
    }
    var iframe = document.createElement('iframe');
    iframe.src = encodeURI(curi);
    iframe.style.width = "560px";
    iframe.style.height = "315px";
    iframe.frameborder = "0";
    iframe.allow ="autoplay; encrypted-media; allowfullscreen";
    iframe.setAttribute('allowFullScreen', '')
    document.getElementById("YTVids").appendChild(iframe);
    console.log('iframe.contentWindow =', iframe.contentWindow);
  }
  function curi() {
	return curi;
  }
}
