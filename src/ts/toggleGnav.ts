
import { media, isActive, gnavTriger} from './constans';
/**
 * グロナビ（ホバー）
 */
export const toggleGnav = () => {
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
