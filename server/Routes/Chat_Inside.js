const { default: cluster } = require("cluster");
const express = require("express")
const _ = require("underscore")
const router = express.Router();
const fs = require('fs');

const data_path = "./Data/Chats.json";
const data = require("../Data/Chats.json");
const { filter } = require("underscore");
const { stringify } = require("querystring");

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
    return filtered
   

})

router.post('/add_msg', (req, res) => {
    let id = req.body.id_chat;
    let msg = req.body.msg;
    let date = new Date()
    console.log(id, msg)
     var newData = {
        "id": "m3",
        "content": msg,
        "createdAt": {date},
        "user": {
            "id": "me",
            "name": "Pedro"
        }
    }
    
    var addMsg = function(target, new_msg){
        data.forEach(function(child){
            if (child.id_chat == target){
                child.messages.unshift(new_msg)
            }
        })
        
        console.log(JSON.stringify(data))
        fs.writeFileSync(data_path, JSON.stringify(data), 'utf-8')
    }
    addMsg(id, newData)
})

module.exports = router