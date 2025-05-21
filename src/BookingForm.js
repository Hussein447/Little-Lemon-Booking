import React, { useState } from 'react';

function BookingForm() {
  const [formData, setFormData] = useState({
    name: '',
    date: '',
    time: '',
    guests: 1,
  });

  const [submitted, setSubmitted] = useState(false);

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Basic validation
    if (formData.name && formData.date && formData.time && formData.guests > 0) {
      setSubmitted(true);
    } else {
      alert('Please fill all fields correctly.');
    }
  };

  return (
    <div>
      <h2>Book a Table</h2>
      {submitted ? (
        <p>Thank you {formData.name}, your table is booked!</p>
      ) : (
        <form onSubmit={handleSubmit} aria-label="Booking Form">
          <label htmlFor="name">Name:</label>
          <input
            id="name"
            name="name"
            type="text"
            value={formData.name}
            onChange={handleChange}
            required
          />

          <label htmlFor="date">Date:</label>
          <input
            id="date"
            name="date"
            type="date"
            value={formData.date}
            onChange={handleChange}
            required
          />

          <label htmlFor="time">Time:</label>
          <input
            id="time"
            name="time"
            type="time"
            value={formData.time}
            onChange={handleChange}
            required
          />

          <label htmlFor="guests">Guests:</label>
          <input
            id="guests"
            name="guests"
            type="number"
            min="1"
            value={formData.guests}
            onChange={handleChange}
            required
          />

          <button type="submit">Book Now</button>
        </form>
      )}
    </div>
  );
}

export default BookingForm;
