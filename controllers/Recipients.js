const asyncHandler = require('express-async-handler')


const Recipients = require('../models/Recipients')


// @desc Set recipient
// @route POST /api/recipient
// @access Private
exports.RegisterRecipient = async (req, res, next)=>{
    try{
        const {fullname, city, phonenumber, email, IDnumber} = req.body

        const recipient = await Recipients.create(req.body);

        return res.status(201).json({
            success: true,
            message: 'Reciever has been successfully registered in the system',
            data: recipient
        })
    }catch (err){
        if(err.name === 'ValidationError'){
            const messages = Object.values(err.errors).map(val => val.message);

            return res.status(400).json({
                success: false,
                error: messages,
            })
        }else{
            console.log(err);
            return res.status(500).json({
                success: false,
                error: 'server error'
            }) 
        }
    }

}

// @desc Get recipient
// @route GET /api/recipient
// @access Private
exports.FindRecipient = async (req, res, next)=>{
    try{
        const {phonenumber} = req.body

        Recipients.find({phonenumber:phonenumber}, (err,  recipient)=>{
            if (!patient){
                return res.status(500).json({
                    success: false,
                    error: 'This reciever could not be found inside the database.'
                }) 
            }else{
                return res.status(200).json({ 
                    success: true,
                    message: 'reciever found in sytsem',
                    count: recipient.length,
                    data: recipient
                })
            }
        })

    }catch(err){
        console.log(err);
        return res.status(500).json({
            success: false,
            error: 'Server Error '
        })
    }
}





// @desc Update recipient
// @route PUT /api/recipient/:id
// @access Private
exports.UpdateRecipient = async (req, res, next)=>{

    try{
        
        const {fullname, email, phonenumber, city, IDnumber} = req.body

      const recipient = await Recipients.find({phonenumber: phonenumber});

      if (!recipient){//check if the reciever we want to update is there in the system
        return res.status(404).json({
            success: false,
            error: 'The record you want to update does not exist in the system'
        })
      }
      await recipient.updateOne(req.body);
        return res.status(200).json({
            message: "Operation completed successfuly",
            success: true,
            data: recipient
        });
    }catch (err){
        return res.status(500).json({
            success: false,
            error: 'Server Error contact admin'
        })
    }
}
// @desc Delete recipient
// @route DELETE /api/recipient/:id
// @access Private
exports.DeleteRecipient = async (req, res, next)=>{
    try {

        const {email} = req.body
        const recipient = await Recipients.find({email: email});

        if (!recipient){
            return res.status(404).json({
                success: false,
                error: 'No user found under those details'
            })
        }

        await task.remove();
        return res.status(200).json({
            message:"operation completed user deleted",
            success: true,
            data: {}
        });
    }catch (err){
        return res.status(500).json({
            success: false,
            error: 'Server Error'
        })
    }
}

