// ajax

let data = new Array;

async function getData() {
    try {
        let response = await fetch('./db.json');
        if (response.ok) {
            let jsonResponse = await response.json()
                .then(jsonResponse => {
                    data = jsonResponse;
                    publishData();
                })
        }
    } catch (error) {
        console.log(error);
    }
}
getData();

// publishing data

function publishData() {
    const containerBlock = document.querySelector('.container-block');

    for (i in data) {
        document.querySelector('.container-block--h2').innerHTML = data[i].title;
        document.querySelector('.container-block--p').innerHTML = data[i].description;
        document.querySelector('.container-block--img').src = data[i].img;
        let date = data[i].date.split(' ');
        document.querySelector('.container-block--date__span1').innerHTML = date[0];
        document.querySelector('.container-block--date__span2').innerHTML = date[1];
        let clone = document.querySelector('.container-block--inner').cloneNode(true);
        containerBlock.appendChild(clone);
    }

    containerBlock.removeChild(containerBlock.childNodes[1]);
}