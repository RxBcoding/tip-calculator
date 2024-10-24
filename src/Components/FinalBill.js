export default function FinalBill({ initTotal, myTip, friendTip }) {
  let aveTip = Math.round((myTip + friendTip) / 2);
  let tipAmount = Math.round(initTotal * (aveTip / 100));
  let finalTotal = initTotal + tipAmount;
  return (
    <h3>
      You pay ${finalTotal} (${initTotal} + ${tipAmount} tip)
    </h3>
  );
}
