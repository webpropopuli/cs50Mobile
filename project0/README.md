# Project 0

The goal of this project is to practice JavaScript and its paradigms by creating
a TODO app. This app should be able to add TODOs and track the number of total
TODOs as well as the number of unchecked TODOs.

*Not sure what 'unchecked' means*

## Instructions
Inside of [index.html](/index.html), you'll find some starter HTML. With the file open in your browser, you should
see a `New TODO` button, which `alert`s when clicked. Your goal will be to get
this button to create new TODOs.

[styles.css](/styles.css), has some pre-written CSS for your
convenience. You shouldn't need to edit this file at all, but feel free to if
desired.

[script.js](/script.js) is where most of your work will be done. There is some
starter code for you in the file. The `classNames` variable can be used to link
any elements you create in js with the associated CSS class names. The next 3
lines of code are the HTML elements that you'll need to update when creating new
TODOs. Lastly, you'll see the `addTodo()` function. This gets executed when
creating a new TODO. You should replace the `alert()` call with logic to create
new TODOs.

*I used prompt() for input. Could have popped up a form element too but this was quicker*
##Added features:
1. ability to delete first or last item. Can also delete *any item but there's no front-end implementation for this yet
2. Priority item almost ready. It will add item to top. Code works but no frontend interface yet.

Good luck!

## Challenge! (Not Required)
If you finish early and are up for a challenge, try adding delete functionality.
This should be in the form of a button within each TODO that removes that TODO
when clicked. 
