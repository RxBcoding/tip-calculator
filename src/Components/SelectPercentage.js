export default function SelectPercentage({ tipInput, onTipInput, children }) {
  return (
    <form>
      <label>{children}</label>
      <select
        value={tipInput}
        onChange={(e) => {
          onTipInput(Number(e.target.value));
        }}
      >
        <option value={10}>Dissatisfied (10%)</option>
        <option value={12}>It was okay (12%)</option>
        <option value={18}>It was good (18%)</option>
        <option value={20}>Absolutely amazing! (20%)</option>
      </select>
    </form>
  );
}
