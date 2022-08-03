const { Thoughts } = require("../../models");

const getAllThoughts = async (req, res) => {
  try {
    const thought = await Thoughts.find({});

    return res.json({ data: thought });
  } catch (error) {
    console.log(`[Error]: Failed to get all thoughts | ${error.message}`);
  }
};

const getThoughtById = async (req, res) => {
  try {
    const { id } = req.params;

    const thought = await Thoughts.findById(id);

    if (!thought) {
      return res.status(404).json({ success: false });
    }

    return res.json({ data: thought });
  } catch (error) {
    console.log(`[Error]: Failed to get thought | ${error.message}`);
  }
};

const createNewThought = async (req, res) => {
  try {
    const { userName, thoughtText } = req.body;

    if (userName && thoughtText) {
      await Thoughts.create({ userName, thoughtText });
      return res.json({ success: true });
    } else {
      return res.status(400).json({
        success: false,
        error: `Please enter valid username and thought`,
      });
    }
  } catch (error) {
    console.log(`[ERROR]: Failed to create new thought | ${error.message}`);
    return res.status(500).json({ success: false, error: error.message });
  }
};

const updateThoughtById = async (req, res) => {
  try {
    const { id } = req.params;
    const { userName, thoughtText } = req.body;
    console.log(req.body);
    if (userName || thoughtText) {
      await Thoughts.findByIdAndUpdate(id, {
        userName,
        thoughtText,
      });
      return res.json({ success: true });
    } else res.status(500).json({ success: false });
  } catch (error) {
    console.log(`[ERROR]: Failed to update thought | ${error.message}`);
    return res.status(500).json({ success: false, error: error.message });
  }
};

const deleteThoughtById = async (req, res) => {
  try {
    const { id } = req.params;
    await Thoughts.findByIdAndDelete(id);
    return res.json({ success: true });
  } catch (error) {
    console.log(`[ERROR]: Failed to delete user | ${error.message}`);
    return res.status(500).json({ success: false, error: error.message });
  }
};

module.exports = {
  getAllThoughts,
  getThoughtById,
  createNewThought,
  updateThoughtById,
  deleteThoughtById,
};
