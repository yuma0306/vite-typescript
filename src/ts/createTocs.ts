/**
 * 目次作成
 */
export const createTocs = () => {
  const tocs: string[] = [
    'グロナビ（ホバー）',
    'ハンバーガー',
    'スマホだけアコーディオン',
    'スムーススクロール',
    'モーダル',
    'フォームバリデーション',
  ];
  document.querySelector<HTMLDivElement>('.js-app')!.innerHTML = `
    <h1>よく使うUI</h1>
    <ul>
      ${tocs.map((toc) => {
        return `<li>${toc}</li>`
      }).join('')}
    </ul>
  `;
}
