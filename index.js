const hamburger = document.querySelector("#hamburger")
let modal = document.querySelector("#modal")
let modalLinks = document.querySelectorAll('.modal-links');
hamburger.addEventListener('click', ()=>{
  modal.style.display = "block"
})
modal.addEventListener(
  "click",
  function(event) {
    // If user either clicks X button OR clicks outside the modal window, then close modal by calling closeModal()
    if (
      !event.target.closest("#modal-content")
    ) {
      closeModal()
    }
  },
  false
)
modalLinks.forEach(link=>{
  link.addEventListener('click', closeModal)
})
function closeModal() {
  modal.style.display = "none"
}