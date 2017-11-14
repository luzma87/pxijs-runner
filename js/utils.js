function getProportionalHeight(width, originalWidth, originalHeight) {
    return (width * originalHeight) / originalWidth;
}

function getRandomInt(min, max) {
    return Math.floor(Math.random() * (max - min + 1)) + min;
}

function shuffle(array) {
    let newArray = array.slice(0);
    let len = newArray.length;
    let shuffles = len * 3;
    for (let i = 0; i < shuffles; i++) {
        let item = newArray.pop();
        let pos = Math.floor(Math.random() * (len - 1));
        newArray.splice(pos, 0, item);
    }
    return newArray;
}
