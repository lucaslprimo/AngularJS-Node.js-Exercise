# AngularJS Node.js Exercise

First, Download and unzip the project on your computer.

To run the application java you have to install Java JDK and Maven.
- Java JDK is available on http://www.oracle.com/technetwork/pt/java/javase/downloads/jdk8-downloads-2133151.html.
- Maven is available on https://maven.apache.org/download.cgi.

After everything installed, open a command and run this command to set the project libs and compile the project:

    mvn clean package

To run the service run the following command:

    mvn spring-boot:run

If It's everything right, the application will be available on: 

    http://localhost:8090

In case you can't run the commands, verify if maven bin folder is in the PATH enviroment variable, and if the JAVA_HOME variable is set.

## Installing Dependencies to Run the Node.js Application and minifying javascript automation tool

Install Node.js, it's available on https://nodejs.org/en/.

After Node.js is installed, you will be able to use npm on your command line to install other packages needed to run the project.

Inside the root project folder open a command and run the following command:

    npm install

It will install all packages you need to run the node.js server and automate the javascript minifying.
    
## Minifying JS

Now go to src/main/webbapp inside the project folder you have unziped, and start a command prompt from this path using shift + right click or navigate in the command line to this folder using cd or dir if you are using windows.

Now run the following command:

    gulp 

It will keep watching for changes in the .js files and minify always the files are changed.

## Running the Server in Node.js

Open a command inside the root folder of the project and run the following command:

    node server.js

The application will be available on:

    http://localhost:3000
