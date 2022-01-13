document.addEventListener('DOMContentLoaded', () => {

  function accordion() {
    const accordionItems = document.querySelectorAll('.accordion__item');

    accordionItems.forEach(el => {
      const control = el.querySelector('.accordion__control');
      const content = el.querySelector('.accordion__content');
      if (el.classList.contains('open')) {
        control.setAttribute('aria-expanded', true);
        content.setAttribute('aria-hidden', false);
        content.style.maxHeight = content.scrollHeight + 'px';
      }
      el.addEventListener('click', (e) => {
        const self = e.currentTarget;
        const control = self.querySelector('.accordion__control');
        const content = self.querySelector('.accordion__content');

        self.classList.toggle('open');

        if (self.classList.contains('open')) {
          control.setAttribute('aria-expanded', true);
          content.setAttribute('aria-hidden', false);
          content.style.maxHeight = content.scrollHeight + 'px';
        } else {
          control.setAttribute('aria-expanded', false);
          content.setAttribute('aria-hidden', true);
          content.style.maxHeight = null;
        }
      })
    })
  }
  function openMenu() {
    const burgerTrigger = document.querySelector('.burger-trigger');
    const header = document.querySelector('.header');
    const menu = document.querySelector('.mob-menu');


    burgerTrigger.addEventListener('click', () => {

      burgerTrigger.classList.toggle('active');
      header.classList.toggle('active');
      menu.classList.toggle('active');
      lockScroll();



      if (!menu.classList.contains('active')) {
        setTimeout(() => {
          menu.style.zIndex = -1
        }, 300);
      } else {
        menu.style.zIndex = 2000
      }
    })
  }

  function lockScroll() {
    const body = document.querySelector('body');

    body.classList.toggle('lock')
  }

  accordion();
  openMenu();

});