/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} l1
 * @param {ListNode} l2
 * @return {ListNode}
 */
var addTwoNumbers = function(l1, l2) {
    let d=new ListNode();
        let t=d;
        let c=0;
        while(l1!=null||l2!=null||c!=0){
            let s1=0;
            let s2=0;
            if(l1!=null){
                s1=l1.val;
                l1=l1.next;
            }
             if(l2!=null){
                s2=l2.val;
                l2=l2.next;
            }
            let s=s1+s2+c;
            c = (s> 9) ? 1 : 0 ;
            const n=new ListNode(s%10);
            t.next=n;
            t=t.next;
        }
        return d.next; 
};