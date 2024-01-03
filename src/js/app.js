import phoneFormatter from "./PhoneFormatter";

console.log("Before: 8 (927) 000-00-00");
console.log("After: " + phoneFormatter("8 (927) 000-00-00"));

console.log("Before: +7 960 000 00 00");
console.log("After: " + phoneFormatter("8 (927) 000-00-00"));

console.log("Before: +86 000 000 0000");
console.log(phoneFormatter("+86 000 000 0000"));
