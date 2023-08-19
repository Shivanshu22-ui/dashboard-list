import React from "react";
import { ResponsiveLine } from "@nivo/line";
// import data from "./data.js"

function LineChart({ chartData }) {

    console.log(data,"chart");
    console.log(chartData.datasets,"chart");
  return (
    <ResponsiveLine
      data={data}
      margin={{ top: 50, right: 110, bottom: 50, left: 60 }}
      xScale={{ type: "point" }}
      yScale={{
        type: "linear",
        min: "auto",
        max: "auto",
        stacked: true,
        reverse: false,
      }}
      yFormat=" >-.2f"
      curve="natural"
      axisTop={null}
      axisRight={null}
      axisBottom={{
        tickSize: 5,
        tickPadding: 5,
        tickRotation: 0,
        legend: "transportation",
        legendOffset: 36,
        legendPosition: "middle",
      }}
      axisLeft={{
        tickSize: 5,
        tickPadding: 5,
        tickRotation: 0,
        legend: "count",
        legendOffset: -40,
        legendPosition: "middle",
      }}
      enableGridX={false}
      colors={{ scheme: "nivo" }}
      lineWidth={3}
      enablePoints={false}
      pointSize={9}
      pointColor={{ theme: "background" }}
      pointBorderWidth={2}
      pointBorderColor={{ from: "serieColor" }}
      pointLabelYOffset={-12}
      areaOpacity={0.35}
      useMesh={true}
      legends={[
        {
          anchor: "top-right",
          direction: "row",
          justify: false,
          translateX: 100,
          translateY: -50,
          itemsSpacing: 0,
          itemDirection: "left-to-right",
          itemWidth: 80,
          itemHeight: 20,
          itemOpacity: 0.75,
          symbolSize: 12,
          symbolShape: "circle",
          symbolBorderColor: "rgba(0, 0, 0, .5)",
          effects: [
            {
              on: "hover",
              style: {
                itemBackground: "rgba(0, 0, 0, .03)",
                itemOpacity: 1,
              },
            },
          ],
        },
      ]}
    />
  );
}
export default LineChart;


const data = [
    {
      "id": "japan",
      "color": "hsl(97, 70%, 50%)",
      "data": [
        {
          "x": "plane",
          "y": 90
        },
        {
          "x": "helicopter",
          "y": 89
        },
        {
          "x": "boat",
          "y": 17
        },
        {
          "x": "train",
          "y": 203
        },
        {
          "x": "subway",
          "y": 90
        },
        {
          "x": "bus",
          "y": 215
        },
        {
          "x": "car",
          "y": 73
        },
        {
          "x": "moto",
          "y": 113
        },
        {
          "x": "bicycle",
          "y": 249
        },
        {
          "x": "horse",
          "y": 84
        },
        {
          "x": "skateboard",
          "y": 264
        },
        {
          "x": "others",
          "y": 92
        }
      ]
    },
    {
      "id": "france",
      "color": "hsl(195, 70%, 50%)",
      "data": [
        {
          "x": "plane",
          "y": 75
        },
        {
          "x": "helicopter",
          "y": 295
        },
        {
          "x": "boat",
          "y": 128
        },
        {
          "x": "train",
          "y": 202
        },
        {
          "x": "subway",
          "y": 32
        },
        {
          "x": "bus",
          "y": 12
        },
        {
          "x": "car",
          "y": 273
        },
        {
          "x": "moto",
          "y": 194
        },
        {
          "x": "bicycle",
          "y": 282
        },
        {
          "x": "horse",
          "y": 74
        },
        {
          "x": "skateboard",
          "y": 25
        },
        {
          "x": "others",
          "y": 269
        }
      ]
    },
    {
      "id": "us",
      "color": "hsl(145, 70%, 50%)",
      "data": [
        {
          "x": "plane",
          "y": 62
        },
        {
          "x": "helicopter",
          "y": 282
        },
        {
          "x": "boat",
          "y": 186
        },
        {
          "x": "train",
          "y": 115
        },
        {
          "x": "subway",
          "y": 12
        },
        {
          "x": "bus",
          "y": 49
        },
        {
          "x": "car",
          "y": 292
        },
        {
          "x": "moto",
          "y": 29
        },
        {
          "x": "bicycle",
          "y": 164
        },
        {
          "x": "horse",
          "y": 19
        },
        {
          "x": "skateboard",
          "y": 43
        },
        {
          "x": "others",
          "y": 256
        }
      ]
    },
    // {
    //   "id": "germany",
    //   "color": "hsl(155, 70%, 50%)",
    //   "data": [
    //     {
    //       "x": "plane",
    //       "y": 41
    //     },
    //     {
    //       "x": "helicopter",
    //       "y": 215
    //     },
    //     {
    //       "x": "boat",
    //       "y": 290
    //     },
    //     {
    //       "x": "train",
    //       "y": 265
    //     },
    //     {
    //       "x": "subway",
    //       "y": 144
    //     },
    //     {
    //       "x": "bus",
    //       "y": 233
    //     },
    //     {
    //       "x": "car",
    //       "y": 185
    //     },
    //     {
    //       "x": "moto",
    //       "y": 291
    //     },
    //     {
    //       "x": "bicycle",
    //       "y": 228
    //     },
    //     {
    //       "x": "horse",
    //       "y": 228
    //     },
    //     {
    //       "x": "skateboard",
    //       "y": 294
    //     },
    //     {
    //       "x": "others",
    //       "y": 270
    //     }
    //   ]
    // },
    {
      "id": "norway",
      "color": "hsl(324, 70%, 50%)",
      "data": [
        {
          "x": "plane",
          "y": 106
        },
        {
          "x": "helicopter",
          "y": 264
        },
        {
          "x": "boat",
          "y": 12
        },
        {
          "x": "train",
          "y": 53
        },
        {
          "x": "subway",
          "y": 240
        },
        {
          "x": "bus",
          "y": 87
        },
        {
          "x": "car",
          "y": 172
        },
        {
          "x": "moto",
          "y": 220
        },
        {
          "x": "bicycle",
          "y": 142
        },
        {
          "x": "horse",
          "y": 143
        },
        {
          "x": "skateboard",
          "y": 159
        },
        {
          "x": "others",
          "y": 108
        }
      ]
    }
  ]