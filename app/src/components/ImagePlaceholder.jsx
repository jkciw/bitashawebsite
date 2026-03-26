function ImagePlaceholder({ label, tone = 'light', src, alt = '', fit = 'cover' }) {
  const classes =
    tone === 'dark'
      ? 'surface-card-dark'
      : 'surface-card';

  return (
    <div className={`relative h-72 w-full overflow-hidden rounded-3xl ${classes} md:h-96`}>
      {src ? (
        <img src={src} alt={alt} className={`h-full w-full ${fit === 'contain' ? 'object-contain p-10 md:p-14' : 'object-cover'}`} />
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
