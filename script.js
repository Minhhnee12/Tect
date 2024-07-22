
// JavaScript for smooth scrolling
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function(e) {
        e.preventDefault();

        document.querySelector(this.getAttribute('href')).scrollIntoView({
            behavior: 'smooth'
        });
    });
});
document.addEventListener("DOMContentLoaded", function () {
  // Variables
  var words = ["Software Engineering ", "Full-Stack Engineer", "Web Developer"],
      part,
      i = 0,
      offset = 0,
      len = words.length,
      forwards = true,
      skip_count = 0,
      skip_delay = 15,
      speed = 50;

  const cWAutoTyping = document.querySelector(".codewheel-auto-typing");

  function typingText() {
    setInterval(function () {
      if (forwards) {
        if (offset >= words[i].length) {
          ++skip_count;
          if (skip_count == skip_delay) {
            forwards = false;
            skip_count = 0;
          }
        }
      } else {
        if (offset == 0) {
          forwards = true;
          i++;
          offset = 0;
          if (i >= len) {
            i = 0;
          }
        }
      }
      part = words[i].substr(0, offset);
      if (skip_count == 0) {
        if (forwards) {
          offset++;
        } else {
          offset--;
        }
      }
      cWAutoTyping.textContent = part;
    }, speed);
  }

  typingText();
});
const sections = document.querySelectorAll('.hero, .about-section,  .section, .portfolio-section, .contacts-section');
let lastScrollTop = 0;

function checkVisibility() {
  const currentScrollTop = window.pageYOffset || document.documentElement.scrollTop;
  const isScrollingDown = currentScrollTop > lastScrollTop;

  // Chỉ xử lý khi cuộn xuống
  if (isScrollingDown) {
    sections.forEach((section, index) => {
      const rect = section.getBoundingClientRect();
      if (rect.top < window.innerHeight * 0.95) {
        setTimeout(() => {
          section.classList.add('show');
        }, index * 300); 
      }
    });
  }

  lastScrollTop = currentScrollTop;
}

window.addEventListener('scroll', checkVisibility);
checkVisibility(); 

const skillProgressElements = document.querySelectorAll('.skill-progress');

skillProgressElements.forEach(skillProgress => {
  let width = 0;
  const targetWidth = parseInt(skillProgress.textContent);

  function updateProgressBar() {
    if (width < targetWidth) {
      width++;
      skillProgress.style.width = width + '%';
      skillProgress.textContent = width + '%'; // Cập nhật nội dung hiển thị trước
      requestAnimationFrame(updateProgressBar);
    }
  }

  updateProgressBar();
});

