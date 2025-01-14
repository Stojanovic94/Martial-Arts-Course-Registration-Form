# Martial Arts Course Registration Form

## Overview
This project involves creating a web-based registration form for a martial arts school. The form allows users to input the necessary details for enrolling in a martial arts course. The form uses AJAX to load data dynamically from a JSON file and to submit user information. The course price is calculated based on multiple factors including the number of participants, the type of martial art, additional services, and course duration.

## Features
- **User Inputs:**
  - Full name of the contact person
  - Contact phone number
  - Email address
  - Number of participants (from 1 to 5)
  - Course start date
  - Type of martial art (dropdown menu populated from a JSON file)
  - Additional services (checkboxes for items like protective gear, private trainer, medical support)
  - Course duration (radio buttons for options: 1 month, 3 months, 6 months)
  
- **AJAX Integration:**
  - Loads the martial art types dynamically from a JSON file for the dropdown menu.
  - Sends the user data to a JSON file for processing.
  
- **Price Calculation:**
  - The price of the course is based on various factors:
    - The type of martial art selected (prices may vary or be grouped together for similar types).
    - The number of participants.
    - Additional services selected.
    - Course duration.
  
  The total price is calculated by multiplying the base cost by the number of participants and adding the costs for additional services and duration.

- **Data Validation:**
  - Ensures all fields are completed and in the correct format.
  - Checks that the email address contains a valid domain and the "@" symbol.
  
- **Web Page Structure:**
  - The page includes a basic HTML structure with:
    - A header containing the site title.
    - A footer with additional information.
    - A horizontal navigation menu with five links (inactive for display purposes).
    - A central section displaying the form.

## Technologies Used
- **HTML** for the structure of the page.
- **CSS** for styling the form and layout.
- **JavaScript (AJAX)** for dynamically loading the martial arts types and sending user data.
- **JSON** for storing martial arts types and user data.
