describe('Usecase 01009 Group 2', function () {
  beforeEach(function() {
    jasmine.DEFAULT_TIMEOUT_INTERVAL = 70000; // set timeout to 70 seconds
  });
  it('Testcase 2: Auto generate GR Document from AA form', function () {

    //Link to Browser
    browser.get('http://twms.twss.co.th:8080/twms-protractor/#/dashboard');

    var username = 'consult'; //Username
    var password = 'consult'; //Password
    var docNo = 'test-aa-6409610620-001'; //Document No
    var aaNo = 'AA1139038'; //Arrival Advice No
    var productIFM = 'PO NO. PO-20230412-990308 - Product name แก้วกระเบื้องพร้อมจานรอง 7 oz.(6 ชุด) | QTY null/1 | Unit CRT'; //Product Information
    var receiveQty = '1' //Receive Qty.
    var mfgDate = "11/04/2023"; //MFG Date (dd/mm/yyyy)
    var name = "Thanakorn Chairattanathananon"; //Author Name
    var tel = "0123456789"; //Author Tel

    //Send Username
    browser.sleep(1000);
    element(by.id('i_username')).sendKeys(username).then(function () {
      console.log('Input Username : ' + username);
    });

    //Send Password
    browser.sleep(1000);
    element(by.id('i_password')).sendKeys(password).then(function () {
      console.log('Input Password : ' + password);
    });

    //Click Login
    browser.sleep(1000);
    element(by.buttonText('Log in')).click().then(function () {
      console.log('Clicked Log in');
    });

    //Go to Product Receipt
    browser.sleep(1000);
    element(by.xpath('//a[contains(text(), "Inbound")]/i')).click().then(function () {
      browser.sleep(1000);
      element.all(by.linkText("Product Receipt")).click().then(function () {
        console.log('Go to Product Receipt Page');
      });
    });

    //Send Document No
    browser.sleep(1000);
    element(by.id('i_document_no_edit')).sendKeys(docNo).then(function () {
      console.log('Input Document No : ' + docNo);
    });

    //Search AA
    browser.sleep(1000);
    element(by.id('i_btn_search')).click().then(function () {
      console.log('Searched AA from Document No');
    });
    
    //Click Show AA Detail
    browser.sleep(1000);
    element(by.css('[ng-click="selectItem(dataItem)"]')).click().then(function () {
      console.log('Click Show AA Detail');
    });

    //Click Receive Button
    browser.sleep(1000);
    element(by.id('i_button_receive')).click().then(function () {
      console.log('Clicked Button Receive');
    });

    //Testcase 2 : Auto generate GR Document from AA form
    var passCase = 0;
    browser.sleep(1000).then(function(){
      console.log('Check Automatic generate GR Document: ')
      expect(element(by.css('#i_documentNo[ng-model="item.documentNo"][disabled="disabled"]')).getAttribute('value')).toEqual(aaNo);
      element(by.css('#i_documentNo[ng-model="item.documentNo"][disabled="disabled"]')).getAttribute('value').then(function (text){
        if(text == aaNo){
          console.log(' 1. Arrival Advice No. : Pass');
          passCase += 1;
        }
      });
      expect(element(by.css('#i_shipment_no[ng-model="item.shipmentNo"][disabled="disabled"][class="k-textbox ng-pristine ng-untouched ng-valid"]')).getAttribute('value')).toEqual(docNo);
      element(by.css('#i_shipment_no[ng-model="item.shipmentNo"][disabled="disabled"][class="k-textbox ng-pristine ng-untouched ng-valid"]')).getAttribute('value').then(function (text){
        if(text == docNo){
          console.log(' 2. Document No. : Pass');
          passCase += 1;
        }
      });
      element.all(by.css('table tr')).getText().then(function (text){
        expect(text[7]).toEqual(productIFM);
        if(text[7] == productIFM){
          console.log(' 3. Product Information : Pass');
          passCase += 1;
          if (passCase == 3)
            console.log('Checked GR information All PASSED');
          else
            console.log('Checked GR information Has Failed');
        }
      });
    });

    //Input Receive Qty.
    browser.sleep(1000);
    element(by.css('[validationmessage="qty. must be greater than or equal to zero "]')).sendKeys(receiveQty).then(function () {
      console.log('Input Receive Qty. : ' + receiveQty);
    });

    //Input MFG Date
    browser.sleep(1000);
    element(by.xpath('html/body/div[1]/div[2]/div[3]/div[1]/ng-controller/div[1]/div[3]/div[1]/div[1]/div[3]/form/div[4]/div/table/tbody/tr[2]/td[7]/span/span/span/input')).click().then(function () {
      element(by.xpath('html/body/div[1]/div[2]/div[3]/div[1]/ng-controller/div[1]/div[3]/div[1]/div[1]/div[3]/form/div[4]/div/table/tbody/tr[2]/td[7]/span/span/span/input')).sendKeys(mfgDate);
      console.log('Input MFG Date : ' + mfgDate);
    });

    //Click Save Button
    browser.sleep(1000);
    element(by.id('confirm_receive')).click();

    //Click Ok on alert
    browser.sleep(1000);
    browser.switchTo().alert().accept();

    //Click Save Confirm
    browser.sleep(2000);
    element(by.id('saveConfirm')).click();
    console.log('Save Success');

    //Click AA_INITIAL Status
    browser.sleep(2000);
    element(by.cssContainingText('.k-input.ng-scope', 'AA_INITIAL')).click();

    //Click Select Received Status
    browser.sleep(1000);
    element(by.cssContainingText('.k-item.ng-scope', 'RECEIVED')).click();

    //Click Search
    browser.sleep(1000);
    element(by.id('i_btn_search')).click().then(function () {
      console.log('Searched AA which received from Document No');
    });

    //Click Show AA Detail
    browser.sleep(1000);
    element(by.css('[ng-click="selectItem(dataItem)"]')).click().then(function () {
      console.log('Click Show AA Detail');
    });

    //Click to view AA detail
    browser.sleep(1000);
    element(by.cssContainingText('button.k-button', 'View')).click().then(function () {
      console.log('Click to view receive detail');
    });

    //Click Adjust button
    browser.sleep(1000);
    element(by.cssContainingText('button.btn.btn-app', 'Adjust')).click().then(function () {
      console.log('Go adjust to confirm receiving');
    });

    //Send name and tel to confirm
    browser.sleep(1000);
    element(by.id('i_customer_name')).sendKeys(name);
    element(by.id('i_customer_tel')).sendKeys(tel);

    //Click Save Adjust Button
    browser.sleep(1000);
    element(by.id('saveAdjust')).click();

    //Click Accept on alert
    browser.sleep(1000);
    browser.switchTo().alert().accept().then(function () {
      console.log('Receiving confirmed');
    });

    //Sleep for see the result
    browser.sleep(5000);

    //Click Logout
    element(by.className('user-profile dropdown-toggle ng-binding')).click();
    browser.sleep(1000);
    element.all(by.linkText("Log Out")).click().then(function () {
      console.log('Log out success');
    });

  });

});