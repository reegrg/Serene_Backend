// // // const math=require('./math');



// // // let sum = math.sum(2, 4);
// // // console.log(sum);

// // // // let  subResult = math.sub(5, 2);
// // // // console.log(subResult);

// // // // let multiplyResult = math.multiply(4, 2);
// // // // console.log(multiplyResult);

// // // // const divideResult= math.divide(3, 2);
// // // // console.log(divideResult);

// // // // const fs=require('fs');
// // // // fs.readFile('node.txt', 'utf8', (err, data) => {
// // // //     if(err){
// // // //         console.error(err);
// // // //         return;
// // // //     }
// // // //     console.log(data);
// // // // })



// // // Write file
// // const fs=require('node:fs');
// // const content = 'Some content! I am currently working on my project';
// // fs.writeFile('text.txt', content, err => {
// //     if(err) {
// //         console.log(err);
// //     } else {
// //         console.log("file written sucessfully");
        
// //     }
// // })

// // // Renaming/Updating file name
// // const fs=require('fs');
// // fs.rename('text.txt', 'test.txt', (err) => {
// //   if (err) {
// //     console.error('Error renaming file:', err);
// //     return;
// //   }
// //   console.log('File renamed successfully.');
// // });

// // // Appending/Adding data to files
// // const fs=require('fs');
// // const additionalContent = "I am currently working on the MERN PROJECT.";
// // fs.appendFile('test.txt', additionalContent, 'utf8', (err) => {
// //   if (err) {
// //     console.error('Error appending data:', err);
// //     return;
// //   }
// //   console.log('Data appended to file.');
// // });


// // // Deleting files
// // const fs=require('fs');
// // fs.unlink('text.txt', (err) => {
// //   if (err) {
// //     console.error('Error deleting file:', err);
// //     return;
// //   }
// //   console.log('File deleted successfully.');
// // });

// // const http=require('http');
// // const server = http.createServer((req, res) => {
// //   res.writeHead(200, {'Content-Type': 'text/html'});
// //   res.write("Hello world!");
// //   res.end();
// // });

// // server.listen(3000, () => {
// //   console.log('Server is running');
// // })




// app.get('/', (req, res) => {
//     res.send('Good Morning!');
// });

// const users = [
//   {id: 1, name: "Reena"},
//   {id: 2, name: "Ruchi"},
//   {id: 3, name: "Prerana"},
// ]

// const student = {
//   'name': 'John Doe',
//   'age': 30,
//   'isStudent': false,
//   'hobbies': ["reading", 'swimming', 'coding'],
//   'address': {
//     'street': '123 Main St',
//     'city': 'Anytown',
//     'county': 'USA'
//   },
//   'favoriteNumbers': [7, 42, 88],
//   'status': null
// }

// app.get('/getUsers', (req, res) => {
//   res.json(users); //why json? this is lightweight
// })

// app.get('/getStudent', (req, res) => {
//   res.json(student);
// })

// app.get('/getStudent/:id', (req, res) => {
//   const id=parseInt(req.params.id);
//   const person = student.find(person=>person.id===id);
//   if(person){
//     res.json(person);
//   } else {
//     res.status(404).send('User not found');
//   }
// })

const express=require('express');
const connectDB = require("./src/config/db");
const app=express();
const port=5000; //process.env.port

const userProfileRoutes = require("./src/Routes/userProfileRoutes");
const userAddressRoutes = require("./src/Routes/userAddressRoutes");
const userReviewsRoutes = require('./src/Routes/userReviewsRoutes');
const authRoutes = require('./src/Routes/authRoutes');
const profileRoutes = require('./src/Routes/profileRoutes');
const productRoutes = require('./src/Routes/productRoutes');
const productCategoryRoutes = require('./src/Routes/categoryRoutes');
connectDB();
app.use(express.json()); //process the text to expresson json and viceversa

// //database connection
// const mongoose=require('mongoose');
// mongoose.connect('mongodb://127.0.0.1:27017/tixae')
//   .then(() => console.log('Connected!'));

app.use('/user', userProfileRoutes);
app.use('/user', userAddressRoutes);
app.use('/user', userReviewsRoutes);
app.use('/api/auth', authRoutes);
app.use('/api', productRoutes);
app.use('/api', productCategoryRoutes);


// Serve static files from the 'uploads' directory
app.use("/uploads", express.static(__dirname + "/uploads"));

app.use('/api/profile', profileRoutes);

app.listen(port, ()=> {
  console.log(`Server is running on port ${port}`);
})