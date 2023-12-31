exports.config = {
  
  capabilities: {
    browserName: 'chrome',
    chromeOptions: {
      args: ['--start-maximized']
    }
  },
  
  seleniumAddress: 'http://localhost:4444/wd/hub',
  specs: ['spec.js']

   
};