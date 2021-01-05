let homepage = require('../pages/homepage');

describe('demo calculator tests', function(){

    it('addition', function(){

        homepage.getBrowser('http://juliemr.github.io/protractor-demo/')        

        homepage.enterFirstNumber('2');

        homepage.enterSecondNumber('3');

        homepage.clickGoButton();       

        homepage.verifyResult('5');


        browser.sleep(3000)

    });

    
    
    it('subtraction', function(){
        
        homepage.getBrowser('http://juliemr.github.io/protractor-demo/')        
     
        homepage.enterFirstNumber('5');

        homepage.operatorSelector();

        homepage.subtract();
        
        homepage.enterSecondNumber('2');
        
        homepage.clickGoButton();       
        
        homepage.verifyResult('3');


        browser.sleep(3000)

    })

    
});