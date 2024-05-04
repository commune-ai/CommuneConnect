import FusePageSimple from '@fuse/core/FusePageSimple';
import Tab from '@mui/material/Tab';
import Tabs from '@mui/material/Tabs';
import _ from '@lodash';
import { useEffect, useState } from 'react';
import Box from '@mui/material/Box';
import { styled } from '@mui/material/styles';
import { useAppDispatch, useAppSelector } from 'app/store';
import * as React from 'react';
import { getWidgets, selectWidgets } from './store/widgetsSlice';
import HomeTab from './tabs/home/HomeTab';
import Select, { SelectChangeEvent } from '@mui/material/Select';
import MenuItem from '@mui/material/MenuItem';
import TeamTab from './tabs/team/TeamTab';
import BudgetTab from './tabs/budget/BudgetTab';

const Root = styled(FusePageSimple)(({ theme }) => ({
	'& .FusePageSimple-header': {
		backgroundColor: theme.palette.background.paper,
		boxShadow: `inset 0 0 0 1px  ${theme.palette.divider}`
	}
}));

/**
 * The ProjectDashboardApp page.
 */
function ProjectDashboardApp() {
	const dispatch = useAppDispatch();
	const widgets = useAppSelector(selectWidgets);
	// const categories = useAppSelector(selectCategories);
	const [selectedCategory1, setSelectedCategory1] = useState('10-06-2021');
	const [selectedCategory2, setSelectedCategory2] = useState('10-10-2021');


	const [tabValue, setTabValue] = useState(0);

	useEffect(() => {
		dispatch(getWidgets());
	}, [dispatch]);

	function handleChangeTab(event: React.SyntheticEvent, value: number) {
		setTabValue(value);
	}

	function handleSelectedCategory1(event: SelectChangeEvent<string>) {
		setSelectedCategory1(event.target.value);
	}

	function handleSelectedCategory2(event: SelectChangeEvent<string>) {
		setSelectedCategory2(event.target.value);
	}

	if (_.isEmpty(widgets)) {
		return null;
	}

	return (
		<Root
			content={
				<div className="w-full p-12 pt-16 sm:pt-24 lg:ltr:pr-0 lg:rtl:pl-0">
					<div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-24 w-full min-w-0 p-24" style = {{display: "flex", justifyContent: "space-between", alignItems: "center"}}>
						<p className='text-lg sm:text-4xl'>Commune AI</p>
						<div>
							<Select
								labelId="category-select-label"
								id="category-select"
								label="Category"
								value={selectedCategory1}
								onChange={handleSelectedCategory1}
								style={{marginRight: "30px"}}
							>
							<MenuItem value="10-06-2021">
								<em> 10-06-2021 </em>
							</MenuItem>
							{/* {categories.map((category) => (
								<MenuItem
									value={category.slug}
									key={category.id}
								>
									{category.title}
								</MenuItem>
							))} */}
						</Select>

						<Select
								labelId="category-select-label"
								id="category-select"
								label="Category"
								value={selectedCategory2}
								onChange={handleSelectedCategory2}
							>
							<MenuItem value="10-10-2021">
								<em> 10-10-2021 </em>
							</MenuItem>
							{/* {categories.map((category) => (
								<MenuItem
									value={category.slug}
									key={category.id}
								>
									{category.title}
								</MenuItem>
							))} */}
						</Select>
						</div>
					</div>
					<HomeTab />
				</div>
			}
		/>
	);
}

export default ProjectDashboardApp;
