<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>Dynamic Form Builder</title>
  <style>
    body {
      font-family: Arial, sans-serif;
      max-width: 600px;
      margin: 50px auto;
      padding: 20px;
      background-color: #f0f0f0;
    }
    h2 {
      text-align: center;
      color: #333;
    }
    #dynamicForm {
      background: white;
      padding: 30px;
      border-radius: 10px;
      box-shadow: 0 2px 10px rgba(0,0,0,0.1);
    }
    .form-field {
      margin-bottom: 20px;
    }
    label {
      display: block;
      margin-bottom: 5px;
      font-weight: bold;
      color: #555;
    }
    input, select, textarea {
      width: 100%;
      padding: 10px;
      border: 2px solid #ddd;
      border-radius: 5px;
      font-size: 14px;
      box-sizing: border-box;
    }
    button {
      width: 100%;
      padding: 12px;
      background-color: #4CAF50;
      color: white;
      border: none;
      border-radius: 5px;
      font-size: 16px;
      cursor: pointer;
      margin-top: 10px;
    }
    button:hover {
      background-color: #45a049;
    }
    #result {
      margin-top: 20px;
      padding: 20px;
      background: #e8f5e9;
      border-radius: 5px;
      display: none;
    }
    #result h3 {
      margin-top: 0;
      color: #2e7d32;
    }
    #result pre {
      background: white;
      padding: 15px;
      border-radius: 5px;
      overflow-x: auto;
    }
  </style>
</head>
<body>
  <h2>Dynamic Form Builder</h2>
  <div id="dynamicForm"></div>
  <div id="result"></div>

  <script>
    class FormBuilder {
      constructor(fields) {
        this.fields = fields;
        this.formData = {};
      }

      render() {
        const formContainer = document.getElementById('dynamicForm');
        let formHTML = '';

        this.fields.forEach((field, index) => {
          formHTML += `<div class="form-field">`;
          formHTML += `<label for="field${index}">${field.label}</label>`;

          if (field.type === 'text' || field.type === 'email' || field.type === 'number') {
            formHTML += `<input type="${field.type}" id="field${index}" name="${field.label}">`;
          } else if (field.type === 'textarea') {
            formHTML += `<textarea id="field${index}" name="${field.label}" rows="4"></textarea>`;
          } else if (field.type === 'select' && field.options) {
            formHTML += `<select id="field${index}" name="${field.label}">`;
            field.options.forEach(option => {
              formHTML += `<option value="${option}">${option}</option>`;
            });
            formHTML += `</select>`;
          }

          formHTML += `</div>`;
        });

        formHTML += `<button onclick="formBuilder.getFormData()">Submit</button>`;
        formContainer.innerHTML = formHTML;
      }

      getFormData() {
        this.formData = {};
        this.fields.forEach((field, index) => {
          const inputElement = document.getElementById(`field${index}`);
          this.formData[field.label] = inputElement.value;
        });

        const resultDiv = document.getElementById('result');
        resultDiv.style.display = 'block';
        resultDiv.innerHTML = `
          <h3>Form Data Submitted:</h3>
          <pre>${JSON.stringify(this.formData, null, 2)}</pre>
        `;
        
        console.log("Form Data:", this.formData);
        return this.formData;
      }
    }

    const formFields = [
      { type: 'text', label: 'Username' },
      { type: 'email', label: 'Email' },
      { type: 'number', label: 'Age' },
      { type: 'select', label: 'Country', options: ['India', 'USA', 'UK', 'Canada', 'Australia'] },
      { type: 'textarea', label: 'Comments' }
    ];

    const formBuilder = new FormBuilder(formFields);
    formBuilder.render();
  </script>
</body>
</html>