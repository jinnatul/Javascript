const fs = require("fs");

const buildTree = function (tree, item) {
  if (item) {
    // if item then have parent
    for (let i = 0; i < tree.length; i++) {
      // parses the entire tree in order to find the parent
      if (tree[i].id === item.parent) {
        // bingo!
        tree[i].childs.push(item); // add the child to his parent
        break;
      } else buildTree(tree[i].childs, item); // if item doesn't match but tree have childs then parses childs again to find item parent
    }
  } else {
    // if no item then is a root item, multiple root items are supported
    let idx = 0;
    while (idx < tree.length)
      if (tree[idx].parent)
        buildTree(
          tree,
          tree.splice(idx, 1)[0]
        ); // if have parent then remove it from the array to relocate it to the right place
      else idx++; // if doesn't have parent then is root and move it to the next object
  }
};

const data = [
  { id: 2, name: "Male", parent: null, products: [] },
  {
    id: 1,
    name: "Soap",
    parent: 1,
    products: [
      { id: 4, name: "Dove Soap", category: 1 },
      { id: 1, name: "lifeboy", category: 1 },
      { id: 1, name: "lifeboy", category: 1 },
      { id: 6, name: "lux soap", category: 1 },
      { id: 3, name: "surf execl", category: 1 },
    ],
  },
  {
    id: 0,
    name: "Beauty",
    parent: null,
    products: [],
  },
  { id: 3, name: "jeans", parent: 2, products: [] },
  { id: 6, name: "denim jeans", parent: 3, products: [] },
  { id: 7, name: "chino", parent: 3, products: [] },
  {
    id: 5,
    name: "Shampoo",
    parent: 0,
    products: [
      { id: 1, name: "lifeboy", category: 1 },
      { id: 6, name: "lux soap", category: 1 },
      { id: 3, name: "surf execl", category: 1 },
    ],
  },
  { id: 8, name: "Dove shampoo", parent: 5, products: [] },
  { id: 9, name: "Dove shampoo with conditioner", parent: 8, products: [] },
  { id: 4, name: "Female", parent: null, products: [] },
];

for (var i = 0; i < data.length; i++) {
  // add childs to every item
  data[i].childs = [];
}

buildTree(data);

fs.writeFile("output.json", JSON.stringify(data), function (err) {
  if (err) throw err;
  console.log("complete");
});
