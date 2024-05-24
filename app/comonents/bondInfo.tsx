import Image from "next/image";
import QrCon from "../comonents/qrCon";

const BondInfo = () => {
  return (
    <div className="bg-slate-800 text-white p-4 flex items-center justify-center gap-5">
      <Image
        src="/images/bond.jpg"
        alt="Image of Bondhon"
        width={300}
        height={300}
        className="rounded-full"
      />
      <div>
        <h1>Bondhon Shahriar Alam</h1>
        <p>Biträdande Rektor</p>
        <p>Mob: +46 76 108 78 89</p>
        <p>Mejl: bondhon.shahriaralam@ntig.se</p>
      </div>
      <QrCon></QrCon>

    </div>
  );
};

export default BondInfo;
