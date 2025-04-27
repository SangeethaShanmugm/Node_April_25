var buffer1 = Buffer.from("123456789");
var buffer2 = Buffer.from("HELLO")


console.log(buffer1.toString());
console.log(buffer2.toString());

//copy content of buffer2 "HELLO" into buffer1 -> start copying from index 2 in buffer1 
// 0  1   2  3  4   5   6   7   8 => index 
// 1  2   3  4  5   6   7   8   9 => buffer1 
// H  E   L  L  O                 => buffer2 

var result = buffer2.copy(buffer1, 2) //12HELLO89  => 5
console.log(result)
// 0  1   2  3  4   5   6   7   8 => index
// 1  2   H  E   L  L   O   8   9

console.log("After copy")
console.log(buffer1.toString())//12HELLO89
console.log(buffer2.toString())//HELLO

console.log(Buffer.concat([buffer1, buffer2]).toString());//12HELLO89HELLO

console.log(buffer1.equals(buffer2))

console.log(Buffer.compare(buffer2, buffer1))

// 123 < 456 = smaller
// return 0 => both are same
// return -1 => if buffer1 > buffer2
// return 1 => if buffer1 < buffer2
//1st byte  => buffer2  => H (ASCII 72)
//1st byte  => buffer1 =>  1 (ASCII 49)
// 72 > 49 => "HELLO" > "12HELLO89" => return 1