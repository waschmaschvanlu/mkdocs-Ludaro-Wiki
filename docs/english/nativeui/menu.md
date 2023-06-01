## Code Documentation: NativeUI Lua Menu Creation


## Source Code
[source](https://github.com/iZerkahh/NativeUILua_Reloaded/blob/5c93b99dcc1c57bde782d1da8c1cb08778044a19/src/NativeUI.lua#L29)
```lua
--- CreateMenu
--- Creates a new NativeUI menu.
---@param Title string               -- The title of the menu.
---@param Subtitle string            -- The subtitle of the menu.
---@param X number                   -- The X position of the menu.
---@param Y number                   -- The Y position of the menu.
---@param TxtDictionary string       -- The text dictionary for the menu.
---@param TxtName string             -- The text name for the menu.
---@param Heading number             -- The heading of the menu.
---@param R number                   -- The red color value.
---@param G number                   -- The green color value.
---@param B number                   -- The blue color value.
---@param A number                   -- The alpha value.
---@return table                     -- The created menu object.
---@public
function NativeUI.CreateMenu(Title, Subtitle, X, Y, TxtDictionary, TxtName, Heading, R, G, B, A)
```

## Explanation

This function creates a new NativeUI menu. It takes several parameters to customize the appearance and behavior of the menu.

Parameters:

- `Title` (string): The title of the menu. It will be displayed at the top of the menu.
- `Subtitle` (string): The subtitle of the menu. It will be displayed below the title.
- `X` (number): The X position of the menu on the screen.
- `Y` (number): The Y position of the menu on the screen.
- `TxtDictionary` (string): The text dictionary for the menu. It determines the font used for the menu text.
- `TxtName` (string): The text name for the menu. It specifies the font style for the menu text.
- `Heading` (number): The heading of the menu. It represents the rotation angle of the menu.
- `R` (number): The red color value for the menu elements.
- `G` (number): The green color value for the menu elements.
- `B` (number): The blue color value for the menu elements.
- `A` (number): The alpha value for the menu elements (transparency).

Return Value:

- `table`: The created menu object. It can be used to add items, handle events, and customize the menu further.

Note: The function `NativeUI.CreateMenu` is a wrapper around the `UIMenu.New` function defined below. It sets default values for some parameters and provides a simplified interface for creating menus.

The `UIMenu.New` function is the core implementation of the menu creation process. It initializes various properties and elements of the menu.

It is recommended to refer to the source code links provided in the comments for a detailed understanding of the code logic and implementation details.

Please note that the code provided is part of the NativeUILua Reloaded library, which is a modified and improved version of the original NativeUI library for Grand Theft Auto V modding.


## Usage
```lua
 menu = NativeUI.CreateMenu("YOUR MENU NAME","YOUR MENU DESCRIPTION")
```

## source code
[source](https://github.com/iZerkahh/NativeUILua_Reloaded/blob/5c93b99dcc1c57bde782d1da8c1cb08778044a19/src/UIMenu/UIMenu.lua#LL27C1-L27C1)
```lua
function UIMenu.New(Title, Subtitle, X, Y, TxtDictionary, TxtName, Heading, R, G, B, A)
    local X, Y = tonumber(X) or 0, tonumber(Y) or 0
    if Title ~= nil then
        Title = tostring(Title) or ""
    else
        Title = ""
    end
    if Subtitle ~= nil then
        Subtitle = tostring(Subtitle) or ""
    else
        Subtitle = ""
    end
    if TxtDictionary ~= nil then
        TxtDictionary = tostring(TxtDictionary) or "commonmenu"
    else
        TxtDictionary = "commonmenu"
    end
    if TxtName ~= nil then
        TxtName = tostring(TxtName) or "interaction_bgd"
    else
        TxtName = "interaction_bgd"
    end
    if Heading ~= nil then
        Heading = tonumber(Heading) or 0
    else
        Heading = 0
    end
    if R ~= nil then
        R = tonumber(R) or 255
    else
        R = 255
    end
    if G ~= nil then
        G = tonumber(G) or 255
    else
        G = 255
    end
    if B ~= nil then
        B = tonumber(B) or 255
    else
        B = 255
    end
    if A ~= nil then
        A = tonumber(A) or 255
    else
        A = 255
    end
    local _UIMenu = {
        Logo = Sprite.New(TxtDictionary, TxtName, 0 + X, 0 + Y, 431, 107, Heading, R, G, B, A),
        Banner = nil,
        Title = UIResText.New(Title, 215 + X, 20 + Y, 1.15, 255, 255, 255, 255, 1, 1, 0),
        BetterSize = true,
        Subtitle = { ExtraY = 0 },
        WidthOffset = 0,
        Position = { X = X, Y = Y },
        DrawOffset = { X = 0, Y = 0 },
        Pagination = { Min = 0, Max = 10, Total = 9 },
        PageCounter = {
            isCustom = false,
            PreText = "",
        },
        Extra = {},
        Description = {},
        Items = {},
        Windows = {},
        Children = {},
        Controls = {
            Back = {
                Enabled = true,
            },
            Select = {
                Enabled = true,
            },
            Left = {
                Enabled = true,
            },
            Right = {
                Enabled = true,
            },
            Up = {
                Enabled = true,
            },
            Down = {
                Enabled = true,
            },
        },
        ParentMenu = nil,
        ParentItem = nil,
        _Visible = false,
        ActiveItem = 1000,
        Dirty = false;
        ReDraw = true,
        InstructionalScaleform = RequestScaleformMovie("INSTRUCTIONAL_BUTTONS"),
        InstructionalButtons = {},
        OnIndexChange = function(menu, newindex)
        end,
        OnListChange = function(menu, list, newindex)
        end,
        OnSliderChange = function(menu, slider, newindex)
        end,
        OnProgressChange = function(menu, progress, newindex)
        end,
        OnCheckboxChange = function(menu, item, checked)
        end,
        OnListSelect = function(menu, list, index)
        end,
        OnSliderSelect = function(menu, slider, index)
        end,
        OnProgressSelect = function(menu, progress, index)
        end,
        OnItemSelect = function(menu, item, index)
        end,
        OnMenuChanged = function(menu, newmenu, forward)
        end,
        OnMenuClosed = function(menu)
        end,
        Settings = {
            InstructionalButtons = true,
            MultilineFormats = true,
            ScaleWithSafezone = true,
            ResetCursorOnOpen = true,
            MouseControlsEnabled = true,
            MouseEdgeEnabled = true,
            ControlDisablingEnabled = true,
            DrawOrder = nil,
            Audio = {
                Library = "HUD_FRONTEND_DEFAULT_SOUNDSET",
                UpDown = "NAV_UP_DOWN",
                LeftRight = "NAV_LEFT_RIGHT",
                Select = "SELECT",
                Back = "BACK",
                Error = "ERROR",
            },
            EnabledControls = {
                Controller = {
                    { 0, 2 }, -- Look Up and Down
                    { 0, 1 }, -- Look Left and Right
                    { 0, 25 }, -- Aim
                    { 0, 24 }, -- Attack
                },
                Keyboard = {
                    { 0, 201 }, -- Select
                    { 0, 195 }, -- X axis
                    { 0, 196 }, -- Y axis
                    { 0, 187 }, -- Down
                    { 0, 188 }, -- Up
                    { 0, 189 }, -- Left
                    { 0, 190 }, -- Right
                    { 0, 202 }, -- Back
                    { 0, 217 }, -- Select
                    { 0, 242 }, -- Scroll down
                    { 0, 241 }, -- Scroll up
                    { 0, 239 }, -- Cursor X
                    { 0, 240 }, -- Cursor Y
                    { 0, 31 }, -- Move Up and Down
                    { 0, 30 }, -- Move Left and Right
                    { 0, 21 }, -- Sprint
                    { 0, 22 }, -- Jump
                    { 0, 23 }, -- Enter
                    { 0, 75 }, -- Exit Vehicle
                    { 0, 71 }, -- Accelerate Vehicle
                    { 0, 72 }, -- Vehicle Brake
                    { 0, 59 }, -- Move Vehicle Left and Right
                    { 0, 89 }, -- Fly Yaw Left
                    { 0, 9 }, -- Fly Left and Right
                    { 0, 8 }, -- Fly Up and Down
                    { 0, 90 }, -- Fly Yaw Right
                    { 0, 76 }, -- Vehicle Handbrake
                },
            },
        }
    }

    if Subtitle ~= "" and Subtitle ~= nil then
        _UIMenu.Subtitle.Rectangle = UIResRectangle.New(0 + _UIMenu.Position.X, 107 + _UIMenu.Position.Y, 431, 37, 0, 0, 0, 255)
        _UIMenu.Subtitle.Text = UIResText.New(Subtitle, 8 + _UIMenu.Position.X, 110 + _UIMenu.Position.Y, 0.35, 245, 245, 245, 255, 0)
        _UIMenu.Subtitle.BackupText = Subtitle
        _UIMenu.Subtitle.Formatted = false
        if string.starts(Subtitle, "~") then
            _UIMenu.PageCounter.PreText = string.sub(Subtitle, 1, 3)
        end
        _UIMenu.PageCounter.Text = UIResText.New("", 425 + _UIMenu.Position.X, 110 + _UIMenu.Position.Y, 0.35, 245, 245, 245, 255, 0, "Right")
        _UIMenu.Subtitle.ExtraY = 37
    end

    _UIMenu.ArrowSprite = Sprite.New("commonmenu", "shop_arrows_upanddown", 190 + _UIMenu.Position.X, 147 + 37 * (_UIMenu.Pagination.Total + 1) + _UIMenu.Position.Y - 37 + _UIMenu.Subtitle.ExtraY, 40, 40)
    _UIMenu.Extra.Up = UIResRectangle.New(0 + _UIMenu.Position.X, 144 + 38 * (_UIMenu.Pagination.Total + 1) + _UIMenu.Position.Y - 37 + _UIMenu.Subtitle.ExtraY, 431, 18, 0, 0, 0, 200)
    _UIMenu.Extra.Down = UIResRectangle.New(0 + _UIMenu.Position.X, 144 + 18 + 38 * (_UIMenu.Pagination.Total + 1) + _UIMenu.Position.Y - 37 + _UIMenu.Subtitle.ExtraY, 431, 18, 0, 0, 0, 200)

    _UIMenu.Description.Bar = UIResRectangle.New(_UIMenu.Position.X, 123, 431, 4, 0, 0, 0, 255)
    _UIMenu.Description.Rectangle = Sprite.New("commonmenu", "gradient_bgd", _UIMenu.Position.X, 127, 431, 30)
    _UIMenu.Description.Text = UIResText.New("Description", _UIMenu.Position.X + 5, 125, 0.35)

    _UIMenu.Background = Sprite.New("commonmenu", "gradient_bgd", _UIMenu.Position.X, 144 + _UIMenu.Position.Y - 37 + _UIMenu.Subtitle.ExtraY, 290, 25)

    if _UIMenu.BetterSize == true then
        _UIMenu.WidthOffset = math.floor(tonumber(69))
        _UIMenu.Logo:Size(431 + _UIMenu.WidthOffset, 107)
        _UIMenu.Title:Position(((_UIMenu.WidthOffset + 431) / 2) + _UIMenu.Position.X, 20 + _UIMenu.Position.Y)
        if _UIMenu.Subtitle.Rectangle ~= nil then
            _UIMenu.Subtitle.Rectangle:Size(431 + _UIMenu.WidthOffset + 100, 37)
            _UIMenu.PageCounter.Text:Position(425 + _UIMenu.Position.X + _UIMenu.WidthOffset, 110 + _UIMenu.Position.Y)
        end
        if _UIMenu.Banner ~= nil then
            _UIMenu.Banner:Size(431 + _UIMenu.WidthOffset, 107)
        end
    end

    Citizen.CreateThread(function()
        if not HasScaleformMovieLoaded(_UIMenu.InstructionalScaleform) then
            _UIMenu.InstructionalScaleform = RequestScaleformMovie("INSTRUCTIONAL_BUTTONS")
            while not HasScaleformMovieLoaded(_UIMenu.InstructionalScaleform) do
                Citizen.Wait(0)
            end
        end
    end)
    return setmetatable(_UIMenu, UIMenu)
end
```
