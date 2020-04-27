//node
class _Node {
    //constructor with value and next
    constructor(value, next) {
        this.value = value;
        this.next = next;
    }
}

//linked list
class LinkedList {
    //constructor with head
    constructor() {
        this.head = null;
    }

    //retrieval
    find(item) {
        //Go through list comparing value in each node to the item when found, return the node
        //Start at head with a variable
        let currNode = this.head;
        //If list is empty, return null
        if (!this.head) {
            return null;
        }
        //While currNode.value doesn't equal item...
        while (currNode.value !== item) {
            //return null if item is never found
            if (currNode.next === null) {
                return null;
            } else {
                //else, keep looking 
                currNode = currNode.next;
            }
        }
        //Found it
        return currNode;
    }
    
    //insertion insertFirst()
    insertFirst(item) {
        //update head to the new Node
        this.head = new _Node(item, this.head);
    }

    //insertion before a given node containing a key
    insertBefore(item, node) {
        //find the node parameter provided in the list
        let beforeNode = this.find(node);
        if (!beforeNode) {
            return 'Node not found in array'
        } else {
            //once found, create the new node and set the prior node's next pointer to the new node
            //and set new node's next pointer to beforeNode
            let tempNode = this.head;
            while (tempNode.next.value !== node) {
                tempNode = tempNode.next;
            }
            tempNode.next = new _Node(item, beforeNode)
        }
    }

    //insertion after a given node containing a key
    insertAfter(item, node) {
        //find the node provided by parameter in the list
        let insertAfterNode = this.find(node)
        if (!insertAfterNode) {
            return 'Node provided does not exist'
        }
        //create the new node and change the parameter-provided node's next pointer to the new node
        //and set the new node's next pointer to the node that comes next
        let tempNode = this.head;
        while (tempNode.value !== node) {
            tempNode = tempNode.next
        }
        tempNode.next = new _Node(item, insertAfterNode.next)
    }

    //insertion at a specific position in the linked list
    insertAt(item, position) {
        //find position, starting at 0
        let place = this.head;
        //move through list until the node of the position needed
        for (let i = 1; i < (position-1); i++) {
            place = place.next;
        }
        //change next pointer of the node before to the new node
        //set the next pointer of the new node to the one that comes after
        place.next = new _Node(item, place.next)
    }
    
    //insertion insertLast()
    insertLast(item) {
        //if there isn't anything in this.head, do this.firstInsert(item)
        if (this.head === null) {
            this.insertFirst(item);
        //else check the next value of this.head, if it's not null, set this.head = this.head next
        } else {
            let tempNode = this.head;
            while (tempNode.next !== null) {
                tempNode = tempNode.next;
            }
        //set this.head next equal to the new node
            tempNode.next = new _Node(item, null);
        }
    }
    
    //removal
    remove(item) {
        //If list is empty, return null
        if (!this.head) {
            return null;
        }
        //if the node to be removed is head, make next node head
        if (this.head.value === item) {
            this.head = this.head.next;
            return;
        }
        //Start at the head
        let currNode = this.head;
        //Keep track of previous
        let prevNode = this.head;

        //loop while currNode is not equal to null and currNode.value is not equal to item
        while ((currNode !== null) && (currNode.value !== item)) {
            //Save previous node
            prevNode = currNode;
            currNode = currNode.next;
        }
        //if currnode equals null, return item not found
        if (currNode === null) {
            console.log('item not found')
            return;
        }
        prevNode.next = currNode.next;
    }
}

function displayList(list) {
    return list;
}

function findListSize(list) {
    //run through list until next poiner is null, counting each node, return count number
    let position = list.head;
    let counter = 1;
    while (position.next !== null) {
        position = position.next;
        counter++;
    }
    return counter;
}

function isListEmpty(list) {
    if (list.head == null) {
        return true;
    } else {
        return false;
    }
}

function findPrevious(list, item) {
    //find item in the list where item provided in parameter is next
    let position = list.head
    //console.log(`position: ${position.next.value}`)
    //console.log(`item: ${item}`)
    while (position.next !== item) {
        position = position.next
        console.log(position)
    }
}

function reverseList(list) {
    let current = list.head;
    while (current !== null) {
        list.insertLast(current.value);
        list.head = current;
        current = current.next;
    } 
    return list;
}

function thirdFromTheEnd(list) {
    //run through list until the last node
    //each time it goes through a node, have a counter increase by one
    let listProvided = list.head;
    let counter = 1;
    while (listProvided.next !== null) {
        listProvided = listProvided.next
        counter++;
    }
    //At then end, loop through the array using counter - 3 to stop at 3rd from the end
    const numberOfLoops = counter - 3;
    let thirdItem = list.head;
    for (let i = 1; i <= numberOfLoops; i++) {
        thirdItem = thirdItem.next
    }
    //return node
    return thirdItem;
}

function middleOfList(list) {
    //run through list until the end to count how many items there are
    let listProvided = list.head;
    let counter = 1;
    while (listProvided.next !== null) {
        listProvided = listProvided.next
        counter++;
    }
    //divide by 2
    const middle = Math.floor(counter / 2)
    //run through list until the middle
    let listMiddle = list.head
    for (let i = 1; i <= middle; i++) {
        listMiddle = listMiddle.next
    }
    //return the two items where it's the middle or the middle item
    return listMiddle;
}

function cycleList(list) {
    //run through list items, if any next pointers are [Circular], return true
    let listProvided = list.head
    while (listProvided.next !== null) {
        console.log(listProvided.value)
        listProvided = listProvided.next
    }
}

function sortNumberedList(list) {
    //
}

function main() {
    //instance of Linkedlist
    let SSL = new LinkedList();

    //insert items into new list
    SSL.insertFirst('Apollo');
    SSL.insertLast('Boomer');
    SSL.insertLast('Helo');
    SSL.insertLast(SSL.head.next.next);
    SSL.insertLast('Husker');
    SSL.insertLast('Starbuck');
    SSL.insertLast('Tauhida');
    SSL.remove('Husker');
    SSL.insertBefore('Athena', 'Boomer')
    SSL.insertAfter('Hotdog', 'Helo')
    SSL.insertAt('Kat', 3)
    SSL.remove('Tauhida')
    /*console.log(SSL)
    console.log(SSL.head.next)
    console.log(SSL.head.next.next)
    console.log(SSL.head.next.next.next)
    console.log(SSL.head.next.next.next.next)
    console.log(SSL.head.next.next.next.next.next)
    console.log(SSL.head.next.next.next.next.next.next)
    console.log(SSL.head.next.next.next.next.next.next.next)*/

    //console.log(displayList(SSL));
    //console.log(findListSize(SSL));
    //console.log(isListEmpty(SSL));
    //console.log(findPrevious(SSL, 'Athena'));
    console.log(reverseList(SSL));
    //console.log(thirdFromTheEnd(SSL));
    //console.log(middleOfList(SSL));
    //console.log(cycleList(SSL));

    //Apollo
    //Athena
    //Kat
    //Boomer
    //Helo
    //Hotdog
    //Starbuck
}

main()