/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */
/**
 * @param {TreeNode} root
 * @return {TreeNode}
 */
var invertTree = function(root) {
    if (root === null){
        return null;
    }
    if (hasLeftChild(root) && hasRightChild(root)){
        [root.right, root.left] = [invertTree(root.left),
          invertTree(root.right)];
    }
    else if (hasLeftChild(root)){
        root.right = invertTree(root.left);
        root.left = null;
    }
    else if (hasRightChild(root)){
        root.left = invertTree(root.right);
        root.right = null;
    }
    return root;

};

var hasLeftChild = function(root){
    return root.left && true;
};

var hasRightChild = function(root){
    return root.right && true;
};
