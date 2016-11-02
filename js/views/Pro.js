import { 
  BackAndroid, 
  Navigator,
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
} from 'react-native';
import React, { Component } from 'react';

export default class Pro extends Component {

  componentDidMount(){

    // 例一
    // const p = new Promise(function(resolve, reject){
    //     console.log('promise----1');
    //     // 运行后续的 callback 列表，例如：then,when等。否则，不会执行then里面的函数
    //     resolve('go next'); 
    // });
    
    // // 只考虑成功
    // p.then(function(){
    //     console.log('promise----2', arguments);
    //     return 'next';
    // }, null).then(function(){
    //     console.log('promise----3', arguments)
    // }, null);

    // 例二
    // function runAsync(){
    //     var p = new Promise(function(resolve, reject){
    //         //做一些异步操作
    //         setTimeout(function(){
    //             console.log('执行完成');
    //             resolve('随便什么数据');
    //         }, 2000);
    //     });
    //     return p;            
    // }
  
    // runAsync().then(function(data){
    //   console.log(data);
    //   console.log(arguments);
    // });

    // 例三
    function runAsync1(){
        var p = new Promise(function(resolve, reject){
            //做一些异步操作
            setTimeout(function(){
                console.log('异步任务1执行完成');
                resolve('随便什么数据1');
            }, 1000);
        });
        return p;            
    }
    function runAsync2(){
        var p = new Promise(function(resolve, reject){
            //做一些异步操作
            setTimeout(function(){
                console.log('异步任务2执行完成');
                resolve('随便什么数据2');
            }, 2000);
        });
        return p;            
    }
    function runAsync3(){
        var p = new Promise(function(resolve, reject){
            //做一些异步操作
            setTimeout(function(){
                console.log('异步任务3执行完成');
                resolve('随便什么数据3');
            }, 2000);
        });
        return p;            
    }

    // runAsync1().then(function(data){
    //   console.log(data);
    //   return runAsync2();
    // }).then(function(data){
    //   console.log(data);
    //   return '直接返回数据';
    // }).then(function(data){
    //   console.log(data);
    // });

    // function getNumber(){
    //   var p = new Promise(function(resolve, reject){
    //     //做一些异步操作
    //     setTimeout(function(){
    //       var num = Math.ceil(Math.random()*10); //生成1-10的随机数
    //       if(num<=5){
    //           resolve(num);
    //       }else{
    //           reject('数字太大了');
    //       }
    //     }, 2000);
    //   });
    //   return p;            
    // }

  // getNumber().then(
  //     function(data){
  //         console.log(somedata);
  //         console.log('resolved');
  //         console.log(data);
  //     }, 
  //     function(reason, data){
  //         console.log('rejected');
  //         console.log(reason);
  //     }
  // );

  // getNumber().then(function(data){
  //   console.log(somedata);
  //   console.log('resolved');
  //   console.log(data);
  // }).catch(function(reason){
  //   console.log('rejected');
  //   console.log(reason);
  // });

  // Promise
  // .all([runAsync1(), runAsync2(), runAsync3()])
  // .then(function(results){
  //     console.log(results);
  // });

  Promise
  .race([runAsync1(), runAsync2(), runAsync3()])
  .then(function(results){
      console.log(results);
  });


  }

  render() {
    return (
       <View>
        <Text> Promise page </Text>
       </View>
    );
  }

}