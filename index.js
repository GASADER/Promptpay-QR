const qrcode = require('qrcode')
const generatePayload = require('promptpay-qr')
const prompt = require('prompt-sync')()

const mobileNumber = prompt('How many for payment? (xxx-xxx-xxxx)')
const amount = +prompt('How many for payment?')
console.log(amount)
const payload = generatePayload(mobileNumber, { amount })

qrcode.toString(payload, {
    errorCorrectionLevel: 'H',
    // type: 'svg'
  }, function(err, data) {
    if (err) throw err;
    console.log(data);
  });