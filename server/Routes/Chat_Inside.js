const { default: cluster } = require("cluster");
const express = require("express")
const _ = require("underscore")
const router = express.Router();
const fs = require('fs');

const data_path = "./Data/Chats.json";
const data = require("../Data/Chats.json");
const { filter } = require("underscore");

const getMsg = () =>{
    const jsonData = fs.readFileSync(data_path)
    return JSON.parse(jsonData) 
}

router.get('/', (req, res) => {
    console.log("aaaa")

   
    const msgs = getMsg();
    res.send(msgs);
})

router.get('/filtered_msgs', (req, res) => {
    let id = req.params.id_chat || req.query.id_chat; // So consegui receber via query
    
    var filtered = _.where(data, {id_chat: id});
    res.send(filtered[0].messages);
    console.log(filtered[0].messages, id)
    return filtered
   

})

module.exports = router