import React from "react";
import { Line } from "react-chartjs-2";
import { Chart as ChartJS, defaults } from "chart.js/auto";
import  SourceData from "../data/SourceData.json";
import styles from "../../styles/dashboard.module.css";

defaults.maintainAspectRatio = false;
defaults.responsive = true;

defaults.plugins.title.display = true;
defaults.plugins.title.align = "start";
defaults.plugins.title.font.size = 20;
defaults.plugins.subtitle.align = "start";
defaults.plugins.subtitle.color = "rgb(4, 4, 158)";

const RevenueChart = () => {
  return (
    <div className={styles.revenueChartContainer}>
      <div className={styles.revenueChart}>
        <Line
          data={{
            labels: SourceData.map((data) => data.label),
            datasets: [
              {
                label: "Earned",
                data: SourceData.map((data) => data.value),
                backgroundColor: ["rgb(4, 4, 158)"],
                tension: 0.5,
                borderColor: "rgb(4, 4, 158)",
                pointStyle: false,
              },
            ],
          }}
          options={{
            plugins: {
              title: {
                display: true,
                text: "#300000.5",
                color: "rgb(6, 6, 126)",
              },
              subtitle: {
                display: true,
                text: "Total Revenue",
              },
            },
          }}
        />
      </div>
    </div>
  );
};

export default RevenueChart;
