import LinkedList from "./classLinkedList.js";

let listOne = new LinkedList();

listOne.prepend("Three");
listOne.prepend("Two");
listOne.append("Four");
listOne.prepend("One");

console.log("head is: " + listOne.head.data);
console.log("size is: " + listOne.size());
console.log("tail is: " + listOne.tail().data);
console.log("at index 1 is: " + listOne.at(1).data);
console.log("toString: " + listOne.toString());
console.log("popping...");
listOne.pop();
console.log("toString: " + listOne.toString());
console.log("at index 1 is: " + listOne.at(1).data);
console.log("contains Three: " + listOne.contains("Three"));
console.log("contains Eight: " + listOne.contains("Eight"));
console.log("find Three at index: " + listOne.find("Three"));
console.log("find Eight at index: " + listOne.find("Eight"));
console.log("inserting One and a half at index 1");
listOne.insertAt("One and a half", 1);
console.log("toString: " + listOne.toString());
console.log("removing at index 1");
listOne.removeAt(1);
console.log("toString: " + listOne.toString());
