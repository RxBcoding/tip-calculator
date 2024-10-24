export default function BillInput({ initTotal, onInitTotal }) {
  return (
    <div>
      How much was your bill?
      <input
        type="text"
        value={initTotal}
        onChange={(e) => {
          onInitTotal(Number(e.target.value));
        }}
      ></input>
    </div>
  );
}
