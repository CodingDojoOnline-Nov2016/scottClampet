function BST() {
	this.root = null;
	this.add = function(data) {
		var n = new bstNode(data)
		if(!this.root) {
			this.root = n;
			var curr = this.root;
		} else {
			var curr = this.root
			while(curr) {
				if(n.data >= curr.data) {
					if(curr.right) {
						curr = curr.right;
					} else {
						curr.right = n;
						break;
					}
				} else if(n.data < curr.data) {
					if(curr.left) {
						curr = curr.left;
					} else {
						curr.left = n;
						break
					}
				}
			}
		}
		console.log(curr)
		return this;
	}
}

function bstNode(arg) {
	this.data = arg;
	this.right = null;
	this.left = null;
}

var x = new BST()
x.add(6).add(3).add(8).add(7)
// console.log(node1) 