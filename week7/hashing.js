//Usually we'll store the passowrds in the database just like(if the password is lokesh123, the password you be seeing is lokesh123), this is security vulnarability, so before the storing the password into the db you have to hash it means it should be something wierd where you can't able to read it. So in brief you will enter your password then it will get hashed and then stored in the db.

//this approach has an distadvantage, that is if two users enter the same password the hashing key will be same, here comes the concept called salting. Salting means with addition to the password you will add a salt a random key then you will do hash, now you will store the final hashed key into the db along with the random generated key. Now even if the two users input the same passowrd the random generated key will be different so the resultant hashing will also be different.

//during the signin end point first it will bring the salt from the database and then it will merge it with the user entered password now it will generate the hash, and then it check this hash with the exisiting hash in the db.  


//npm install bcrypt

//There are other hashing algorithm as well line sha256or you own hashing algorithm