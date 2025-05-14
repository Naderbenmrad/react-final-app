import React from "react";

const Booking = (props) => {
    return (
        <BookingForm availableTimes={props.availableTimes}
            dispatch={props.dispatch} SubmitForm={props.SubmitForm}/>
    );
}