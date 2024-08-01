document.getElementById('bookingForm').addEventListener('submit', function(event) {
    event.preventDefault();

    const name = document.getElementById('name').value;
    const email = document.getElementById('email').value;
    const origin = document.getElementById('origin').value;
    const destination = document.getElementById('destination').value;
    const departure = document.getElementById('departure').value;
    const returnDate = document.getElementById('return').value;
    const travelClass = document.getElementById('class').value;

    const bookingDetails = `
        Name: ${name}
        Email: ${email}
        From: ${origin}
        To: ${destination}
        Departure Date: ${departure}
        Return Date: ${returnDate}
        Class: ${travelClass}
    `;

    alert('Booking Details:\n' + bookingDetails);
});
