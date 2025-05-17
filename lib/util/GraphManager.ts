import { getUserGraph } from "../actions/User";

export type EdgeType = {
  source: string;
  target: string;
}

export class GraphManager {
  static graph: GraphManager;

  edges: Map<string, string[]>;
  vertices: Set<string>;

  private constructor() {
    this.edges = new Map();
    this.vertices = new Set();
  }

  static getInstance() {
    if (!this.graph) {
      this.graph = new GraphManager();
    }
    return this.graph;
  }

  async addEdgesFromDB() {
    const graph = await getUserGraph();

    if (!graph) return;

    GraphManager.graph.vertices.add(graph.user_id);

    const layer1_user2 = graph.user2;

    if (!layer1_user2) return;

    for (const layer1_usr of graph.user2) {
      const user1 = layer1_usr.user2;
      const mutual = layer1_usr.mutual;
      const adjList = GraphManager.graph.edges.get(graph.user_id);

      if (!adjList)
        GraphManager.graph.edges.set(graph.user_id, []);
      else {
        adjList.push(user1.user_id);
        GraphManager.graph.edges.set(graph.user_id, adjList);
      }

      if (mutual) {
        const newAdj = GraphManager.graph.edges.get(user1.user_id);
        if (!newAdj)
          GraphManager.graph.edges.set(user1.user_id, []);
        else {
          newAdj.push(graph.user_id);
          GraphManager.graph.edges.set(user1.user_id, newAdj);
        }
      }

      if (!user1.user2) break;

      for (const layer2_usr of user1.user2) {
        const user2 = layer2_usr.user2;
        const mutual = layer2_usr.mutual;
        const adjList = GraphManager.graph.edges.get(user1.user_id);

        if (!adjList)
          GraphManager.graph.edges.set(user1.user_id, []);
        else {
          adjList.push(user2.user_id);
          GraphManager.graph.edges.set(user1.user_id, adjList);
        }

        if (mutual) {
          const newAdj = GraphManager.graph.edges.get(user2.user_id);
          if (!newAdj)
            GraphManager.graph.edges.set(user2.user_id, []);
          else {
            newAdj.push(user2.user_id);
            GraphManager.graph.edges.set(user1.user_id, newAdj);
          }
        }

        if (!user2.user2) break;

        for (const layer3_usr of user2.user2) {
          const user3 = layer3_usr.user2;
          const mutual = layer3_usr.mutual;
          const adjList = GraphManager.graph.edges.get(user2.user_id);

          if (!adjList)
            GraphManager.graph.edges.set(user2.user_id, []);
          else {
            adjList.push(user3.user_id);
            GraphManager.graph.edges.set(user2.user_id, adjList);
          }

          if (mutual) {
            const newAdj = GraphManager.graph.edges.get(user3.user_id);
            if (!newAdj)
              GraphManager.graph.edges.set(user3.user_id, []);
            else {
              newAdj.push(user3.user_id);
              GraphManager.graph.edges.set(user2.user_id, newAdj);
            }
          }

        }
      }
    }
  }
}
