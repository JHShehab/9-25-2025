const stars = document.querySelectorAll('#starRating button');
  const ratingValue = document.getElementById('ratingValue');
  let currentRating = 0;

  function updateStars(rating) {
    stars.forEach(star => {
      const value = Number(star.dataset.value);
      if (value <= rating) {
        star.classList.add('star-on');
      } else {
        star.classList.remove('star-on');
      }
    });
  }

  stars.forEach(star => {
    star.addEventListener('click', () => {
      currentRating = Number(star.dataset.value);
      ratingValue.textContent = currentRating;
      updateStars(currentRating);
    });
  });