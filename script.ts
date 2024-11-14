/**
 * CSS
 * CSSをまとめて指定 el.style.cssText = 'visibility: hidden; opacity: 0;';
 */
import './style.scss';
/**
 * TS
 */
import { createAccSp } from './src/ts/accSp';
import { resizeWindow } from './src/ts/resizeWindow';
import { toggleBurger } from './src/ts/toggleBurger';
import { toggleGnav } from './src/ts/toggleGnav';
import { createTocs } from './src/ts/createTocs';
import { scrollSmooth } from './src/ts/scrollSmooth';
import { showModal } from './src/ts/modal';
import { contactValidaion } from './src/ts/validation';
/**
 * DOM読み込み後
 */
document.addEventListener('DOMContentLoaded', function() {
  createTocs();
  toggleGnav();
  toggleBurger();
  createAccSp();
  showModal();
  scrollSmooth();
  resizeWindow();
  contactValidaion();
});
