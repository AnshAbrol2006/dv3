document.addEventListener("DOMContentLoaded", function () {
    const images = document.querySelectorAll("img[data-video]");

    images.forEach(img => {
        const videoSrc = img.getAttribute("data-video");
        if (!videoSrc) return;

        const video = document.createElement("video");
        video.src = videoSrc;
        video.muted = true;
        video.loop = true;
        
     
        video.style.position = 'absolute';
        video.style.top = `${img.offsetTop}px`;
        video.style.left = `${img.offsetLeft}px`;
        video.style.width = `${img.offsetWidth}px`;
        video.style.height = `${img.offsetHeight}px`;
        video.style.objectFit = 'cover';
        video.style.display = 'none';

       
        img.parentNode.insertBefore(video, img.nextSibling);

  
        img.addEventListener("mouseenter", () => {
            video.style.display = 'block';
            video.play();
            img.style.opacity = '0'; 
        });

        img.addEventListener("mouseleave", () => {
            video.style.display = 'none';
            video.pause();
            img.style.opacity = '1';
        });
    });
});
document.addEventListener("DOMContentLoaded", function () {
    const subscribeButton = document.getElementById("subscribeButton");
    const subscribeContainer = document.getElementById("subscribeContainer");
    const thankYouMessage = document.getElementById("thankYouMessage");

    subscribeButton.addEventListener("click", function (event) {
        event.preventDefault(); 

  
        subscribeContainer.style.display = "none";

   
        thankYouMessage.style.display = "block";
    });
});
   



document.addEventListener("DOMContentLoaded", function () {
    let slides = document.querySelectorAll(".slide");
    let currentIndex = 0;

    document.querySelector(".next").addEventListener("click", function () {
        slides[currentIndex].classList.remove("active");
        currentIndex = (currentIndex + 1) % slides.length;
        slides[currentIndex].classList.add("active");
    });

    document.querySelector(".prev").addEventListener("click", function () {
        slides[currentIndex].classList.remove("active");
        currentIndex = (currentIndex - 1 + slides.length) % slides.length;
        slides[currentIndex].classList.add("active");
    });
});
document.addEventListener("DOMContentLoaded", function () {
    const slides = document.querySelectorAll(".slide");
    const textElement = document.getElementById("slide-text");
    const linkElement = document.getElementById("slide-link");

    function updateText(activeSlide) {
        textElement.textContent = activeSlide.getAttribute("data-text");
        linkElement.href = activeSlide.getAttribute("data-link");
        linkElement.textContent = activeSlide.getAttribute("data-link-text");
    }

    slides.forEach((slide, index) => {
        slide.addEventListener("click", function () {
            slides.forEach(s => s.classList.remove("active"));
            slide.classList.add("active");
            updateText(slide);
        });
    });

    
    updateText(slides[0]);
});



// Updated hamburger
document.addEventListener('DOMContentLoaded', function() {
    const hamburger = document.querySelector('.hamburger');
    const mobileNav = document.querySelector('.mobile-nav');
    const navItems = document.querySelectorAll('.nav-items a');

  
    hamburger.addEventListener('click', function() {
        this.classList.toggle('active');
        mobileNav.classList.toggle('active');
    });

  
    navItems.forEach(item => {
        item.addEventListener('click', () => {
            hamburger.classList.remove('active');
            mobileNav.classList.remove('active');
        });
    });

 
    document.addEventListener('click', (e) => {
        if (!mobileNav.contains(e.target) && !hamburger.contains(e.target)) {
            hamburger.classList.remove('active');
            mobileNav.classList.remove('active');
        }
    });
});














