Simple Grammar Checker – Chrome Extension
Overview

Simple Grammar Checker is a Chrome Extension built using Manifest V3 that detects grammar and spelling mistakes in text input fields and textareas across websites.

The extension listens to user typing events, sends the text to the LanguageTool public API, and displays grammar issues in real time using a tooltip interface.

This project demonstrates Chrome Extension architecture, DOM manipulation, API integration, and event handling.

Features

Works on:
<!-- 
<input type="text">

<textarea> -->

Detects grammar mistakes in real time

Uses debounce to prevent excessive API calls

Displays grammar issue using a tooltip

Clean and minimal popup UI

No API keys stored in the project

Technologies Used

JavaScript (Vanilla JS)

Chrome Extension Manifest v3

LanguageTool Public API

DOM Manipulation

Fetch API

How It Works

The extension injects a content script into web pages.

It listens for input events on text fields.

When the user types more than a minimum number of characters:

A debounce function delays the API request.

The text is sent to the LanguageTool API.

The API returns grammar matches.

If an issue is detected:

A tooltip appears below the input field showing the error message.


grammar-checker/
│
├── manifest.json      # Extension configuration (Manifest v3)
├── content.js         # Grammar logic & API integration
├── index.html         # Popup UI
├── popup.js           # Popup logic
├── styles.css         # Styling
└── README.md'



vedio explanation :- https://drive.google.com/file/d/17SzVZMR2Ca_02aoQscwZoUr4bMnZG5By/view?usp=sharing