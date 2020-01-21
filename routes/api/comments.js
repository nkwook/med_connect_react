const express = require("express");
const router = express.Router();
const Report = require("../../models/Comment");

router.post("/upload", (req, res) => {
    console.log(7);
    // 일단 중복 검사는 이미지로 함

    // const imgPath=req.body.imageURL;
    console.log(12);
    // const newImage=new Image({
    //     data: fs.readFileSync(imagePath),
    //     contentType: 'image/png'
    // });

    // console.log(JSON.stringify(newImage));

    const newComment = new Comment({
        name: req.body.name,
        NOKid: req.body.NOKid,
        comment: req.body.comment
    })

    // newBook.image.data=fs.readFileSync(imgPath);
    // newBook.image.contentType='image/png';

    newComment.save()
        .then(comment => res.json(comment))
        .catch(err => console.log(err));

})


router.get("/:NOKid", (req, res) => {
    Comment.findOne({NOKid: req.params.NOKid}, function(err, docs){
        if(!err){
            res.json(docs);
        }else{
            throw err;
        }
    })
})
module.exports = router;