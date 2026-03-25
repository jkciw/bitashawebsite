function FeatureList({ items, dark = false }) {
  return (
    <ul className="grid gap-4 md:grid-cols-3">
      {items.map((item) => (
        <li
          key={item.title}
          className={
            dark
              ? 'rounded-2xl border border-brandIvory/10 bg-brandIvory/5 p-5'
              : 'rounded-2xl border border-brandNavy/12 bg-cloud p-5'
          }
        >
          <h4 className="text-base font-semibold">{item.title}</h4>
          <p className={dark ? 'mt-2 text-sm text-brandIvory/75' : 'mt-2 text-sm text-steel'}>{item.text}</p>
        </li>
      ))}
    </ul>
  );
}

export default FeatureList;
