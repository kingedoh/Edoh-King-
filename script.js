function togglePanel(id) {
    document.querySelectorAll('.panel').forEach(panel => {
        if (panel.id !== id) panel.classList.add('hidden');
    });
    document.getElementById(id).classList.toggle('hidden');
}

// Add your GitHub image links here
const images = [
    // Example:
    // "https://raw.githubusercontent.com/YOUR-USERNAME/king/main/photo1.jpg",
];

const grid = document.getElementById("gallery-grid");

images.forEach(url => {
    const img = document.createElement("img");
    img.src = url;
    grid.appendChild(img);
});
