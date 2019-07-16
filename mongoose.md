# mongoose  使用方法
1. npm init -y
2. npm i express -S
3. npm i mongoose -S
4. 引包 const mongoose = require('mongoose');
        const express = require('express');
5. const app = express();
6.链接 const conn = mongoose.createConnection('mongodb:127.0.0.1:27017/数据库名', {
    useNewUrlParser: true
});
7. 监听事件
    - 连接失败
        conn.on('error', (error) => {
                 console.log(error);
        })
    - 连接成功
        conn.on("connected", () => {
            console.log('数据库连接成功')
            let UserSchema = new mongoose.Schema({骨架
                user: String,
                pass: String
            });
            const UserModel = conn.model('User', UserSchema)基于骨架定义的模子
                app.listen(80);
        })
    - conn.on('open',()=>{
        //打开
    })


## 创建骨架
  new mongoose.Schema({
      user:String,
      ary:[]
  })
  注意 ：设计骨架的时候可以添加必填项required:true
   default:'heh' 注释
  例如：
  ```
   let UserSchema = new mongoose.Schema({骨架
        user: String,
        pass:{
          required:true,
          type:Number

        },
        zs:{
            default:'heh'
        }
    });
  ```
## 基于骨架创建模型
conn.model('模型名','骨架名')
参数详解：
    model(参数1, 参数2， 参数3) 发布模型的方法
    参数1： 模型名 （不需要使用）
    参数2： 骨架名
    参数3： 集合名 (如果数据库里面没有这个集合 会自动创建) 

## 基于模型造数据
 - 增 create
      写法：
      1.  UserModel.create({
                user: '小红', pass: '123'
            }, function (error, data) {
                console.log(data)
            })
      2.  UserModel.create({
                user: '小兰', pass: '123'
            }).then((data) => {
                console.log(data)
            })
      3.   ;(async function(){
                const data =await UserModel.create({ user: '小绿',pass:54,age:'56'});
                console.log(data);
            })()
      - 通过模型去创建真实的数据,例如：

       ```
        const UserModel = conn.model('User', UserSchema)
        UserModel.create({
            user: '小红', pass: '123'
        }, function (error, data) {
                console.log(data)
            })
       ```
       在创建数据的时候，如果骨架中没有添加这个数据字段，那么这项数据不会成功;骨架中的数据字段只能减少不能增多。
       例：
       ```
        UserModel.create({user:'xxx',pass:123,age:12})

        这里的age是没有的在骨架中的，所以age是不能成功添加到数据库中的
       ```
       4. 
       ```
        let arr =[];
        for(let i=0;i<1000;i++){
            arr.push({
                user:zf+i,
                pass:555
            })
        }
       ```

 - 删 delete
    
 - 改：update
 - 查：find
    - find 查多个数据,返回的是数组
        -  find({_id:12321321,age:18},{user_:1,id:0})  查所有的数据 返回的数组，user显示，id就不显示
        -  find({_id:12321321,age:18})  查所有的数据
    - findOne 查一个数据
    - findById('215')
    