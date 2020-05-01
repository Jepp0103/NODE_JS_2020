const router = require ('express').Router();

//endpoint HTTP method

//login POST

//signup POST

//logout GET

router.get('/logout', (req, res) => {
    return res.status(501).send({response: "Not impemented yet" });
});

router.post('/login', (req, res) => {
    return res.status(501).send({response: "Not impemented yet" });
});

router.post('/signup', (req, res) => {
    return res.status(501).send({response: "Not impemented yet" });
});


module.exports = router;


/*router.get("/videos", (req, res) => {
    const page = Number(req.query.page) ? Number(req.query.page) : 1;
    const start = (page - 1) * videosPerPage;
    const end = start + videosPerPage;

    return res.send({ response: videos.slice(start, end) });
});

router.get("/videos/:videoId", (req, res) => {
    return res.send({ response: videos.find(video => video.fileName === req.params.videoId) });
});

router.post("/videos", upload.single("uploadedVideo"), (req, res) => {
    const video = {
        title: req.body.title.trim(),
        description: req.body.description,
        thumbnail: "",
        fileName: req.file.filename,
        uploadDate: new Date(),
        category: req.body.category,
        tags: req.body.tags.split(/\s*[,\s]\s*//*),
    };




    /* Validation */
    /*const titleMaxLength = 128; 

    if (video.title.length === 0 || video.title.length > titleMaxLength) {
        return res.status(400).send({ response: `Title cannot be empty or above ${titleMaxLength} chars.`});
    }
    
    const descriptionMaxLength = 2048;

    if (video.description.length > descriptionMaxLength) {
        return res.status(400).send({ response: `Description cannot be above ${titleMaxLength} chars.`});
    }

    const fileSizeLimit = 262144000;

    if (req.file.size > fileSizeLimit) {
        return res.status(400).send({ response: `The video is bigger than ${fileSizeLimit} bytes.`});
    }

    /* Add video */
    /*videos.push(video);

    return res.redirect("/");
});*/