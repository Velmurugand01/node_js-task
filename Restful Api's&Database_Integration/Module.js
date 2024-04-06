const schema = require('./Schema');

const PostData = async (req, res) => {
    try {
        const data = new schema({
            ...req.body
        });
        const Post = await data.save();
        res.json(Post);
        console.log(req.body);
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
};

const GetData = async (req, res) => {
    try {
        const Get = await schema.find({});
        res.json(Get);
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
};

const UbdateData = async (req, res) => {
    try {
        const Ubdate = await schema.findByIdAndUpdate(req.params.id, { $set: req.body }, { new: true });
        if (Ubdate) {
            res.json({ msg: "Update Successfully", data: Ubdate });
        } else {
            res.status(404).json("Cannot update");
        }
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
};

const DeleteData = async (req, res) => {
    try {
        const deleted = await schema.findByIdAndDelete(req.params.id);
        if (deleted) {
            res.json({ msg: "Deleted Successfully" });
        } else {
            res.status(404).json("Data not found");
        }
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
};

module.exports = { PostData, GetData, UbdateData, DeleteData };
