const fs = require('fs');
const path = require('path');  
const et = require('elementtree');

function run(context) { 
    //path to the custom WebView Engine file
    const webviewEngineSourcePath = path.join(context.opts.plugin.dir, 'res/CDVWebViewEngine.m');
    //path to the cordova generated WebView Engine file
    const webviewEngineDestinationPath =  path.join(context.opts.projectRoot, 'platforms/ios/CordovaLib/Classes/Private/Plugins/CDVWebViewEngine/CDVWebViewEngine.m');
  
    // Update the cordova generated WebView Engine with a custom implementation
    if (fs.existsSync(webviewEngineSourcePath) && fs.existsSync(webviewEngineDestinationPath)) {
        console.log("WebView Engine Paths Exists!");
        fs.readFile(webviewEngineSourcePath, 'UTF-8', function(err, data) { 
            fs.writeFile(webviewEngineDestinationPath, data, 'UTF-8', function(err) {
                if (err){
                    console.log('Failed to modify WebView Engine file');
                    throw new Error('Unable to modify WebView Engine file: ' + err);
                }
            });             
        });
    }
    console.log("Modified WebView Engine file successfully!");
}


module.exports = function (context) {
    return new Promise((resolve, reject) => {
        try {
            run(context);
            resolve();
        } catch (e) {
            console.log(e.toString());
            reject(e);
        }
    });
};