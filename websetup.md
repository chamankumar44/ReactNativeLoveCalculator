React Native for web setup-
1. Install new dependencies to support react native for web
2. include some new files to run react native app on web
3. Add ‘build’ and ‘web’ script in package.json to run to app
4. Start the app on web as well as android emulator
-----------------------------
Step -1 
1.npx react-native init AwesomeProject
2. npx react-native run-android
Step - 2

1. npm install react-dom react-native-web --legacy-peer-deps

2. npm install --save-dev babel-plugin-react-native-web babel-plugin-module-resolver --legacy-peer-deps

3. npm i -D babel-plugin-react-native-web webpack webpack-cli webpack-dev-server html-webpack-plugin react-dom babel-loader url-loader @svgr/webpack --legacy-peer-deps

4.add this code in the package.json file 

"jest": {
    "preset": "react-native-web",
    "moduleFileExtensions": [
      "ts",
      "tsx",
      "js",
      "jsx",
      "json",
      "node"
    ]
  }

5. include these four files in root folder(project folder) of your project 

https://gist.github.com/arrygoo/81d95...

6. include these two scripts in the package.json file

"build": "rm -rf dist/ && webpack --mode=production --config webpack.config.js",
   "web": "webpack serve --mode=development --config webpack.config.js"

7. you are all set and now run the app on web with this command
npm run web
