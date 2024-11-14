
import { media, isActive, accSpTriger } from './constans';
/**
 * スマホ
 */
export const createAccSp = (): void => {
  accSpTriger.forEach((el) => {
    el.addEventListener('click', function() {
      if(window.innerWidth > media) return;
      const parent = this.closest('.js-acc-sp');
      parent!.classList.toggle(isActive);
    });
  });
}
