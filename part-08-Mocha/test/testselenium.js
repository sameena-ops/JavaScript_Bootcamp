const {Builder, By} = require('selenium-webdriver');
"use Strict;"
//import {Builder, By} from 'selenium-webdriver';
//import assert from 'chai';
const assert = require('chai').assert;
describe('First Selenium Test', function(){
    //let driver;

    it('should open Selenium home page', async function(){
        //Arrange
        var driver = new Builder().forBrowser('chrome').build();

        //assemble
       await driver.get('https://www.selenium.dev/');
        //Act
        
        

        //assert.isTrue(bool);
       assert.equal((driver.getTitle(), 'SeleniumHQ Browser Automation'));
        //console.log((await driver).getTitle());

    });
});