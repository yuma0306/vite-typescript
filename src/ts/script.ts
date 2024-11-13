/**
 * css
 * CSSをまとめて指定
 * el.style.cssText = 'visibility: hidden; opacity: 0;';
 */
//
import '../css/style.scss';

const media: number = 640;
const isActive: string = 'is-active';
const tocs: string[] = [
  'モーダル', 'グロナビ（ホバー）', 'ハンバーガー', 'アコーディオン', 'スマホだけアコーディオン', 'ポップアップ', 'フォームバリデーション', 'トップに戻る'
];

// ハンバーガー
const btn = document.querySelector<HTMLElement>('.js-burger-btn');
const menu = document.querySelector<HTMLElement>('.js-burger-menu');
// スマホアコーディオン
const accSp = document.querySelectorAll<HTMLElement>('.js-acc-sp');
const accSpTriger = document.querySelectorAll<HTMLElement>('.js-acc-sp-triger');
const accSpContent = document.querySelectorAll<HTMLElement>('.js-acc-sp-content');
// グロナビ
const gnavTriger = document.querySelectorAll<HTMLElement>('.js-gnav-triger');
const gnavContent = document.querySelectorAll<HTMLElement>('.js-gnav-content');

document.querySelector<HTMLDivElement>('.js-app')!.innerHTML = `
  <h1>よく使うUI</h1>
  <ul>
    ${tocs.map((toc) => {
      return `<li>${toc}</li>`
    }).join('')}
  </ul>
`;

/**
 * スムーズスクロール
 */
const scrollSmooth = (): void => {
  const adjust = 0;
  document.querySelectorAll<HTMLAnchorElement>('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function(e: MouseEvent) {
      e.preventDefault();
      const href: string | null = this.getAttribute('href');
      if(href === null) return;
      const target: HTMLElement | null = href === '#' || href === '' ? document.documentElement : document.querySelector(href);
      const pos: number = target!.offsetTop + adjust;
      window.scrollTo({
        top: pos,
        behavior: 'smooth'
      });
    });
  });
};

/**
 * グロナビ（ホバー）
 */
const toggleGnav = () => {
  // アロー関数: 外側のスコープのthisを継承する
  // 通常の関数: 呼び出されたコンテキストに応じてthisが決まる。イベントリスナー内ではイベントが発生した要素を指す。
  gnavTriger!.forEach((el) => {
    el.addEventListener('mouseover', function() {
      if(media <= window.innerWidth) {
        this.classList.add(isActive);
      }
    });
    el.addEventListener('mouseleave', function() {
      if(media <= window.innerWidth) {
        this.classList.remove(isActive);
      }
    });
  });
}

/**
 * ハンバーガー
 */
const toggleBurger = () =>  {
  btn!.addEventListener('click', function() {
    if(window.innerWidth > media) return;
    btn!.classList.toggle(isActive);
    menu!.classList.toggle(isActive);
  });
};

/**
 * スマホ
 */
const createAccSp = (): void => {
  accSpTriger.forEach((el) => {
    el.addEventListener('click', function() {
      if(window.innerWidth > media) return;
      const target = this.closest('.js-acc-sp');
      target!.classList.toggle(isActive);
    });
  });
}

/**
 * リサイズ処理
 */
const resizeWindow = (): void => {
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
};
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

/**
 * DOM読み込み後
 */
document.addEventListener('DOMContentLoaded', function() {
  toggleGnav();
  toggleBurger();
  createAccSp();
  scrollSmooth();
  resizeWindow();
});

