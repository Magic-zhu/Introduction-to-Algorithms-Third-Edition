
function TopologicalSort(G) {

    let didSearchMap = new Map();
    // 最终结果
    let finalList = [];
    let count = 0;
    // 从某个点出发的深度遍历
    function dfs(G, s) {

        function getStartNodeIndex(P, a) {
            return P.findIndex((item) => a === item.key); //找到节点
        }

        const startNode = G[getStartNodeIndex(G, s.key)];
        let SimulationTree = {};
        let stack = [];
        let treeStack = [];
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

        // 向上查询节点 直到有新的节点或者stack为空
        function searchBack(tree) {
            if (stack.length !== 0) {
                let preNode = stack.pop();
                let resultNode = findNext(preNode);
                setFinishTime(preNode);
                if (resultNode) {
                    let t = G[getStartNodeIndex(G, resultNode.key)];
                    stack.push(preNode);
                    treeStack.push(tree);
                    search(t, tree);
                } else {
                    tree = treeStack.pop();
                    searchBack(tree);
                }
            }
        }

        function setFinishTime(node) {
            let nowIndex = finalList.findIndex(item => item.key === node.key);
            finalList[nowIndex].finishTime = count++;
        }

        function search(startNode, SimulationTree) {
            function searchDeep(node, tree) {
                tree[node.key] === undefined ? tree[node.key] = new Object({}) : null;
                didSearchMap[node.key] = 1; //记录已经走过的节点
                if (finalList.findIndex(item => item.key === node.key) === -1) {
                    finalList.push({ findTime: count++, key: node.key })
                }
                if (node.next === null) { //如果为空返回上一个节点 这里说明是最后一个节点 发现即结束时间
                    let nowIndex = finalList.findIndex(item => item.key === node.key);
                    if (finalList[nowIndex].finishTime === undefined) {
                        setFinishTime(node);
                    }
                    searchBack(tree);
                } else {
                    let nextNode = G[getStartNodeIndex(G, node.next.key)];
                    if (!didSearchMap[nextNode.key]) {
                        stack.push(node); //保存上一个节点
                        treeStack.push(tree); // 保存树的节点
                        searchDeep(nextNode, tree[node.key]);
                    } else { // 遇到已经经过的节点 返回上一个节点 查找是否有其他路径
                        if (stack.length === 0) {
                            let nowIndex = finalList.findIndex(item => item.key === node.key);
                            if (finalList[nowIndex].finishTime === undefined) {
                                setFinishTime(node);
                            }
                            // 这里是用来查找是否有其他路径
                            if (findNext(node) !== null) {
                                stack.push(node);
                                treeStack.push(tree);
                                search(findNext(node), tree[node.key]);
                            }
                        } else {
                            searchBack(tree);
                        }
                    }
                }
            }
            searchDeep(startNode, SimulationTree);
        }
        search(startNode, SimulationTree)
        return SimulationTree
    }

    // 遍历每一个顶点
    for (let i = 0; i < G.length; i++) {
        dfs(G, G[i]); // 深度遍历
    }

    finalList = finalList.sort((a, b) => b.finishTime - a.finishTime).map(item=>item.key);
    return finalList
}

module.exports = TopologicalSort