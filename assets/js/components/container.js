function container () {
  setTimeout(function() {
    var content = document.querySelector('.container');
    content.classList.remove("hidden");
    content.classList.add("visible")
  }, 3000)
}

export default container