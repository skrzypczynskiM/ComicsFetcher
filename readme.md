<div align="center">

<image src="./assets/xkcd.png" />

# ComicsFetcher

</div>

## Introduction

<p>
A simple React Native App that retrieves 8 newest comics and presents their content on an individual screen. Made for recruitment purposes.
</p>

---

 <p align="center"> 
    <img src="demo/ComicFetcher.gif" alt="preview" width="250" height="500">
 </p>

## Screens

### Home

The main screen that stores most of the application's logic and renders all components. When the user enters the screen it makes an API call to retrieve 8 newest comics from the XKCD server. In order to fill in the time gap between making an API call and rendering retrieved data, the App generates placeholders for the comics. When the API call is completed, the list of 8 items is being rendered.

### Details

The Details screen is a sub-screen of Home screen and its purpose is to display the comic selected by a user.

---

## APIs used

1. [xkcd-last comic](http://xkcd.com/info.0.json)
2. [xkcd-comic #614](http://xkcd.com/614/info.0.json)

<br/>

## For Developers

To start the project follow the below steps

1. `git clone https://github.com/justFlow5/ComicsFetcher
2. `cd ComicsFetcher`
3. `npm i`
4. `npm start`

---

Created with [Expo](https://github.com/expo/expo)
