require('./lib/dbconnect.lib');
const UserModel = require('./models/user.model');

// insert 1
// UserModel.create({
//     email: 'admin02@gmail.com',
//     name: 'Admin 02'
// }).then(user=>console.log(user))
// .catch(err=>console.log(err.message))

// insert more
// UserModel.insertMany([
//     {
//         email: 'admin03@gmail.com',
//         name: 'Admin 03',
//         gender: 'male'
//     },
//     {
//         email: 'guest@gmail.com',
//         name: 'guest 02',
//         gender: 'female'
//     }
// ]).then(users=>console.log(users))
// .catch(err=>console.log(err.message))

// let _id = '5ce4067ae1417b2aa6c17111'
// UserModel.findOneAndUpdate(
//     { _id },
//     {
//         gender: 'female',
//         password: '333333'
//     },
//     { new: true }
// ).then(user=>{
//     if(!user){

//     }
// })
// .catch(err=>console.log({error: err.message}))

//delete
// DELETE FROM users
// WHERE email = 'guest@gmail.com' 
// UserModel.findOneAndDelete({ email: 'guest@gmail.com' })
// .then(result=>console.log(result))
// .catch(err=>console.log({error: err.message}))

// select
// SELECT * FROM users
// WHERE email = 'admin02@gmail.com'  //2
// OR email = 'admin03@gmail.com' // 3
// AND id = '5ce4067ae1417b2aa6c17118' // 3

// UserModel.find(
//     { 
//         $or: [
//            { email: 'admin02@gmail.com' },
//            { email: 'admin03@gmail.com' },
//            { _id: '5ce404b349003a2a18a8c2ea' }
//         ]
//     }
// )
// .then(users=>console.log(users))
// .catch(err=>console.log({error: err.message}))

// SELECT * FROM users
// WHERE email = 'admin02@gmail.com'  //2
// OR email = 'admin03@gmail.com' // 3
// AND id = '5ce4067ae1417b2aa6c17118' // 3
UserModel.find(
    { 
        $or: [
           { email: 'admin02@gmail.com' },
           { email: 'admin03@gmail.com' },
        ],
        $and: [
            { _id: '5ce4067ae1417b2aa6c17118' }
        ]
    }
)
.then(users=>console.log(users))
.catch(err=>console.log({error: err.message}))
