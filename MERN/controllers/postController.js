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
  } catch (error) {
    console.error("Error at Post Controller", error.message);
    res.status(400).send({
      success: false,
      msg: error.message,
    });
  }
};

const getpost = async (req, res) => {
  try {
    const post = await postModel.find({});
    res.status(200).send({
      success: true,
      msg: "Get Data",
      data: post,
    });
  } catch (error) {
    console.error("Error at get Post Controller", error.message);
    res.status(400).send({
      success: false,
      msg: error.message,
    });
  }
};

export default { createpost, getpost };
