import React from "react";
import { Chart as ChartJS, defaults } from "chart.js/auto";
import { Bar } from "react-chartjs-2";
import VendorData from "../data/vendorData.json";

defaults.maintainAspectRatio = false;
defaults.responsive = true;

defaults.plugins.title.align = "start";
defaults.plugins.title.font.size = 20;

const VendorActivity = () => {
  return (
    <div className="vendor-activity-card">
      <Bar
        data={{
          labels: VendorData.map((data) => data.label),
          datasets: [
            {
              label: "Traffic",
              data: VendorData.map((data) => data.value),
              backgroundColor: [" #83c0b9"],
              barThickness: 15,
              borderRadius: 10,
              
            },
          ],
        }}
        options={{
          plugins: {
            title: {
              display: true,
              text: "Vendor Activity",
              color: "rgb(6, 6, 126)",
            },
          },
        }}
      />
    </div>
  );
};

export default VendorActivity;
