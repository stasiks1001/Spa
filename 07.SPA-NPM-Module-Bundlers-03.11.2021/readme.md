# JS Modules


## Problem:
Just like we can **import** our own modules into our main JS file, we can also **import** 3rd party libraries e.g. React, Bootstrap, Uuid and more. But the larger and more complicated our project structure and dependencies get, the more difficult it is to manage and build our project for **deployment**. 


## Solution:
**Module Bundlers** e.g. Parcel and Webpack are the tools that help us configure our project effortlessly to produce one **single** build that would be ready to deploy.


## 3rd party modules (libraries)
In order to be able to **install** and use external libraries, we need first to initiate NPM **(Node Package Manager)** which is the tool that helps us find, install and configure those external libraries.

### Initializing NPM:
To start using NPM all we need is to run the command:
``npm init``
That command will ask for information about our project e.g. name, version, author, license etc. We can choose to use the **default** information and setup by using:
``npm init -y``

Initializing NPM using the command above will generate a **package.json** file which is the register that keeps track of what **libraries** were installed, what **versions** and our preffered **configuration** for the project at hand.

### Installing a library
We can use NPM to install a certain library using the command:
``npm install react``

When installing a library that is useful **only for development**, meaning we dont want it to be a part of the final product e.g. a bundling tool is needed only during development and we don't need it once our App is ready for deployment, we can use the flag **-D**
``npm i -D parcel``
i here is short for install.