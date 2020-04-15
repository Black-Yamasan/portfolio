import ScrollAddClass from '$Model/_ScrollAddClass';

/**
 * スクロール後にクラスを追加
 * @param {object} objs クラスを追加する要素 
 */
export const scrollAddClass = (objs, height) => {
  let isScroll = false;
  const arr = [];

  Array.prototype.slice.call(objs).forEach((obj) => {
    const scrollAddClass = new ScrollAddClass(obj, height);
    arr.push(scrollAddClass);
  });

  const scrollControll = () => {
    if ( !isScroll ) {
      requestAnimationFrame(() => {
        isScroll = false;
        showObj();
      });
      isScroll = true;
    }
  }

  const showObj = () => {
    arr.forEach((obj) => {
      if ( obj.isShow ) return;
      obj.onScroll();
    });
  };

  window.addEventListener('scroll', scrollControll, { passive: true });

  showObj();
}