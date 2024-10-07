document.getElementById('strokeRiskForm').addEventListener('submit', function(e) {
    e.preventDefault();

    // Get form data
    const formData = {
        gender: document.getElementById('gender').value,
        age: document.getElementById('age').value,
        hypertension: document.getElementById('hypertension').value,
        heart_disease: document.getElementById('heart_disease').value,
        ever_married: document.getElementById('ever_married').value,
        work_type: document.getElementById('work_type').value,
        Residence_type: document.getElementById('Residence_type').value,
        smoking_status: document.getElementById('smoking_status').value,
        bmi: document.getElementById('bmi').value,
        avg_glucose_level: document.getElementById('avg_glucose_level').value
    };

    // Convert form data to JSON
    const jsonData = JSON.stringify(formData);

    console.log(jsonData)

    // API URL (replace with your actual API URL)
    const apiUrl = 'https://stroke-detection-0abh.onrender.com/predict'; 

    // Send the data to the API
    fetch(apiUrl, {
        method: 'POST', // Assuming POST request
        headers: {
            'Content-Type': 'application/json'
        },
        body: jsonData
    })
    .then(response => {
        if (!response.ok) {
            throw new Error('Network response was not ok');
        }
        return response.json(); // Parse the response as JSON
    })
    .then(data => {
        // Handle the JSON response from the API
        console.log(data.response)

        // Show pop-up with the stroke risk result
        if (data.response === 'YES'){
            alert(`You are liable to have stroke`);
        } else {
            alert(`You are not liable to have stroke`);
        }
            
    })
    .catch(error => {
        console.error('There was a problem with the fetch operation:', error);
        
    });
});
