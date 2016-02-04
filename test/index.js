/**
 * Created by JW on 2016/2/3.
 */

require('style!css!./index.css');
var h2 = document.createElement('h2');
h2.innerHTML = '第二次出征webpack的第一次编译';
h2.setAttribute('class','red');
document.body.appendChild(h2);
console.log('第二次出征webpack的第一次编译!!!~~');

/*
const arr=["str1",'str2','str3'];
const arr2=[...arr,'str4'];
import './index.css'
console.log(arr2);
*/


/*const arr=["str1",'str2','str3'];
const arr2=[...arr,'str4']
import Vue from 'vue'
new Vue({
    el:"body",
    data:{
        test:"haha"
    }
})
console.log(arr2)*/
