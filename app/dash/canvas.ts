"use client"
import { DataSet } from "vis-data/esnext";
import { Network } from "vis-network";
import "vis-network/styles/vis-network.css";

export const init = (container: HTMLDivElement) => {

  // create an array with nodes
  var nodes = new DataSet([
    { id: 1, label: "Node 1" },
    { id: 2, label: "Node 2" },
    { id: 3, label: "Node 3" },
    { id: 4, label: "Node 4" },
    { id: 5, label: "Node 5" },
  ]);

  // @ts-ignore
  var edges = new DataSet([
    { from: 1, to: 3 },
    { from: 1, to: 2 },
    { from: 2, to: 4 },
    { from: 2, to: 5 },
    { from: 3, to: 3 },
  ]);

  // create a network
  var data = {
    nodes: nodes,
    edges: edges,
  };
  var options = {
    edges: {
      arrows: {
        to: {
          enabled: true,
          type: "image",
          imageWidth: 24,
          imageHeight: 24,
          src: "data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' style='width:24px;height:24px' viewBox='0 0 24 24'%3E%3Cpath fill='%23000000' d='M19,3A2,2 0 0,1 21,5V19A2,2 0 0,1 19,21H5A2,2 0 0,1 3,19V5A2,2 0 0,1 5,3H9.18C9.6,1.84 10.7,1 12,1C13.3,1 14.4,1.84 14.82,3H19M12,8L7,13H10V17H14V13H17L12,8M12,3A1,1 0 0,0 11,4A1,1 0 0,0 12,5A1,1 0 0,0 13,4A1,1 0 0,0 12,3Z' /%3E%3C/svg%3E",
        },
      },
    },
  };

  // @ts-ignore
  var network = new Network(container, data, options);
}
