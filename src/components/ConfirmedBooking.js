import React from "react";

const ConfirmedBooking = (props) => {
    const { date, time, guests, occasion } = props.formData;

    return (
        <div className="confirm">
            <h2>Booking Confirmed!</h2>
            <p>Date: {date}</p>
            <p>Time: {time}</p>
            <p>Guests: {guests}</p>
            <p>Occasion: {occasion}</p>
        </div>
    );
}

export default ConfirmedBooking;