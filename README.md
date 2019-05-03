# FinalProject4385
The final project of CIDM 4385 is to create a mobile app for edsigcon.org. Implementing functions and pages: Push Notifications; Speaker/Presenter Bios; A list of sessions (a schedule of events); Upload photos; Maps of the location; Events and the ability to search/filter events; Social Media; FAQs; Lost and Found;

# Firebase API key
This file needs to update it's API key in the LinksScreen.js file in order for the firebase that presents the speaker works. I have removed the key from the project for security reasons.

# Code Taken Sources 
# HomeScreen.js
This component was created using the default layout when creating an Expo file.
From https://snack.expo.io/rkq49U-IE we used their method to pull the social media items and buttons

# SettingScreen.js
We took code from https://snack.expo.io/rJKf989EV , The purpose of this code is provide a button with a link to google maps. The user will be able to click the link and google maps will be set up to the coordinants of the hotel that the convention is being hosted at.

# LinkScreen.js
A majority of this code is taken from Dr. Babb's expo firebase tutorial. The purpose of this code is to pull data from our firebase tutorial
and create a list of the speakers at the expo event

# components/Question.js
This part was copy from https://snack.expo.io/rkeH0IaMN 
This is components for FAQScreen.js
When we customize a Component, we generally inherit from the abstract base class React.Component and need to implement the render() method. According to the render() method, the React Component is composed of React Element
