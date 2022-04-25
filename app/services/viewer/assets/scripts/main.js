const socket = new WebSocket('ws://localhost:8080/v1/events');

socket.addEventListener('open', function (event) {
    document.getElementById("first-msg").innerHTML = "connection open";
});

var svgY = 60
socket.addEventListener('message', function (event) {
    svgElem = document.getElementById("msg-svg");
    svgElem.setAttribute("viewBox", `0 0 1600 ${svgY + 32+2 + 75 + 10}`);
	text = event.data;
    svgElem.innerHTML += `
	    <line stroke="rgb(0,0,0)" stroke-opacity="1.0" stroke-width="2.5" x1="220" y1="${svgY}" x2="220" y2="${svgY+32}"/>
	    <line stroke="rgb(0,0,0)" stroke-opacity="1.0" stroke-width="2.5" x1="212" y1="${svgY+24}" x2="220" y2="${svgY+32}"/>
	    <line stroke="rgb(0,0,0)" stroke-opacity="1.0" stroke-width="2.5" x1="228" y1="${svgY+24}" x2="220" y2="${svgY+32}"/>

	    <rect fill="rgb(96,196,255)" fill-opacity="1.0" stroke="rgb(0,0,0)" stroke-opacity="1.0" stroke-width="2.5" width="1550" height="75" x="20" y="${svgY+32+2}" rx="10" ry="10"/>
	    <text fill="rgb(0,0,0)" fill-opacity="1.0" font-family="monospace" font-size="16" x="32" y="${svgY+64}" textLength="${Math.min(text.length*12, 1500)}" lengthAdjust="spacingAndGlyphs" xml:space="preserve">${text}</text>
`;
	svgY += 32+2 + 75;
});
