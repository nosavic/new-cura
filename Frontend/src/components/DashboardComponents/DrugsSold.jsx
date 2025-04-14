import React from "react";
import { Chart as ChartJS, defaults } from "chart.js/auto";
import { Doughnut } from "react-chartjs-2";

defaults.maintainAspectRatio = false;
defaults.responsive = true;

defaults.plugins.title.display = true;
defaults.plugins.title.align = "start";
defaults.plugins.title.font.size = 20;

const DrugsSold = () => {
  return (
    <div className="drugs-sold-card">
      <Doughnut
        data={{
          labels: ["Orders", "Sold"],
          datasets: [
            {
              label: "",
              data: [500, 400],
              backgroundColor: ["rgb(8, 134, 99)", " #34d399"],
              borderWidth: 2,
            },
          ],
        }}
        options={{
          plugins: {
            title: {
              display: true,
              text: "Drugs Sold",
              color: "rgb(4, 4, 158)",
            },
          },
        }}
      />
    </div>
  );
};

export default DrugsSold;
