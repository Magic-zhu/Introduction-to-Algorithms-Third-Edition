// 有向无环图的广度遍历
function bfs(G, s) {
    let SimulationTree = {};
    let didSearchMap = new Map();
    SimulationTree[s] = {};
    didSearchMap[s] = 1;
    // 找到起始节点
    function getStartNodeIndex(P, a) {
        return P.findIndex((item) => a === item.key); //找到节点
    }

    let startNode = G[getStartNodeIndex(G, s)];

    function search(startNode, tree) {
        let floor = []
        didSearchMap[startNode.key] = 1;
        function searchFloor(node) {
            if (node.next !== null) {
                floor.push(node.next.key)
                searchFloor(node.next)
            }
        }

        searchFloor(startNode)
        if (floor.length !== 0) {
            floor.forEach((key) => {

                let t = getStartNodeIndex(G, key)
                // 排除环
                if (!didSearchMap[G[t].key]) {
                    tree[key] = {}
                    search(G[t],tree[key])
                }
            })
        }
    }

    search(startNode, SimulationTree[s])
    return SimulationTree
}

module.exports = bfs;
