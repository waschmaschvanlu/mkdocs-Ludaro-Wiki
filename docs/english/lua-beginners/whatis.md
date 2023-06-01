# Introduction to Lua Basics and Usage

This page provides an introduction to basic Lua concepts and their practical application. Lua is a powerful programming language commonly used in Fivem scripting to create dynamic and interactive experiences. Understanding these fundamental concepts is essential for effectively utilizing Lua in your scripts.

## Local Variables

In Lua, local variables are used to store and manipulate data within a specific scope. They allow you to assign values to variables and reference them later in your code. Here are some examples of local variables:

```lua
local playerName = "John"
local playerAge = 25
```

In the code snippet above, `playerName` is assigned the value "John", and `playerAge` is assigned the value 25. These variables can be used throughout your script to perform various operations and store temporary or permanent data.

## Data Types

Lua supports various data types that determine how values are stored and manipulated. The most common data types in Lua are:

- **Strings**: Strings represent sequences of characters enclosed in quotation marks. They are used to store and manipulate textual data. Here's an example:

  ```lua
  local message = "Hello, Lua!"
  ```

- **Numbers**: Numbers represent numerical values, including integers and floating-point numbers. They are used for mathematical calculations. Here's an example:

  ```lua
  local count = 10
  local pi = 3.14
  ```

- **Booleans**: Booleans represent logical values and can only be `true` or `false`. They are used in conditional statements and logical operations. Here's an example:

  ```lua
  local isReady = true
  local isGameOver = false
  ```

- **Tables**: Tables are Lua's primary data structure, allowing you to store and organize complex data. They can hold multiple values and associate them with keys. Tables can be used to represent arrays, dictionaries, and objects. Here's an example:

  ```lua
  local player = {
    name = "John",
    level = 5,
    health = 100,
  }
  ```

- **Functions**: Functions are blocks of reusable code that can be called and executed. They are essential for organizing and structuring your script's logic. Here's an example:

  ```lua
  local function greetPlayer(name)
    print("Hello, " .. name .. "!")
  end

  greetPlayer("John") -- Output: Hello, John!
  ```

These data types provide the building blocks for creating dynamic and interactive scripts in Lua.

## Control Flow

Control flow statements allow you to control the execution of your script based on certain conditions. Lua supports conditional statements and loops.

- **Conditional Statements**: Conditional statements are used to perform different actions based on specific conditions. The most common conditional statements are `if`, `else`, and `elseif`. Here's an example:

  ```lua
  local temperature = 25

  if temperature > 30 then
    print("It's hot!")
  elseif temperature > 20 then
    print("It's warm.")
  else
    print("It's cool.")
  end
  ```

- **Loops**: Loops are used to repeat a set of instructions multiple times. Lua provides different types of loops, including `while` and `for`. Here's an example of a `while` loop:

  ```lua
  local countdown = 10

  while countdown > 0 do
    print(countdown)
    countdown = countdown - 1
  end
  ```

Lua's control flow statements enable you to create dynamic and flexible scripts that respond to different conditions and iterate over data.

## Functions and Modules

Functions in Lua are blocks of reusable code that can be called

 and executed. They are essential for organizing and structuring your script's logic. Here's an example of a function that calculates the square of a number:

```lua
local function calculateSquare(number)
  return number * number
end

local result = calculateSquare(5)
print(result) -- Output: 25
```

Lua also supports modules, which are collections of related functions and variables that can be used across multiple scripts. Modules help organize code and promote reusability. Here's an example of a module:

```lua
-- File: mathUtils.lua
local mathUtils = {}

function mathUtils.calculateSquare(number)
  return number * number
end

return mathUtils
```

In another script, you can import and use the functions from the module like this:

```lua
local mathUtils = require("mathUtils")
local result = mathUtils.calculateSquare(5)
print(result) -- Output: 25
```

Using functions and modules allows you to create modular and reusable code, improving code organization and maintainability.


## Threads

In Fivem, a thread refers to a function created using `Citizen.CreateThread`. A thread is executed repeatedly at a specified interval, often used for tasks such as checking if a player is within a certain distance. However, it is important to use threads cautiously, as improper usage can cause server crashes when combined with other threaded operations.

Some operations need to run every millisecond, but constantly checking certain conditions at that frequency can make the script laggy. Instead, you can specify the interval using `Citizen.Wait` to pause the thread execution. For example:

```lua
Citizen.CreateThread(function()
  while true do
    Citizen.Wait(5000) -- Wait for 5000 milliseconds (5 seconds)
    print("Heyo")
  end
end)
```

The above code will print "Heyo" every 5 seconds.

## NUI and NativeUI

- NUI (Natural User Interface): NUI refers to HTML websites embedded within Fivem scripts, such as an inventory interface. To work with NUI, you need knowledge of CSS, HTML, and basic JavaScript.

- NativeUI: NativeUI is a built-in user interface in F

ivem that can be controlled using Lua.

## Server/Client Events

Server/Client events are similar to functions, but they can be used across multiple scripts or Lua files. They enable communication between the server and clients.

For example, let's say we want to register a command (`/test`) that executes something on the server side and prints a message in the client console. We can achieve this using the `RegisterCommand` function:

```lua
RegisterCommand('test', function(source, args, rawCommand)
  print("Hey, I'm in the client console!")
  TriggerServerEvent("thisisaserverevent", args[0])
end)
```

The above code registers the command `test` and defines the actions to be executed when it is triggered. It prints a message in the client console and triggers a server event named `thisisaserverevent` with the argument `args[0]`.

For more information on server functions, refer to the [Fivem scripting reference](https://docs.fivem.net/docs/scripting-reference/runtimes/lua/server-functions/).

## Callbacks

Callbacks are a way to exchange data between the server and client. One commonly used callback system is the ESX callback system. It allows you to send and receive data between the server and client within a single function. Here's an example using the ESX callback system:

In client.lua:
```lua
ESX.TriggerServerCallback("NameYourOwnTrigger", function(playersonline, myOwnID)
  print(playersonline .. " are online")
  local myownID = GetPlayerServerId(PlayerId()) -- Retrieve your own player ID
end, myOwnID)
```

In server.lua:
```lua
ESX.RegisterServerCallback('NameYourOwnTrigger', function(myOwnID, cb)
  local onlineplayers = 0
  for _, playerId in ipairs(GetPlayers()) do
    onlineplayers = onlineplayers + 1
  end

  print("Player that used this function was: " .. myOwnID)
  cb(onlineplayers)
end)
```

The code above demonstrates how to retrieve the number of players online and print it on the client side. It also sends the client's player ID back to the server.

# Building and Organizing a FiveM Script

To effectively use a script in FiveM, it's important to understand how scripts are structured and organized.

## Script Components: Server and Client

FiveM scripts consist of two main components: the server-side and the client-side. These components communicate with each other to create a synchronized and interactive experience.

- **Server-Side**: The server-side of the script focuses on managing server-related tasks, such as player synchronization and database operations. It ensures the smooth functioning of the server and handles critical operations that affect the gameplay experience.

- **Client-Side**: The client-side of the script is responsible for handling game-related functionalities. It interacts with the game environment, spawns vehicles, changes weather conditions, and performs other client-specific actions. The client-side requests permission from the server-side for certain operations to maintain server authority and security.

## Shared Scripts

In some cases, scripts may have components that are shared between the server-side and the client-side. These shared scripts typically contain configuration settings and shared functionalities. For example, a shared script may define settings like player movement speed or game rules that need to be consistent on both sides.

The purpose of shared scripts is to centralize common code and ensure that both the server and client have access to the same settings and functionalities without duplicating the code. By keeping shared scripts separate, it promotes modularity and simplifies maintenance.

## The fxmanifest.lua File

The `fxmanifest.lua` file is a crucial component of a FiveM script. It provides important information about the script and its dependencies. Here's an example from a trucker job script:

```lua
fx_version 'cerulean'
game 'gta5'

name "Trucker job"
author 'Sukra, Ludaro'
description 'Trucker Job for esx'
version '3.0'

shared_scripts {
	'config.lua'
}

client_scripts {
	'client.lua'
}

server_scripts {
	'server.lua'
}
```

In this example, the `fx_version` specifies the version of the FiveM framework required. The `game` field defines the targeted game for the script.

The script's name, author, description, and version provide additional details about the script.

The `shared_scripts` section lists the shared script files, such as `config.lua`, that contain configurations and shared functionalities used by both the server and client.

The `client_scripts` section lists the script files specific to the client-side.

The `server_scripts` section lists the script files specific to the server-side.

By examining the `fxmanifest.lua`, you can understand the structure of the script and which parts are intended for the server-side or the client-side.

## GitHub and Markdown

To gain a deeper understanding of how scripts are built and organized, you can explore examples on GitHub. GitHub repositories often contain detailed information about script structure, dependencies, and usage instructions.

Markdown files, like the one you are currently reading, are commonly used in repositories to provide explanations, tutorials, and other documentation related to the script. These files make it easier to grasp the concepts and follow the instructions provided.

By exploring GitHub repositories and markdown files, you can learn more about the intricacies of script development and enhance your understanding of FiveM scripting.

