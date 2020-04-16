import '../scss/_styles.scss';
import * as PIXI from 'pixi.js';
import { showMv } from '$Controller/_mv';
import { showNews } from '$Controller/_news';
import { showAbout } from '$Controller/_about';
import { showLinks } from '$Controller/_links';
import { showChangeTheme } from '$Controller/_changeTheme';
import { scrollMvControll } from '$Controller/_scrollMvControll';

showMv();
showChangeTheme();
showAbout();
showNews();
showLinks();

scrollMvControll();


const canvas = document.getElementById('js-c-mv__canvas');
let isResize = false;

const app = new PIXI.Application({
  antialias: true
});

// const createGradTexture = () => {
//   const quality = 256*4;
//   const ctx = canvas.getContext('2d');
//   canvas.width = quality;
//   canvas.height = 1;

//   const grd = ctx.createLinearGradient(0, 0, quality, 0);
//   grd.addColorStop(0, 'hsla(200, 50%, 50%, 0.2)');
//   grd.addColorStop(1, 'hsla(280, 50%, 50%, 0.2)');
//   ctx.fillStyle = grd;
//   ctx.fillRect(0, 0, quality, 1);

//   return PIXI.Texture.from(canvas);
// }

// const gradTexture = createGradTexture();
// const sprite = new PIXI.Sprite(gradTexture);

// sprite.position.set(50, 100);
// sprite.rotation = 45;
// sprite.width = 400;
// sprite.height = 1000;
// app.state.addChild(sprite);

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