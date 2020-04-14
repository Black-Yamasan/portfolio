import * as riot from 'riot'
import mvComponent from '$RiotComponent/mvComponent.riot';

export const showMv = () => {
  riot.register('mv-component', mvComponent);
  riot.mount('mv-component');
}
