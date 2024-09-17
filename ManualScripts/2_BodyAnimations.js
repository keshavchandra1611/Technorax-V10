
document.addEventListener("scroll", function() {
    const elements = document.querySelectorAll('.fade-in-out');
    const scrollY = window.pageYOffset;
    const viewportHeight = window.innerHeight;
  
    elements.forEach(element => {
        const elementTop = element.getBoundingClientRect().top + scrollY;
        const elementBottom = element.getBoundingClientRect().bottom + scrollY;
  
        // Fade in when the element enters the viewport
        setTimeout(()=>{
          if (scrollY + viewportHeight > elementTop + 50) {
            element.classList.add('visible');
        }
  
        // Fade out when the element leaves the viewport
        if (scrollY > elementBottom || scrollY + viewportHeight < elementTop + 50) {
            element.classList.remove('visible');
        }
        },200)
        
    });
  });