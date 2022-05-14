GetPackage 

## GENERAL

  - Angular Material as UI library.

  - State Management - Ngrx 

  - Each feature data is managed by Facade service that wrap actions, reducer, effects and selectors and all components IO 

  - Core module wrap core services and Auth module (which can be scaled up)

  - Shared module  wrap  Material module and shared elements

  - Feature folder - hold the  order delivery module which is a Lazy loading module using routing guard 
  
  - Order delivery component is container container that inject only the related Facade (as the Auth one)

  - Auth token is been saved to local storage and and been added to request Authorization header.




## TASK (Copy + Status)
Front-end task

Please read all the instructions before you start…Your challenge (if you choose to accept it...) is as follow:

---
Create a ‘Login’ page - DONE 
  - the user should be able to type an email and a password - DONE
  - submit the email and the password to the login endpoint, you would receive a token from the server - DONE
  - the password should be Getpackage2022!any other password will receive an unknown request response from the server - DONE
  - display an appropriate message for the wrong password - DONE
  - navigate to the Order Delivery page - DONE
  - use router for navigating between pages (localhost:4200/login, localhost:4200/create) - DONE


Create an ‘Order Delivery’ page - DONE
  - the page should have a form with the following values:
    - the Sender name - DONE 
    - Sender phone number - valid il number - DONE 
    - Pickup address - free text - DONE 
    - City - drop-down list (get the list from GP server) - DONE 
    - City - drop-down list (get the list from GP server) - DONE 
    - Receiver name - DONE 
    - Receiver phone number - valid il number - DONE 
    - Drop-off address - free text - DONE 


Calculate and display the price according to the price received from the server on the city's list
rules: - DONE
    Delivery in the same city will be charged the city's amount - DONE
    Delivery between two cities will be charged the amount of both the cities together with an extra 10 ILS fee - DONE
    price should update when you change cities - DONE
    Add a submit button to the page, the data should be submitted as JSON to the submit POST endpoint - DONE



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



