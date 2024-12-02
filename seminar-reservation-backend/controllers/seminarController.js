import Seminar from "../models/Seminar.js";

const getSeminars = async (req, res) => {
  try {
    const seminars = await Seminar.find();
    res.status(200).json(seminars);
  } catch (error) {
    res.status(500).json({ message: "Error fetching seminars", error });
  }
};

const createSeminar = async (req, res) => {
  try {
    const seminar = await Seminar.create(req.body);
    res.status(201).json({ message: "Seminar created successfully", seminar });
  } catch (error) {
    res.status(500).json({ message: "Error creating seminar", error });
  }
};

const updateSeminar = async (req, res) => {
  try {
    const updatedSeminar = await Seminar.findByIdAndUpdate(
      req.params.id,
      req.body,
      { new: true }
    );
    res.status(200).json({
      message: "Seminar updated successfully",
      seminar: updatedSeminar,
    });
  } catch (error) {
    res.status(500).json({ message: "Error updating seminar", error });
  }
};

const deleteSeminar = async (req, res) => {
  try {
    await Seminar.findByIdAndDelete(req.params.id);
    res.status(200).json({ message: "Seminar deleted successfully" });
  } catch (error) {
    res.status(500).json({ message: "Error deleting seminar", error });
  }
};

const getSeminarDetails = async (req, res) => {
  try {
    const seminar = await Seminar.findById(req.params.id);
    if (!seminar) return res.status(404).json({ message: "Seminar not found" });
    res.status(200).json(seminar);
  } catch (error) {
    res.status(500).json({
      message: "Error fetching seminar details",
      error: error.message,
    });
  }
};

export {
  getSeminars,
  createSeminar,
  updateSeminar,
  deleteSeminar,
  getSeminarDetails,
};
