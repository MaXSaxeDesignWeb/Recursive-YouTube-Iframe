# Recursive-YouTube-Iframe

## Instructions

### HTML

> Basic HTML page format for the Recursive YouTube Iframe functions

```html
<!DOCTYPE HTML>
<html lang="en">
    <head>
        <title>Recursive YouTube Iframe</title>
    </head>
    <body>
        <main id="YTVids"></main>
        <script src="ytvids.js"></script>
    </body>
</html>
```

### JavaScript

> Edit the uri array to feature the id's of the chosen videos

```javascript
var uri = ["FPI9Rt1PIkY", "W282G4FiS9I", "0FLHal964uM", "Dx8VTOGhIXo", "J_EuWgOK88I", "ST6ojbdhv7Q", "0BWji9hBlO0", "qfmTR_CLYEo", "T1KbB0BheZs", "Zjn2F1uKP1U", "10wqmdu5S7Y", "liAzX0cO5Tg"];
```

> Edit the embed array to feature any autoplay videos - one could have all of the videos autoplay for a mess of audio or an array of highly-productive silent videos

```javascript
var embed = [true, false, false, false, false, false, false, false, false, false, false, false];
```

> Edit the origin to match the page or use ```window.location.href``` to dinamically get the URL of the page

```javascript
var origin = "http://yt.maxfalstein.co.uk";
```

> Edit the following if statement to disable autoplay and the optional origin for protecting HTTPS connections from malicious appending and inspection of data

```javascript
    if (embed[i] == true) {
      curi = furi + "?autoplay=1&" + origin;
    } else {
      curi = furi + "?" + origin;
    }
```

> Edit the width, height, frameborder, allow and allowFullScreen options with the following settings:

```javascript
  var iframe = document.createElement('iframe');
	iframe.src = encodeURI(curi);
	iframe.style.width = "560px";
	iframe.style.height = "315px";
  iframe.frameborder = "0";
  iframe.allow ="autoplay; encrypted-media; allowfullscreen";
	iframe.setAttribute('allowFullScreen', '')
```

> Edit "YTVids" to match the name of the &gt;main&lt;/&gt;article&lt;/&gt;section&lt;/&gt;div&lt; tag id

```javascript
	document.getElementById("YTVids").appendChild(iframe);
```
