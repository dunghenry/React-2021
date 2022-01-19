import React from "react";
import { Grid } from "@material-ui/core";
import HighlightCard from "./HighlightCard";
export default function Highlight({ report }) {
  const data = report && report.length ? report[report.length - 1] : [];
  const summary = [
    {
      title: "Số ca nhiễm",
      count: data.Confirmed,
      type: "confirmed",
    },
    {
      title: "Số ca đã khỏi",
      count: data.Recovered,
      type: "recovered",
    },
    {
      title: "Số ca tử vong",
      count: data.Deaths,
      type: "death",
    },
  ];
  return (
    <Grid container spacing={3} style={{marginTop: '10px'}}>
      {summary.map((data) => (
        <Grid item sm={4} xs={12}>
          <HighlightCard
            title={data.title}
            count={data.count}
            type={data.type}
          />
        </Grid>
      ))}
    </Grid>
  );
}
