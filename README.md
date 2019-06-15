# Welcome to the coffee-app!
A simple coffee ordering application using CLI.

**Dependencies :**
* Node ([https://www.nodejs.org](https://www.nodejs.org))
* npm 
* git
* Commander
* Inquirer
* Figlet
* Colors

**Commands :**
```sh-session
$ git clone https://github.com/rohankrx/coffee-app.git
$ cd /coffee-app
$ npm i -g ./
```
**Usage :**

## `coffee-app --help`
> shows help option
```
Usage: coffee-app [options] [command]

Options:
  -h, --help  output usage information

Commands:
  list|l      lists types of coffee available in the application
  order|o     order coffee from application
```

## `coffee-app l`
> shows coffee menu
```
   ____       __  __             __  __                  
  / ___|___  / _|/ _| ___  ___  |  \/  | ___ _ __  _   _ 
 | |   / _ \| |_| |_ / _ \/ _ \ | |\/| |/ _ \ '_ \| | | |
 | |__| (_) |  _|  _|  __/  __/ | |  | |  __/ | | | |_| |
  \____\___/|_| |_|  \___|\___| |_|  |_|\___|_| |_|\__,_|
                                                         
1. Expresso:              $5.99
2. Latte:                 $4.25
3. Cappuchino:            $3.99
4. Americano:             $2.99
5. Macchiato:             $3.75
```

## `coffee-app o`
> takes input from the user
```sh-session
? Choose your Coffee! Expresso        ($5.99)
? How much sugar? Normal              (3 qty)
? Decaf?? No
? Cold Coffee?? No
? Served In? Takeaway!
? Would you like a Stirrer? Yes
```
> prints final order
```
  _____ _             _    ___          _           
 |  ___(_)_ __   __ _| |  / _ \ _ __ __| | ___ _ __ 
 | |_  | | '_ \ / _` | | | | | | '__/ _` |/ _ \ '__|
 |  _| | | | | | (_| | | | |_| | | | (_| |  __/ |   
 |_|   |_|_| |_|\__,_|_|  \___/|_|  \__,_|\___|_|   
                                                    
# Coffee:         Expresso        ($5.99)
# Sugar:          Normal          (3 qty)
# Decaf:          false
# Cold:           false
# Served In:      Takeaway!
# Stirrer:        true
```
