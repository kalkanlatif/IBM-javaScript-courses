let length;
let width;

function calculateArea(){

    lengnt = parseFloat(document.getElementById('length').value);
    width = parseFloat(document.getElementById('width').value);

    let area = length * width;

    document.getElementById('Result').innerText = 'The area of the Rectangle is: ${area}';
}