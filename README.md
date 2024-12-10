# Electron Note App - Tutorial and Demo

## Overview
Welcome to the **Electron Note App**! This project demonstrates how to build a note-taking application using **Electron.js**. The app allows users to create, edit, and delete notes in a simple and efficient way. It also provides an introduction to **Electron.js**, which is used for building cross-platform desktop applications with web technologies like HTML, CSS, and JavaScript.

This project was developed as part of the **COMP 2068** group presentation. In the tutorial, we walk through how to set up an Electron project, build a basic note-taking application, and deploy the app to a cloud provider. By the end of the tutorial, you’ll have a basic understanding of **Electron.js** and how to create a desktop app.

---

## Project Structure

Here’s a breakdown of the files and directories in this project:

- **`main.js`**: Main entry point for the Electron app. This file handles the Electron app's lifecycle and window creation.
- **`renderer.js`**: This file manages the user interface (UI) and handles interactions with the HTML elements.
- **`preload.js`**: This file runs in the context of the web page and is used to expose APIs to the renderer process safely.
- **`index.html`**: The basic HTML structure for the application UI.
- **`package.json`**: Contains metadata about the project and dependencies.
- **`LICENSE`**: License information for the project.
- **`node_modules/`**: Project dependencies installed through npm.
- **`.git/`**: Git version control directory.

---

## In-Class Exercise

### Goal
During the presentation, you will be guided through building a simple Electron app. By the end of the exercise, you will:
- Set up an Electron environment.
- Create a basic UI for interacting with a note-taking application.
- Implement features to add and remove notes from the app.

### Exercise Overview
1. **Setting Up the Project**:
   You will begin by cloning the repository and installing the necessary dependencies.

2. **Running the Application**:
   After setting up the project, you will run the Electron application on your local machine and start interacting with the interface.

3. **Implementing Features**:
   You will create functionality for adding and removing notes, as well as editing them.

### Steps to Follow

1. **Clone the Repository**:
   Clone this repository to your local machine using the following command:
   ```bash
   git clone https://github.com/your-github-repo/electron-note-app.git
   cd electron-note-app
