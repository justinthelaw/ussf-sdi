# REACT CLASSICAL vs. REACT-HOOKS SIDE-BY-SIDE STARTER

## Instructions:

This app is designed to display _TWO_ React apps side-by-side. These two apps share a CSS file, called `Shared_Styles.css`. 

This exercise contains two applications that will be (when this exercise is complete) identical from the user's perspective when they get rendered on the page. However, under the hood, they're a bit different!

You've been provided with the code for a Classical React application (whose code you'll find in the `ClassAppSrc` folder).  This will appear on the left-hand side of the page in the browser.  You've also been provided with the scaffolding to implement identical functionality using React Hooks (whose code files you'll find in the `HooksAppSrc` folder).  This will appear on the right hands side of the page in the browser. 

These apps should render side-by-side in the browser. Your goal is to add code to the code for the right hand side React Hooks app so that its appearance and behavior identically matches the Classical React app appearing on the left side.

Given that you'll continue using the `Shared_Styles.css` file to style both applications, you'll need to make sure the one you write using React Hooks employs the right code such that the styling will match its Classical React counterpart. 

## Getting started

* Install dependencies by typing `npm install` in the terminal in the root directoy of the project
* Start the app with `npm start`
* In the browser, click the CAT button to add a cat to the catbox
* Now, in your IDE, write code in the files in `/src/HooksApp/...` so that the right hand side behaves identically (but independently of) the Classical React app

## Notes:

* Do not edit the code in `Dont_Edit_These_Styles.css`
* You'll be using [this free API](https://api.thecatapi.com/) to get random pictures of cats
