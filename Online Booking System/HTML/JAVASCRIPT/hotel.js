document.getElementById('bookingForm').addEventListener('submit', function(event) {
    event.preventDefault();

    const name = document.getElementById('name').value;
    const email = document.getElementById('email').value;
    const checkin = document.getElementById('checkin').value;
    const checkout = document.getElementById('checkout').value;
    const roomType = document.getElementById('roomType').value;

    const confirmationMessage = `Thank you, ${name}! Your booking for a ${roomType} room from ${checkin} to ${checkout} has been confirmed. A confirmation email has been sent to ${email}.`;

    document.getElementById('confirmationMessage').textContent = confirmationMessage;

    // Optionally, you could reset the form after submission
    document.getElementById('bookingForm').reset();
});
