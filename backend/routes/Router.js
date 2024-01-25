import express from 'express';
import User from '../model/Data.js';
export const router = express.Router();

router.get('/data', async (req, res)=>{
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
       
    try {
        const newUser = await User.findByIdAndUpdate(req.params._id,{$set: req.body}, {returnOriginal: false});
        if(newUser){
            
        res.status(200).json({Data_Updated: newUser})
        }
    } catch (error) {
        res.status(404).json({message: error.message})
    }
    
   })


  export const allowCors = fn => async (req, res) => {
    res.setHeader('Access-Control-Allow-Credentials', true)
    res.setHeader('Access-Control-Allow-Origin', '*')
    // another common pattern
    // res.setHeader('Access-Control-Allow-Origin', req.headers.origin);
    res.setHeader('Access-Control-Allow-Methods', 'GET,OPTIONS,PATCH,DELETE,POST,PUT')
    res.setHeader(
      'Access-Control-Allow-Headers',
      'X-CSRF-Token, X-Requested-With, Accept, Accept-Version, Content-Length, Content-MD5, Content-Type, Date, X-Api-Version'
    )
    if (req.method === 'OPTIONS') {
      res.status(200).end()
      return
    }
    return await fn(req, res)
  }
  


