const Notification = require('../models/notification')


exports.addNotification = (req, res) => {
    const newNotification = new Notification({ 
        post: req.body.post,
        read: "false",

       });
   newNotification.save((err, result) => {
        if (err) {
            console.log(err.message)
            console.error(err)
            res.json({Error:err.message})
        } else {
            res.json({success:"true"})
        }
    });
}

exports.getUnread = async (req, res) => {
    try{
        const notifications = await Notification.find({ read: false }).sort('createdAt')
        Notification.updateMany({ read: "false" }, {
            $set: {
           read:"true"
           
        }}, function (err, affected, resp) {
            if (err) {
                console.log(err.message)
                console.error(err)
                res.json({ Error: err.message })
            } else {
                
           
            }
        })
       return res.status(200).json({ notifications, count: notifications.length })
    }catch(err){
         console.log(err.message)
        console.error(err)
        res.json({Error:err.message})

    }
}

exports.getNotifications = async (req, res) => {
    try{
        const data = await Notification.find();
        res.json(data)
    }
    catch(error){
        res.status(500).json({message: error.message})
    }
}



