registerCommands();


function registerCommands(){
    browser.addCommand('waitAnd', waitAnd, true);
    browser.addCommand('waitAndClick', waitAndClick, true);
    browser.addCommand('waitAndSetValue', waitAndSetValue, true);
}

function waitAnd(){
    this.waitForClickable();
    return this;
}

function waitAndClick(){
    this.waitAnd().click();
}

function waitForClickable(value){
    this.waitAnd().setValue(value);
}