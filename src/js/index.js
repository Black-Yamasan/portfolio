import '../scss/_styles.scss';
import * as PIXI from 'pixi.js';
// import { showMv } from '$Controller/_mv';
import { showNews } from '$Controller/_news';
import { showAbout } from '$Controller/_about';
import { showLinks } from '$Controller/_links';
import { showChangeTheme } from '$Controller/_changeTheme';
import { scrollMvControll } from '$Controller/_scrollMvControll';

showChangeTheme();
showAbout();
showNews();
showLinks();
// showMv();

scrollMvControll();



const canvas = document.getElementById('js-c-mv__canvas');
let isResize = false;

const app = new PIXI.Application({
  
});
// const catImgSize = {
//   width: 351,
//   height: 258
// };
// let isResize = false;

// const app = new PIXI.Application({
//   width: window.innerWidth,
//   height: window.innerHeight,
//   autoResize: true,
//   resolution: devicePixelRatio,
//   view: screen,
//   backgroundColor: '0xffffff'
// });

// const container = new PIXI.Container();
// app.stage.addChild(container);

// const catImg = new PIXI.Sprite.from('assets/images/img_cat.png');
// catImg.width = (500 / 600) * catImgSize.width;
// catImg.height = (500 / 600) * catImgSize.height;
// catImg.x = (window.innerWidth / 2) - (catImg.width / 2);
// catImg.y = window.innerHeight / 2 - (catImg.height / 2);
// container.addChild(catImg);

// const alphaFilter = new PIXI.filters.AlphaFilter(1);
// const blurFilter = new PIXI.filters.BlurFilter(270, 1, 10, 0);
// container.filters = [alphaFilter, blurFilter];


// const onResize = () => {
//   if ( !isResize ) {
//     window.requestAnimationFrame(() => {
//       app.renderer.resize(window.innerWidth, window.innerHeight);
//       catImg.width = (500 / 600) * catImgSize.width;
//       catImg.height = (500 / 600) * catImgSize.height;
//       catImg.x = (window.innerWidth / 2) - (catImg.width / 2);
//       catImg.y = window.innerHeight / 2 - (catImg.height / 2);
//       isResize = false;
//     });
//     isResize = true;
//   }
// };

// window.addEventListener('resize', onResize, true);