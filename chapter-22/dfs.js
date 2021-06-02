
// 从某个点出发的深度遍历
function dfs(G, s) {

    function getStartNodeIndex(P, a) {
        return P.findIndex((item) => a === item.key); //找到节点
    }

    const startNode = G[getStartNodeIndex(G, s)];
    let SimulationTree = {};
    let didSearchMap = new Map();

    function findNext(inputNode) {
        let resultNode;
        function nextEdgeNode(node) {
            if (node.next === null) {
                resultNode = null
            } else if (didSearchMap[node.next.key] === 1) {
                nextEdgeNode(node.next)
            } else {
                resultNode = node.next
            }
        }
        nextEdgeNode(inputNode)
        return resultNode
    }

    function search(startNode, SimulationTree) {
        let stack = [];
        function searchDeep(node, tree) {
            tree[node.key] === undefined ? tree[node.key] = new Object({}) : null;
            didSearchMap[node.key] = 1; //记录已经走过的节点
            if (node.next === null) { //如果为空返回上一个节点
                if (stack.length !== 0) {
                    let preNode = stack.pop();
                    let resultNode = findNext(preNode);
                    if (resultNode) {
                        let t = G[getStartNodeIndex(G, resultNode.key)]
                        search(t, tree);
                    }
                }
            } else {
                let nextNode = G[getStartNodeIndex(G, node.next.key)]
                if (!didSearchMap[nextNode.key]) {
                    stack.push(node); //保存上一个节点
                    searchDeep(nextNode, tree[node.key]);
                } else { // 遇到已经经过的节点 返回上一个节点 查找是否有其他路径
                    if (stack.length !== 0) {
                        let preNode = stack.pop(); // 找回上一个节点
                        let resultNode = findNext(preNode); // 去邻接链表中查询对应没有经过的节点
                        if (resultNode) {
                            let t = G[getStartNodeIndex(G, resultNode.key)]
                            search(t, tree);
                        }
                    }
                }
            }
        }
        searchDeep(startNode, SimulationTree);
    }
    search(startNode, SimulationTree)
    return SimulationTree
}

module.exports = dfs;
