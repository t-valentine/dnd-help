# dnd-app
This is a simple website designed to help my friends and I play Dungeons and Dragons. As such, it's tailored
to very specific recurring questions we encounter while
playing.

This uses simple HTML, CSS, and JavaScript so that the 
website can be deployed on Neocities. You can see the live version of the application [here](link.com).

## Using This Website
This is a simple website, so simply opening the `index.html` will allow you to begin using the website locally. You can use a wide variety of services to deploy the webiste (like Neocities, or if you want to get fanicer something like Vercel).

### Classes
Since this is tailored for my personal game, the logic for displaying player information is built around the character's names- NOT classes. If you want to tailor this app for your own game, or for a more general audience the following will need to be changed:
- 'character' Select on `line 56` of index.html   
    The select list only includes character names, this can be edited to reflect other players in your game or all classes
- characterHelp() on `line 47` of app.js

    This is the section that will need the most editing. On `line 66` there's a switch statement for selecting different characters. This can be set up for your own characters or all classes. There is no default on my switch statement, depending on the edits you make you want to ensure you have one.

    The helper method spellcasterHelp() on `line 83` won't need to be edited and if you're editing this so all classes can be searched, you can change the type parameter from a string to the character variable. 
- 'level' Select on `line 67` of index.html   
    To prevent players in my game from getting confused, only the player's current level and 2 more are shown. The logic in app.js can handle proficiency bonsuses for all 20 levels, just the front-end is limited.


## License
MIT License

Copyright (c) 2022 Tobias Wallace

Permission is hereby granted, free of charge, to any person obtaining a copy
of this software and associated documentation files (the "Software"), to deal
in the Software without restriction, including without limitation the rights
to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
copies of the Software, and to permit persons to whom the Software is
furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in all
copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
SOFTWARE.


