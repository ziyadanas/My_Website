const ctx = document.getElementById('myPieChart').getContext('2d');
const myPieChart = new Chart(ctx, {
    type: 'pie',
    data: {
        labels: ['Red', 'Blue', 'Yellow'],
        datasets: [{
            label: 'My Dataset',
            data: [300, 50, 100],
            backgroundColor: [
                '#FF6384',  // Solid Red
                '#36A2EB',  // Solid Blue
                '#FFCE56'   // Solid Yellow
            ],
            borderColor: [
                '#FF6384',  // Solid Red
                '#36A2EB',  // Solid Blue
                '#FFCE56'   // Solid Yellow
            ],
            borderWidth: 1
        }]
    },
    options: {
        responsive: true,
        plugins: {
            legend: {
                position: 'top',
            },
            title: {
                display: true,
                text: 'Legends'
            }
        }
    }
});
