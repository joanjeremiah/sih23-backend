const express = require('express');
const PersonalityModel = require('../models/personality');

const router = express.Router();


    
router.get("/:personality",
(req, res) => {
    let {personality} = req.params;
    personality = personality.toUpperCase();
    PersonalityModel.findOne({Personality: personality}).then(data => {

        if (data) {

            // Shuffle the array
            const shuffledTasks = data.Task.sort(() => Math.random() - 0.5);

            // Get the first 5 elements (randomly selected)
            const randomTasks = shuffledTasks.slice(0, 5);

            res.status(200).json({
                message: "Tasks fetched successfully!",
                tasks: randomTasks
            });
        } else {
            res.status(404).json({ message: "Tasks not found!" });
        }
    })
        .catch(e => {
            console.log(e)
        });
});
  
    

module.exports = router