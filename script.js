document.querySelectorAll('a[href="#"]').forEach(link => {
  link.addEventListener('click', (e) => {
    e.preventDefault();
    alert('Chức năng này đang được phát triển!');
  });
});