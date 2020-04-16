export default class ScrollAddClass {

  /**
   * 該当要素が表示位置に達したらクラスを追加
   * @param {object} obj クラスを追加する要素 
   */
  constructor(obj, devideHeight) {
    this.obj = obj;
    this.devideHeight = devideHeight;
    this.isShow = false;
  }

  onAfterScrolled() {
    this.obj.classList.add('is-scrollIn');
  }

  onScroll() {
    if ( this.isShow ) return;
    const objRect = this.obj.getBoundingClientRect();
    if ( (window.scrollY || window.pageYOffset) > objRect.top + (window.scrollY || window.pageYOffset) - window.innerHeight / this.devideHeight ) {
      this.isShow = true;
      this.onAfterScrolled();
    }
  }
}