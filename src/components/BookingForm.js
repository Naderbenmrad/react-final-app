import React from "react";

const BookingForm = (props) => {
    const [date, setDate] = React.useState("");
    const [times, setTimes] = React.useState("");
    const [guests, setGuests] = React.useState("");
    const [occasion, setOccasion] = React.useState("");
    const [formData, setFormData] = React.useState({
        date: "",
        time: "",
        guests: 1,
        occasion: "none",
    });

    const handleChange = (event) => {
        setDate(event);
        props.dispatch(event)
    };

    const handleSubmit = (event) => {
        event.preventDefault();
        props.submitForm(event);
        //console.log("Form submitted:", formData);
    };

    return (
        <header>
            <section>
                <form onSubmit={handleSubmit}>
                    <fieldset>
                        <div>
                            <label htmlFor='book-date'>Choose Date</label>
                            <input id="book-date" type="date" value={date} onChange={(event) => handleChange(event.target.value)} required />
                        </div>

                        <div>
                            <label htmlFor='book-time'>Choose Time</label>
                            <select id="book-time" value={times} onChange={(event) => setTimes(event.target.value)} required >
                                <option value="">Select a time</option>
                                {
                                    props.availableTimes.availableTimes.map(availableTimes => {
                                        return <option key={availableTimes}>{availableTimes}</option>
                                    })
                                }
                            </select>
                        </div>

                        <div>
                            <label htmlFor='book-guests'>Number of Guests</label>
                            <input id="book-guests" name="guests" min='1' value={guests} onChange={(event) => setGuests(event.target.value)} />
                        </div>

                        <div>
                            <label htmlFor='book-occasion'>Occasion:</label>
                            <select id="book-occasion" name="occasion" key={occasion} value={occasion} onChange={(event) => setOccasion(event.target.value)}>
                                <option>Birthday</option>
                                <option>Anniversary</option>
                            </select>
                        </div>

                        <div className="btnReceive">
                            <input aria-label="On Click" type="submit" value={"Make Your Reservation"}/>
                        </div>
                    </fieldset>
                </form>
            </section>
        </header>
    );
}

export default BookingForm;