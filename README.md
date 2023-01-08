# React Native app for turists

Welcome to React Native Project! This project was created using [React Native](https://reactnative.dev), a framework for building native mobile applications using JavaScript and React.

## Requirements
1. [Node.js](https://nodejs.org/en/)
2. [React Native development environment](https://reactnative.dev/docs/getting-started)

## Setup

1. Clone the repository:

`git clone https://github.com/username/tourism-react-native-app-.git`

2. Navigate to the project directory:

`cd tourism-react-native-app`

3. Install the project dependencies:

`yarn install`

## Running the app

### Android

1. Install the latest version of Android Studio and set up an emulator or connect an Android device to your computer.
2. Run the following command in the terminal to start the Metro Bundler, which is the packager responsible for building the JavaScript code and assets of the app:

`yarn start`

3. In a new terminal window, navigate to the project directory and run the following command to build the app and install it on your device:

`yarn android`

### iOS

1. Install the latest version of Xcode and set up an emulator or connect an iOS device to your computer.
2. Run the following command in the terminal to start the Metro Bundler:

`yarn start`

3. In a new terminal window, navigate to the project directory and run the following command to build the app and install it on your device:

`yarn ios`

### Installing Pods

This project uses CocoaPods to manage dependencies.

1. Navigate to the ios directory:

`cd ios`

2. Install the pods:

`pod install`

3. Open the .xcworkspace file in Xcode:

`open MyApp.xcworkspace`

4. Build and run the app in Xcode.

Note: If you encounter any issues during the pod installation, try running the following command to update your CocoaPods installation:

`gem install -n /usr/local/bin cocoapods`


## Libraries

This project includes the following libraries:

1. Plop: A micro-generator framework that makes it easy for you to create custom generator templates to be used with the plop command-line tool.

2. Jest: A JavaScript testing library that allows you to write unit tests for your applications.

## Testing

To run the tests for this project, use the following command:

`yarn test`

## Generating Components and Pages

To generate components and pages using Plop, use the following command:

`yarn plop`
