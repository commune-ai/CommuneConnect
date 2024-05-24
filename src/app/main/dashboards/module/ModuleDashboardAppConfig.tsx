import lazyWithReducer from 'app/store/lazyWithReducer';
import reducer from './store';

const ModuleDashboardApp = lazyWithReducer('moduleDashboardApp', () => import('./ModuleDashboardApp'), reducer);

/**
 * The module dashboard app config.
 */
const ModuleDashboardAppConfig = {
	settings: {
		layout: {
			config: {}
		}
	},
	routes: [
		{
			path: 'dashboards/module',
			element: <ModuleDashboardApp />
		}
	]
};

export default ModuleDashboardAppConfig;
