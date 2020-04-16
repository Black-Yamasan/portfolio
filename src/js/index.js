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

const app = new PIXI.Application({
  antialias: true,
  view: canvas,
  backgroundColor: '0x000022'
});

const starImage = PIXI.Texture.from('/assets/images/star.png');
const starAmount = 300;
let cameraZ = 0;
const fov = 10;
const baseSpeed = 0.05;
let speed = 0;
let warpSpeed = 0;
const starStretch = 0.8;
const starBaseSize = 0.02;

const randomizeStar = (star, initial) => {
  star.z = initial ? Math.random() * 800 : cameraZ + Math.random() * 100 + 800;

  const deg = Math.random() * Math.PI * 2;
  const distance = Math.random() * 50 + 1;
  star.x = Math.cos(deg) * distance;
  star.y = Math.sin(deg) * distance;
}

const stars = [];
for ( let i = 0; i < starAmount; i++ ) {
  const star = {
    sprite: new PIXI.Sprite(starImage),
    z: 0,
    x: 0,
    y: 0,
  };

  star.sprite.anchor.x = 0.5;
  star.sprite.anchor.y = 0.5;
  randomizeStar(star, true);
  app.stage.addChild(star.sprite);
  stars.push(star);
}

setInterval(() => {
  warpSpeed = warpSpeed > 0 ? 0 : 0.2;
}, 5000)

app.ticker.add((delta) => {
  speed += (warpSpeed - speed) / 50;
  cameraZ += delta * 5 * (speed + baseSpeed);
  for ( let i = 0; i < starAmount; i++ ) {
    const star = stars[i];
    if ( star.z < cameraZ ) randomizeStar(star);

    const z = star.z - cameraZ;
    star.sprite.x = star.x * (fov / z) * app.renderer.screen.width + app.renderer.screen.width / 2;
    star.sprite.y = star.y * (fov / z) * app.renderer.screen.width + app.renderer.screen.height / 2;

    const dxCenter = star.sprite.x - app.renderer.screen.width / 2;
    const dyCenter = star.sprite.y - app.renderer.screen.height / 2;
    const distanceCenter = Math.sqrt(dxCenter * dxCenter + dyCenter * dyCenter);
    const distanceScale = Math.max(0, (800 - z) / 1000);
    star.sprite.scale.x = distanceScale * starBaseSize;

    star.sprite.scale.y = distanceScale * starBaseSize + distanceScale * speed * starStretch * distanceCenter / app.renderer.screen.width;
    star.sprite.rotation = Math.atan2(dyCenter, dxCenter) + Math.PI / 2;
  }
});