# Delivery

## Demands
Front-end task
Please read all the instructions before you start…Your challenge (if you choose to accept it...) is as follow:

---
Create a ‘Login’ page
  - the user should be able to type an email and a password
  - submit the email and the password to the login endpoint, you would receive a token from the server
  - the password should be Getpackage2022!any other password will receive an unknown request response from the server
  - display an appropriate message for the wrong password
  - navigate to the Order Delivery page 
  - use router for navigating between pages (localhost:4200/login, localhost:4200/create)


Create an ‘Order Delivery’ page
  - the page should have a form with the following values:
  - the Sender name
  - Sender phone number - valid il number
  - Pickup address - free text
  - City - drop-down list (get the list from GP server)
  - City - drop-down list (get the list from GP server)
  - Receiver name
  - Receiver phone number - valid il number
  - Drop-off address - free text


Calculate and display the price according to the price received from the server on the city's list
rules:
    Delivery in the same city will be charged the city's amount
    Delivery between two cities will be charged the amount of both the cities together with an extra 10 ILS fee
    price should update when you change cities
    Add a submit button to the page, the data should be submitted as JSON to the submit POST endpoint



*** 

Bonus - Multilanguage
add a Toggle button between Hebrew and English
all fields Including cities should update the language
the page should change direction (rtl ltr) 

## General
Style code and appearance
use angular as the framework
we recommend using a state management framework such as angular/ngrx
the page should be styled and look good
feel free to use an external library like angular material or bootstrap
the page should be responsive and work well on desktop and mobile
the project should be ready for build and run
you can upload the code to GitHub and submit a link or submit a zip file with the project
URLs
login: https://mock-stg.getpackage-dev.com/login POST
cities: https://mock-stg.getpackage-dev.com/cities GET
submit: https://mock-stg.getpackage-dev.com/submit POST



