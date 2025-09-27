const stars = document.querySelectorAll('#starRating button');
    const ratingValue = document.getElementById('ratingValue');
    let currentRating = 0;

    function updateStars(rating) {
      stars.forEach(star => {
        const starValue = Number(star.dataset.value);
        if (starValue <= rating) {
          star.classList.add('star-on');
          star.classList.remove('star-off');
          star.setAttribute('aria-checked', 'true');
          star.tabIndex = 0;
        } else {
          star.classList.add('star-off');
          star.classList.remove('star-on');
          star.setAttribute('aria-checked', 'false');
          star.tabIndex = -1;
        }
      });
    }

    stars.forEach(star => {
      star.addEventListener('click', () => {
        currentRating = Number(star.dataset.value);
        ratingValue.textContent = currentRating;
        updateStars(currentRating);
      });

      star.addEventListener('mouseenter', () => {
        const hoverValue = Number(star.dataset.value);
        updateStars(hoverValue);
      });

      star.addEventListener('mouseleave', () => {
        updateStars(currentRating);
      });

      star.addEventListener('keydown', (e) => {
        let value = Number(star.dataset.value);
        if (e.key === 'ArrowRight' || e.key === 'ArrowUp') {
          e.preventDefault();
          const nextValue = Math.min(5, value + 1);
          stars[nextValue - 1].focus();
        } else if (e.key === 'ArrowLeft' || e.key === 'ArrowDown') {
          e.preventDefault();
          const prevValue = Math.max(1, value - 1);
          stars[prevValue - 1].focus();
        } else if (e.key === 'Enter' || e.key === ' ') {
          e.preventDefault();
          currentRating = value;
          ratingValue.textContent = currentRating;
          updateStars(currentRating);
        }
      });
    });

    // Initialize with 0 rating selected
    updateStars(currentRating);