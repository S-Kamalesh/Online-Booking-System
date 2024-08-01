document.getElementById('bookingForm').addEventListener('submit', function(e) {
    e.preventDefault();

    const name = document.getElementById('name').value;
    const train = document.getElementById('train').value;
    const date = document.getElementById('date').value;
    const seats = document.getElementById('seats').value;

    const bookingDetails = `
        <p><strong>Name:</strong> ${name}</p>
        <p><strong>Train:</strong> ${train}</p>
        <p><strong>Travel Date:</strong> ${date}</p>
        <p><strong>Number of Seats:</strong> ${seats}</p>
        <p>Your booking has been confirmed!</p>
    `;

    document.getElementById('bookingResult').innerHTML = bookingDetails;
});
