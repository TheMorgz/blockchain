const socket = new WebSocket('ws://localhost:8080/v1/events');

socket.addEventListener('open', function (event) {
    document.getElementById("first-msg").innerHTML = "connection open";
});

socket.addEventListener('message', function (event) {
    msgBlock = document.getElementById("msg-block");
    // Append arrow image
    const arrowImg = document.createElement("img");
    arrowImg.setAttribute("src", "assets/img/arrow.jpeg");
    arrowImg.style.width = "50px";
    arrowImg.style.height = "50px";
    msgBlock.appendChild(arrowImg);

    // Create new <div> element
    const newMsg = document.createElement("div");
    // Set block-class attribute to use style
    newMsg.setAttribute("class", "block-class");
    // Create text node with event data
    const node = document.createTextNode(event.data);
    // Append text node to <div> element
    newMsg.appendChild(node);

    // Append the new <div> element to the msg-block <div>
    msgBlock.appendChild(newMsg);
});