const express = require("express");
const router = express.Router();
var fs = require('fs');
const Report = require("../../models/Report");

router.post("/upload", (req, res) => {
    console.log(7);
    // 일단 중복 검사는 이미지로 함

    // const imgPath=req.body.imageURL;
    console.log(12);
    const imagePath = "client/public/patient.png"
    // const newImage=new Image({
    //     data: fs.readFileSync(imagePath),
    //     contentType: 'image/png'
    // });

    // console.log(JSON.stringify(newImage));

    const newReport = new Report({
        name: req.body.name,
        NOKid: req.body.NOKid,
        height: req.body.height,
        weight: req.body.weight,
        past: req.body.past,
        social: req.body.social,
        family: req.body.family,
        NOKcomment: req.body.NOKcomment

    })

    // newBook.image.data=fs.readFileSync(imgPath);
    // newBook.image.contentType='image/png';

    newReport.save()
        .then(report => res.json(report))
        .catch(err => console.log(err));

})


router.get("/:NOKid", (req, res) => {
    Report.findOne({NOKid: req.params.NOKid}, function(err, docs){
        if(!err){
            res.json(docs);
        }else{
            throw err;
        }
    })
})

router.put("/reserve/:NOKid", (req, res) => {
    Report.find({NOKid: req.params.NOKid})
    .findOneAndUpdate({NOKcomment: req.body.NOKcomment})
    .then(report => res.send(report))
    .catch(err =>res.status(500).send(err));
    })




module.exports = router;