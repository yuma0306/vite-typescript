/**
 * スクロール
 */
export const scrollSmooth = ()　=> {
  const adjust = 0;
  document.querySelectorAll<HTMLAnchorElement>('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function(e: MouseEvent) {
      e.preventDefault();
      const href: string | null = this.getAttribute('href');
      if(href === null) return;
      const target: HTMLElement | null = href === '#' ? document.documentElement : document.querySelector(href);
      const pos: number = target!.offsetTop + adjust;
      window.scrollTo({
        top: pos,
        behavior: 'smooth'
      });
    });
  });
};
