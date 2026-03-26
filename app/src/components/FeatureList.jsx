function FeatureList({ items, dark = false }) {
  return (
    <ul className="grid gap-4 md:grid-cols-3">
      {items.map((item) => (
        <li
          key={item.title}
          className={
            dark
              ? 'surface-card-dark rounded-2xl p-5'
              : 'surface-card rounded-2xl p-5'
          }
        >
          <h4 className={dark ? 'text-base font-semibold text-brandIvory' : 'text-base font-semibold text-brandNight'}>
            {item.title}
          </h4>
          <p className={dark ? 'mt-2 text-sm text-brandIvory/75' : 'mt-2 text-sm text-steel'}>{item.text}</p>
        </li>
      ))}
    </ul>
  );
}

export default FeatureList;
