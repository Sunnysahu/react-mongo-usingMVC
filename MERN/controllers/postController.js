import postModel from "../models/postModel.js";

const createpost = async (req, res, next) => {
  try {
    const post = new postModel({
      title: req.body.title,
      date: req.body.date,
      image: req.file.filename,
    });

    const postData = await post.save();

    res.status(200).send({
      success: true,
      msg: "Post Data",
      data: postData,
    });

    res.s;
  } catch (error) {
    console.error("Error at Post Controller", error.message);
    res.status(400).send({
      success: false,
      msg: error.message,
    });
  }
};

export default { createpost };
