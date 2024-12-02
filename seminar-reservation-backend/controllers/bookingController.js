import Booking from "../models/Booking.js";
import Seminar from "../models/Seminar.js";

const createBooking = async (req, res) => {
  try {
    const { seminarId } = req.body;

    const seminar = await Seminar.findById(seminarId);
    if (!seminar) return res.status(404).json({ message: "Seminar not found" });
    if (seminar.slotsAvailable <= 0)
      return res.status(400).json({ message: "Seminar is full" });

    const booking = await Booking.create({
      user: req.user.id,
      seminar: seminarId,
    });
    seminar.slotsAvailable -= 1;
    await seminar.save();

    res.status(201).json({ message: "Booking created successfully", booking });
  } catch (error) {
    res.status(500).json({ message: "Error creating booking", error });
  }
};

const getUserBookings = async (req, res) => {
  try {
    const bookings = await Booking.find({ user: req.user.id }).populate(
      "seminar"
    );
    res.status(200).json(bookings);
  } catch (error) {
    res.status(500).json({ message: "Error fetching bookings", error });
  }
};

const updateBookingStatus = async (req, res) => {
  try {
    const { id } = req.params;
    const { paymentStatus } = req.body;

    // Validate paymentStatus
    if (!["pending", "confirmed", "rejected"].includes(paymentStatus)) {
      return res.status(400).json({ message: "Invalid payment status" });
    }

    // Find and update booking
    const updatedBooking = await Booking.findByIdAndUpdate(
      id,
      { paymentStatus },
      { new: true, runValidators: true }
    );

    if (!updatedBooking) {
      return res.status(404).json({ message: "Booking not found" });
    }

    res.status(200).json({
      message: "Booking status updated successfully",
      booking: updatedBooking,
    });
  } catch (error) {
    res.status(500).json({ message: "Error updating booking status", error });
  }
};

export { createBooking, getUserBookings, updateBookingStatus };
