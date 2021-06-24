function Node(key) {
    this.key = key || null
    this.pre = null
    this.next = null
}

let node内裤 = new Node('内裤');
let node内裤_裤子 = new Node('裤子');
let node内裤_裤子_鞋 = new Node('鞋');
node内裤.next = node内裤_裤子;
node内裤_裤子.next = node内裤_裤子_鞋;

let node裤子 = new Node('裤子');
let node裤子_腰带 = new Node('腰带');
let node裤子_腰带_鞋 = new Node('鞋');
node裤子.next = node裤子_腰带;
node裤子_腰带.next = node裤子_腰带_鞋;

let node腰带 = new Node('腰带');
let node腰带_夹克 = new Node('夹克');
node腰带.next = node腰带_夹克;

let node衬衣 = new Node('衬衣');
let node衬衣_腰带 = new Node('腰带');
let node衬衣_腰带_领带 = new Node('领带');
node衬衣.next = node衬衣_腰带;
node衬衣_腰带.next = node衬衣_腰带_领带;

let node领带 = new Node('领带');
let node领带_夹克 = new Node('夹克');
node领带.next = node领带_夹克;

let node夹克 = new Node('夹克');

let node袜子 = new Node('袜子');
let node袜子_鞋 = new Node('鞋');
node袜子.next = node袜子_鞋;

let node鞋 = new Node('鞋');

let node手表 = new Node('手表');

const G = [node内裤, node裤子, node腰带, node衬衣, node领带, node夹克, node袜子, node鞋, node手表]

function TopologicalSort(G) {

    let didSearchMap = new Map();

    // 从某个点出发的深度遍历
    function dfs(G, s) {

        function getStartNodeIndex(P, a) {
            return P.findIndex((item) => a === item.key); //找到节点
        }

        const startNode = G[getStartNodeIndex(G, s.key)];
        let SimulationTree = {};

        function findNext(inputNode) {
            let resultNode;
            function nextEdgeNode(node) {
                console.log('是这里嘛',node)
                if (node.next === null) {
                    resultNode = null
                } else if (didSearchMap[node.next.key] === 1) {
                    nextEdgeNode(node.next)
                } else {
                    
                    resultNode = node.next
                }
            }
            console.log(resultNode)
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
    dfs(G,G[0])
    // for( let i = 0; i <G.length;i++) {
    //     console.log(JSON.stringify(dfs(G,G[i])))
    // }
}

TopologicalSort(G)