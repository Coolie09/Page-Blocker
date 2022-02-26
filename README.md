# PageBlocker [2.0] (Almost finished version)

## Warning! 
This code may contain (unlikely) a few bugs! Please contact me in therefor in the issues section! Thx a lot! <br>
It is important, that the user, that the page is blocked for, dosn't know tampermonkey! That's why it is good to release it from the Chrome-bar! <br>

## What does this script do?
This script blocks any page you want, that needs a bit more security. Therefore, the passwort is crypted and is going to change itself with the time (coming soon!). Also it is possible to block pages with the URL. This can be putten in the information-array. (Coming soon!).
``` python
let information = { 
    [...]
    host: ["ogs.google.com", "www.google.de", "www.google.fr", "wilhelm-gym.de"]
}
```
It is also possible to fill in the username, that'll be displayed in the prompt of the blocked page. 

``` python
let information = { 
     blocker: undefined,
}
```
The default value is undefined.

## How to use this script?
To use this script, you have to have the chrome-extension Tampermonkey. After adding the script there, you have to press <b>^<b> to block the page or to add a passwort. <br>
The passwort is just hardly changable, so trie to remember it good. Otherwise, I would betray the logic of the script, which isn't propably very hard to understand. <br>
    
## Future Add-Ons:
- Add timer for page block <br>
- make passwort change dynamically 
- add specific URLs to block

@Coolie09 2022 ©
