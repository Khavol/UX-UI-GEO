document.addEventListener('DOMContentLoaded', () => {

  new Glide('.glide', {
    type: 'carousel',
    perView: 6,
    autoplay: 2000,
    hoverpause: true,
    gap: 20,
    breakpoints: {
      1024: {
        perView: 5
      },
      768: {
        perView: 3
      },
      480: {
        perView: 2
      }
    }
  }).mount();

  const $navbarBurgers = Array.prototype.slice.call(document.querySelectorAll('.navbar-burger'), 0);

  if ($navbarBurgers.length > 0) {

    $navbarBurgers.forEach( el => {
      el.addEventListener('click', () => {

        const target = el.dataset.target;
        const $target = document.getElementById(target);

        el.classList.toggle('is-active');
        $target.classList.toggle('is-active');

      });
    });
  }

  const sections = document.querySelectorAll('.section');
  const observer = new IntersectionObserver(entries => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add('is-visible');
      }
    });
  }, {
    rootMargin: '-100px'
  });

  sections.forEach(section => {
    observer.observe(section);
  });

});