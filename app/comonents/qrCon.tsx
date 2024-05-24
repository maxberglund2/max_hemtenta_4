// qrcode import 
import QRCode from "react-qr-code";
const QrCon = () => {
  return (
    <div className="flex justify-center items-center p-4 bg-slate-800">
      <QRCode value="https://www.google.com" />
    </div>
  );
};
export default QrCon;
