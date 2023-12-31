import css from './Statistics.module.css';

export default function Statistics({ title, stats }) {
  return (
    <section className={css.statistics}>
      {title && <h2 className={css.statTitle}>{title}</h2>}

      <ul className={css.statList}>
        {stats.map(el => {
          return (
            <li
              key={el.id}
              className={css.statListItem}
              style={{
                backgroundColor: getRandomHexColor(),
              }}
            >
              <span className={css.statListLabel}>{el.label}</span>
              <span className={css.statListPercentage}>{el.percentage}%</span>
            </li>
          );
        })}
      </ul>
    </section>
  );
}

function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215)
    .toString(16)
    .padStart(6, 0)}`;
}
