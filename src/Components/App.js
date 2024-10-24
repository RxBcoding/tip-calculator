import { useState } from "react";
import BillInput from "./BillInput";
import FinalBill from "./FinalBill";
import Reset from "./Reset";
import SelectPercentage from "./SelectPercentage";

export default function App() {
  const [initTotal, setInitTotal] = useState(0);
  const [myTip, setMyTip] = useState(20);
  const [friendTip, setFriendTip] = useState(20);

  function handleInitTotal(num) {
    setInitTotal(num);
  }

  function handleMyTip(num) {
    setMyTip(num);
  }

  function handleFriendTip(num) {
    setFriendTip(num);
  }

  function handleReset() {
    setInitTotal(0);
    setMyTip(20);
    setFriendTip(20);
  }

  return (
    <div>
      <BillInput initTotal={initTotal} onInitTotal={handleInitTotal} />
      <SelectPercentage tipInput={myTip} onTipInput={handleMyTip}>
        How did you like the service?
      </SelectPercentage>
      <SelectPercentage tipInput={friendTip} onTipInput={handleFriendTip}>
        How did your friend like the service?
      </SelectPercentage>
      <FinalBill initTotal={initTotal} myTip={myTip} friendTip={friendTip} />
      <Reset onReset={handleReset} />
    </div>
  );
}
