 import User from "./../models/User.js"

const postSignup = async (req, res) => {

    const { name,
        age,
        mobile,
        email,
        address,
        gender,
        password } = req.body


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
                password 
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


export { postSignup } 