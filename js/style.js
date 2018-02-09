//var xhr = new XMLHttpRequest();

//xhr.onload = function () {
//    if (xhr.status === 200) {
//        responseObject = JSON.parse(xhr.responseText);

//        var newContent = "";
//        for (var i = 0; i < responseObject.things.length; i++) {
//            newContent += 'Hello' + responseObject.things[i].location;
//        }

//        document.getElementById('content').innerHTML = newContent;
//    }
//};

//xhr.open('GET', '../data/data.json', true);
//xhr.send(null);



var responseObject = [{
    "things": [
        { "location": "Bar Harbor, Maine", "description": "A beautiful and tranquil sleepy town on the edge of Maine, at the foot of the the great Cadillac Mountain in Acadia National Park.", "image": "../images.001.jpeg" }


    ]
}
]

var newContent = "";
for (var i = 0; i < responseObject.things.length; i++) {
    newContent += 'Hello' + responseObject.things[i].location;
}

document.getElementById('content').innerHTML = newContent;