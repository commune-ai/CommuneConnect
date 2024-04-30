import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import InputBase from '@mui/material/InputBase';
import FuseSvgIcon from '@fuse/core/FuseSvgIcon';
import IconButton from '@mui/material/IconButton';
import SearchIcon from '@mui/icons-material/Search';
import Paper from '@mui/material/Paper';


/**
 * The ModuleDashboardAppHeader component.
 */
function ModuleDashboardAppHeader() {
	return (
		<div className="flex w-full container">
			<div className="flex flex-col sm:flex-row flex-auto sm:items-center min-w-0 p-24 md:p-32 pb-0 md:pb-0">
				<div className="flex flex-col flex-auto">
					<Typography className="text-3xl font-semibold tracking-tight leading-8">
						Modules
					</Typography>
				</div>
				<div className="flex items-center mt-24 sm:mt-0 sm:mx-8 space-x-12">
					<Paper
						component="form"
						sx={{ p: '2px 4px', display: 'flex', alignItems: 'center', width: 300, height: 42 }}
						style={{borderRadius: "10px"}}
						>
						<InputBase
							sx={{ ml: 1, flex: 1 }}
							placeholder="Search"
							inputProps={{ 'aria-label': 'search google maps' }}
						/>
						<IconButton type="button" sx={{ p: '10px' }} aria-label="search">
							<SearchIcon />
						</IconButton>
					</Paper>
					<Button
						className="whitespace-nowrap"
						variant="contained"
						color="secondary"
						style={{borderRadius: "10px"}}
						startIcon={<FuseSvgIcon size={20}>heroicons-outline:plus</FuseSvgIcon>}
					>
						Add New
					</Button>
				</div>
			</div>
		</div>
	);
}

export default ModuleDashboardAppHeader;
