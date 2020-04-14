import * as riot from 'riot'
import '../scss/_styles.scss';
import linksComponent from '$Riot/components/linksComponent.riot';

riot.register('links-component', linksComponent);
riot.mount('links-component');