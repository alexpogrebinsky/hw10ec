var xhr = new XMLHttpRequest();

xhr.onload = function () {
    if (xhr.status === 200) {
        responseObject = JSON.parse(xhr.responseText);

        var newContent = "";
        for (var i = 0; i < responseObject.things.length; i++) {
            newContent += 'Hello' + responseObject.things[i].location;
        }

        document.getElementById('content').innerHTML = newContent;
    }
};

xhr.open('GET', 'https://raw.githubusercontent.com/alexpogrebinsky/testingjson/master/data.json', true);
xhr.send(null);
