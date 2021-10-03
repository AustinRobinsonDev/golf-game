# ToDo
Add Socket Room functionality 
Add Heroku
Remove inline styling change to component level for what isnt inside css file
Update how to play
Update create room screen
Add page transitions 
Add mongo DB for better score keeping on refresh or add to local storage
fix state for database update on 'next hole'
create function to update database game 
if connection lost socket disconnect load from database last position 
possibly store a copy of all game state in database and update all at the same time
pull gamestate from database and load data in the game screen from that 
create component "player icon" to load instead of a `<p></p> ` with stats

## how to use
inside root folder "npm run devStart" 
"cd client" into client folder and run "npm start" or "yarn start"
this application manages all state in the app.js file and passes state
as props 

## what it is
this is a project I made to learn how to get a better understanding of passing props and using socket io to connect multiple users to a server via persisting connection.
it uses a custom hook "useLocalStorage" to to persist data in so on refresh you don't loose your progress as well as stores the game state in a database.
in the event of an error in development called a "cross origin error", clear local storage and refresh page, similar errors can be fixed by disabling browser extensions.

