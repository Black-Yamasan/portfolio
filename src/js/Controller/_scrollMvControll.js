/**
 * スクロールでMVフェードアウト
 */
export const scrollMvControll = () => {
  const $canvas = document.getElementById('js-c-mv__canvas');
  const $mvInner = document.getElementById('js-c-mv__inner');

  let isScroll = false;

  const onScroll = () => {
    if ( window.pageYOffset > window.innerHeight ) return;
    if ( !isScroll ) {
      requestAnimationFrame(() => {
        isScroll = false;
        scrollControll();
      });
      isScroll = true;
    }
  };

  const scrollControll = () => {
    $mvInner.style.opacity = 1 - `${window.pageYOffset/window.innerHeight}`;
    $canvas.style.top = `${window.pageYOffset}px`;
  };

  window.addEventListener('scroll', onScroll, { passive: true });
};