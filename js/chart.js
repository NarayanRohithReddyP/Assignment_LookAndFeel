document.addEventListener('DOMContentLoaded', function () {
    var ctx = document.getElementById('investmentChart').getContext('2d');
    var investmentChart = new Chart(ctx, {
        type: 'bar',
        data: {
            labels: ['Technology', 'Art', 'Community Projects', 'Education', 'Health'],
            datasets: [{
                label: 'Investment Amount ($)',
                data: [50000, 20000, 15000, 30000, 25000],
                backgroundColor: [
                    'rgba(255, 99, 132, 0.2)',
                    'rgba(54, 162, 235, 0.2)',
                    'rgba(255, 206, 86, 0.2)',
                    'rgba(75, 192, 192, 0.2)',
                    'rgba(153, 102, 255, 0.2)'
                ],
                borderColor: [
                    'rgba(255, 99, 132, 1)',
                    'rgba(54, 162, 235, 1)',
                    'rgba(255, 206, 86, 1)',
                    'rgba(75, 192, 192, 1)',
                    'rgba(153, 102, 255, 1)'
                ],
                borderWidth: 1
            }]
        },
        options: {
            scales: {
                y: {
                    beginAtZero: true
                }
            }
        }
    });

    var ctxGrowth = document.getElementById('growthChart').getContext('2d');
    var growthChart = new Chart(ctxGrowth, {
        type: 'line',
        data: {
            labels: ['2019', '2020', '2021', '2022', '2023'],
            datasets: [{
                label: 'Annual Revenue ($)',
                data: [200000, 300000, 450000, 600000, 750000],
                backgroundColor: 'rgba(54, 162, 235, 0.5)',
                borderColor: 'rgba(54, 162, 235, 1)',
                borderWidth: 2,
                fill: true
            }]
        },
        options: {
            scales: {
                y: {
                    beginAtZero: true
                }
            }
        }
    });
});


// Dummy data for donor age distribution
var ageDistributionData = {
    labels: ['18-25', '26-35', '36-45', '46-55', '56+'],
    datasets: [{
        label: 'Donor Age Distribution',
        data: [20, 30, 25, 15, 10], // Dummy data
        backgroundColor: [
            '#ff6384',
            '#36a2eb',
            '#cc65fe',
            '#ffce56',
            '#4bc0c0'
        ],
        hoverOffset: 4
    }]
};

// Chart configuration for donor age distribution
var ageDistributionOptions = {
    responsive: true,
    maintainAspectRatio: false,
    plugins: {
        legend: {
            position: 'bottom',
        }
    }
};

// Create the age distribution chart
var ctxAgeDistribution = document.getElementById('ageDistributionChart').getContext('2d');
var ageDistributionChart = new Chart(ctxAgeDistribution, {
    type: 'doughnut',
    data: ageDistributionData,
    options: ageDistributionOptions
});
