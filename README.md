# Dropdown-app

UI developed using Reactjs and Redux. 
API developed using Nodejs and Mongodb.

### Problem that solved.

1. Create the UI to manage dropdown options 
Each line includes 2 fields: "label' and "value" of dropdown option.
Button [X]: use to remove the selected line on UI only
Button [Add Option]: use to append empty line in UI for user input label and value.
It need to works with across all browsers, including IE (at least IE 8 onwards)

2. When user clicks Save button we need to save records to mongo database. Database name [test], collection [dropdown_options].
Example output
    {
    "_id" : ObjectId("5922613c70736c95a185f856"),
    "options" : [
    {
    "label" : "Singapore",
    "value": "SG"
    },
    {
    "label" : "India",
    "value": "IN"
    },
    {
    "label" : "Viet Nam",
    "value": "VN"
    },
    {
    "label" : "United States",
    "value": "US"
    }
    ]
    }

3. When user click Export CSV, we need to export the data on UI to CSV file, example output format
Label, Value
Singapore, SG
India, IN
Viet Nam, VN
United States, US

## Demo

### How to use

#### for ui
1. Run "npm install" in the extracted folder
2. Run "npm start" to view the project

#### for api
1. Run "npm install" in the extracted folder
2. Run "node app.js" to view the project