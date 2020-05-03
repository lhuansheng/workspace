/**
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 * 革命还未成功
 */
/**
 * @param {ListNode} l1
 * @param {ListNode} l2
 * @return {ListNode}
 */
function ListNode(val) {
         this.val = val;
         this.next = null;
     }
var mergeTwoLists = function(l1, l2) {
    if(l1 ==null) return l2
    if(l2 == null) return l1
    var l3 = new ListNode(-1)
    let head=l3;
    while(l1&&l2){
        if(l1.val>=l2.val){
            head.next=l2
            head = head.next
            l2 = l2.next
        }
        else if(l1.val<l2.val){
            head.next=l1
            head = head.next
            l1 = l1.next
        }
    }
    if(l1){
        head.next = l2
    }
    else{
        head.next = l1
    }
    
    return head.next
};
console.log(mergeTwoLists(1,2))