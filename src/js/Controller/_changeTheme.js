import * as riot from 'riot'
import changeThemeComponent from '$RiotComponent/changeThemeComponent.riot';

export const showChangeTheme = () => {
  riot.register('change-theme-component', changeThemeComponent);
  riot.mount('change-theme-component');
}
