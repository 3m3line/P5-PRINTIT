//fixation images et textes du slider
const slides = [
	{
		"image":"slide1.jpg",
		"tagLine":"Impressions tous formats <span>en boutique et en ligne</span>"
	},
	{
		"image":"slide2.jpg",
		"tagLine":"Tirages haute définition grand format <span>pour vos bureaux et events</span>"
	},
	{
		"image":"slide3.jpg",
		"tagLine":"Grand choix de couleurs <span>de CMJN aux pantones</span>"
	},
	{
		"image":"slide4.png",
		"tagLine":"Autocollants <span>avec découpe laser sur mesure</span>"
	}
];

//variables fixées avec element html
let currentSlide = 0;
const tagLineElement = document.getElementById('tagLine');
const bannerImageElement = document.querySelector('.banner-img');
const dotsContainer = document.querySelector('.dots');

// fonction pour afficher une diapositive spécifique
function showSlide(slideIndex) {
    const slide = slides[slideIndex];
    bannerImageElement.src = `./ASSETS/images/slideshow/${slide.image}`;
    tagLineElement.innerHTML = slide.tagLine;
	//effet sur les dots (actif ou non)
	const dots = document.querySelectorAll('.dot');
    dots.forEach((dot, index) => {
        if (index === slideIndex) {
            dot.classList.add('dot_selected');
        } else {
            dot.classList.remove('dot_selected');
        }
    });
}

//fonctions pour les diapositive précédentes et suivantes
function nextSlide() {
    currentSlide = (currentSlide + 1) % slides.length;
    showSlide(currentSlide);
}

function prevSlide() {
    currentSlide = (currentSlide - 1 + slides.length) % slides.length;
    showSlide(currentSlide);
}

// Générer les dots
slides.forEach((slide, index) => {
    const dot = document.createElement('span');
    dot.classList.add('dot');
    dot.setAttribute('onclick', `goToSlide(${index})`);
    dotsContainer.appendChild(dot);
});

// Fonction pour aller à une diapositive spécifique lorsqu'un dot est cliqué
function goToSlide(slideIndex) {
    currentSlide = slideIndex;
    showSlide(currentSlide);
}

// Initialisation du premier slide
showSlide(currentSlide);