# Cordova iOS 3rd Party Cookie Test
This sample app is for testing ITP blocking 3rd party cookie event after allowing cross-site tracking

## What the app does ?
URL [abhinavms.github.io/cookieTest](https://abhinavms.github.io/cookieTest/) loads [cookie-set-test.herokuapp](https://cookie-set-test.herokuapp.com/) ([Source code](https://github.com/abhinavms/cookie)) in an iframe. [cookie-set-test.herokuapp](https://cookie-set-test.herokuapp.com/) sends request to set cookie and verify if the cookie was set. It also displays if the Storage Access API has granted access.

sample-plugin is adds `NSCrossWebsiteTrackingUsageDescription` in the plist to have the setting to allow cross site tracking.

## Expectation
If we allow cross-site tracking, the iframe should be able to set cookies

## Actual behaviour
The cookies are not being saved and the storage api denies access to storage
