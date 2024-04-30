import i18next from 'i18next';
import { FuseNavigationType } from '@fuse/core/FuseNavigation/types/FuseNavigationType';
import ar from './navigation-i18n/ar';
import en from './navigation-i18n/en';
import tr from './navigation-i18n/tr';
import { authRoles } from '../auth';
import NotificationsIcon from '@mui/icons-material/Notifications';

i18next.addResourceBundle('en', 'navigation', en);
i18next.addResourceBundle('tr', 'navigation', tr);
i18next.addResourceBundle('ar', 'navigation', ar);

/**
 * The navigationConfig object is an array of navigation items for the Fuse application.
 */
const navigationConfig: FuseNavigationType = [
	
	{
		id: 'dashboards.project',
		title: 'Dashboard',
		type: 'item',
		icon: 'heroicons-outline:view-grid',
		url: '/dashboards/project'
	},
	{
		id: 'dashboards.analytics',
		title: 'Analytics',
		type: 'item',
		icon: 'heroicons-outline:chart-square-bar',
		url: '/dashboards/analytics'
	},
	{
		id: 'dashboards.module',
		title: 'Modules',
		type: 'item',
		icon: 'heroicons-outline:table',
		url: '/dashboards/module'
	},
	{
		id: 'dashboards.crypto',
		title: 'Schedule',
		type: 'item',
		icon: 'heroicons-outline:document-report',
		url: '/dashboards/crypto'
	},
	{
		id: 'apps.calendar',
		title: 'Calendar',
		type: 'item',
		icon: 'heroicons-outline:calendar',
		url: '/apps/calendar'
	},
	{
		id: 'apps.modulecard',
		title: 'ModuleCard',
		type: 'item',
		icon: 'heroicons-outline:chip',
		url: '/apps/contacts'
	},
	{
		id: 'apps.chat',
		title: 'Messages',
		type: 'item',
		icon: 'heroicons-outline:chat-alt',
		url: '/apps/chat'
	},
	{
		id: 'apps.academy',
		title: 'Notification',
		type: 'item',
		icon: 'heroicons-outline:bell',
		url: '/undefined'
	},
	{
		id: 'apps.contacts',
		title: 'settings',
		type: 'item',
		icon: 'heroicons-outline:cog',
		url: '/undefined'
	},
	{
		id: 'auth',
		title: 'Auth',
		type: 'group',
		icon: 'verified_user',
		children: [
			{
				id: 'sign-in',
				title: 'Sign in',
				type: 'item',
				url: 'sign-in',
				auth: authRoles.onlyGuest,
				icon: 'lock'
			},
			{
				id: 'register',
				title: 'Register',
				type: 'item',
				url: 'register',
				auth: authRoles.onlyGuest,
				icon: 'person_add'
			},
			{
				id: 'sign-out',
				title: 'Sign out',
				type: 'item',
				auth: authRoles.user,
				url: 'sign-out',
				icon: 'exit_to_app'
			}
		]
	}
];

export default navigationConfig;
