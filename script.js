// Attach the event listener to the new button
document.getElementById('analyzeButton').addEventListener('click', function(event) {
    // Prevent default behavior (in case there was any remaining form behavior)
    event.preventDefault(); 

    // Get the input values
    const name = document.getElementById('name').value;
    const email = document.getElementById('email').value;
    const socialMedia = document.getElementById('socialMedia').value;

    // Simulate a "search" based on the entered data
    const searchResults = simulateSearch(name, email, socialMedia);

    // Display the search results
    document.getElementById('searchResult').innerText = searchResults;

    // Create pie chart showing data exposure
    createDataExposureChart();

    // Show privacy tips and data scraping info
    document.getElementById('results').classList.remove('hidden');
});

// Simulate a search result based on the name, email, and social media handle
function simulateSearch(name, email, socialMedia) {
    // Fake some search results based on the inputs
    const dataFound = [
        `Name: ${name} found on social media.`,
        `Email: ${email} found in a data breach (beware!).`,
        `Social Media handle: ${socialMedia} found with public posts.`
    ];

    return dataFound.join('\n');
}

// Create the pie chart using Chart.js
function createDataExposureChart() {
    const ctx = document.getElementById('dataExposureChart').getContext('2d');
    
    // Data for the pie chart
    const data = {
        labels: ['Exposed Data', 'Private Data'],
        datasets: [{
            data: [70, 30], // 70% exposed, 30% private (this is just an example)
            backgroundColor: ['#FF5733', '#4CAF50'],
            borderColor: ['#FF5733', '#4CAF50'],
            borderWidth: 1
        }]
    };

    // Chart.js config
    new Chart(ctx, {
        type: 'pie',
        data: data,
        options: {
            responsive: true,
            plugins: {
                legend: {
                    position: 'top',
                },
                tooltip: {
                    callbacks: {
                        label: function(tooltipItem) {
                            return `${tooltipItem.label}: ${tooltipItem.raw}%`;
                        }
                    }
                }
            }
        });
}
