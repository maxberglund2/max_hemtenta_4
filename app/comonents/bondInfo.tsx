import Image from "next/image";
import QrCon from "../comonents/qrCon";

const BondInfo = () => {
  return (
    <div className="bg-slate-800 text-white p-4 flex flex-col md:flex-row items-center justify-center gap-5 rounded-lg">
      <div className="md:w-1/3 flex-shrink-0">
        <Image
          src="/images/bond.jpg"
          alt="Image of Bondhon"
          width={300}
          height={300}
          className="rounded-full"
        />
      </div>
      <div className="md:w-2/3">
        <h1 className="text-xl font-semibold mb-2">Bondhon Shahriar Alam</h1>
        <p>Biträdande Rektor</p>
        <p>Mob: +46 76 108 78 89</p>
        <p>Mejl: bondhon.shahriaralam@ntig.se</p>
      </div>
      <QrCon />
    </div>
  );
};

export default BondInfo;
