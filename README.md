# ToDo

Add Socket Room functionality 
Add Heroku
Remove inline styling change to component level for what isnt inside css file
Display other players score
Update how to play
Update create room screen
Calculate players score from array of pushed roundPoint's
Add page transitions 
Add mongo DB for better score keeping on refresh or add to local storage

## how to use
inside root folder "npm run devStart" 
"cd client" into client folder and run "npm start" or "yarn start"

## what is it
this is a project I made to learn how to get a better understanding of passing props and using socket io to connect multiple users to a server via persisting connection.
it uses a custom hook "useLocalStorage" to to persist data in so on refresh you don't loose your progress.
in the event of an error in development called a "cross origin error", clear local storage and refresh page.

