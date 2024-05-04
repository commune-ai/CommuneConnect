import IconButton from "@mui/material/IconButton";
import Paper from "@mui/material/Paper";
import Select, { SelectChangeEvent } from "@mui/material/Select";
import Typography from "@mui/material/Typography";
import { memo, useEffect, useState } from "react";
import MenuItem from "@mui/material/MenuItem";
import FuseSvgIcon from "@fuse/core/FuseSvgIcon";
import { useAppSelector } from "app/store";
import { selectWidgets } from "../../../store/widgetsSlice";
import WidgetDataType, { RangeType } from "../../../types/WidgetDataType";

/**
 * The SummaryWidget widget.
 */
function SummaryWidget({ total_module }) {
  const widgets = useAppSelector(selectWidgets);

  return (
    <Paper className="flex flex-col flex-auto shadow rounded-2xl overflow-hidden">
      <Typography
        className="flex items-baseline justify-center w-full mt-20 mb-24"
        color="text.secondary"
      ></Typography>
      <div className="text-center mt-8">
        <Typography className="text-7xl sm:text-4xl font-bold tracking-tight leading-none text-blue-500">
          {total_module}
        </Typography>
        <Typography className="text-lg font-medium text-blue-600 dark:text-blue-500">
          Modules
        </Typography>
      </div>
      <Typography
        className="flex items-baseline justify-center w-full mt-20 mb-24"
        color="text.secondary"
      ></Typography>
    </Paper>
  );
}

export default memo(SummaryWidget);
