function getFormValues() {
    var form = document.getElementById("productForm");
    var formData = new FormData(form);
    var formObject = {};

    formData.forEach(function (value, key) {
        formObject[key] = value;
    });

    var formJson = JSON.stringify(formObject);
    console.log(formJson);

    const fs = require('fs');

    

    // Convert JSON data to a string
    const jsonString = JSON.stringify(formJson, null, 2); // The third argument (2) adds indentation for better readability

    // Specify the file path
    const filePath = 'data.json';

    // Write data to the file
    fs.writeFile(filePath, jsonString, 'utf-8', (err) => {
        if (err) {
            console.error('Error writing to file:', err);
        } else {
            console.log('Data written to file successfully:', filePath);
        }
    });

}