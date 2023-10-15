document.addEventListener('DOMContentLoaded', function () {
    const upcomingEventsButton = document.getElementById('upcoming-events-button');
    const eventsList = document.getElementById('events-list');

    // Sample data for upcoming events
    const eventsData = [
        {
            title: 'Open House',
            date: '2023-11-15',
            description: 'Join us for our open house event!'
        },
        {
            title: 'Science Fair',
            date: '2023-12-10',
            description: 'Explore amazing science projects.'
        },
        // Add more event data here
    ];

    // Function to display upcoming events
    function displayUpcomingEvents() {
        eventsList.innerHTML = ''; // Clear previous event list

        eventsData.forEach(event => {
            const eventItem = document.createElement('li');
            eventItem.innerHTML = `
                <strong>${event.title}</strong> (${event.date}): ${event.description}
            `;
            eventsList.appendChild(eventItem);
        });
    }

    // Event listener for the "Upcoming Events" button
    upcomingEventsButton.addEventListener('click', displayUpcomingEvents);
});
