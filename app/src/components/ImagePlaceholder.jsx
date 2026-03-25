function ImagePlaceholder({ label, tone = 'light', src, alt = '' }) {
  const classes =
    tone === 'dark'
      ? 'border-brandIvory/20 bg-gradient-to-b from-[#384f70] to-[#22334b]'
      : 'border-brandNavy/10 bg-gradient-to-b from-[#f6f3eb] to-[#d9d5cb]';

  return (
    <div className={`relative h-72 w-full overflow-hidden rounded-3xl border ${classes} shadow-card md:h-96`}>
      {src ? (
        <img src={src} alt={alt} className="h-full w-full object-cover" />
      ) : (
        <>
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_20%_20%,rgba(255,255,255,.25),transparent_42%)]" />
          <div className="absolute bottom-6 left-6 rounded-full border border-current/20 bg-white/20 px-4 py-2 text-xs uppercase tracking-[0.16em] text-current/80">
            Placeholder
          </div>
          <p className="absolute bottom-6 right-6 text-sm font-medium tracking-wide text-current/80">{label}</p>
        </>
      )}
    </div>
  );
}

export default ImagePlaceholder;
