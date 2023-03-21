const asyncHandler = require("express-async-handler");
const User = require("../models/userModel");

const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");

//@desc Register a User
//@route POST    /api/users/register
//@access public
const registerUser = asyncHandler(async  (req,res) => {
    const {username, email, password, address, phone} = req.body;
    if(!username || !email || !password || !address || !phone) {
        res.status(400);
        throw new Error("All fields are mandatory!");
    }
    const existingUser = await User.findOne({email});
    if(existingUser) {
        res.status(400);
        throw new Error("You are already registered!");
    }
    // Hash Password
    const hashedPassword = await bcrypt.hash(password, 10);
    console.log("Hashed Password: ", hashedPassword);
    const user = await User.create({
        username,
        email,
        password: hashedPassword,
        address,
        phone,
    });
    if(user) {
        res.status(200).json({_id: user.id, email: user.email})
    } else {
        res.status(400);
        throw new Error("User is not stored!");
    }
   
});

//@desc Login User
//@route POST    /api/users/login
//@access public
const loginUser = asyncHandler(async  (req,res) => {
    const {email, password} = req.body;
    if(!email || !password){
        res.status(400);
        throw new Error("All fields are mandatory!");
    }
    const user = await User.findOne({email});
    if(user && (await bcrypt.compare(password, user.password))) {
        const accessToken = jwt.sign({
            user: {    // payload
                username: user.username,
                email: user.email,
                id: user._id,
               }, 
          }, process.env.ACCESS_TOKEN_SECRET,
             {expiresIn: "15m"}   
         );
        res.status(200).json({accessToken});
    } else {
        res.status(401);
        throw new Error("Email / Password is not valid");
    }
})


//@desc Get User
//@route GET /api/users/
//@access private
const getUser = asyncHandler(async (req, res) => {
    const user = await User.findById(req.user.id);
    if(!user){
      res.status(404);
      throw new Error("User Not Found!");
    }
      res.status(200).json(user);
      });

module.exports = {registerUser, loginUser, getUser};