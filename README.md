# MukoSoft App

The MukoSoft app has been specially developed for cystic fibrosis patients. The app reminds you to take your medication, provides suggestions for high-calorie cooking, stores and evaluates your own vital signs, and offers general information on a variety of disease-specific topics.

# Infrastructure

The MukoSoft app consists of two independent parts:

## Front-End

The front-end is a Angular 14 application. TailwindCSS and Ionic is used for the design of the interfaces. The app is compiled into a native Android/iOS app via capacitor.

### Stack

* Angular 14
* TailwindCSS
* Ionic
* Capacitor

### Testing
The front-end is tested using Karma. Cypress is used for E2E tests.

## Back-End

The back-end was developed using NestJS and provides the medications and access to the external My-Doc interface. The front-end thus communicates with external interfaces via the back-end. The back-end also has a swagger definition. This can be called via **/api**.

### Stack
* NestJS

### Testing
To test NestJS we use the [NestJS own testing library](https://www.npmjs.com/package/@nestjs/testing).

## Preparations

To run the applications nodejs is mandatory. To do this, go to the [NodeJS website](https://nodejs.org/en/) and download the necessary version for the operating system.

## Run via Docker

The easiest way to launch the front-end and back-end is via Docker. To do this, simply run the following command in the root directory:

```bat
npm run docker:build
```

This will install all the dependencies needed from the front-end and back-end, builds the front-end and runs a docker compose build.

Afterwards, the containers can be started via the following command:

```bat
npm run docker:run
```

The front-end is then available under **localhost:8888** and the back-end under **localhost:8889**.

## Run manually

You can also run the front-end by running following scripts:
```bat
npm run install # install dependencies for front-end and back-end
npm run start:front-end # start front-end
npm run start:back-end # start back-end
```

# Roadmap

## Version 1.0
<<<<<<< Updated upstream
* 💊 basic medication reminder 
=======
* 💊 basic medication reminder
>>>>>>> Stashed changes
* 🥕 cookbook and recipes for cystic fibrosis
* ❤️ vitaldata: fev1, size and weight (BMI)

## Version 2.0
* ❤️ vitaldata: temperature, blood pressure
* 📄 scannning and saving documents
* 💊 organize medication stock

## Version 3.0
* 💊 semi-automatic ordering of new medications from your doctor

# FAQ

## When will MukoSoft be released?

MukoSoft is a private leisure project and therefore does not follow a direct schedule. As soon as the time is right and the app is ready, the app will be available in the Android and iOS stores.
