import * as riot from 'riot'
import changeThemeComponent from '$RiotComponent/changeThemeComponent.riot';

const classNames = (classes) => {
  return Object.entries(classes).reduce((acc, item) => {
    const [key, value] = item
    if ( value ) return [...acc, key]
    return acc
  }, []).join(' ')
}

export const showChangeTheme = () => {
  riot.install((component) => {
    component.classNames = classNames
    return component
  });
  riot.register('change-theme-component', changeThemeComponent);
  riot.mount('change-theme-component');
}
