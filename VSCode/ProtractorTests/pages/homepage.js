let homepage = function(){

    let firstNum = element(by.model('first'));
    let secondNum = element(by.model('second'));
    let goButton = element(by.css('[ng-click="doAddition()"]'));
    let operator = element(by.model('operator'));
    //let selectSubtractionOperator = element(by.cssContainingText('option', 'SUBTRACTION'));
    let subtractor = element(by.css('[value="SUBTRACTION"]'))

    this.getBrowser = function(url){
        browser.get(url);
    }

    this.enterFirstNumber = function(first){
        firstNum.sendKeys(first);

    };

    this.enterSecondNumber = function(second){
        secondNum.sendKeys(second);
    }

    this.clickGoButton = function(){
        goButton.click();
    }

    this.verifyResult = function(result){
        let output = element(by.cssContainingText('.ng-binding', result));
        expect(output.getText()).toEqual(result);
    }

    this.operatorSelector = function(){
        operator.click();
    }

    this.subtract = function(){
        subtractor.click();
    }

};

module.exports = new homepage();