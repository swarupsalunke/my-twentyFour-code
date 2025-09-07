function TreeNode(val) {
    this.val = val;
    this.left = this.right = null;
}

function lowestCommonAncestor(root, p, q) {
    if (!root || root === p || root === q) return root;

    let left = lowestCommonAncestor(root.left, p, q);
    let right = lowestCommonAncestor(root.right, p, q);

    if (left && right) return root;
    return left || right;
}

let root = new TreeNode(3);
root.left = new TreeNode(5);
root.right = new TreeNode(1);
root.left.left = new TreeNode(6);
root.left.right = new TreeNode(2);
root.right.left = new TreeNode(0);
root.right.right = new TreeNode(8);
root.left.right.left = new TreeNode(7);
root.left.right.right = new TreeNode(4);

let p = root.left;
let q = root.right;

console.log("LCA is:", lowestCommonAncestor(root, p, q).val);
