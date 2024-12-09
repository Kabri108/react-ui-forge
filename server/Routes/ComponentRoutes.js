import express from 'express'
const router = express.Router();
import Component from '../Modals/ComponentSchema.js'

// Get all components
router.get('/', async (req, res) => {
    const category=req.query.category;
    try {
        let components;
        if(category){
            components=await Component.find({category})
        }else{
            components=await Component.find()
        }  
        res.json(components);
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
});

// Add a new component
router.post('/', async (req, res) => {
    const { name, code,reactCode,category, description } = req.body;
    console.log("Received POST request:", req.body); // Debug log
    try {
        const newComponent = new Component({ name, code,reactCode,category, description });
        const savedComponent = await newComponent.save();
        res.status(201).json({ message: 'Component added successfully!', component: savedComponent });
    } catch (error) {
        console.error("Error saving component:", error.message); // More detailed logging
        res.status(400).json({ message: error.message });
    }
});

export default router;
