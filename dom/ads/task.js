const rotators = document.querySelectorAll('.rotator');

rotators.forEach(rotator => {
  const cases = rotator.querySelectorAll('.rotator__case');
  let index = 0;

  function rotate() {

    cases[index].classList.remove('rotator__case_active');

    index = (index + 1) % cases.length;

    const current = cases[index];
    current.classList.add('rotator__case_active');

    if (current.dataset.color) {
      rotator.style.color = current.dataset.color;
    }

    const speed = current.dataset.speed ? parseInt(current.dataset.speed) : 1000;

    setTimeout(rotate, speed);
  }

  const first = cases[index];
  if (first.dataset.color) {
    rotator.style.color = first.dataset.color;
  }
  const initialSpeed = first.dataset.speed ? parseInt(first.dataset.speed) : 1000;
  setTimeout(rotate, initialSpeed);
});
