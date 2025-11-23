//
// JSWindows (Beta)
// JavaScript Windowing and User Interface System
// Version 0.6
//
//
// Supported on all major browsers (Chrome, Firefox, Safari, IE)
// No External Dependencies
//
//
// Copyright (c) 2005-2014 David Tulga
// All rights reserved.
//

//
// JSWindows Functions
//

var JSWindows = new Object();

JSWindows.WindowType = new Object();

// Window Types (Only 1 allowed; Change with window_obj.type)
// JSWindow:
JSWindows.WindowType.NORMAL = 0;
// Moves, dynamic depth; DEFAULT
JSWindows.WindowType.STATIC = 1;
// Does not move, always on bottom, cannot close
JSWindows.WindowType.MODAL = 2;
// Moves, always on top, grays out screen, cannot click anything else until done
// JSDocumentWindow:
JSWindows.WindowType.DOCUMENT = -1;
// Fills the entire document, only one can be present at a time, must be created with the JSDocumentWindow function
// JSFloatingWindow:
JSWindows.WindowType.FLOATING = -2;
// Makes a window without a border and cannot be dragged.  This is useful for splash screens and pop-up selectors

// This creates a custom JSWindow, given the appropriate parameters and source object
// JSWindow ( Title, Source Object, Width, Height, (Left), (Top) )
function JSWindow(Title, Source, Width, Height) {
    this.js_type = "JSWindow";
    this.type = JSWindows.WindowType.NORMAL;
    this.closeButton = true;
    this.title = Title;
    this.source = Source;
    this.rendered = false;
    this.width = Width;
    this.height = Height;
    if (JSWindow.arguments.length > 5) {
        this.pos_left = JSWindow.arguments[4];
        this.pos_top = JSWindow.arguments[5];
    } else if (JSWindow.arguments.length > 4) {
        this.pos_left = JSWindow.arguments[4];
        this.pos_top = 50 + Math.floor(Math.random() * 51);
    } else {
        this.pos_left = 50 + Math.floor(Math.random() * 51);
        this.pos_top = 50 + Math.floor(Math.random() * 51);
    }
    this.titleHeight = 30;
    this.windowN = JSAddNewWin(this);
    this.windowId = "JSWin" + this.windowN;
    this.zIndex = 0;

    // This returns the HTML of the rendered window
    this.get_html = function() {
        this.zIndex = JSGetNextFocusLevel();
        var Html = "<div id='" + this.windowId + "' onclick='JSFocusWin(" + this.windowN + ");' class='JSWindow' style='position: absolute; visibility: hidden; z-index: " + this.zIndex + "; left: " + this.pos_left + "px; top: " + this.pos_top + "px; width: " + (this.width + 2) + "px; height: " + (this.height + 2) + "px; '><div style='position: absolute; left: 0; top: 0; border: 1px solid #007BA7; width: " + this.width + "px; height: " + this.height + "px;'>";
        Html += "<div id='JSTitle" + this.windowN + "' class='JSTitle' onclick='do_nothing();' onmousedown='JSDragWin(" + this.windowN + ");' ontouchstart='JSDragWin(" + this.windowN + ");' ontouchend='JSStopDrag();' ontouchcancel='JSStopDrag();' onmouseup='JSStopDrag();' style='position: absolute; width: " + this.width + "px; height: " + this.titleHeight + "px; left: 0; top: 0;'><table width='100%' height='100%' cellpadding='0' cellspacing='0' border='0'><tr><td style='vertical-align: middle;'>&nbsp;<span id='JSTitleElement" + this.windowN + "'>" + this.title + "</span></td></tr></table>";
        if (this.closeButton) {
            Html += "<div id='JSCloseX" + this.windowN + "' class='JSCloseX' style='position: absolute; width: 22px; height: 22px; left: " + (this.width - 26) + "px; top: 2px;' onmouseover='JSXHover(" + this.windowN + ")' onmouseout='JSXUnHover(" + this.windowN + ")' onclick='JSHandleClose(" + this.windowN + ")'><div style='position: absolute; top: 0px; left: 4px;'><img src='X.png'></div></div>";
        }
        Html += "</div>";
        Html += "<div id='JSBody" + this.windowN + "' class='JSBody' style='position: absolute; width: " + this.width + "px; height: " + (this.height - this.titleHeight) + "px; left: 0; top: " + this.titleHeight + "px;'>";
        for (var i = 0; i < this.source.src_array.length; i++) {
            if (!this.source.src_array[i].manual_render) {
                Html += this.source.src_array[i].get_html(this.windowN, i);
            } else {
                this.source.src_array[i].get_html(this.windowN, i);
            }
        }
        Html += "</div></div></div>";
        return Html;
    }

    // This returns the HTML element of the window (to change the window's position, etc.)
    this.GetElement = function() {
        return GetId(this.windowId);
    }

    // This returns the HTML element for the window title (to change the title text, etc.)	
    this.GetTitleElement = function() {
        return GetId("JSTitleElement" + this.windowN);
    }

    // This renders the window (note that center and show auto-render, but if you want to change properties of elements, you need to call this first)
    this.render = function() {
        if (!this.rendered) {
            var outerDiv = document.createElement('div');
            outerDiv.setAttribute('id', 'JSContainer' + this.windowN);
            var Html = this.get_html();
            outerDiv.innerHTML = Html;
            GetId('JSWinDiv').parentNode.insertBefore(outerDiv, GetId('JSWinDiv'));
            this.rendered = true;
        }
    }

    // This re-renders the window, for example if the source has changed
    this.re_render = function() {
        if (this.rendered) {
            GetId('JSContainer' + this.windowN).innerHTML = this.get_html();
        } else {
            this.render();
        }
    }

    // This event is called before the window closes (the X is clicked), if this function returns true, then the window closes
    this.onbeforeclose = function() {
        return true;
    }

    // This event is called when the window actually closes (cannot affect this outcome)
    this.onclose = function() {// Do nothing by default
    }

    // This un-renders the window
    this.destroy = function() {
        var node = GetId('JSContainer' + this.windowN);
        node.parentNode.removeChild(node);
        this.rendered = false;
    }

    // This centers the window on the screen (will auto-render if not rendered yet, but doesn't show/hide)
    this.center = function() {
        if (!this.rendered) {
            this.render();
        }
        var window_size = GetWindowSize();

        GetId(this.windowId).style.left = JSRestrictMin(((window_size.width - this.width) / 2)) + "px";
        GetId(this.windowId).style.top = JSRestrictMin((window_size.scroll + (window_size.height - this.height) / 2)) + "px";
    }

    this.center_relative_size = function(parent_width, parent_height) {
        if (!this.rendered) {
            this.render();
        }

        GetId(this.windowId).style.left = JSRestrictMin(((parent_width - this.width) / 2)) + "px";
        GetId(this.windowId).style.top = JSRestrictMin(((parent_height - this.height) / 2)) + "px";
    }

    // Called by all sub-elements when they are clicked/focused to bring the window to the front
    this.focus = function() {
        if (this.rendered) {
            if (JSCurrentFocus != this.windowN) {
                this.zIndex = JSGetNextFocusLevel();
                GetId(this.windowId).style.zIndex = this.zIndex;
                JSCurrentFocus = this.windowN;
            }
        }
    }

    // Show the window to make it visible (will auto-render)
    this.show = function() {
        if (this.rendered) {
            //setTimeout("JSWinList[" + this.windowN + "].focus();", 1);
            JSWinList[this.windowN].focus();
        } else {
            this.render();
        }
        GetId(this.windowId).style.visibility = "visible";
        GetId(this.windowId).style.zIndex = this.zIndex;
    }

    // Will hide the window to make it invisible (will keep the window rendered)
    this.hide = function() {
        if (this.rendered) {
            GetId(this.windowId).style.visibility = "hidden";
            GetId(this.windowId).style.zIndex = -101;
        }
    }

    // Will close the window (without any onbeforeclose event)
    this.close = function() {
        this.hide();
        this.onclose();
    }

    // Returns if this window is visible or not
    this.is_visible = function() {
        if (this.rendered) {
            return !(GetId(this.windowId).style.visibility == "hidden");
        } else {
            return false;
        }
    }
}

// This creates a window that fills the entire document, from the given source
// It cannot be moved or change levels/focus
// JSDocumentWindow ( Source Object )
function JSDocumentWindow(Source) {
    this.js_type = "JSDocumentWindow";
    this.type = JSWindow_DOCUMENT;
    this.closeButton = false;
    this.title = false;
    this.source = Source;
    this.rendered = false;
    this.width = false;
    this.height = false;
    this.pos_left = false;
    this.pos_top = false;
    this.titleHeight = false;
    this.windowN = JSAddNewWin(this);
    this.windowId = "JSWin" + this.windowN;

    // This returns the HTML of the rendered window
    this.get_html = function() {
        var Html = "<div id='" + this.windowId + "' class='JSDocumentWindow' style='position: absolute; visibility: hidden; z-index: 99; left: 0; top: 0; width: 100%; height: 100%;'>";
        for (var i = 0; i < this.source.src_array.length; i++) {
            if (!this.source.src_array[i].manual_render) {
                Html += this.source.src_array[i].get_html(this.windowN, i);
            } else {
                this.source.src_array[i].get_html(this.windowN, i);
            }
        }
        Html += "</div>";
        return Html;
    }

    // This returns the HTML element of the window
    this.GetElement = function() {
        return GetId(this.windowId);
    }

    // Note that there is no title element!

    // This renders the window (note that center and show auto-render, but if you want to change properties of elements, you need to call this first)
    this.render = function() {
        if (!this.rendered) {
            var outerDiv = document.createElement('div');
            outerDiv.setAttribute('id', 'JSContainer' + this.windowN);
            var Html = this.get_html();
            outerDiv.innerHTML = Html;
            GetId('JSWinDiv').parentNode.insertBefore(outerDiv, GetId('JSWinDiv'));
            this.rendered = true;
        }
    }

    // This re-renders the window, for example if the source has changed
    this.re_render = function() {
        if (this.rendered) {
            GetId('JSContainer' + this.windowN).innerHTML = this.get_html();
        } else {
            this.render();
        }
    }

    // This event is called before the window closes (the X is clicked), if this function returns true, then the window closes
    this.onbeforeclose = function() {
        return true;
    }

    // This event is called when the window actually closes (cannot affect this outcome)
    this.onclose = function() {// Do nothing by default
    }

    // This un-renders the window
    this.destroy = function() {
        var node = GetId('JSContainer' + this.windowN);
        node.parentNode.removeChild(node);
        this.rendered = false;
    }

    // Note that DocumentWindows cannot be centered or focused, as they take up all available space (and are always behind other windows)

    // Show the window to make it visible (will auto-render)
    this.show = function() {
        if (this.rendered) {
            //setTimeout("JSWinList[" + this.windowN + "].focus();", 1);
            JSWinList[this.windowN].focus();
        } else {
            this.render();
        }
        GetId(this.windowId).style.visibility = "visible";
    }

    // Will hide the window to make it invisible (will keep the window rendered)
    this.hide = function() {
        if (this.rendered) {
            GetId(this.windowId).style.visibility = "hidden";
        }
    }

    // Will close the window (without any onbeforeclose event)
    this.close = function() {
        this.hide();
        this.onclose();
    }
}

//
// Dialog Functions
//

// Dialogs are BOTH modal, and only one can exist at a time

// ConfirmDialog Buttons
JSWindows.DialogButtons = new Object();
JSWindows.DialogButtons.OK = 0;
// Default (and only allowable) for InfoDialog, not valid for ConfirmDialog
JSWindows.DialogButtons.OK_CANCEL = 1;
// Default for Confirm and Input
JSWindows.DialogButtons.RETRY_CANCEL = 2;
JSWindows.DialogButtons.YES_NO = 3;
JSWindows.DialogButtons.SAVE_DONT = 4;
JSWindows.DialogButtons.NONE = -1;

// ConfirmDialog (Or Info/Input Dialogs) Response Codes
JSWindows.DialogResponse = new Object();
JSWindows.DialogResponse.CLOSED = -1;
JSWindows.DialogResponse.RIGHT_CLICKED = 0;
JSWindows.DialogResponse.LEFT_CLICKED = 1;
// This is in reference to the list in the button definition (OK = left, Cancel = right)
// Can use > 0 as a test if was OK'd

// Input Types
JSWindows.DialogInputType = new Object();
JSWindows.DialogInputType.NOT_INPUT = 0;
JSWindows.DialogInputType.INPUT = 1;
JSWindows.DialogInputType.RANGE = 2;

// This function is called when the dialog exits (use the callback arguments in the dialog creators to set this)
JSWindows.DialogCallback = function() {// Do nothing by default
}
JSWindows.CurrentDialogInputType = JSWindows.DialogInputType.NOT_INPUT;
JSWindows.DialogIsPresent = false;

// This dialog has no buttons, so is useful to indicate a state of 'working' where no user input is required
// JSWaitDialog ( Html_Text, (Callback), (Title) )
function JSWaitDialog(Html_Text) {
    var Title = "JSWindows";
    var Callback = function() {// Do nothing by default
    }

    if (JSWaitDialog.arguments.length > 1) {
        Callback = JSWaitDialog.arguments[1];
    }
    if (JSWaitDialog.arguments.length > 2) {
        Title = JSWaitDialog.arguments[2];
        if (Title == "") {
            Title = "JSWindows";
        }
    }

    JSDialogSetUp(Html_Text, Callback, Title, JSWindows.DialogButtons.NONE, JSWindows.DialogInputType.NOT_INPUT);

    JSDialogWin.show();
    JSWindows.DialogIsPresent = true;
}

// This displays a simple dialog that just has an OK button, useful for information or error displays
// JSInfoDialog ( Html_Text, (Callback), (Title) )
function JSInfoDialog(Html_Text) {
    var Title = "JSWindows";
    var Callback = function() {// Do nothing by default
    }

    if (JSInfoDialog.arguments.length > 1) {
        Callback = JSInfoDialog.arguments[1];
    }
    if (JSInfoDialog.arguments.length > 2) {
        Title = JSInfoDialog.arguments[2];
        if (Title == "") {
            Title = "JSWindows";
        }
    }

    JSDialogSetUp(Html_Text, Callback, Title, JSWindows.DialogButtons.OK, JSWindows.DialogInputType.NOT_INPUT);

    JSDialogWin.show();
    JSDialogWinLeftButton.GetElement().focus();
    JSWindows.DialogIsPresent = true;
}

// This asks the user if they want to perform a given interaction.  Note that clicking left (OK, etc.), right (CANCEL, etc.), or closing the dialog are all independent results.
// JSConfirmDialog ( Html_Text, Callback, (Title), (Buttons), (Focus) )
function JSConfirmDialog(Html_Text, Callback) {
    var Title = "JSWindows";

    if (JSConfirmDialog.arguments.length > 2) {
        Title = JSConfirmDialog.arguments[2];
        if (Title == "") {
            Title = "JSWindows";
        }
    }
    if (JSConfirmDialog.arguments.length > 3) {
        Buttons = JSConfirmDialog.arguments[3];
    } else {
        Buttons = JSWindows.DialogButtons.OK_CANCEL;
    }

    JSDialogSetUp(Html_Text, Callback, Title, Buttons, JSWindows.DialogInputType.NOT_INPUT);

    JSDialogWin.show();
    //JSDialogWinRightButton.GetElement().focus();
    JSWindows.DialogIsPresent = true;
}

// This allows the user to input data into the program, this is passed to the callback function as an additional argument
// It can also be a password dialog, or a have different buttons as specified
// JSInputDialog ( Html_Text, Callback, (Title), (Default_Value), (Is_Password), (Buttons) )
function JSInputDialog(Html_Text, Callback) {
    var Title = "JSWindows";
    var Default_Value = "";
    var is_pass = false;

    if (JSInputDialog.arguments.length > 2) {
        Title = JSInputDialog.arguments[2];
        if (Title == "") {
            Title = "JSWindows";
        }
    }
    if (JSInputDialog.arguments.length > 3) {
        Default_Value = JSInputDialog.arguments[3];
    }
    if (JSInputDialog.arguments.length > 4) {
        is_pass = JSInputDialog.arguments[4];
    }
    if (JSInputDialog.arguments.length > 5) {
        Buttons = JSInputDialog.arguments[5];
        if (Buttons == JSWindows.DialogButtons.OK) {
            Buttons = JSWindows.DialogButtons.OK_CANCEL;
        }
    } else {
        Buttons = JSWindows.DialogButtons.OK_CANCEL;
    }

    JSDialogSetUp(Html_Text, Callback, Title, Buttons, JSWindows.DialogInputType.INPUT);

    JSDialogWinInput.GetElement().value = Default_Value;
    if (is_pass) {
        JSDialogWinInput.GetElement().type = "password";
    } else {
        JSDialogWinInput.GetElement().type = "input";
    }

    JSDialogWin.show();
    JSDialogWinInput.GetElement().focus();
    JSWindows.DialogIsPresent = true;
}

// This is similar to input dialog, but allows a range to be inputted, which is passed to the callback function as two additional arguments
// JSRangeDialog ( Html_Text, Callback, (Title), (Default_Value_From), (Default_Value_To), (Buttons) )
function JSRangeDialog(Html_Text, Callback) {
    var Title = "JSWindows";
    var Default_Value_From = "";
    var Default_Value_To = "";

    if (JSRangeDialog.arguments.length > 2) {
        Title = JSRangeDialog.arguments[2];
        if (Title == "") {
            Title = "JSWindows";
        }
    }
    if (JSRangeDialog.arguments.length > 3) {
        Default_Value_From = JSRangeDialog.arguments[3];
    }
    if (JSRangeDialog.arguments.length > 4) {
        Default_Value_To = JSRangeDialog.arguments[4];
    }
    if (JSRangeDialog.arguments.length > 5) {
        Buttons = JSRangeDialog.arguments[5];
        if (Buttons == JSWindows.DialogButtons.OK) {
            Buttons = JSWindows.DialogButtons.OK_CANCEL;
        }
    } else {
        Buttons = JSWindows.DialogButtons.OK_CANCEL;
    }

    JSDialogSetUp(Html_Text, Callback, Title, Buttons, JSWindows.DialogInputType.RANGE);

    JSDialogWinRangeFrom.GetElement().value = Default_Value_From;
    JSDialogWinRangeTo.GetElement().value = Default_Value_To;

    JSDialogWin.show();
    JSDialogWinRangeFrom.GetElement().focus();
    JSWindows.DialogIsPresent = true;
}

// Internal Function for handling clicking the left dialog button
function JSDialogLeftClicked() {
    JSDialogHide();
    if (JSWindows.CurrentDialogInputType == JSWindows.DialogInputType.INPUT) {
        JSWindows.DialogCallback(JSWindows.DialogResponse.LEFT_CLICKED, JSDialogWinInput.GetElement().value);
    } else if (JSWindows.CurrentDialogInputType == JSWindows.DialogInputType.RANGE) {
        JSWindows.DialogCallback(JSWindows.DialogResponse.LEFT_CLICKED, JSDialogWinRangeFrom.GetElement().value, JSDialogWinRangeTo.GetElement().value);
    } else {
        JSWindows.DialogCallback(JSWindows.DialogResponse.LEFT_CLICKED);
    }
}

// Internal Function for handling clicking the right dialog button
function JSDialogRightClicked() {
    JSDialogHide();
    if (JSWindows.CurrentDialogInputType == JSWindows.DialogInputType.INPUT) {
        JSWindows.DialogCallback(JSWindows.DialogResponse.RIGHT_CLICKED, JSDialogWinInput.GetElement().value);
    } else if (JSWindows.CurrentDialogInputType == JSWindows.DialogInputType.RANGE) {
        JSWindows.DialogCallback(JSWindows.DialogResponse.RIGHT_CLICKED, JSDialogWinRangeFrom.GetElement().value, JSDialogWinRangeTo.GetElement().value);
    } else {
        JSWindows.DialogCallback(JSWindows.DialogResponse.RIGHT_CLICKED);
    }
}

// Internal Function for handling closing the dialog
function JSDialogClosed() {
    JSDialogHide();
    if (JSWindows.CurrentDialogInputType == JSWindows.DialogInputType.INPUT) {
        JSWindows.DialogCallback(JSWindows.DialogResponse.CLOSED, JSDialogWinInput.GetElement().value);
    } else if (JSWindows.CurrentDialogInputType == JSWindows.DialogInputType.RANGE) {
        JSWindows.DialogCallback(JSWindows.DialogResponse.CLOSED, JSDialogWinRangeFrom.GetElement().value, JSDialogWinRangeTo.GetElement().value);
    } else {
        JSWindows.DialogCallback(JSWindows.DialogResponse.CLOSED);
    }
}

// This hides the currently visible (if any) dialog - does not trigger a callback
function JSDialogHide() {
    JSDialogWin.hide();
    JSWindows.DialogIsPresent = false;
    JSDialogWinInput.GetElement().style.visibility = "hidden";
    JSDialogWinRangeFrom.GetElement().style.visibility = "hidden";
    JSDialogWinRangeLabel.GetElement().style.visibility = "hidden";
    JSDialogWinRangeTo.GetElement().style.visibility = "hidden";
    JSDialogWinLeftButton.GetElement().style.visibility = "hidden";
    JSDialogWinRightButton.GetElement().style.visibility = "hidden";
}

// This is an internal function to construct the dialog based on the different public constructor functions and parameters
function JSDialogSetUp(Html_Text, Callback, Title, Buttons, InputType) {
    JSDialogWin.center();
    JSWindows.DialogCallback = Callback;
    //JSDialogWin.GetElement().onkeypress = JSDialogKey;
    GetId("JSDialogWinLabelElement").innerHTML = Html_Text;
    JSDialogWin.GetTitleElement().innerHTML = Title;

    JSWindows.CurrentDialogInputType = InputType;
    if (InputType == JSWindows.DialogInputType.INPUT) {

        JSDialogWinInput.GetElement().style.visibility = "visible";
        JSDialogWinInput.GetElement().value = "";
        JSDialogWinInput.GetElement().onkeypress = JSDialogKey;

        JSDialogWinRangeFrom.GetElement().style.visibility = "hidden";
        JSDialogWinRangeLabel.GetElement().style.visibility = "hidden";
        JSDialogWinRangeTo.GetElement().style.visibility = "hidden";
        JSDialogWinRangeFrom.GetElement().value = "";
        JSDialogWinRangeTo.GetElement().value = "";
        GetId("JSDialogWinLabelElement").style.height = "45px";

    } else if (InputType == JSWindows.DialogInputType.RANGE) {

        JSDialogWinRangeFrom.GetElement().style.visibility = "visible";
        JSDialogWinRangeLabel.GetElement().style.visibility = "visible";
        JSDialogWinRangeTo.GetElement().style.visibility = "visible";
        JSDialogWinRangeFrom.GetElement().value = "";
        JSDialogWinRangeTo.GetElement().value = "";
        JSDialogWinRangeFrom.GetElement().onkeypress = JSDialogKey;
        JSDialogWinRangeTo.GetElement().onkeypress = JSDialogKey;
        GetId("JSDialogWinLabelElement").style.height = "45px";

        JSDialogWinInput.GetElement().style.visibility = "hidden";
        JSDialogWinInput.GetElement().value = "";

    } else {

        JSDialogWinInput.GetElement().style.visibility = "hidden";
        JSDialogWinInput.GetElement().value = "";
        JSDialogWinRangeFrom.GetElement().style.visibility = "hidden";
        JSDialogWinRangeLabel.GetElement().style.visibility = "hidden";
        JSDialogWinRangeTo.GetElement().style.visibility = "hidden";
        JSDialogWinRangeFrom.GetElement().value = "";
        JSDialogWinRangeTo.GetElement().value = "";
        GetId("JSDialogWinLabelElement").style.height = "70px";

    }

    if (Buttons == JSWindows.DialogButtons.OK) {
        JSDialogWinLeftButton.GetElement().style.left = "100px";
        JSDialogWinLeftButton.GetElement().style.visibility = "visible";
        JSDialogWinLeftButton.GetElement().value = "OK";
        JSDialogWinRightButton.GetElement().style.visibility = "hidden";
    } else if (Buttons == JSWindows.DialogButtons.NONE) {
        JSDialogWinLeftButton.GetElement().style.visibility = "hidden";
        JSDialogWinRightButton.GetElement().style.visibility = "hidden";
    } else {
        JSDialogWinLeftButton.GetElement().style.left = "40px";
        JSDialogWinLeftButton.GetElement().style.visibility = "visible";
        JSDialogWinRightButton.GetElement().style.visibility = "visible";
        switch (Buttons) {
        case JSWindows.DialogButtons.OK_CANCEL:
            JSDialogWinLeftButton.GetElement().value = "OK";
            JSDialogWinRightButton.GetElement().value = "Cancel";
            break;
        case JSWindows.DialogButtons.RETRY_CANCEL:
            JSDialogWinLeftButton.GetElement().value = "Retry";
            JSDialogWinRightButton.GetElement().value = "Cancel";
            break;
        case JSWindows.DialogButtons.YES_NO:
            JSDialogWinLeftButton.GetElement().value = "Yes";
            JSDialogWinRightButton.GetElement().value = "No";
            break;
        case JSWindows.DialogButtons.SAVE_DONT:
            JSDialogWinLeftButton.GetElement().value = "Save";
            JSDialogWinRightButton.GetElement().value = "Don't Save";
            break;
        }
    }
}

// This handles the 'enter' press on a dialog as being equivalent to pressing 'OK'
function JSDialogKey(e) {
    if (JSWindows.DialogIsPresent) {
        if (!e) {
            var e = window.event;
        }
        if (e.keyCode == 13) {
            JSDialogLeftClicked();
        }
    }
}

// This creates a new browser window with the given location, and returns the resulting object
function JSNewBrowserWindowLocation(loc) {
    // Assign object, name, etc?
    return window.open(loc);
}

//
// JS Window Source Objects
//

// This object stores the source of a given window - create one, add the necessary controls/components, then pass this to a JSWindow, JSDocumentWindow, or JSSubWin to create a window from the source
function JSWinSource() {
    this.js_type = "JSWinSource";

    this.src_array = new Array();

    // This adds a JSWin control/component to this source
    this.add = function(Obj) {
        this.src_array[this.src_array.length] = Obj;
    }

    // This returns the last added object (to modify its properties, etc.)
    this.last_added = function() {
        return this.src_array[this.src_array.length - 1];
    }

    // This removes a given object from the source
    this.remove = function(Obj) {
        for (var i = 0; i < this.src_array.length; i++) {
            if (Obj == this.src_array[i]) {
                return this.src_array.splice(i, 1);
            }
        }
        return false;
    }

    // This removes all objects from the source
    this.remove_all = function() {
        delete this.src_array;
        this.src_array = new Array();
    }
}

// Internal function for setting CSS values
function JSCSSValue(input) {
    if (isNaN(input)) {
        return input;
    } else {
        return input + "px";
    }
}

// Internal function for constructing tags for the window controls' HTML code
function JSConstructTag(js_obj) {
    var tag = "id = '" + js_obj.js_type + js_obj.windowN + "_" + js_obj.component + "' style='position: " + js_obj.position + ";";
    if (js_obj.pos_left != "n/a" && js_obj.pos_left != "N/A")
        tag += " left: " + JSCSSValue(js_obj.pos_left) + ";";
    if (js_obj.pos_top != "n/a" && js_obj.pos_top != "N/A")
        tag += " top: " + JSCSSValue(js_obj.pos_top) + ";";
    if (js_obj.width)
        tag += " width: " + JSCSSValue(js_obj.width) + ";";
    if (js_obj.height)
        tag += " height: " + JSCSSValue(js_obj.height) + ";";
    if (js_obj.style)
        tag += " " + js_obj.style;
    tag += "'";
    if (js_obj.tooltip)
        tag += " title='" + EscapeQuotes(js_obj.tooltip) + "'";
    if (js_obj.tag_data)
        tag += " " + js_obj.tag_data;
    return tag;
}

// This is a basic text or HTML-enclosed Label-style component (is actually just a div)
function JSLabel(Html_Text, Width, Height, Left, Top) {
    this.js_type = "JSLabel";
    this.text = Html_Text;
    this.width = Width;
    this.height = Height;
    this.pos_left = Left;
    this.pos_top = Top;
    this.windowN = -1;
    this.component = -1;
    this.tooltip = false;
    this.style = false;
    this.manual_render = false;
    this.tag_data = false;
    this.position = "absolute";
    //this.js_tooltip = false;

    this.GetElement = function() {
        return GetId("JSLabel" + this.windowN + "_" + this.component);
    }

    this.get_html = function(windowN, comp_i) {
        this.windowN = windowN;
        this.component = comp_i;
        return "<div " + JSConstructTag(this) + ">" + this.text + "</div>";
        // (this.js_tooltip ? this.js_tooltip.get_attach_html() : "")
    }
}

// This creates an image
function JSImage(Src, Width, Height, Left, Top) {
    this.js_type = "JSImage";
    this.src = Src;
    this.width = Width;
    this.height = Height;
    this.pos_left = Left;
    this.pos_top = Top;
    this.windowN = -1;
    this.component = -1;
    this.tooltip = false;
    this.style = false;
    this.manual_render = false;
    this.tag_data = false;
    this.position = "absolute";
    //this.js_tooltip = false;

    this.GetElement = function() {
        return GetId("JSImage" + this.windowN + "_" + this.component);
    }

    this.get_html = function(windowN, comp_i) {
        this.windowN = windowN;
        this.component = comp_i;
        return "<img " + JSConstructTag(this) + " src='" + EscapeQuotes(this.src) + "'>";
    }
}

// This is an input text box, set .password = true to make it a password input
function JSInput(Default_Value, Width, Height, Left, Top) {
    this.js_type = "JSInput";
    this.def_val = Default_Value;
    this.width = Width;
    this.height = Height;
    this.pos_left = Left;
    this.pos_top = Top;
    this.windowN = -1;
    this.component = -1;
    this.disabled = false;
    this.password = false;
    this.tooltip = false;
    this.style = false;
    this.manual_render = false;
    this.tag_data = false;
    this.position = "absolute";
    //this.js_tooltip = false;

    this.GetElement = function() {
        return GetId("JSInput" + this.windowN + "_" + this.component);
    }

    this.ToDefault = function() {
        this.GetElement().value = this.def_val;
    }

    this.get_html = function(windowN, comp_i) {
        this.windowN = windowN;
        this.component = comp_i;
        return "<input " + JSConstructTag(this) + " value='" + EscapeQuotes(this.def_val) + "'" + (this.password ? " type='password'" : " type='text'") + (this.disabled ? " disabled" : "") + ">";
    }
}

// This is a Textarea input
function JSTextarea(Default_Value, Width, Height, Left, Top) {
    this.js_type = "JSTextarea";
    this.def_val = Default_Value;
    this.width = Width;
    this.height = Height;
    this.pos_left = Left;
    this.pos_top = Top;
    this.windowN = -1;
    this.component = -1;
    this.disabled = false;
    this.tooltip = false;
    this.style = false;
    this.manual_render = false;
    this.tag_data = false;
    this.position = "absolute";
    //this.js_tooltip = false;

    this.GetElement = function() {
        return GetId("JSTextarea" + this.windowN + "_" + this.component);
    }

    this.ToDefault = function() {
        this.GetElement().value = this.def_val;
    }

    this.get_html = function(windowN, comp_i) {
        this.windowN = windowN;
        this.component = comp_i;
        return "<textarea " + JSConstructTag(this) + (this.disabled ? " disabled" : "") + ">" + this.def_val + "</textarea>";
    }
}

// This is a Check Box input
function JSCheckBox(Default_Checked, Width, Height, Left, Top) {
    this.js_type = "JSCheckBox";
    this.def_chk = Default_Checked;
    this.width = Width;
    this.height = Height;
    this.pos_left = Left;
    this.pos_top = Top;
    this.windowN = -1;
    this.component = -1;
    this.disabled = false;
    this.tooltip = false;
    this.style = false;
    this.manual_render = false;
    this.tag_data = false;
    this.position = "absolute";
    //this.js_tooltip = false;

    this.GetElement = function() {
        return GetId("JSCheckBox" + this.windowN + "_" + this.component);
    }

    this.ToDefault = function() {
        this.GetElement().checked = this.def_chk;
    }

    this.get_html = function(windowN, comp_i) {
        this.windowN = windowN;
        this.component = comp_i;
        return "<input " + JSConstructTag(this) + " type='checkbox'" + (this.def_chk ? " checked" : "") + (this.disabled ? " disabled" : "") + ">";
    }
}

// This is a single- or multi-select box
function JSSelectBox(List, Selected_List, Size, Width, Height, Left, Top) {
    // + Optional Value List
    this.js_type = "JSSelectBox";
    this.list = List;
    // Is an Array
    this.selected = Selected_List;
    // Is also an Array
    this.size = Size;
    this.width = Width;
    this.height = Height;
    this.pos_left = Left;
    this.pos_top = Top;
    this.windowN = -1;
    this.component = -1;
    if (JSSelectBox.arguments.length > 7) {
        this.val_list = JSSelectBox.arguments[7];
    } else {
        this.val_list = this.list;
    }
    this.disabled = false;
    this.tooltip = false;
    this.style = false;
    this.manual_render = false;
    this.tag_data = false;
    this.position = "absolute";
    //this.js_tooltip = false;

    this.GetElement = function() {
        return GetId("JSSelectBox" + this.windowN + "_" + this.component);
    }

    this.ToDefault = function() {
        if (this.val_list.length == this.list.length) {
            for (var i = 0; i < this.list.length; i++) {
                for (var j = 0; j < this.selected.length; j++) {
                    if (this.val_list[i] == this.selected[j]) {
                        this.GetElement().options[i].selected = true;
                    } else {
                        this.GetElement().options[i].selected = false;
                    }
                }
            }
        } else {
            for (var i = 0; i < this.list.length; i++) {
                for (var j = 0; j < this.selected.length; j++) {
                    if (this.list[i] == this.selected[j]) {
                        this.GetElement().options[i].selected = true;
                    } else {
                        this.GetElement().options[i].selected = false;
                    }
                }
            }
        }
    }

    this.get_html = function(windowN, comp_i) {
        this.windowN = windowN;
        this.component = comp_i;
        var sel = false;
        var Html = "<select size='" + this.size + "' " + JSConstructTag(this) + (this.disabled ? " disabled" : "") + ">";
        if (this.val_list.length == this.list.length) {
            for (var i = 0; i < this.list.length; i++) {
                sel = false;
                for (var j = 0; j < this.selected.length; j++) {
                    if (this.val_list[i] == this.selected[j]) {
                        sel = true;
                    }
                }
                Html += "<option" + (sel ? " selected" : "") + " value='" + EscapeQuotes(this.val_list[i]) + "'>" + this.list[i] + "</option>";
            }
        } else {
            for (var i = 0; i < this.list.length; i++) {
                sel = false;
                for (var j = 0; j < this.selected.length; j++) {
                    if (this.list[i] == this.selected[j]) {
                        sel = true;
                    }
                }
                Html += "<option" + (sel ? " selected" : "") + ">" + this.list[i] + "</option>";
            }
        }

        Html += "</select>";

        return Html;
    }
}

// This is a push button
function JSButton(Text, OnClick, Width, Height, Left, Top) {
    this.js_type = "JSButton";
    this.text = Text;
    this.on_click = OnClick;
    this.width = Width;
    this.height = Height;
    this.pos_left = Left;
    this.pos_top = Top;
    this.windowN = -1;
    this.component = -1;
    this.disabled = false;
    this.tooltip = false;
    this.style = false;
    this.manual_render = false;
    this.tag_data = false;
    this.position = "absolute";
    //this.js_tooltip = false;

    this.GetElement = function() {
        return GetId("JSButton" + this.windowN + "_" + this.component);
    }

    this.get_html = function(windowN, comp_i) {
        this.windowN = windowN;
        this.component = comp_i;
        return "<input " + JSConstructTag(this) + " type='button' onclick='" + EscapeQuotes(this.on_click) + "' value='" + EscapeQuotes(this.text) + "'" + (this.disabled ? " disabled" : "") + ">";
    }
}

// This a group-style control, that takes its own source.  This can be used to create a bordered, scrollable sub-field, for example
function JSSubWin(Source, Width, Height, Left, Top) {
    this.js_type = "JSSubWin";
    this.source = Source;
    this.width = Width;
    this.height = Height;
    this.pos_left = Left;
    this.pos_top = Top;
    this.windowN = -1;
    this.component = -1;
    this.tooltip = false;
    this.style = false;
    this.manual_render = false;
    this.tag_data = false;
    this.position = "absolute";
    //this.js_tooltip = false;

    this.GetElement = function() {
        return GetId("JSSubWin" + this.windowN + "_" + this.component);
    }

    this.re_render = function() {
        var Html = "";
        for (var i = 0; i < this.source.src_array.length; i++) {
            Html += this.source.src_array[i].get_html(this.windowN, this.component + "_" + i);
        }
        this.GetElement().innerHTML = Html;
    }

    this.get_html = function(windowN, comp_i) {
        this.windowN = windowN;
        this.component = comp_i;
        var Html = "<div class='JSSubWin' " + JSConstructTag(this) + ">";
        for (var i = 0; i < this.source.src_array.length; i++) {
            Html += this.source.src_array[i].get_html(this.windowN, this.component + "_" + i);
        }
        Html += "</div>";
        return Html;
    }
}

//
// Internal Core and Event Functions
//

var JSWinList = new Array();

var TopFocusLevel = 100;
var JSCurrentFocus = 0;

function JSGetNextFocusLevel() {
    TopFocusLevel++;
    return TopFocusLevel;
}

function JSAddNewWin(winObj) {
    JSWinList[JSWinList.length] = winObj;
    return (JSWinList.length - 1);
}

function JSFocusWin(num) {
    if (!JSWindows.DialogIsPresent) {
        JSWinList[num].focus();
    }
}

function JSRestrictMin(x) {
    if (x < 10) {
        return 10;
    } else {
        return x;
    }
}

var JSDragging = false;
var JSCurrentDrag = 0;
var JSDragLeft = 0;
var JSDragTop = 0;

function JSDragWin(num) {
    if (JSDragging && JSCurrentDrag == num) {
        setTimeout("JSStopDrag();", 1);
    } else {
        JSWinList[num].focus();
        JSCurrentDrag = num;
        var L = GetId("JSWin" + JSCurrentDrag).style.left;
        var T = GetId("JSWin" + JSCurrentDrag).style.top;
        JSDragLeft = CurrentMouseX - L.substring(0, L.length - 2);
        JSDragTop = CurrentMouseY - T.substring(0, T.length - 2);
        JSDragging = true;
    }
}

function JSEvalDrag(e) {
    if (JSDragging) {
        GetId("JSWin" + JSCurrentDrag).style.left = JSRestrictMin((CurrentMouseX <= 0 ? 0 : CurrentMouseX) - JSDragLeft) + "px";
        GetId("JSWin" + JSCurrentDrag).style.top = JSRestrictMin((CurrentMouseY <= 0 ? 0 : CurrentMouseY) - JSDragTop) + "px";
    }
}

function JSStopDrag() {
    JSDragging = false;
}

document.onmouseup = JSStopDrag;
document.onmousemove = MouseCapture;
// Have the library function capture the mouse position

document.addEventListener("touchmove", MouseCapture, false);
document.addEventListener("touchend", JSStopDrag, false);
document.addEventListener("touchcancel", JSStopDrag, false);

function JSXHover(num) {
    GetId("JSCloseX" + num).style.border = "1px solid #FF0000";
    GetId("JSCloseX" + num).style.color = "#FF0000";
}

function JSXUnHover(num) {
    GetId("JSCloseX" + num).style.border = "1px solid #000000";
    GetId("JSCloseX" + num).style.color = "#000000";
}

function JSHandleClose(num) {
    if (JSWinList[num].onbeforeclose()) {
        JSWinList[num].hide();
        JSWinList[num].onclose();
    }
}

// Dialog Window Source

var JSDialogWinSource = new JSWinSource();

var JSDialogWinLabel = new JSLabel("<div id='JSDialogWinLabelElement' class='JSCenterDiv' style='width: 280px; height: 70px;'>Internal Error!</div>",280,70,10,10);
JSDialogWinSource.add(JSDialogWinLabel);

var JSDialogWinInput = new JSInput("",214,16,40,50);
JSDialogWinSource.add(JSDialogWinInput);

var JSDialogWinRangeFrom = new JSInput("",75,16,40,50);
JSDialogWinSource.add(JSDialogWinRangeFrom);

var JSDialogWinRangeLabel = new JSLabel(" to ",50,16,142,50);
JSDialogWinSource.add(JSDialogWinRangeLabel);

var JSDialogWinRangeTo = new JSInput("",75,16,178,50);
JSDialogWinSource.add(JSDialogWinRangeTo);

var JSDialogWinLeftButton = new JSButton("OK","JSDialogLeftClicked();",100,25,40,85);
JSDialogWinSource.add(JSDialogWinLeftButton);

var JSDialogWinRightButton = new JSButton("Cancel","JSDialogRightClicked();",100,25,160,85);
JSDialogWinSource.add(JSDialogWinRightButton);

var JSDialogWin = new JSWindow("JSWindows",JSDialogWinSource,300,150);

JSDialogWin.onclose = JSDialogClosed;

// End Dialog Window Source

//
// Public Standard Library Functions
//

function do_nothing() {// Do Nothing
}

// Bind functions to allow passing object-based methods as arguments to callbacks
function Bind0(obj, methodNameString) {
    return function() {
        return obj[methodNameString]();
    }
}

function Bind0_1(obj, methodNameString, argument) {
    return function() {
        return obj[methodNameString](argument);
    }
}

function Bind1_1(obj, methodNameString, argument2) {
    return function(argument1) {
        return obj[methodNameString](argument1, argument2);
    }
}

function Bind1(obj, methodNameString) {
    return function(argument) {
        return obj[methodNameString](argument);
    }
}

function Bind2(obj, methodNameString) {
    return function(argument1, argument2) {
        return obj[methodNameString](argument1, argument2);
    }
}

function Bind3(obj, methodNameString) {
    return function(argument1, argument2, argument3) {
        return obj[methodNameString](argument1, argument2, argument3);
    }
}

// Gets the current window size (visible/writable area)
function GetWindowSize() {
    var root = (document.documentElement && document.compatMode == "CSS1Compat") ? document.documentElement : document.body;
    var width = self.innerWidth ? self.innerWidth : root.clientWidth;
    var height = self.innerHeight ? self.innerHeight : root.clientHeight;
    var scroll = root.scrollTop;
    var window_size = new Object();
    window_size.width = width;
    window_size.height = height;
    window_size.scroll = scroll;
    return window_size;
}

// Gets an element by Id
function GetId(id) {
    if (document.getElementById) {
        return document.getElementById(id);
    } else if (document.all) {
        return document.all[id];
    }
}

// Captures the mouse position, and calls MouseCaptureCallback on mouse move

var CurrentMouseX = 0;
var CurrentMouseY = 0;

MouseCaptureCallback = do_nothing;

function MouseCapture(e) {
    var posx = 0;
    var posy = 0;
    if (!e) {
        var e = window.event;
    }

    if (e.pageX || e.pageY) {
        posx = e.pageX;
        posy = e.pageY;
    } else if (e.clientX || e.clientY) {
        posx = e.clientX + document.body.scrollLeft + document.documentElement.scrollLeft;
        posy = e.clientY + document.body.scrollTop + document.documentElement.scrollTop;
    }
    CurrentMouseX = posx;
    CurrentMouseY = posy;

    if (JSDragging) {
        JSEvalDrag();
    }

    MouseCaptureCallback();
}

// Escapes quotes to generate valid HTML source
function EscapeQuotes(txt) {
    txt = txt + "";
    txt = txt.replace("'", "&#39;");
    txt = txt.replace('"', '&#34;');
    return txt;
}

// Captures touch actions for smartphones
function TouchCapture(e) {
    e.preventDefault();
    e.stopPropagation();

    CurrentMouseX = e.touches[0].pageX;
    CurrentMouseY = e.touches[0].pageY;

    if (JSDragging) {
        JSEvalDrag();
    }
}
