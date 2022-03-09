# PageBlocker [2.1] (Almost finished version)

## Warning! ⚠️
This code may contain (unlikely) a few bugs! Please contact me in therefor in the issues section! Thx a lot! <br>
It is important, that the user, that the page is blocked for, dosn't know tampermonkey! That's why it is good to release it from the Chrome-bar! <br>

## What does this script do?
This script blocks any page you want, that needs a bit more security. Therefore, the passwort is crypted and is going to change itself with the time (coming soon!). Also it is possible to block page and its subpages (e.g. www.google.de and www.google.de/search?q=test) with the URL. This can be put in the information-array.
``` 
let information = { 
    [...]
    host: ["ogs.google.com", "www.google.de", "www.google.fr", "wilhelm-gym.de"]
}
```
The URL you have to add is the hostname. To find out what the hostname is, you have to go to the repective page and put this into the console: <br>
``` 
location.hostname 
```
It is going to return the hostname which you have to copy and paste into the array.<br>
It is also possible to fill in the username, that'll be displayed in the prompt of the blocked page. 

``` 
let information = { 
     blocker: undefined,
     host: [...]
}
```
The default value is undefined.

## How to use this script?
To use this script, you have to have the chrome-extension Tampermonkey. After adding the script there, you have to press <b>^</b> to block the page or to add a passwort. <br>
The passwort is just hardly changable, so trie to remember it good. Otherwise, I would betray the logic of the script, which isn't propably very hard to understand. <br>
    
## Future Add-Ons:
- Add timer for page block ⏱️ <br> 
- make passwort change (more) dynamically 
- add specific URLs to block - DONE 27.01.2022

@Coolie09 2022 ©
