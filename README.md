# PageBlocker [2.0] (Almost finished version)

## Warning! 
This code may contain (unlikely) a few bugs! Please contact me in therefor in the issues section! Thx a lot! <br>

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
    host: ["ogs.google.com", "www.google.de", "www.google.fr", "wilhelm-gym.de"]
}
```

This idea is just going to work if the others don't understand the way this code works, so dont tell anyone about it!

# How to use?

1.) Install Tampermonkey
2.) Add this script to it
3.) If you want to block a page, press ^
4.) Add a password 
5.) Press Tab to unlock the page again
6.) Enjoy!

DO NOT DELETE THE LOCALSTORAGE! 
I am working on an aprovement for this! 

Future Add-Ons:

1.) Save stuff saver 
2.) Add timer for page block
3.) dynamic passwort changer  
