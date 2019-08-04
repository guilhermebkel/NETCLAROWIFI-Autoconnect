# NETCLAROWIFI Autoconnect

## About
You can use this app in order to autoconnect to the famous 'NET-CLARO-Wifi' in a automated way.

## Dependencies
```npm install```

## Configuration
You need to create a .env file in the root folder using the credencials you usually use to log in as foreign on NETCLAROWIFI.
```
EMAIL=
PASSWORD=
URL=
KEY=
AUTOCONNECT=false
TIME_INTERVAL=
```
## Recommended Configuration
First you'll need to get your login url key. To get the URL [key param] on the Desktop (Credits to [@keepjhonnying](https://github.com/keepjhonnying)):

Previous logged on the #NET-CLARO-WIFI, but without connecttion
Open the browser [Chorme, opera, etc]
Open a new tab [Ctrl+T]
Open DevTools [Ctrl+Shift+i]
On DevTools click on tab NetWork
Click on Recording
Check Preserve log
![Screenshot_2019-08-04_12-28-56](https://user-images.githubusercontent.com/5790653/62426486-83507480-b6b3-11e9-9360-b43f3731cb65.png)

Enter 8.8.8.8 on Address bar, hit Enter
You will be directed  to Connect page
On DevTools, look for index.html?key=xxxxx...
![Screenshot_2019-08-04_12-33-54](https://user-images.githubusercontent.com/5790653/62426551-24d7c600-b6b4-11e9-9f4d-213b1739da91.png)

Copy the url!

So, your .env file will last this way:
```
EMAIL=
PASSWORD=
URL=
KEY=the_url_copied_in_the_last_step
AUTOCONNECT=true
TIME_INTERVAL=1
```


## Run
```npm start```
