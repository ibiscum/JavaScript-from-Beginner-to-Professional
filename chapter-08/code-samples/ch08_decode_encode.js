let uri = "https://www.example.com/submit?name=maaike van putten";
let encoded_uri = encodeURI(uri);
console.log("Encoded:", encoded_uri);
let decoded_uri = decodeURI(encoded_uri);
console.log("Decoded:", decoded_uri);

uri = "https://www.example.com/submit?name=maaike van putten";
encoded_uri = encodeURIComponent(uri);
console.log("Encoded:", encoded_uri);
decoded_uri = decodeURIComponent(encoded_uri);
console.log("Decoded:", decoded_uri);
