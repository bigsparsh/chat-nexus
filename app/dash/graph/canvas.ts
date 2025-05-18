"use client"
import { GraphManager } from "@/lib/util/GraphManager";
import { toast } from "sonner";
import { DataSet } from "vis-data/esnext";
import { Network } from "vis-network";
import "vis-network/styles/vis-network.css";

export const init = async (container: HTMLDivElement) => {
  const manager = GraphManager.getInstance();
  await manager.addEdgesFromDB();
  // create an array with nodes
  const vertices = [...([...manager.vertices].map(ele => {
    return {
      id: ele[1].user_id,
      shape: "circularImage",
      image: ele[1].image,
      label: ele[1].name
    }
  }))]

  if (vertices.length === 0) {
    toast("You have no friends right now!");
    return;
  }


  const nodes = new DataSet([
    ...vertices
  ]);

  const connections: {
    from: string, to: string, arrows: {
      to?: {
        enabled: boolean,
        type: string
      },
      from?: {
        enabled: boolean,
        type: string,
      }
    }
  }[] = [];
  [...manager.edges].map(edge => {
    edge[1].map(e => {
      if (e !== edge[0]) {
        connections.push({
          from: edge[0],
          to: e,
          arrows: {
            to: {
              enabled: true,
              type: "arrow"
            },
          }
        })
      }

    })
  })

  // @ts-expect-error "no error"
  const edges = new DataSet([
    ...connections
  ]);



  // create a network
  const data = {
    nodes: nodes,
    edges: edges,
  };
  const options = {
    nodes: {
      borderWidth: 4,
      size: 30,
      color: {
        border: "#222222",
        background: "#666666",
      },
      font: { color: "#eeeeee" },
    },
    edges: {
      color: "lightgray",
    },
  };

  // @ts-expect-error "no error"
  new Network(container, data, options);
}
