沉浸状态栏 for Android

# Installation
## Bower

```
bower install https://github.com/squallliu/whcyit-immerse.git
```

## Cordova/Ionic
```
# Using Cordova
cordova plugin add https://github.com/squallliu/cordova-plugin-Immerse.git

# Using Ionic CLI
ionic plugin add https://github.com/squallliu/cordova-plugin-Immerse.git
```
# Usage
修改index.html
```
<cy-immerse-bar></cy-immerse-bar>
<ion-nav-bar class="bar-positive" align-title="center">
  <ion-nav-back-button>
  </ion-nav-back-button>
</ion-nav-bar>
<ion-nav-view></ion-nav-view>
```