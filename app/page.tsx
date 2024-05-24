import TimeCon from "./comonents/timeCon";
import BondInfo from "./comonents/bondInfo";
import QrCon from "./comonents/qrCon";
import Status from "./comonents/status";
export default function Home() {
  return (
    <main className="">
      <TimeCon></TimeCon>
      <BondInfo></BondInfo>
      <Status></Status>
    </main>
  );
}
