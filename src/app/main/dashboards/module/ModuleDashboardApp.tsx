import { useEffect, useMemo } from 'react';
import _ from '@lodash';
import FusePageSimple from '@fuse/core/FusePageSimple';
import { motion } from 'framer-motion';
import { useAppDispatch, useAppSelector } from 'app/store';
import { getWidgets, selectWidgets } from './store/widgetsSlice';
import ModuleDashboardAppHeader from './ModuleDashboardAppHeader';
import PreviousStatementWidget from './widgets/PreviousStatementWidget';
import CurrentStatementWidget from './widgets/CurrentStatementWidget';
import AccountBalanceWidget from './widgets/AccountBalanceWidget';
import RecentTransactionsWidget from './widgets/RecentTransactionsWidget';
import BudgetWidget from './widgets/BudgetWidget';

/**
 * The module dashboard app.
 */
function ModuleDashboardApp() {
	const dispatch = useAppDispatch();
	const widgets = useAppSelector(selectWidgets);

	useEffect(() => {
		dispatch(getWidgets());
	}, [dispatch]);

	const content = (
		<div className="w-full px-24 md:px-32 pb-24">
			{useMemo(() => {
				const container = {
					show: {
						transition: {
							staggerChildren: 0.06
						}
					}
				};

				const item = {
					hidden: { opacity: 0, y: 20 },
					show: { opacity: 1, y: 0 }
				};

				return (
					!_.isEmpty(widgets) && (
						<motion.div
							className="w-full"
							variants={container}
							initial="hidden"
							animate="show"
						>

							<div className="grid grid-cols-1 xl:grid-cols-3 gap-32 w-full mt-32">
								<motion.div
									variants={item}
									className="xl:col-span-3 flex flex-col flex-auto"
								>
									<RecentTransactionsWidget />
								</motion.div>
							</div>
						</motion.div>
					)
				);
			}, [widgets])}
		</div>
	);

	return (
		<FusePageSimple
			header={<ModuleDashboardAppHeader />}
			content={content}
		/>
	);
}

export default ModuleDashboardApp;
