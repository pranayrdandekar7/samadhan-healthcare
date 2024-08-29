 import User from "./../models/User.js"
 import md5 from "md5";

const postSignup = async (req, res) => {

    const { name,
        age,
        mobile,
        email,
        address,
        gender,
        password
    } = req.body


        const isMobileValid = mobile.match(/^[6-9]\d{9}$/);  //regix

        if(!isMobileValid){
            return res.status(400).json({
                message:`mobile number is not valid `
            })
        }

        const isEmailValid = email.match(/^\S+@\S+\.\S+$/);
        if(!isEmailValid){
            return res.status(400).json({
                message:`email is not valid`
            })
        }

        const isPasswordValid = password.length >= 8;
        if(!isPasswordValid){
            return res.status(400).json({
                message:`password must be of 8 characters long` 
            })
        }

        if(!name || !age || !address || !gender){
            return res.status(400).json({
                message:`all field are mandatory`
            })
        }


        const user = new User({
             name,
                age,
                mobile,
                email,
                address,
                gender,
                password :md5(password)
        })
      try{
        const newUser = await user.save() ;
        return res.status(201).json({
            success:true,
            message:`User is created succesfully`,
            data:newUser
        })
    }

    catch(err){
        return res.status(400).json({
            success:false,
            message:err.message
        })
    }
}

const postLogin = async (req,res) => {

    const {mobile,password} =req.body
    
    const user = await User.findOne({
        mobile,
        password:md5(password)
    })

    if(!user){
        res.status(400).json({
            success:false,
            message:`Invalid Credientials`,
            data:null
        })
 }

 else{
    res.status(200).json({
        success:true,
        message:`Login Successful`,
        data:user
    })
 }

}
export { postSignup,postLogin } 