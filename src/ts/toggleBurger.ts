import { media, isActive, btn, menu} from './constans';
/**
 * ハンバーガー
 */
export const toggleBurger = () =>  {
  btn!.addEventListener('click', function() {
    if(window.innerWidth > media) return;
    btn!.classList.toggle(isActive);
    menu!.classList.toggle(isActive);
  });
};
