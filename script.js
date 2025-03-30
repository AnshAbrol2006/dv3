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
        event.preventDefault(); // Prevent any default button behavior

        
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
        currentIndex = (currentIndex - 1 + slides.length) % slides.length; // curr index is 0 -> 1 
        slides[currentIndex].classList.add("active");                      // % slides.length it is for if it reaches last image it would revert back to first image 
    });
});



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




document.addEventListener('DOMContentLoaded', function() {
    const carousel = document.querySelector('.carousel1');
    const slides = Array.from(carousel.querySelectorAll('.slide'));
    const prevBtn = document.querySelector('.prev');
    const nextBtn = document.querySelector('.next');
    let currentIndex = 0;
    let isAnimating = false;

    const ease = t => t < 0.5 ? 2 * t * t : -1 + (4 - 2 * t) * t;

    function animateSlide(newIndex) {
        if (isAnimating) return;
        isAnimating = true;

        const direction = newIndex > currentIndex ? 1 : -1;
        const currentSlide = slides[currentIndex];
        const nextSlide = slides[newIndex];

        nextSlide.style.transform = `translateX(${direction * 100}%)`;
        nextSlide.style.opacity = '0.5';
        nextSlide.style.display = 'block';

        const startTime = Date.now();
        const duration = 600;

        function update() {
            const elapsed = Date.now() - startTime;
            const progress = Math.min(elapsed / duration, 1);
            const easedProgress = ease(progress);

            currentSlide.style.transform = `translateX(${direction * -easedProgress * 100}%)`;
            currentSlide.style.opacity = 1 - easedProgress;

         
            nextSlide.style.transform = `translateX(${direction * (1 - easedProgress) * 100}%)`;
            nextSlide.style.opacity = 0.5 + (easedProgress * 0.5);

            if (progress < 1) {
                requestAnimationFrame(update);
            } else {
                currentSlide.style.display = 'none';
                currentIndex = newIndex;
                isAnimating = false;
            }
        }

        requestAnimationFrame(update);
    }

    nextBtn.addEventListener('click', () => {
        const newIndex = (currentIndex + 1) % slides.length;
        animateSlide(newIndex);
    });

    prevBtn.addEventListener('click', () => {
        const newIndex = (currentIndex - 1 + slides.length) % slides.length;
        animateSlide(newIndex);
    });

    slides.forEach((slide, index) => {
        slide.style.transform = index === 0 ? 'translateX(0)' : 'translateX(100%)';
        slide.style.display = index === 0 ? 'block' : 'none';
    });
});


document.addEventListener("DOMContentLoaded", function () {
    const fadeElements = document.querySelectorAll(".fade-up");

    const observer = new IntersectionObserver(
        (entries) => {
            entries.forEach((entry) => {
                if (entry.isIntersecting) {
                    entry.target.classList.add("visible");
                }
            });
        },
        { threshold: 0.5 } 
    );

    fadeElements.forEach((el) => observer.observe(el));
});


document.addEventListener("scroll", function() {
    let scrollTop = window.scrollY;

    document.querySelectorAll(".parallax-section img").forEach(img => {
        img.style.transform = `translateY(${scrollTop * 0.2}px)`;       // "translateY(" + (scrollTop * 0.3) + "px)"
    });

    document.querySelectorAll(".parallax-section p").forEach(text => {
        text.style.transform = `translateY(${scrollTop * 0.1}px)`;  
    });
});
  






document.addEventListener("scroll", function () {
    let scrollTop = window.scrollY;
    let viewportHeight = window.innerHeight;
    let triggerPoint = viewportHeight * 0.2; 
    let lastPart = document.querySelector(".lastpart");
    let lastPartTop = lastPart.getBoundingClientRect().top + scrollTop;

    document.querySelectorAll(".parallax-section").forEach(section => {
        let sectionRect = section.getBoundingClientRect();
        let sectionTop = sectionRect.top + scrollTop;


        let sectionTrigger = sectionTop - triggerPoint;
        let adjustedScroll = Math.max(0, scrollTop - sectionTrigger);

    
        if (scrollTop + viewportHeight < lastPartTop) {
            section.dataset.lastImgPos = adjustedScroll * 0.2; 
            section.dataset.lastTextPos = adjustedScroll * 0.1; 

            section.querySelectorAll("img").forEach(img => {
                img.style.transform = `translateY(${section.dataset.lastImgPos}px)`;
            });

            section.querySelectorAll("p").forEach(text => {
                text.style.transform = `translateY(${section.dataset.lastTextPos}px)`;
            });
        } else {
        section.dataset.freeze = "true";
            section.querySelectorAll("img").forEach(img => {
                img.style.transform = `translateY(${section.dataset.lastImgPos}px)`;
            });

            section.querySelectorAll("p").forEach(text => {
                text.style.transform = `translateY(${section.dataset.lastTextPos}px)`;
            });
        }
    });
});




