function togglePanel(id) {
    document.querySelectorAll('.panel').forEach(panel => {
        if (panel.id !== id) panel.classList.add('hidden');
    });
    document.getElementById(id).classList.toggle('hidden');
}

// Add your GitHub image links here
const images = [
     //https://raw.githubusercontent.com/kingedoh/Edoh-King-/main/IMG-20250731-WA0004.jpg
    //https://raw.githubusercontent.com/kingedoh/Edoh-King-/main/IMG-20250731-WA0006.jpg
    //https://raw.githubusercontent.com/kingedoh/Edoh-King-/main/IMG-20250731-WA0008.jpg
    //https://raw.githubusercontent.com/kingedoh/Edoh-King-/main/IMG-20250731-WA0010.jpg
    //https://raw.githubusercontent.com/kingedoh/Edoh-King-/main/IMG_0832.JPG
    //https://raw.githubusercontent.com/kingedoh/Edoh-King-/main/IMG_1040.JPG
    //https://raw.githubusercontent.com/kingedoh/Edoh-King-/main/IMG_1041.JPG
    //https://raw.githubusercontent.com/kingedoh/Edoh-King-/main/IMG_5151.jpeg
];

const grid = document.getElementById("gallery-grid");

images.forEach(url => {
    const img = document.createElement("img");
    img.src = url;
    grid.appendChild(img);
});
