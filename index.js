function myName(name1, name2) {
   this.firstName = name1;
   this.lastName = name2;
}
const ke = new myName('rajkrishna', 'Debnath');

console.log(ke);