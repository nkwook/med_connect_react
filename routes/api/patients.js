const express = require("express");
const router = express.Router();
var fs = require('fs');
const Patient=require("../../models/Patient");

//환자등록
router.post("/upload", (req, res)=>{
    console.log(7);
    // 일단 중복 검사는 이미지로 함
    Patient.findOne({ phonenum: req.body.phonenum }).then(patient=>{
        if(patient){
            return res.status(400).json({phonenum: "Duplicate"});
        }else{
            // const imgPath=req.body.imageURL;
            console.log(12);
            const imagePath="client/public/patient.png"
            // const newImage=new Image({
            //     data: fs.readFileSync(imagePath),
            //     contentType: 'image/png'
            // });

            // console.log(JSON.stringify(newImage));

            const newPatient= new Patient({
                name: req.body.name,
                image: {data: fs.readFileSync(imagePath),
                        contentType: 'image/png'
                    },
                NOKid: req.body.NOKid,
                relationship: req.body.relationship,
                phonenum: req.body.phonenum,
                age: req.body.age,
                sex: req.body.sex,
                onQueue: req.body.onQueue,
                onTreat: req.body.onTreat,
    
            })

            // newBook.image.data=fs.readFileSync(imgPath);
            // newBook.image.contentType='image/png';

            newPatient.save()
                    .then(patient=>res.json(patient))
                    .catch(err=>console.log(err));

            console.log(111);
        }
    })
});

router.get("/", (req, res) => {
    Patient.find({}, function(err, docs) {
    if (!err){
        // var myPosts = JSON.parse(JSON.stringify(docs));
        // res.send(myPosts);
        res.json(docs);
    } else {
        throw err;
        res.send(err);
    }
});
})

router.get("/image", (req,res) =>{
    // console.log(res);
    // var chunks=[];
    // res.write=function(chunk){
    //     chunks.push(chunk);
    // }

    // console.log(res.body);
    Patient.find({}, function(err, docs){

        jsonString=JSON.stringify(docs);
        json=JSON.parse(jsonString);
        console.log(json[0]);
        if(!err){
            res.contentType(json[0].image.contentType);
            res.send(json[0].image.data);
        }else{
            throw err;
        }
    });
});

router.get("/nok/:NOKid", (req, res) => {
    Patient.findOne({NOKid: req.params.NOKid}, function(err, docs){
        if(!err){
            res.json(docs);
        }else{
            throw err;
        }
    })
})

router.get("/onQueueName/:name", (req, res) => {
    Patient.find({name: req.params.name}, function(err, docs){
        if(!err){
            res.json(docs);
        }else{
            throw err;
        }
    })
})

router.get("/onTreat", (req, res) => {
    Patient.find({}, function(err, docs) {
        if (!err){
            // var myPosts = JSON.parse(JSON.stringify(docs));
            // res.send(myPosts);
            docs.forEach((entry)=>{
                if(entry.onTreat){
                    res.json(entry.NOKid);
                }
            })
        }
         else {
            throw err;
            res.send(err);
        }
    });
})



//알림을 주기위해 상태변화시 db 수정
router.put("/putQueue/:patient_id", (req, res)=>{
    Patient.findOneAndUpdate({_id: req.params.patient_id}, {onQueue: true})
    .then(patient => res.send(patient))
    .catch(err =>res.status(500).send(err));
})

router.put("/putTreat/:patient_id", (req, res)=>{
    Patient.findOneAndUpdate({_id: req.params.patient_id}, {onTreat: true, onQueue:false})
    .then(patient => res.send(patient))
    .catch(err =>res.status(500).send(err));
})



module.exports = router;