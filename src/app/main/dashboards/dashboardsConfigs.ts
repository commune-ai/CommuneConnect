import { FuseRouteConfigsType } from '@fuse/utils/FuseUtils';
import AnalyticsDashboardAppConfig from './analytics/AnalyticsDashboardAppConfig';
import ProjectDashboardAppConfig from './project/ProjectDashboardAppConfig';
import ModuleDashboardAppConfig from './module/ModuleDashboardAppConfig';
import CryptoDashboardAppConfig from './crypto/CryptoDashboardAppConfig';

/**
 * Dashboards
 */
const dashboardsConfigs: FuseRouteConfigsType = [
	AnalyticsDashboardAppConfig,
	ProjectDashboardAppConfig,
	ModuleDashboardAppConfig,
	CryptoDashboardAppConfig
];

export default dashboardsConfigs;
