function Node(key) {
    this.key = key || null
    this.pre = null
    this.next = null
}

let node1 = new Node(1)
let node1_2 = new Node(2)
let node1_2_4 = new Node(4)
let node2 = new Node(2)
let node2_5 = new Node(5)
let node3 = new Node(3)
let node3_6 = new Node(6)
let node3_6_5 = new Node(5)
let node4 = new Node(4)
let node4_2 = new Node(2)
let node5 = new Node(5)
let node5_4 = new Node(4)
let node6 = new Node(6)
let node6_6 = new Node(6)
node1.next = node1_2
node1_2.pre = node1
node1_2.next = node1_2_4
node1_2_4.pre = node1_2
node2.next = node2_5
node2_5.pre = node2
node3.next = node3_6
node3_6.pre = node3
node3_6.next = node3_6_5
node3_6_5.pre = node3_6
node4.next = node4_2
node4_2.pre = node4
node5.next = node5_4
node5_4.pre = node5
node6.next = node6_6
node6_6.pre = node6

const G = [node1, node2, node3, node4, node5, node6]

function dfs(G, s) {

    function getStartNodeIndex(P, a) {
        return P.findIndex((item) => a === item.key); //找到节点
    }

    const startNode = G[getStartNodeIndex(G, s)];
    let SimulationTree = {};
    let didSearchMap = new Map();

    function  search(startNode,SimulationTree){
        let stack = [];
        function searchDeep(node, tree) {
            tree[node.key] = new Object({})
            stack.push(node.next);
            didSearchMap[node.key] = 1
            if (node.next !== null) {
                let nextNode = G[getStartNodeIndex(G, node.next.key)]
                if (!didSearchMap[nextNode.key]) {
                    searchDeep(nextNode, tree[node.key])
                }else{
                    stack.pop();
                    search(node,)
                }
            }else{

            }
        }
        searchDeep(startNode, SimulationTree);
    }
    search(startNode,SimulationTree)
    return SimulationTree
}

// dfs(G, 1)
console.log(JSON.stringify(dfs(G, 1)))
