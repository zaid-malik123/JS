import mongoose from 'mongoose';


await mongoose.connect("mongodb://127.0.0.1:27017/practice-db")

const userSchema = new mongoose.Schema({

    name: String,
    email: String,
    role: String,
    age: Number,
    skills: [
        {
            type: String,
        }
    ]


}, { timestamps: true })

const User = await mongoose.model("User",  userSchema)



// const users = await User.findOne({
//     email: "zaid@gmail.com"
// })

// const users = await User.countDocuments()

// const users = await User.findByIdAndUpdate(
//     "6a20376f78437a260e17868d", {
//         $set: {
//             role: "hagimaru",
//             name: "hagimaru don"
//         }
//     }, 
//     {
//         new: true
//     }
// )

// const users = await User.find({
//     role: "developer", 
//     age: {
//         $gt: 25
//     }
// })

// const users = await User.find({
//     role: {
//         $in: ["manager", "admin"]
//     }
// })

// const users = await User.find({
//     age: {
//         $in: [22, 24, 30]
//     }
// })

// const users = await User.find({
//     $or: [
//         {role: "manager"},
//         {age: 24}
//     ]
// })

// const users = await User.find({
//     age: {
//         $gt: 25

//     },

//     role: {
//         $in: ["developer", "tester"]
//     }

// })

// const users = await User.find({
//     skills: {
//         $ne: ["node.js", "mongodb"]
//     }
// })

// const users = await User.find({
//     skills: {
//         $all: ["node.js", "mongodb"]
//     }
// })

// const users = await User.find({
//     $and: [
//         {
//             roles: {
//                 $ne: ["developer", "manager"]
//             }
//         },
//         {
//             age: {
//                 $lte: 25
//             }
//         },
//         {
//             skills: "mongodb"
//         }
//     ]
// })

// aggregation pipeline;

// match :- ye find jaise kam karta hai bilkul same 
// project :- ye field add, rename, karta hai aur select ke tarah bhi kam karta hai
// $group :- documents ko kisi field ke basis par group karta hai aur har group par aggregate operations ($sum, $avg, $min, $max, $push) perform karne deta hai;
// $lookup :- do collections ko jodne ka kam karta hai;
// $unwind :- array ko tod ka document bna deta hai;
// $addField :- field add karne ke liye existing document me;

// const users = await User.aggregate([
//     {
//         $match: {
//             role: "developer",
//             age: {
//                 $gt: 25
//             }
//         }
//     },
//     {
//         $project: {
//             _id: 0,
//             name: 1,
//             role: 1,
//             age: 1
//         }
//     },
//     {
//         $project: {
//             username: "$name",
//             userRole: "$role"
//         }
//     },
//     {
//         $sort: {
//             age: -1
//         }
//     }
// ])


// const users = await User.aggregate([
//     {
//         $match: {
//             age: {
//                 $gt: 20
//             }
//         }
//     },
//     {
//         $group: {
//             _id: {
//                 role: "$role",
//                 skills: "$skills"
//             }
            
//         }
//     }
// ])

// const users = await User.aggregate([
//     {
//         $match: {
//             name: "Zaid"
//         }
//     },
//     {
//         $unwind: "$skills"
//     }
// ])

// const users = await User.aggregate([
//     {
//         $addFields: {
//             isActive: true
//         }
//     }
// ])


// console.log(users)


