function container () {
  setTimeout(function() {
    var content = document.querySelector('.container');
    var body = document.body

    content.classList.remove("hidden");
    content.classList.add("visible")
    body.classList.remove('no-scroll')
  }, 3000)
}

export default container