import * as riot from 'riot'
import linksComponent from '$RiotComponent/linksComponent.riot';

export const showLinks = () => {
  riot.register('links-component', linksComponent);
  riot.mount('links-component');
}
