import { getUserGraph } from "../actions/User";

export type EdgeType = {
  source: string;
  target: string;
}

export class GraphManager {
  static graph: GraphManager;

  edges: Map<string, string[]>;
  vertices: Map<string, { name: string, user_id: string, image: string }>;

  private constructor() {
    this.edges = new Map();
    this.vertices = new Map();
  }

  static getInstance() {
    if (!this.graph) {
      this.graph = new GraphManager();
    }
    return this.graph;
  }

  reset() {
    this.edges = new Map();
    this.vertices = new Map();
  }

  async addEdgesFromDB() {
    this.reset()

    this.createGraph(await getUserGraph());
    const layer1_edges = this.edges;
    if (layer1_edges.size > 0) {
      for (const ele of this.vertices) {
        this.createGraph(await getUserGraph(ele[0]))
      }
    }

  }

  createGraph(graph: {
    user1: {
      user_id: string;
      name: string;
      email: string;
      image: string;
    };
    user2: {
      user_id: string;
      name: string;
      email: string;
      image: string;
    };
    mutual: boolean;
  }[] | undefined
  ) {

    graph?.map((ele) => {
      if (ele.user1.name === "null") ele.user1.name = ele.user1.email.split("@")[0];
      if (ele.user2.name === "null") ele.user2.name = ele.user2.email.split("@")[0];
      GraphManager.graph.vertices.set(ele.user1.user_id, {
        ...ele.user1
      })
      GraphManager.graph.vertices.set(ele.user2.user_id, {
        ...ele.user2
      })

      const exisitingEdges = GraphManager.graph.edges.get(ele.user1.user_id);
      if (exisitingEdges) {
        if (!exisitingEdges.includes(ele.user2.user_id))
          exisitingEdges.push(ele.user2.user_id)
        GraphManager.graph.edges.set(ele.user1.user_id, exisitingEdges);
      } else {
        GraphManager.graph.edges.set(ele.user1.user_id, [ele.user2.user_id]);
      }

      if (ele.mutual) {
        const exisitingEdges2 = GraphManager.graph.edges.get(ele.user2.user_id);
        if (exisitingEdges2) {
          if (!exisitingEdges2.includes(ele.user1.user_id))
            exisitingEdges2.push(ele.user1.user_id)
          GraphManager.graph.edges.set(ele.user2.user_id, exisitingEdges2);
        } else {
          GraphManager.graph.edges.set(ele.user2.user_id, [ele.user1.user_id]);
        }
      }
    })
  }
}
