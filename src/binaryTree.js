// 参考文档：https://segmentfault.com/a/1190000018467422
//https://juejin.cn/post/6844903834502823949#heading-16

/** 二叉树的存储： 
 * 链式存储（链表）；
 * 顺序存储（数组） 有些节点是空的，浪费存储空间。满2叉树时最合适
 * left = 2 * i;
 * right = 2 * i + 1;
 * i = left / 2;
 * i = right / 2;  // 这里是向下取整
 * 
 * 
 * 二叉树遍历：
 *  时间复杂度（n），也就是只有左子树或有字数。最快 log2n。满2叉树
 *  空间复杂度（n）
 */



/**
 * 平衡二叉树（红黑树）
 *
 * @class BinaryTreeNode
/**
 *
 *
 * @class BinaryTreeNode
 */
class BinaryTreeNode {
  constructor(val) {
    this.node = val;
    this.left = null;
    this.right = null;
  }
}

// tree in order
class BinarySearchTree {
  constructor() {
    this.root = null;
  }
  insert(val) {
    const node = new BinaryTreeNode(val);
    if (this.root) {
      this._inserNode(this.root, node)
    } else {
      this.root = node;
    }
  }
  //recursion traverse
  _insertNode(node, newNode) {
    if (node.val < newNode.val) {
      if (node.left === null) {
        node.left = newNode;
      } else {
        this._inserNode(node.right, newNode)
      }

    } else {
      if (node.right === null) {
        node.right = newNode;
      } else {
        this._inserNode(node.left, newNode)
      }

    }
  }
  // 先序：根左右； 中序： 左根右； 后序：左右根
  preOrderTraverse() {
    let result = [];
    if (!this.root) return []
    this._preOrderTraverseNode(this.root);

  }
  _preOrderTraverseNode(node, result) {
    if (node != null) {
      if (node.val) result.push(val);
      if (node.left) this._preOrderTraverseNode(node.left);
      if (node.right) this._preOrderTraverseNode(node.right);
    }

  }
  inOrderTraverse() {

  }
  postOrderTraverse() {

  }
  levelOrderTraverse() {
    if (this.root == null) return '';
    let a = [],
      left, right;
    a.push(this.root);

    // 节点入队，指针指向头部元素，如果它有left/right，入队。
    // 指针后移，继续同样步骤。。。直至指针跑到队列尾部后面去。。。
    for (let i = 0; i < a.length; i++) {     // 需要注意的是，数组 a 的长度是动态变化的（不停变长）
      left = a[i].left;
      if (left) a.push(left);

      right = a[i].right;
      if (right) a.push(right);
    }
    return a.map(item => item.val).join(',');
  }

  search() {

  }
  //找最左边的节点
  getMin() {
    const ret = this.getMinNode();
    return ret && ret.key;
  }

  _getMinNode(node = this.root) {
    if (node) {
      while (node && node.left !== null) {
        node = node.left;
      }
    }
    return node;
  }
  //找最右边的节点
  getMax() {
    const ret = this.getMaxNode();
    return ret && ret.key;
  }

  _getMaxNode(node = this.root) {
    if (node) {
      while (node && node.right !== null) {
        node = node.right;
      }
    }
    return node;
  }
  //类似于insert方法
  find(key) {
    // 假设二叉树没有重复数据
    let p = this.root;
    while (p != null) {
      if (val == p.val) return p;
      else if (val < p.val) p = p.left;
      else p = p.right;
    }
    return null; // 没找到
  }
  remove(key) {
    return this.removeNode(this.root, key);
  }

  _removeNode(node, key) {
    if (node === null) {
      return null;
    }
    if (key < node.key) { // 目标key小于当前节点key，继续向左找
      node.left = this.removeNode(node.left, key);
      return node;
    }
    if (key > node.key) { // 目标key小于当前节点key，继续向右找
      node.right = this.removeNode(node.right, key);
      return node;
    }

    // 找到目标位置
    if (node.left === null && node.right === null) { // 目标节点为叶节点
      node = null;
      return node;
    }
    if (node.right === null) { // 目标节点仅有左侧节点,node节点变成左节点
      node = node.left;
      return node;
    }
    if (node.left === null) { // 目标节点仅有右侧节点，node节点变成右结点
      node = node.right;
      return node;
    }

    // 目标节点有两个子节点，把子树构建为 左/右子树，此处把最小值换成节点。
    const tempNode = this.getMinNode(node.right); // 右侧最小值
    node.key = tempNode.key;
    node.right = this.removeNode(node.right, node.key);
    return node;
  }
}
