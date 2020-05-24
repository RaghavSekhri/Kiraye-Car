const sgMail= require('@sendgrid/mail')


sgMail.setApiKey(process.env.SENDGRID_API_KEY);

const sendWelcomeEmail = (email,name)=>{
    sgMail.send({
        to:email,
        from:'KirayeCarSupport@gmail.com',
        subject:'Welcome aboard!',
        text : `Welcome to the app, ${name}. Hope you enjoy it.`
    })

}
const sendAcknowledgementEmail = (email,name)=>{
    sgMail.send({
        to:email,
        from:'KirayeCarSupport@gmail.com',
        subject:'Query Received!',
        text : `Dear, ${name}. Your Query has been Received,We Will Get Back To You.`
    })

}
const sendSupportEmail = (data)=>{
    sgMail.send({
        to:'KirayeCarSupport@gmail.com',
        from:'KirayeCarSuport@gmail.com',
        subject:'Support Query!',
        text : `${data}`
    })

}
module.exports ={
    sendWelcomeEmail,
    sendSupportEmail,
    sendAcknowledgementEmail
}