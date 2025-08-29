let nextDom = document.getElementById('next');
let prevDom = document.getElementById('prev');

let carouselDom = document.querySelector('.carousel');
let SliderDom = carouselDom.querySelector('.carousel .list');
let thumbnailBorderDom = document.querySelector('.carousel .thumbnail');
let thumbnailItemsDom = thumbnailBorderDom.querySelectorAll('.item');
let timeDom = document.querySelector('.carousel .time');

thumbnailBorderDom.appendChild(thumbnailItemsDom[0]);
let timeRunning = 3000;
// let timeAutoNext = 7000;

nextDom.onclick = function(){
    showSlider('next');    
}

prevDom.onclick = function(){
    showSlider('prev');    
}
let runTimeOut;
// let runNextAuto = setTimeout(() => {
//     next.click();
// }, timeAutoNext)
function showSlider(type){
    let  SliderItemsDom = SliderDom.querySelectorAll('.carousel .list .item');
    let thumbnailItemsDom = document.querySelectorAll('.carousel .thumbnail .item');
    
    if(type === 'next'){
        SliderDom.appendChild(SliderItemsDom[0]);
        thumbnailBorderDom.appendChild(thumbnailItemsDom[0]);
        carouselDom.classList.add('next');
    }else{
        SliderDom.prepend(SliderItemsDom[SliderItemsDom.length - 1]);
        thumbnailBorderDom.prepend(thumbnailItemsDom[thumbnailItemsDom.length - 1]);
        carouselDom.classList.add('prev');
    }
    clearTimeout(runTimeOut);
    runTimeOut = setTimeout(() => {
        carouselDom.classList.remove('next');
        carouselDom.classList.remove('prev');
    }, timeRunning);

    // clearTimeout(runNextAuto);
    // runNextAuto = setTimeout(() => {
    //     next.click();
    // }, timeAutoNext)
}
// toggle icon navbar
let menuIcon = document.querySelector('#menu-icon');
let navbar = document.querySelector('.navbar');

menuIcon.onclick = () => {
    menuIcon.classList.toggle('bx-x');
    navbar.classList.toggle('active');
}

// scroll sections
let sections = document.querySelectorAll('section');
let navLinks = document.querySelectorAll('header nav a');

window.onscroll = () => {
    sections.forEach(sec => {
        let Top = window.scrollY;
        let offset = sec.offsetTop - 100;
        let height = sec.offsetHeight;
        let id = sec.getAttribute('id');

            if(top >= offset && top < offset + height) {
                // active navbar links
                navLinks.forEach(links => {
                    links.classList.remove('active');
                    document.querySelector('header nav a [href*=' + id + ']').classList.add('active');
                });
            }
    });

    // sticky header
    let header = document.querySelector('header');

    header.classList.toggle('sticky', window.scrollY > 100)

    // remove toggle and navbar when click navbar link (scroll)
    menuIcon.classList.remove('bx-x');
    navbar.classList.remove('active');   
    
}

function animateHomeHeading() {
    const homeHeading = document.querySelector(".home-content h1");
    if (homeHeading) {
        const position = homeHeading.getBoundingClientRect().top;
        const windowHeight = window.innerHeight;

        if (position < windowHeight - 100 && position > 0) {
            homeHeading.classList.add("animate");
        } else {
            homeHeading.classList.remove("animate");
        }
    }
}

// run on scroll
window.onscroll = () => {
    // ... your existing code ...

    animateHomeHeading();
};

// ✅ run once on page load too
window.addEventListener("load", animateHomeHeading);

// about heading anime 
function animateAboutHeading() {
    const aboutHeading = document.querySelector("#about .heading");
    if (aboutHeading) {
        const position = aboutHeading.getBoundingClientRect().top;
        const windowHeight = window.innerHeight;

        if (position < windowHeight - 100 && position > 0) {
            aboutHeading.classList.add("animate");
        } else {
            aboutHeading.classList.remove("animate");
        }
    }
}

// run on scroll
window.addEventListener("scroll", animateAboutHeading);

// also run once on load (in case About is visible immediately)
window.addEventListener("load", animateAboutHeading);

// my journey anime
function animateEducationHeading() {
    const eduHeading = document.querySelector(".education .heading");
    if (eduHeading) {
        const position = eduHeading.getBoundingClientRect().top;
        const windowHeight = window.innerHeight;

        if (position < windowHeight - 100 && position > 0) {
            eduHeading.classList.add("animate");
        } else {
            eduHeading.classList.remove("animate");
        }
    }
}

window.addEventListener("scroll", animateEducationHeading);
window.addEventListener("load", animateEducationHeading);

function animateSkillsHeading() {
    const skillsHeading = document.querySelector(".skills .heading");
    if (skillsHeading) {
        const position = skillsHeading.getBoundingClientRect().top;
        const windowHeight = window.innerHeight;

        if (position < windowHeight - 100 && position > 0) {
            skillsHeading.classList.add("animate");
        } else {
            skillsHeading.classList.remove("animate");
        }
    }
}

window.addEventListener("scroll", animateSkillsHeading);
window.addEventListener("load", animateSkillsHeading);


// my work text anime
function animateWorkHeading() {
    const workHeading = document.querySelector(".mywork .heading");
    if (workHeading) {
        const position = workHeading.getBoundingClientRect().top;
        const windowHeight = window.innerHeight;

        if (position < windowHeight - 100 && position > 0) {
            workHeading.classList.add("animate");
        } else {
            workHeading.classList.remove("animate");
        }
    }
}

window.addEventListener("scroll", animateWorkHeading);
window.addEventListener("load", animateWorkHeading);

// contact text anime
function animateContactHeading() {
    const contactHeading = document.querySelector(".contact .heading");
    if (contactHeading) {
        const position = contactHeading.getBoundingClientRect().top;
        const windowHeight = window.innerHeight;

        if (position < windowHeight - 100 && position > 0) {
            contactHeading.classList.add("animate");
        } else {
            contactHeading.classList.remove("animate");
        }
    }
}

window.addEventListener("scroll", animateContactHeading);
window.addEventListener("load", animateContactHeading);

const container = document.querySelector('.container');
const cards = document.querySelectorAll('.glass');

// ✅ Mobile click toggle
cards.forEach(card => {
  card.addEventListener('click', () => {
    if (window.innerWidth <= 768) { // only on mobile/tablet
      card.classList.toggle('active');
    }
  });
});

// ✅ Desktop hover → straighten ALL cards
cards.forEach(card => {
  card.addEventListener('mouseenter', () => {
    if (window.innerWidth > 768) {
      container.classList.add('all-straight');
    }
  });
  card.addEventListener('mouseleave', () => {
    if (window.innerWidth > 768) {
      container.classList.remove('all-straight');
    }
  });
});

// ✅ Reset when resizing back to desktop
function resetCardsOnDesktop() {
  if (window.innerWidth > 768) {
    cards.forEach(card => card.classList.remove('active')); // remove mobile "active"
    container.classList.remove('all-straight'); // also reset desktop straight state
  }
}

// Run on load + on resize
window.addEventListener('resize', resetCardsOnDesktop);
window.addEventListener('load', resetCardsOnDesktop);

// Animate Education & Experience headings on scroll
function animateJourneyHeadings() {
  const headings = document.querySelectorAll(".education .title.reveal, .experience .title.reveal");

  if (headings.length > 0) {
    const observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add("active");
        } else {
          entry.target.classList.remove("active"); // reset so it animates again
        }
      });
    }, { threshold: 0.3 });

    headings.forEach(h => observer.observe(h));
  }
}

window.addEventListener("load", animateJourneyHeadings);

