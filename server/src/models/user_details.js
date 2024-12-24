
const mongoose = require("mongoose");

const user_info_schema=mongoose.Schema(
    {
        user_id:{
            type:String,
            required:true,
        },
        first_name:{
            type:String,
            required:true,
        },
        last_name:{
            type:String,
            required:true,
        },
        middle_name:{
            type:String,
            required:false,
        },
        email_id:{
            type:String,
            required:true,
        },
        phone_no:{
            type:Number,
            required:false,
        },
        summary:{
            type:String,
            required:false,
        }
        ,
        Education:{
            type:String,
            required: false,
        },
        skills:{
            type:String,
            required:false,
        },
        work_exp:{
            type:String,
            required:false,
        },
        projects:{
            type:String,
            required:false,
        },
        links:{
            type:String,
            required:false,
        },

    }
);
module.exports=mongoose.model('user_details',user_info_schema)