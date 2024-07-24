function loader () {
  window.addEventListener('load', function() {
    setTimeout(function() {
      var loader = document.querySelector('.loader');
      loader.classList.add('hidden');

      setTimeout(function() {
        loader.remove();
      }, 1000);
    }, 2000);
  })
  // const loader = document.querySelector('.loader');
  // loader.classList.add('loader--hidden');
}

export default loader