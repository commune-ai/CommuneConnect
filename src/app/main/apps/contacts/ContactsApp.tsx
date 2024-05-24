import FusePageSimple from '@fuse/core/FusePageSimple';
import { useEffect, useRef, useState } from 'react';
import { useParams } from 'react-router-dom';
import { useDeepCompareEffect } from '@fuse/hooks';
import { styled } from '@mui/material/styles';
import useThemeMediaQuery from '@fuse/hooks/useThemeMediaQuery';
import { useAppDispatch } from 'app/store';
import ContactsSidebarContent from './ContactsSidebarContent';
import ContactsHeader from './ContactsHeader';
import Contacttable from './Contacttable';
import { getTags } from './store/tagsSlice';
import { getCountries } from './store/countriesSlice';
import { getContacts } from './store/contactsSlice';
import { motion } from 'framer-motion';
import FuseSvgIcon from '../../../../@fuse/core/FuseSvgIcon';
import IconButton from '@mui/material/IconButton';

const jsonData = {
	"functions": [
	  "start_dataset",
	  "score",
	  "sample",
	  "set_dataset",
	  "__init__"
	],
	"schema": {
	  "__init__": {
		"default": {
		  "config": null,
		  "kwargs": null
		},
		"docs": null,
		"input": {
		  "config": "NA"
		},
		"output": {},
		"type": "self"
	  },
	  "sample": {
		"default": {},
		"docs": null,
		"input": {},
		"output": {},
		"type": "self"
	  },
	  "score": {
		"default": {
		  "module": "model.openai"
		},
		"docs": null,
		"input": {
		  "module": "str"
		},
		"output": {},
		"type": "self"
	  },
	  "set_dataset": {
		"default": {
		  "dataset": null,
		  "kwargs": null
		},
		"docs": null,
		"input": {
		  "dataset": "str"
		},
		"output": {},
		"type": "self"
	  },
	  "start_dataset": {
		"default": {
		  "dataset": null
		},
		"docs": null,
		"input": {
		  "dataset": "NA"
		},
		"output": {},
		"type": "static"
	  }
	}
  };


const Root = styled(FusePageSimple)(({ theme }) => ({
	'& .FusePageSimple-header': {
		backgroundColor: theme.palette.background.paper
	}
}));

/**
 * The ContactsApp page.
 */
function ContactsApp() {
	const dispatch = useAppDispatch();
	const pageLayout = useRef(null);
	const routeParams = useParams();
	const [rightSidebarOpen, setRightSidebarOpen] = useState(false);
	const isMobile = useThemeMediaQuery((theme) => theme.breakpoints.down('lg'));

	const container = {
		show: {
			transition: {
				staggerChildren: 0.1
			}
		}
	};
	const item = {
		hidden: { opacity: 0, y: 20 },
		show: { opacity: 1, y: 0 }
	};

	useDeepCompareEffect(() => {
		dispatch(getContacts());
		dispatch(getCountries());
		dispatch(getTags());
	}, [dispatch]);

	useEffect(() => {
		setRightSidebarOpen(Boolean(routeParams.id));
	}, [routeParams]);

	const [data, setData] = useState(null);

	useEffect(() => {
		// Simulate fetching data
		setData(jsonData);
	}, []);

	return (
		<motion.div
			className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-24 w-full min-w-0 p-24"
			variants={container}
			initial="hidden"
			animate="show"
		>
			<motion.div
				variants={item}
				className="sm:col-span-2 md:col-span-2"
			>
				<ContactsHeader />
				<Contacttable />

				
			</motion.div>
			<motion.div
				variants={item}
				className="sm:col-span-2 md:col-span-1"
				style={{padding: "30px"}}
			>
				<div style={{border: "1px solid green", borderRadius: "10px", marginTop: "10px", padding: "20px", height:"100%"}}>
					<div style={{display: "flex", justifyContent: "space-between", alignItems: "center", width: "100%", height: "70px",
						backgroundColor: "#ff3399", borderRadius: "10px"}}>
						<div style={{display: "flex", alignItems: "center", marginLeft: "10px"}}>
							<FuseSvgIcon style={{marginRight: "10px"}}>heroicons-outline:user</FuseSvgIcon>
							<p>Metadata</p>
						</div>
						<div>
							{/* {Object.keys(data.schema).map((key) => (
							<div key={key}>
								<h2>{key}</h2>
								<pre>{JSON.stringify(data.schema[key], null, 2)}</pre>
							</div>
							))} */}
						</div>
						<IconButton
								aria-haspopup="true"
								// onClick={openSelectedOrdersMenu}
								size="large"
						>
						</IconButton>
					</div>
					{/* <img src="assets/images/etc/moduleTable.png" style={{width: "100%", height: "350px", marginTop: "30px"}}/> */}
					<pre>{JSON.stringify(data, null, 2)}</pre>

				</div>
			</motion.div>
		</motion.div>
	);
}

export default ContactsApp;
