// опишите класс Collapser
class Collapser {
  constructor(cssClass) {
    this.cssClass = cssClass;
    this.init();
  }

  init() {
    const btnCollection = document.getElementsByClassName(this.cssClass);
    for (let i of btnCollection) {
      i.addEventListener('click', this.activeToggle);
      i.addEventListener('click', this.collapseToggle);
    }
  }

  activeToggle(event) {
    event.target.classList.toggle('active');
  }

  collapseToggle(event) {
    event.target.nextElementSibling.classList.toggle('show');
  }
}