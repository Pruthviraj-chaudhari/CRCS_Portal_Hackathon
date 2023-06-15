document.addEventListener("DOMContentLoaded", function() {
    var sectorData = [
      { sector: "Credit", count: 8 },
      { sector: "Agro", count: 40 },
      { sector: "Health/Hospital", count: 8 },
      { sector: "Federation", count: 2 },
      { sector: "Housing", count: 6 },
      { sector: "Tourism", count: 1 },
      { sector: "Fisheries", count: 6 },
      { sector: "Construction", count: 1 },
      { sector: "Others", count: 4 },
      { sector: "Industrial/Textile", count: 2 },
      { sector: "Cooperative Bank", count: 9 },
      { sector: "Cooperative Bank", count: 7 },
      { sector: "Marketing", count: 2 },
      { sector: "Cooperative Bank", count: 4 },
      { sector: "Dairy", count: 1 }
    ];
  
    var sectorLabels = sectorData.map(function(data) {
      return data.sector;
    });
  
    var sectorCounts = sectorData.map(function(data) {
      return data.count;
    });
  
    var ctx = document.getElementById("sectorChart").getContext("2d");
    new Chart(ctx, {
      type: "bar",
      data: {
        labels: sectorLabels,
        datasets: [{
          label: "Sector Type",
          data: sectorCounts,
          backgroundColor: "rgba(54, 162, 235, 0.6)",
          borderColor: "rgba(54, 162, 235, 1)",
          borderWidth: 1
        }]
      },
      options: {
        scales: {
          y: {
            beginAtZero: true,
            stepSize: 1
          }
        }
      }
    });
  });
  

document.addEventListener("DOMContentLoaded", function() {
  var stateData = [
    { state: "ANDHRA PRADESH", count: 2 },
    { state: "TELANGANA", count: 7 },
    { state: "KERALA", count: 8 },
    { state: "TAMIL NADU", count: 9 },
    { state: "MAHARASHTRA", count: 30 },
    { state: "KARNATAKA", count: 1 },
    { state: "HARYANA", count: 5 },
    { state: "UTTAR PRADESH", count: 17 },
    { state: "BIHAR", count: 3 },
    { state: "GUJARAT", count: 5 },
    { state: "NEW DELHI", count: 4 },
    { state: "WEST BENGAL", count: 1 },
    { state: "MANIPUR", count: 3 },
    { state: "ASSAM", count: 1 },
    { state: "MADHYA PRADESH", count: 3 },
    { state: "JAMMU AND KASHMIR", count: 1 },
    { state: "UTTARAKHAND", count: 1 },
    { state: "PUNJAB", count: 1 }
  ];

  var stateLabels = stateData.map(function(data) {
    return data.state;
  });

  var stateCounts = stateData.map(function(data) {
    return data.count;
  });

  var ctx = document.getElementById("stateChart").getContext("2d");
  new Chart(ctx, {
    type: "bar",
    data: {
      labels: stateLabels,
      datasets: [{
        label: "State",
        data: stateCounts,
        backgroundColor: "rgba(75, 192, 192, 0.6)",
        borderColor: "rgba(75, 192, 192, 1)",
        borderWidth: 1
      }]
    },
    options: {
      scales: {
        y: {
          beginAtZero: true,
          stepSize: 1
        }
      }
    }
  });
});

