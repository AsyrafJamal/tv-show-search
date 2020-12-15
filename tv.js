const form = document.querySelector("#FormSearch");
const button = document.querySelector('button');


form.addEventListener("submit", async function (e) {
    e.preventDefault();
    const searchTerm = form.elements.query.value;
    const config = { params: { q: searchTerm }, }
    const res = await axios.get(`http://api.tvmaze.com/search/shows`, config);
    console.log();
    makeImages(res.data)
    form.elements.query.value = "";
    button.addEventListener('click', () => {
        removing();
    })

})

const makeImages = (shows) => {
    for (let result of shows) {
        if (result.show.image) {
            const img = document.createElement("IMG");
            img.src = result.show.image.medium;
            document.body.append(img)
        }
    }
}

const removing = () => {
    const images = document.querySelectorAll('img')
    for (let image of images) {
        image.parentNode.removeChild(image);
    }
}



/*
const removing = () => {
    const images=document.querySelectorAll('img')
    images.forEach( image => {
         image.parentNode.removeChild(image);
 } )
}








  function removeImgs() {
    let nodeVals = Object.values(body.childNodes)
    for (let i = 7; i < nodeVals.length; i++) {
        nodeVals[i].remove();
    }
} */