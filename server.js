const mongoose = require('mongoose');
const express = require('express');
const app = express();
const conn = mongoose.createConnection('mongodb://127.0.0.1:27017/hh', {
    useNewUrlParser: true
});
conn.on('error', (error) => {
    console.log(error);
})
conn.on("connected", () => {
    console.log('数据库连接成功')
    let UserSchema = new mongoose.Schema({//骨架
        user: String,
        // pass: String
        pass: {
            required: true,
            type: Number

        }//必填项
    });
    const UserModel = conn.model('User', UserSchema)//基于骨架定义的模子

        // UserModel.create({
        //     user: '小红', pass: '123'
        // }, function (error, data) {
        //     console.log(data)
        // })

        // UserModel.create({
        //     user: '小兰', pass: '123'
        // }).then((data) => {
        //     console.log(data)
        // })


        ; (async function () {
            const data = await UserModel.create({ user: '小绿', pass: 54, age: '56' });
            console.log(data);
        })()
    // ;(async function(){
    //     const data =await UserModel.create({ user: '小绿'});
    //     console.log(data);
    // })()

    app.listen(80, () => {
        console.log('服务器连接成功')
    });
})

