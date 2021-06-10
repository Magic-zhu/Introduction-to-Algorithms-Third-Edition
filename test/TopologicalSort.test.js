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
let node