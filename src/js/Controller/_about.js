import * as riot from 'riot'
import aboutComponent from '$RiotComponent/aboutComponent.riot';

export const showAbout = () => {
  riot.register('about-component', aboutComponent);
  riot.mount('about-component');
}
