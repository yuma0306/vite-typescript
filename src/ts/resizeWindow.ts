import { media, isActive, btn, menu, accSp} from './constans';
/**
 * リサイズ処理
 */
export const resizeWindow = (): void => {
  let vw = window.innerWidth;
  window.addEventListener('resize', () => {
    if (vw === window.innerWidth) {
      // 横幅に変化がない場合は終了
      return;
    }
    vw = window.innerWidth;
    resizeGnav(vw);
    resizeBurger(vw)
    resizeAccSp(vw);
  });
  // ハンバーガー
  function resizeBurger(vw: number) {
    if(vw <= media) {
      btn!.classList.remove(isActive);
      menu!.classList.remove(isActive);
    // PC
    } else {
      btn!.classList.remove(isActive);
      menu!.classList.remove(isActive);
    }
  }
  // グロナビ
  function resizeGnav(vw: number) {
    const gnavContent = document.querySelectorAll<HTMLElement>('.js-gnav-content');
    if(media <= vw) {
      gnavContent!.forEach((el) => {
        el.classList.remove(isActive);
      });
    } else {
      gnavContent!.forEach((el) => {
        el.classList.add(isActive);
      });
    }
  }
  // スマホアコーディオン
  function resizeAccSp(vw: number) {
    if(vw <= media) {
      accSp!.forEach((el) => {
        el.classList.remove(isActive);
      });
    } else {
      accSp!.forEach((el) => {
        el.classList.remove(isActive);
      });
    }
  }
};
