import * as React from "react"
import QRCode from 'qrcode'
import generatePayload from "promptpay-qr"

interface PromptPayProps {
  mobileNumber: number;
  amount: number;
}

const Promptpay: React.FC<PromptPayProps> = (props) => {

    const { mobileNumber, amount } = props;

    const [qrCodeData, setQrCodeData] = React.useState<string | null>(null);


    React.useEffect(() => {

      //generate Code qr
      const payload = generatePayload(mobileNumber.toString(), { amount });

      //เปลี่ยนให้เป็นdataที่imgรับได้
      QRCode.toDataURL(payload, {

        //ปรับระดับความผิดพลาดในการทำqr
        errorCorrectionLevel: 'H',
      }, function(err, dataUrl) {
        if (err) throw err;

        //setState
        setQrCodeData(dataUrl);
      });

    }, [mobileNumber, amount]);
    
    return(
        <>
            {qrCodeData && <img src={qrCodeData} alt="QR Code" />}
        </>
    )
}

export default Promptpay;

