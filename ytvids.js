var uri = ["FPI9Rt1PIkY", "W282G4FiS9I", "0FLHal964uM", "Dx8VTOGhIXo", "J_EuWgOK88I", "ST6ojbdhv7Q", "0BWji9hBlO0", "qfmTR_CLYEo", "T1KbB0BheZs", "Zjn2F1uKP1U", "10wqmdu5S7Y", "liAzX0cO5Tg"];
var embed = [true, false, false, false, false, false, false, false, false, false, false, false];
var origin = "http://yt.maxfalstein.co.uk";
iframe();
function iframe() {
	var i;
	var curi, furi = "";
	for (i = 0; i < uri.length; i++) {
	  furi = "https://www.youtube.com/embed/" + uri[i];
    if (embed[i] == true) {
      curi = furi + "?autoplay=1&" + origin;
    } else {
      curi = furi + "?" + origin;
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
}
