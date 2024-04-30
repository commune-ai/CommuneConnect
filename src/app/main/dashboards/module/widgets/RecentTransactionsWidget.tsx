import Paper from '@mui/material/Paper';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Typography from '@mui/material/Typography';
import { memo } from 'react';
import format from 'date-fns/format';
import clsx from 'clsx';
import Button from '@mui/material/Button';
import { Checkbox, IconButton } from '@mui/material';
import { useAppSelector } from 'app/store';
import { selectWidgets } from '../store/widgetsSlice';
import RecentTransactionsWidgetType from '../types/RecentTransactionsWidgetType';
import FuseSvgIcon from '@fuse/core/FuseSvgIcon';
import Rating from '@mui/material/Rating';
import DeleteIcon from '@mui/icons-material/Delete';

import { useState, useEffect } from 'react';

/**
 * The RecentTransactionsWidget widget.
 */
function RecentTransactionsWidget() {
    const [modules, setModules] = useState([]);

    useEffect(() => {
        fetchModules();
    }, []);

    const fetchModules = async () => {
        try {
            const response = await fetch('http://localhost:5000/modules');
            if (response.ok) {
                const data = await response.json();
                setModules(data);
            } else {
                console.error('Failed to fetch modules:', response.statusText);
            }
        } catch (error) {
            console.error('Error fetching modules:', error);
        }
    };

    return (
        <Paper className="flex flex-col flex-auto p-24 shadow rounded-2xl overflow-hidden">
            <div className="table-responsive mt-24">
                <Table className="simple w-full min-w-full">
                    <TableHead>
                        <TableRow>
                            <TableCell style={{ width: "50px" }}>
                                <Checkbox style={{ marginLeft: "-8px" }} />
                            </TableCell>
                            <TableCell>
                                <Typography color="text.secondary" className="font-semibold text-12 whitespace-nowrap">
                                    ID
                                </Typography>
                            </TableCell>
                            <TableCell>
                                <Typography color="text.secondary" className="font-semibold text-12 whitespace-nowrap">
                                    Name
                                </Typography>
                            </TableCell>
                            <TableCell>
                                <Typography color="text.secondary" className="font-semibold text-12 whitespace-nowrap">
                                    Email
                                </Typography>
                            </TableCell>
                            <TableCell>
                                <Typography color="text.secondary" className="font-semibold text-12 whitespace-nowrap">
                                    Date
                                </Typography>
                            </TableCell>
                            <TableCell>
                                <Typography color="text.secondary" className="font-semibold text-12 whitespace-nowrap">
                                    Status
                                </Typography>
                            </TableCell>
                            <TableCell>
                                <Typography color="text.secondary" className="font-semibold text-12 whitespace-nowrap">
                                    Star
                                </Typography>
                            </TableCell>
                            <TableCell>
                                <Typography color="text.secondary" className="font-semibold text-12 whitespace-nowrap">
                                    Actions
                                </Typography>
                            </TableCell>
                        </TableRow>
                    </TableHead>
                    <TableBody>
                        {modules.map((module, index) => (
                            <TableRow key={index}>
                                <TableCell key={`${index}-checkbox`} component="th" scope="row" style={{ width: "50px" }}>
                                    <Checkbox />
                                </TableCell>
                                <TableCell key={`${index}-id`} component="th" scope="row">
                                    <Typography color="text.secondary">{module.id}</Typography>
                                </TableCell>
                                <TableCell key={`${index}-Name`} component="th" scope="row">
                                    <Typography>{module.Name}</Typography>
                                </TableCell>
                                <TableCell key={`${index}-Email`} component="th" scope="row">
                                    <Typography>{module.Email}</Typography>
                                </TableCell>
                                <TableCell key={`${index}-Date`} component="th" scope="row">
                                    <Typography color="text.secondary">{module.Date}</Typography>
                                </TableCell>
                                <TableCell key={`${index}-status`} component="th" scope="row">
                                    <Typography
                                        className={clsx(
                                            'inline-flex items-center font-bold text-10 px-10 py-2 rounded-full tracking-wide uppercase',
                                            module.status === 'pending' && 'bg-red-100 text-red-800 dark:bg-red-600 dark:text-red-50',
                                            module.status === 'completed' && 'bg-green-50 text-green-800 dark:bg-green-600 dark:text-green-50'
                                        )}
                                        style={{ height: "30px", width: "100px", display: "flex", justifyContent: "center" }}
                                    >
                                        {module.status}
                                    </Typography>
                                </TableCell>
                                <TableCell>
                                    {/* Render star icon */}
                                    <IconButton aria-label="Star">
                                        <Rating name={`customized-${index}`} defaultValue={0} max={1} />
                                    </IconButton>
                                </TableCell>
                                <TableCell>
                                    {/* Render delete icon */}
                                    <IconButton aria-label="Delete">
                                        <DeleteIcon />
                                    </IconButton>
                                </TableCell>
                            </TableRow>
                        ))}
                    </TableBody>
                </Table>
            </div>
        </Paper>
    );
}

export default memo(RecentTransactionsWidget);
