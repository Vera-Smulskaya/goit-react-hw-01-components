import css from './TransactionHistory.module.css';

export default function TransactionHistory({ items }) {
  return (
    <table className={css.table}>
      <thead className={css.tableHead}>
        <tr className={css.tableHeadRow}>
          <th className={css.tableHeadItem}>Type</th>
          <th className={css.tableHeadItem}>Amount</th>
          <th className={css.tableHeadItem}>Currency</th>
        </tr>
      </thead>

      <tbody className={css.tableBody}>
        {items.map(({ type, amount, currency, id }) => (
          <tr key={id} className={css.tableRow}>
            <td className={css.tableItem}>{type}</td>
            <td className={css.tableItem}>{amount}</td>
            <td className={css.tableItem}>{currency}</td>
          </tr>
        ))}
      </tbody>
    </table>
  );
}
