import TimeCon from "./comonents/timeCon";
import BondInfo from "./comonents/bondInfo";
import Status from "./comonents/status";
export default function Home() {
  return (
    <main className="flex h-screen flex-col justify-center items-center">
      <div className="container mx-auto">
        <TimeCon />
        <BondInfo />
        <Status />
      </div>
    </main>
  );
}
