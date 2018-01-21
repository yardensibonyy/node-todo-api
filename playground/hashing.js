const {SHA256} = require('crypto-js');
const jwt = require('jsonwebtoken');

var data = {
    id: 10
};

//jwt.sign = takes the data, creates the hash and returns the token value
var token = jwt.sign(data, '123abc') 
console.log(token);

//jwt.verify = does the oposite. takes the token and makes sure the data was not manipulated
var tokenDecoded = jwt.verify(token, '123abc'); 
console.log('decoded', tokenDecoded)


// var message = 'Im using #3';
// var hash = SHA256(message).toString();

// console.log(`message: ${message}`);
// console.log(`hash: ${hash}`);

// var data = {
//     id: 5
// };

// var token = {
//     data, 
//     hash: SHA256(JSON.stringify(data) + 'somesecret').toString()
// };

// token.data.id = 4;
// token.hash = SHA256(JSON.stringify(token.data)).toString();

// var resultHash = SHA256(JSON.stringify(token.data) + 'somesecret').toString();
// if(resultHash === token.hash) {
//     console.log('Data was not changed');
// } else {
//     console.log('Data was changed. DO NOT TRUST!');
// }