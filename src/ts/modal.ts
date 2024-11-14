import { isActive } from "./constans";

export const showModal = () => {
  const modal = document.querySelector<HTMLElement>('.js-modal');
  const overlay = document.querySelector<HTMLElement>('.js-overlay');
  const modalClose = document.querySelector<HTMLElement>('.js-modal-close');
  let modalShowFlag: boolean = true;
  window.addEventListener('scroll', () => {
    // ドキュメント全体の高さ
    const documentHeight = document.documentElement.scrollHeight;
    // ビューポートの高さ
    const viewportHeight = window.innerHeight;
    // 現在のスクロール位置
    const scrollPosition = window.scrollY;
    // 画面下部が、ページの半分を超えたかチェック
    if (scrollPosition + viewportHeight > documentHeight / 2 && modalShowFlag) {
    // if (scrollPosition > documentHeight / 2 && modalShowFlag) { // 画面上部が、ページの半分を超えたかチェック
    // 特定の要素 → getBoundingClientRect().top
      modal!.classList.add(isActive);
      overlay!.classList.add(isActive);
      modalShowFlag = false;
      document.body.style.cssText = 'overflow: hidden;';
    }
  });
  modalClose!.addEventListener('click', closeModal);
  overlay!.addEventListener('click', closeModal);
  function closeModal() {
    modal!.classList.remove(isActive);
    overlay!.classList.remove(isActive);
    document.body.style.cssText = 'overflow: auto;';
  };
}
