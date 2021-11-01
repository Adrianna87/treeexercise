/** TreeNode: node for a general tree. */

class TreeNode {
  constructor(val, children = []) {
    this.val = val;
    this.children = children;
  }
}

class Tree {
  constructor(root = null) {
    this.root = root;
  }

  /** sumValues(): add up all of the values in the tree. */

  sumValues(val) {
    let toVisitStack = [this];
    let val = 0;

    while (toVisitStack.length) {
      let current = toVisitStack.pop();

      for (let child of current.children)
        toVisitStack.push(child)
      val += current
    }
    return val
  }

  /** countEvens(): count all of the nodes in the tree with even values. */

  countEvens() {
    let toVisitStack = [this];
    let count = 0
    while (toVisitStack.length) {
      let current = toVisitStack.pop();

      for (let child of current.children)
        toVisitStack.push(child)
      if (child.val % 2 === 0) count++;

      return count
    }
  }

  /** numGreater(lowerBound): return a count of the number of nodes
   * whose value is greater than lowerBound. */
  //had trouble with this one. copy pasta.
  numGreater(lowerBound) {
    if (!this.root) return 0;

    let count = this.root.val > lowerBound ? 1 : 0;

    function countEvensHelper(node) {
      // go through all the children for a Node
      for (let child of node.children) {
        // count the child if the value is greater than lowerBound
        if (child.val > lowerBound) count++;
        // if it has any children
        if (child.children.length > 0) {
          // recurse with the child as the root
          countEvensHelper(child);
        }
      }
    }

    countEvensHelper(this.root);
    return count;
  }
}

module.exports = { Tree, TreeNode };
