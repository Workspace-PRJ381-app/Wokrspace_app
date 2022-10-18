# <h1 align = "center">3RD YEAR PROJECT GROUP 11<h1>
This is a job finding application that will target individuals in low income areas  to help decrease the unemployment rate within a community
 
 ### TABLE OF CONTENTS
 - [Introduction](#introduction)
 - [Features](#-features)
    - [Client](#-client)
    - [Worker](#-worker)
- [Development Rules and Coding Standards](#development-and-coding)
- [Workflow and Important Project Tools](#workflow-and-important-project-tools)
- [Getting Started](#getting-started)
    - [Running The App](#running-the-app)
- [Project Map](#project-map)
 - [Programming Features](#-programming-features)
            - [Overall features](#overall-features)
                - [Messaging](#-messaging)
                - [Assets](#-assets)
                - [Components](#-components-folder) 
            - [Client](#-client) <= If you are working on the client side 🧑‍🦱 , you will be working here.
                - [Requests](#%EF%B8%8F-requests)
                - [Schedule](#-schedule)
                - [Worker](#-workers)
            - [Workers](#%EF%B8%8F-worker-user-1) <= If you are working on the worker side 👷 , you will be working here.
                - [Browse](#-browse-1)
                - [Available Jobs](#-available-jobs)
                - [Schedule](#-schedule-1)
                - [Stats](#-stats)
            
 
 
 ## [Introduction] 
 <br>
 Our motivation behind the project is to tackle the workforce balancing problem. Anyone who is 
actively looking for a job or even employers will be able to use the application. The focus of this project 
is to make it easier for employers to find suitable employees. Users will also be able to create a 
professional profile. Their profile will contain their interests, strengths, and weaknesses along with a 
curriculum vitae of the user only visible to verified organizations. The application will notify users 
when a job opportunity they might be interested in has appeared near them or in their area.

 
 ## [Features]
<br>
 
 **Features will be described here**
 
 The application will have a main point of entry with 2 different users, People Looking to get a job and employer.

 ### [Client]
 <br>
 
 This is the person looking for a job and they will:

- Register and sign in
- They will be able to see the jobs available
- They will be able to report an employer incase they were not paid or an altercation has ocurrred. This is a security feature that is added to the advantage of the employee
- They will be able to view the profile of a worker and view the reviews that other employees have given to that employer
- Their profile will contain their interests, strengths, and weaknesses
- There will be a built in CV builder in the app as this is a way to provide references to future corporate employment
 
 ### [Worker]
 <br>
 
 This will be the person providing the jobs
 
- Employers will be allowed to post job openings that are available to all users
- They will be able to view the profiles of these recommendations and request a meeting with them
- This feature will be exclusive to business profiles to ensure the safety of all users
 

# <h2 align = "center">Development and Coding</h2>

 ## [Devolpment Rules and Coding Standards]
 
 It is important the there are coding standards and rules to ensure that the quality of code and consistency within the code is always present
 
 **Programming Rules:**
- Ensure that your code is readable
- consistency in the naming of variables and functions
- names must make sense
- no innapropriate variable names ( nothing racist, sexual or rude in any way )
- Naming conventions(This applies to variables, files, functions):
    - files should be named consistently
    - file names should be short but descriptive (< 25 characters)
    - Avoid special characters or spaces in a file name
    - use capitals and underscores instead of periods or spaces or slashes
    - use date format ISO 8601: YYYYMMDD
    - Include a version number
    - Write down naming convention in data management plan
    - Hierarchical file structures
    - Make use of **camelCase** or **PascalCase**, remain within these naming conventions where possible 
<br>
 
 **Testing Rules**:
- When making a testing account make use of the existing testing account to sign in : test@test.com ( this works for both worker and client sides)
    
<br>
 
 ## [Workflow and Important Project Tools]
 
>Click any of the blue text below to view the documentation for the framework or library
<br>

**Firebase Firestore Console:[Firebase Console for Workspace]
(https://console.firebase.google.com/u/0/project/workspace-e658d/overview)**
<br>
This is the console for the backend, the link above will navigate to the firebase console. You will be able to view the data that is used for the application in the backend
<br>
**Work progress tool:[Workspace Project](https://github.com/orgs/Workspace-PRJ381-app/projects/1)**
<br>
Make use of the [Workspace Project](https://github.com/orgs/Workspace-PRJ381-app/projects/1) to keep track of your progress on the project above.
There are 4 Columns: No Status, To Do, In Progress, Review, Done.
<br>

**This is a description of the columns:**
- No Status: This column is the work that still needs to be done
- To-Do: This column is the work that has not been yet but must be done
- In progress: This column is where cards are put about tasks that are being worked on
- Awaiting Review: Tasks are placed here waiting to be reviewed
- Review in progress: The tasks in this column are being reviewed
- Done: The tasks in this column are the final version of the reviewed, they have no more revisions needed

<br>

**Bugs** Use the [issues tab](https://github.com/Workspace-PRJ381-app/Wokrspace_app/issues) to add issues and keep tabs on the bugs that will occur

**Design link:**
[Front end design in figma](https://www.figma.com/file/c9V90jWQc03CX384U7NQz6/UI_Design?node-id=0%3A1)

**Frame works:**
<br>
- [React](https://reactjs.org/)
- [React Native](https://reactnative.dev/docs/getting-started)
<br>
React native Libraries:
<br>
- [React Native Elements](https://reactnativeelements.com/)
<br>
 
 **Back-end frameworks:**
<br>
- [Firebase](https://firebase.google.com/docs/)
- [Firebase Firestore](https://firebase.google.com/docs/firestore?authuser=0)
- [Firebase Authentication](https://firebase.google.com/docs/auth?authuser=0)

## [Getting started]
>This is how you will have to install the application
<br>

- Install [Git](https://git-scm.com/downloads)
- Now open visual studio code
- once opened you will clone the repository from the options provided below
![image](https://user-images.githubusercontent.com/75635691/186444879-6a477088-eb30-417d-857e-b43fb91c1f0e.png)
- Then type in workspace in the search bar and you should get this
![image](https://user-images.githubusercontent.com/75635691/186445145-c1068760-79ca-48e5-87e0-d26e43d8f563.png)
- After cloning the repository open the main folder containing everything and then open a new  intergrated terminal. Make sure the directory is '~/Workspace_app-1/Workspace (main)' AND IT IS IN BASH AND NOT TERMINAL
- run the code 'npm install'
- you should have the app installed with all the modules

## 💻 Install

First you need to install Nodejs and npm, this is different depending on the OS you are running so it is easier to check the node [page](https://nodejs.org/en/download/)

Install [expo](https://expo.io/learn), if it fails run you might need to run this with sudo
```sh
npm install expo-cli --global
```
**SOMETIMES EXPO DOES NOT GET ADDED TO YOUR PATH MAKE SURE IT GETS ADDED EITHER MANUALLY OR FIND THE BINARIES IN YOUR DIRECTORY THEN FIND IT.**

Install the needed packages while in the root folder of the project
```sh
npm install
```

All other dependencies will be in the **[package.json file]**

## 📱 Using Expo
The expo documentation:
https://docs.expo.io/workflow/expo-cli/ 



To Start expo all you have to do is run this line
```sh
expo start
```
Use the following line to clear the cache
```sh
expo start -c
```
Use the following line to use Expo to build web verions
```sh
expo start -w
```

Use the following line to use Expo to build android version
```sh
expo start -a
```
Use the following line to use Expo to build IOS version
```sh
expo start -i
```
>Expo should immediately be launched.<br>
>If you want to run on android you'll need to enable developer options and USB Debugging on your device<br>
>...<br>
>Installation on ios and android devices<br>
>   Make sure you have adb or developer mode enabled and the adb debugging on so that you can install the app on android.
    Plug in your phone into your computer then use the CLI commands to install either that or expo will give a QR code then make sure both devices are on the same network it should install that way too.
> <br>

<br>

### [Running The App]
 <br>
 
- type in 'npx react-native run-android' to run the app in your emulator
- for ios this should be a very similar experience by replacing 'android' to 'ios'



## [Project Map]
> The screens of the applications are divided into 2 sections mainly worker and employee
<br>
 ├── [App.js]: Main access point into the application <br>
├── app.json <br>
├── [assets](#-assets): Contains all the assest of the application (logos, splash etc.)<br>
│   ├ ... <br>
├── babel.config.js<br>
├── Changelog.txt<br>
├── [Client](#Client) <= If you are working on the client side 🧑‍🦱 , you will be working here.<br>
│   ├── [JobRequests](#%EF%B8%8F-requests): This folder deals with the job request feature<br>
│   │   └ ... <br>
│   ├── [Messaging](#-messaging): This is the messaging feature for the Client side<br>
│   │   └ ... <br>
│   ├── [ScheduledJobs](#-schedule): this is the feature that will give an overview of all(upcomming or previous) jobs, job requests<br>
│   │   └... <br>
│   └── [Workers](#-workers): this is the page where clients can view all workers(certified/promoted), news, etc.<br>
│       ├ ...<br>
├── [components](#components-file): The components folder stores the authentication screens (sign up, login) for both workers and client aswell as the landing pages after the user logs in<br>
│   ├── [auth] <br>
│   │   ├── [Client] <br>
│   │   │   ├ ...<br>
│   │   ├── [Langing.js])<br>
│   │   └── [Worker])<br>
│   │       ├ .. <br>
│   ├── [clientMain.js]<br>
│   └── [workerMain.js]<br>
├── [LandingScreens]: This folder contains the landing screens for new users or users who are not logged in, serving as two entry points into the application Client and Worker which will take you to the respective user screens<br>
│   ├── [Clients.js]<br>
│   ├── [ScreenDesigning]<br>
│   │   ├ ...<br>
│   └── [Workers.js]<br>
├── [package.json]<br>
├── [package-lock.json]<br>
├── README.md<br>
├── [redux]<br>
│   ├ ... <br>
└── [Worker](#%EF%B8%8F-worker-user-1) <= If you are working on the worker side 👷 , you will be working here.<br>
    ├ ...<br>
 # ⚓ Programming Features

## Overall features
<br>
 - The application must have a minimal social media inspired style. Simplistic and simultaniously showing all the improtant information.
- There will be both a light and dark theme for the application

