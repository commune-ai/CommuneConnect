import { useEffect, useState } from "react";
import { PieChart } from "@mui/x-charts/PieChart";
import { useDrawingArea } from "@mui/x-charts/hooks";
import { styled } from "@mui/material/styles";
import Paper from "@mui/material/Paper";
import Typography from "@mui/material/Typography";
import IconButton from "@mui/material/IconButton";
import FuseSvgIcon from "@fuse/core/FuseSvgIcon";
import { server_analytics } from "src/api/dashboards/project-api";

const size = {
  width: 600,
  height: 200,
};

const StyledText = styled("text")(({ theme }) => ({
  fill: theme.palette.text.primary,
  textAnchor: "middle",
  dominantBaseline: "central",
  fontSize: 20,
}));

function PieCenterLabel({ children }) {
  const { width, height, left, top } = useDrawingArea();
  return (
    <StyledText x={left + width / 2} y={top + height / 2}>
      {children}
    </StyledText>
  );
}

export default function PieChartWithCenterLabel() {
  const [data, setData] = useState([]);

  useEffect(() => {
    server_analytics()
      .then((dt) => {
        console.log(dt)
        dt?.slice(0, 4).map((itm) => {
          setData(prevData => [...prevData, { label: itm.name, value: itm.balance }]);
          console.log(data)
        });
      })
      .catch((e) => console.log(e));
  }, []);
  return (
    <Paper className="flex flex-col flex-auto shadow rounded-2xl overflow-hidden p-24">
      <div className="flex flex-col sm:flex-row items-start justify-between">
        <Typography className="text-lg font-medium tracking-tight leading-6 truncate">
          Analytics
        </Typography>
        <div className="ml-8">
          <IconButton aria-label="more" size="large">
            <FuseSvgIcon>heroicons-outline:dots-horizontal</FuseSvgIcon>
          </IconButton>
        </div>
      </div>

      <div className="flex flex-col flex-auto mt-24 h-192">
        <PieChart series={[{ data, innerRadius: 70 }]} {...size}>
          <PieCenterLabel>Invocations</PieCenterLabel>
        </PieChart>
      </div>
      <div className="mt-32">
        <div className="-my-12 divide-y" style={{ height: "110px" }}></div>
      </div>
    </Paper>
  );
}
