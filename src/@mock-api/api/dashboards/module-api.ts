import mockApi from '../../mock-api.json';
import mock from '../../mock';

const widgets = mockApi.components.examples.module_dashboard_widgets.value;

mock.onGet('/api/dashboards/module/widgets').reply(() => {
	return [200, widgets];
});
