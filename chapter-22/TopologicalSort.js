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

const G = [node内裤,node裤子,node腰带,node衬衣,node领带,node夹克,node袜子,node鞋,node手表]

function TopologicalSort(G){

}

console.log(TopologicalSort(G))