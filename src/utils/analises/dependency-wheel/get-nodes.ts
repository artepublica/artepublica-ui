import { DependencyWheel } from '@domain';

function getNodes(
  dependencies: DependencyWheel[],
): { node: string; weight: number }[] {
  const nodes: { node: string; weight: number }[] = [];

  dependencies.forEach((dependency) => {
    const nodeFrom = nodes.find((node) => node.node === dependency.from);
    if (nodeFrom) {
      nodeFrom.weight += dependency.weight;
    } else {
      nodes.push({ node: dependency.from, weight: dependency.weight });
    }

    const nodeTo = nodes.find((node) => node.node === dependency.to);
    if (nodeTo) {
      nodeTo.weight += dependency.weight;
    } else {
      nodes.push({ node: dependency.to, weight: dependency.weight });
    }
  });

  return nodes;
}

export default getNodes;
