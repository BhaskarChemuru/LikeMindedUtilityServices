// JavaScript Document
menuItemClick = (function(menuItem){ if((menuItem != null) && (menuItem.length > 0)) {location.href="./?p="+menuItem;} else {location.href="./";}});
btnClick = (function(btnName){ if(btnName.length > 0) {location.href=btnName;} else {location.href="./";}});
underConstructionClick = (function(btnName){ if(btnName.length > 0) {alert("Sorry, page is under construction.");return false;} else {alert("Sorry, page is under construction.");return false;}});
validateForm = (function(form) {alert('test'); return false;});
menuItemClickNew = (function(menuItem){ if((menuItem != null) && (menuItem.length > 0)) {location.href="./"+menuItem;} else {location.href="./";}});