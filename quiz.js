const bcrypt = require('bcrypt')
const saltRounds = 10;
const myPlaintextPassword = 'mary';
const someOtherPliantextPassword = 'not_bacon';

const salt = bcrypt.genSaltSync(saltRounds);
const hash = bcrypt.hashSync(myPlaintextPassword, salt);
//console.log(hash)

bcrypt.compare(someOtherPliantextPassword,hash,function(err,result){
    if (result === false) {
      console.log(result)
    }else{
        console.log('holla')
    }      
})
