import IconButton from "@mui/material/IconButton";
import Paper from "@mui/material/Paper";
import Typography from "@mui/material/Typography";
import { memo } from "react";
import FuseSvgIcon from "@fuse/core/FuseSvgIcon";
import { useAppSelector } from "app/store";
import { selectWidgets } from "../../../store/widgetsSlice";
import WidgetDataType from "../../../types/WidgetDataType";

/**
 * The IssuesWidget widget.
 */
function IssuesWidget({ module_pending }) {
  const widgets = useAppSelector(selectWidgets);
  const { data, title } = widgets.issues as WidgetDataType;

  return (
    <Paper className="flex flex-col flex-auto shadow rounded-2xl overflow-hidden">
      <Typography
        className="flex items-baseline justify-center w-full mt-20 mb-24"
        color="text.secondary"
      ></Typography>
      <div className="text-center mt-8">
        <Typography className="text-7xl sm:text-4xl font-bold tracking-tight leading-none text-amber-500">
          {module_pending}
        </Typography>
        <Typography className="text-lg font-medium text-amber-600">
          Modules Pending
        </Typography>
      </div>
      <Typography
        className="flex items-baseline justify-center w-full mt-20 mb-24"
        color="text.secondary"
      ></Typography>
    </Paper>
  );
}

export default memo(IssuesWidget);
