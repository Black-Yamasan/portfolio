import '../scss/_styles.scss';
import { showMv } from '$Controller/_mv';
import { showNews } from '$Controller/_news';
import { showAbout } from '$Controller/_about';
import { showLinks } from '$Controller/_links';
import { showChangeTheme } from '$Controller/_changeTheme';

showChangeTheme();
showAbout();
showNews();
showLinks();
showMv();
