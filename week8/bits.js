//npm install nodemon then go to the package.json in scripts add this line "dev": "nodemon index.js"
//then in terminal npm run dev. Nodemon is a cli that constantly watches the files if something is changed in the files while the code is running it will restart the database
//sample output
/*
    L@f:~/start3/week8$ npm run dev

    > week8@1.0.0 start
    > nodemon index.js

    [nodemon] 3.1.9
    [nodemon] to restart at any time, enter `rs`
    [nodemon] watching path(s): *.*
    [nodemon] watching extensions: js,mjs,cjs,json
    [nodemon] starting `node index.js`
    Port is in localhost 3000
    [nodemon] restarting due to changes...
    [nodemon] starting `node index.js`
    Port is in localhost 3000
    */
//first create a .gitignore file, then create a .env file. Now type .env inside the .gitignore file so that file will be ignored 
    //.env file means you can keep jwt keys or mongodb url it will be in the file but even if you push it in github it wont get pushed
    //in the place of mongodb connect paste this one, process.env.MONGO_URL
    //npm install dotenv
    //.env.example is for sample url or passwor