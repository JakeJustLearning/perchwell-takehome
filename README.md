# Perchwell Take Home Assignment

This is a simple take home assignment satisfying the requirements as layed out at [here](https://you.ashbyhq.com/Perchwell/assignment/d8d36140-b3be-4155-a8ad-652ae87e6904)

## Setting up

### DataBase

- requirements
  - docker already installed and the docker daemon locally running
    - [install docker](https://docs.docker.com/engine/install/_)
- Steps:

  1. navigate into the [server](./server/) directory
  2. in your terminal run the following command:

     ```BASH
     docker-compose up
     ```

  This will provision the postgres DB in a docker container.
  This should be visible if you have the docker desktop app as a container

### Back End

- requirements
  - npm and node installed on your machine
    - [installing node and npm](https://docs.npmjs.com/downloading-and-installing-node-js-and-npm)
- Steps:

  1. make sure that you have completed the DataBase setup in the section above
  2. nnavigate into the [server](./server/) directory
  3. install npm by running in terminal

     ```bash
     npm i
     ```

  4. seed the database by running the following in terminal:

     ```bash
     npm run typeorm migration:run
     ```

  5. start the server by running the following in terminal:

     ```bash
     npm run start:dev
     ```

     This will start the nestjs server and you should see this logged in terminal showing the server is running at port 3000

### Front End

- requirements:
  - npm and node installed on your machine
    - [installing npm](https://docs.npmjs.com/downloading-and-installing-node-js-and-npm)
- Steps:

  1. navigate to the [perchwell-client](./perchwell-client/) directory
  2. run the following command in your terminal:

     ```bash
     npm i
     ```

  3. run the following command in your terminal to start the front end at port 3030:

     ```bash
     npm run dev
     ```

  This will start the react front end at the designated port (3030)

## Stack

The project primarily uses the following stack and technologies:

- Back End:
  - Postgresql databse and dockerized container
  - NestJs
    - server framework
  - TypeOrm
    - database orm
- Front End:
  - Vite
    - build tool for the react ui
  - React
    - front end framework
  - ChakraUI
    - react component library
