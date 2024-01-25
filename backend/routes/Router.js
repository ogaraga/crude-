import express from 'express';
import User from '../model/Data.js';
export const router = express.Router();

router.get('/data', async (req, res)=>{
    res.setHeader('Access-Control-Allow-Credentials', true)
    res.setHeader('Access-Control-Allow-Origin', '*')
  
    const user = await User.find();
    if(user){
        try {
          res.status(200).json(user)  
        } catch (error) {
            res.status(500).json({message: error.message})
        }
    }else{
        res.status(404).json('User not found!')
    }
    
})
router.post('/data', async (req, res)=>{
    res.setHeader('Access-Control-Allow-Credentials', true)
    res.setHeader('Access-Control-Allow-Origin', '*')
  
        const {name}=req.body
        const exists = await User.findOne({name})
        if(exists){
            res.status(400).json({Data_already_exists: name})
        }else{
            try {
                const newUser = await User.create({
                    name: req.body.name,
                    sectors: req.body.sectors,
                    agreed: req.body.agree,
                });
                await newUser.save();
                res.status(201).json(newUser)
            } catch (error) {
                res.status(400).json({message: error.message})
            }
        }
    
   })
   router.put('/data/:_id', async (req, res)=>{

    res.setHeader('Access-Control-Allow-Credentials', true)
    res.setHeader('Access-Control-Allow-Origin', '*')
  
    try {
        const newUser = await User.findByIdAndUpdate(req.params._id,{$set: req.body}, {returnOriginal: false});
        if(newUser){
            
        res.status(200).json({Data_Updated: newUser})
        }
    } catch (error) {
        res.status(404).json({message: error.message})
    }
    
   })


  


