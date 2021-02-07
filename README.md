## General info

An application built with the newest technologist stack to blackbelt my programming skills, which includes and presents:

- gloal store ala Redux built on context api and reducer hook - fetched pokemons are stored in global context, which provides access to data from anywhere in the application and prevent uploading data while surffing through page

- the ability to work with the external API - fetch action devided into 3 seperate actions start / success / error, which gives an opportunity for easy errors handling and spinner displaying while loading data

- filtering logic - user can filter through different types of Pokemons - every Pokemon might have maximum two types, that's why user can filter selecting two types maximum simultenously

- pagination with user-friendly logic - possibility to move through all pages with continuous preview of how many pages there are, which is active, etc.

- modal on route change - user can also get additional detial information about every Pokemon by clicking on the specific card, which will lunch another fetching action

- routing - give possibility to navigate to different url's without reload of the page

- fully responsive app with mobile-first approach

\*\*\* currently working on:

- unit tests
- BestPokemons subpage - usage of intersectionObserver Api and animations with framer-motion
- Contact subpage - form with validation (react-hook-form)

## Technologies

Project is created with:

- React ^17.0.1
- TypeScript ^4.1.3
- Jest & testing-library/react
- SCSS

## Live

<a href="https://makarcodes.github.io/pokedex_2021/">Pokedex Live</a>

## Setup

To run this project, clone it and open with live server:

```
$ cd to the folder where you want to download the project
$ git clone https://makarcodes.github.io/pokedex_2021/
$ npm install
$ npm start

Open [http://localhost:3000](http://localhost:3000) to view it in the browser.
```
