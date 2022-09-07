window.onload = () => {
    main();
}

function generateHexcolor() {
    const red = Math.floor(Math.random() * 255);
    const blue = Math.floor(Math.random() * 255);
    const black = Math.floor(Math.random() * 255);
    return `#${red.toString(16)}${blue.toString(16)}${black.toString(16)}`;
}

function main() {
    const bgColor = document.getElementById('body');
    const button = document.getElementById('colorBtn');
    const inputfield = document.getElementById('inputField');
    button.addEventListener('click', function () {
        const randomHexcolor = generateHexcolor();
        bgColor.style.backgroundColor = randomHexcolor;
        inputfield.value = randomHexcolor;
    })
}