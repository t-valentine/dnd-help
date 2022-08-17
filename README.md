# dnd-app
This is a simple website designed to help my friends and I play Dungeons and Dragons. As such, it's tailored to very specific recurring questions we encounter while playing.

This uses simple HTML, CSS, and JavaScript so that the 
website can be deployed on Neocities. You can see the live version of the application [here](www.strahdhelp.neocities.org). 

## Using This Website
This is a simple website, so just opening `index.html` will allow you to begin using the website locally. You can use a wide variety of services to deploy the website (like Neocities, or if you want to get fanicer something like Vercel).

The website is built with mobile use in mind, but can also be used on a tablet or desktop without issue. (In the future, I'd like to add some responsive design so it looks less goofy on bigger screens. But for now it is what it is.) The website was tested on Chrome, Firefox, and Safari mobile browsers. 

## Editing the Site for Your Own Use
If you want to tailor this app for your own game, or for a more general audience the following will need to be changed:
- 'character' Select on `line 77` of index.html   
    The select list only includes character names, this can be edited to reflect other players in your game or all classes
- 'level' Select on `line 84` of index.html   
    To prevent players in my game from getting confused, only the player's current level and 2 more are shown. The logic in app.js can handle proficiency bonsuses for all 20 levels, just the front-end is limited.
- characterHelp() on `line 79` of app.js

    This is the section that will need the most editing. On `line 99` there's a switch statement for selecting different characters. This can be set up for your own characters or all classes. There is no default on my switch statement, depending on the edits you make you want to ensure you have one.

    The helper method spellcasterHelp() on `line 260` only has functionality for artificers, clerics, and striders (see below). If you want to implement this for more than 3 types of spellcasters, you may want to change the if/else statement for a switch statement.
- Karrde is a homebrew class called Strider, more information about that class can be found [here](https://dandwiki.com/wiki/strider_(5e_Class)). Our table decided her Spellcasting Ability is Charisma, as it's not listed on the homebrew page. Since she gets certain spells when leveling, there's an if/else statement on `line 300` you can delete. 

### Classes
Since this is tailored for my personal game, the logic for displaying player information is built around the character's names- NOT classes. It's also worth noting that I have used `_class` in code instead of `class` - class is a reserved keyword and can't be used as a variable in JavaScript. Unfortunately there wasn't another logical word choice I could think of, so the _ remains.

## License
MIT License

Copyright (c) 2022 Tobias Valentine

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


