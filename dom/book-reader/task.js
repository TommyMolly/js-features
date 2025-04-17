const fontSizeControls = document.querySelectorAll('.font-size');
const textColorControls = document.querySelectorAll('[data-text-color]');
const bgColorControls = document.querySelectorAll('[data-bg-color]');
const book = document.getElementById('book');

fontSizeControls.forEach(control => {
  control.addEventListener('click', (event) => {
    event.preventDefault();

    fontSizeControls.forEach(btn => btn.classList.remove('font-size_active'));

    control.classList.add('font-size_active');

    book.classList.remove('book_fs-small', 'book_fs-big');

    const size = control.dataset.size;
    if (size === 'small') {
      book.classList.add('book_fs-small');
    } else if (size === 'big') {
      book.classList.add('book_fs-big');
    }
  });
});

textColorControls.forEach(control => {
  control.addEventListener('click', (e) => {
    e.preventDefault();
  
    textColorControls.forEach(btn => btn.classList.remove('color_active'));
    control.classList.add('color_active');
  
    book.classList.remove('book_color-black', 'book_color-gray', 'book_color-whitesmoke');
  
    const color = control.dataset.textColor;
    book.classList.add(`book_color-${color}`);
  });
});

bgColorControls.forEach(control => {
  control.addEventListener('click', (e) => {
    e.preventDefault();
  
    bgColorControls.forEach(btn => btn.classList.remove('color_active'));
    control.classList.add('color_active');
  
    book.classList.remove('book_bg-black', 'book_bg-gray', 'book_bg-white');
  
    const bgColor = control.dataset.bgColor;
    book.classList.add(`book_bg-${bgColor}`);
  });
});