import * as riot from 'riot'
import mvComponent from '$RiotComponent/mvComponent.riot';

const classNames = (classes) => {
  return Object.entries(classes).reduce((acc, item) => {
    const [key, value] = item
    if ( value ) return [...acc, key]
    return acc
  }, []).join(' ')
}

export const showMv = () => {
  riot.install((component) => {
    component.classNames = classNames
    return component
  });
  riot.register('mv-component', mvComponent);
  riot.mount('mv-component');
}
