ntroduction
NativeUI and NativeUIReloaded are almost the same with some small Feature and Performance  Differences i would advise you use NativeUIReloaded if possible but both work almost  the same code wise (except the fxmanifest)
to use NativeUI or NativeUI Reloaded (im gonna refer both to NativeUI) u firstly need to download them, 
its very very important to not rename them, because they use direct paths to their files!  they wont work otherwise

if you wanna use both of them in your script you should do 2 things:
1. setting up the fxmanifest
go into your fxmanifest and add this under your client scripts 
client_scripts {
	'@NativeUILua_Reloaded/src/NativeUIReloaded.lua',
	'client.lua' -- your client scripts here
}
go into your fxmanifest and add this under your client scripts 

client_scripts {
	'@NativeUI/NativeUI.lua',
	'client.lua' -- your client scripts here
}
sadly.. you cant, if you insert both it will just take the top one, you need to decide!
for this step (after fxmanifest) and all other steps it doesnt matter which NativeUI version you have if there is a difference i will point it out by these warnings
2. using NativeUI in our script
to use nativeui in our scripts you need to firstly initialize it, you do it by calling a native (thats in NativeUI) like this:
this native (_menuPool) can be renamed to anything else i just call it _menuPool because i learned it that way
_menuPool = NativeUI.CreatePool()
this snippet should be on top of your file.

after that we need a thread (read here about what a thread is and how its used) to process our menu every millisecond u can build it into a thread or make a new one for the part of this tutorial im gonna make a new one! <3

Citizen.CreateThread(function()
    while true do
        _menuPool:ProcessMenus()
        -- if you want add any other stuff here
    end
end)

-- to make it more performant i am advising you to make the menupool in its own thread, and make it like this:

Citizen.CreateThread(function()
    while true do
        Citizen.Wait(1)
        if _menuPool:IsAnyMenuOpen() then
            _menuPool:ProcessMenus()
        else
            Citizen.Wait(150) -- this small line
        end
    end
end)
Now that the menu is in the script finally we are onto..
3. Creating a Menu
To Create a menu u need to first know how lua works and what functions are (you can read about it here)

in our example we create a function that 
a) Creates the menu
b) Opens the menu for us
(Insert "YOUR MENU NAME" and "YOUR MENU DESCRIPTION" with your desires)
function OpenMenu()
    mainmenu = NativeUI.CreateMenu("YOUR MENU NAME","YOUR MENU DESCRIPTION")
	_menuPool:Add(mainmenu)
	_menuPool:RefreshIndex()
	_menuPool:MouseControlsEnabled (false)
	_menuPool:MouseEdgeEnabled (false)
	_menuPool:ControlDisablingEnabled(false)
	mainmenu:Visible(true)
end
in this example "mainmenu" is an variable and can be switched out by any name you like :)
thats it, thats easy right? holy shit, u made ur first menu! what a freaking legend!

Now that our menu is not just emtpy.. we are gonna add an item to it 
An Item is a Selectable Variable in a Menu (as example in ur clothes menu ur torso is a item i can choose and define)
we do that like this:
function OpenMenu()
    mainmenu = NativeUI.CreateMenu("YOUR MENU NAME","YOUR MENU DESCRIPTION")
	_menuPool:Add(mainmenu)
	_menuPool:RefreshIndex()
	_menuPool:MouseControlsEnabled (false)
	_menuPool:MouseEdgeEnabled (false)
	_menuPool:ControlDisablingEnabled(false)
	mainmenu:Visible(true)
	local ourfirstitem = NativeUI.CreateItem("Item Name", "Item Description")
	mainmenu:AddItem(ourfirstitem)
end
ourfirstitem again, is a variable which can be defined by you and changed to whatever u like :)
Now we are gonna use it.

Lets say we want.. to only open it when
local Truckmenu = vector3(1233.8623, -3235.2698, 5.5287)
-- for TruckMenu u can insert ur own Coordinates! just insert them below in the code or up here <3
Citizen.CreateThread(function()
    while true do
        Citizen.Wait(0)
        local pedCoord = GetEntityCoords(PlayerPedId())
        if #(Truckmenu - pedCoord) < 3.0 then -- there are alot of ways to check the distance, but this one is the most performant it will subtract both coords, and out comes how near the person is, if it is under 3.0 then..
            ESX.ShowHelpNotification(Drücke Hier um dein Truckermenü zu Öffnen!<3)
            if IsControlJustReleased(0, 38) then
                OpenMenu() -- this is a new function, that will open our menu
				end
            end
    end
end)

 Citizen.CreateThread(function()
    while true do
        _menuPool:ProcessMenus()
        Citizen.Wait(0)
        local ped = PlayerPedId()
        if isPedInAnyVehicle(ped) then
            if IsControlJustReleased(0, 38) then
                OpenMenu()
				end
            end
    end
end)

both codes are stolen and modified from my truckermenu
Now we have created our first menu!  for further instructions go along the whole NativeUI-WIKI-ENG Path, i will explain everything to u there, just try out your menu!