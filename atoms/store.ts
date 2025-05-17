import { GraphManager } from "@/lib/util/GraphManager";
import { create } from "zustand";


export const useGraph = create<{ graph: GraphManager }>((set) => ({
  graph: GraphManager.getInstance(),
}))
