const header = document.querySelector('.header');

window.addEventListener('scroll', () => {
  header.style.boxShadow =
    window.scrollY > 20 ? '0 4px 12px rgba(0,0,0,0.06)' : 'none';
});


// 
const toggleProjectsBtn = document.getElementById('toggleProjects');
const projectLinks = document.querySelectorAll('.project-links');

if (toggleProjectsBtn) {
  toggleProjectsBtn.addEventListener('click', () => {
    const isHidden = projectLinks[0]?.hasAttribute('hidden');

    projectLinks.forEach(link => {
      isHidden ? link.removeAttribute('hidden') : link.setAttribute('hidden', true);
    });

    toggleProjectsBtn.textContent = isHidden
      ? 'Hide Live Projects'
      : 'Show Live Projects';
  });
}

// header
const menuToggle = document.querySelector('.menu-toggle');
const nav = document.querySelector('.nav');

if (menuToggle && nav) {
  menuToggle.addEventListener('click', () => {
    nav.classList.toggle('active');
  });
}

// 
document.querySelectorAll('.nav a').forEach(link => {
  link.addEventListener('click', () => {
    nav.classList.remove('active');
  });
});

// header shrink

window.addEventListener('scroll', () => {
  if (window.scrollY > 80) {
    header.classList.add('shrink');
  } else {
    header.classList.remove('shrink');
  }
});


// 
const sections = document.querySelectorAll('section[id]');
const navLinks = document.querySelectorAll('.nav a[href^="#"]');

function setActiveNav() {
  let current = '';

  sections.forEach(section => {
    const sectionTop = section.offsetTop - 120;
    const sectionHeight = section.offsetHeight;

    if (scrollY >= sectionTop && scrollY < sectionTop + sectionHeight) {
      current = section.getAttribute('id');
    }
  });

  navLinks.forEach(link => {
    link.classList.remove('active');
    if (link.getAttribute('href') === `#${current}`) {
      link.classList.add('active');
    }
  });
}

window.addEventListener('scroll', setActiveNav);
