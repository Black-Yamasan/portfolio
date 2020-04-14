import * as riot from 'riot'
import newsComponent from '$RiotComponent/newsComponent.riot';

export const showNews = () => {
  riot.register('news-component', newsComponent);
  riot.mount('news-component');
}
