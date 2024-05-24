import Paper from "@mui/material/Paper";
import { lighten, useTheme } from "@mui/material/styles";
import Tab from "@mui/material/Tab";
import Tabs from "@mui/material/Tabs";
import Typography from "@mui/material/Typography";
import { memo, useEffect, useState } from "react";
import IconButton from "@mui/material/IconButton";
import FuseSvgIcon from "@fuse/core/FuseSvgIcon";
import ReactApexChart from "react-apexcharts";
import Box from "@mui/material/Box";
import { useAppSelector } from "app/store";
import { ApexOptions } from "apexcharts";
import { selectWidgets } from "../../../store/widgetsSlice";
import GithubIssuesDataType from "../../../types/GithubIssuesDataType";
import { getHistory } from "src/api/dashboards/project-api";

/**
 * The GithubIssuesWidget widget.
 */
function GithubIssuesWidget() {
  const theme = useTheme();
  const [awaitRender, setAwaitRender] = useState(true);
  const [tabValue, setTabValue] = useState(0);
  const widgets = useAppSelector(selectWidgets);
  const { overview, series, ranges, labels } =
    widgets.githubIssues as GithubIssuesDataType;
  const currentRange = Object.keys(ranges)[tabValue];
  const [history, setHistory] = useState({ history: [] });

  const chartOptions: ApexOptions = {
    chart: {
      fontFamily: "inherit",
      foreColor: "inherit",
      height: "100%",
      type: "line",
      toolbar: {
        show: false,
      },
      zoom: {
        enabled: false,
      },
    },
    colors: [theme.palette.primary.main, theme.palette.secondary.main],
    labels,
    dataLabels: {
      enabled: true,
      enabledOnSeries: [0],
      background: {
        borderWidth: 0,
      },
    },
    grid: {
      borderColor: theme.palette.divider,
    },
    legend: {
      show: false,
    },
    plotOptions: {
      bar: {
        columnWidth: "50%",
      },
    },
    states: {
      hover: {
        filter: {
          type: "darken",
          value: 0.75,
        },
      },
    },
    stroke: {
      width: [3, 0],
    },
    tooltip: {
      followCursor: true,
      theme: theme.palette.mode,
    },
    xaxis: {
      axisBorder: {
        show: false,
      },
      axisTicks: {
        color: theme.palette.divider,
      },
      labels: {
        style: {
          colors: theme.palette.text.secondary,
        },
      },
      tooltip: {
        enabled: false,
      },
    },
    yaxis: {
      labels: {
        offsetX: -16,
        style: {
          colors: theme.palette.text.secondary,
        },
      },
      min: 0,
    },
  };

  useEffect(() => {
    setAwaitRender(false);
  }, []);
  useEffect(() => {
    getHistory()
      .then((data) => setHistory(data))
      .catch((e) => console.log(e));
  }, []);
  if (awaitRender) {
    return null;
  }

  return (
    <Paper className="flex flex-col flex-auto p-24 shadow rounded-2xl overflow-hidden">
      <div className="flex flex-col sm:flex-row items-start justify-between">
        <Typography className="text-lg font-medium tracking-tight leading-6 truncate">
          Activity - Open AI Module Invocations
        </Typography>
        <IconButton aria-label="more" size="large">
          <FuseSvgIcon>heroicons-outline:dots-horizontal</FuseSvgIcon>
        </IconButton>
      </div>
      <div className="flex flex-col flex-auto">
        <ReactApexChart
          className="flex-auto w-full"
          options={chartOptions}
          series={[{ name: "Open AI Invocation", data: history?.history }]}
          height={320}
        />
      </div>
    </Paper>
  );
}

export default memo(GithubIssuesWidget);
