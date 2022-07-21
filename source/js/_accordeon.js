const acc = document.getElementsByClassName("faq-list__visible");
const icons = document.getElementsByClassName('faq-list__toggle')
var i;

for (i = 0; i < acc.length; i++) {
  acc[i].addEventListener("click", function() {
    this.classList.toggle("collapse");
    const panel = this.nextElementSibling;
    if (panel.style.display === 'flex'){
      panel.style.display = 'none';

    } else {
      panel.style.display = 'flex';
    }
  });
};
