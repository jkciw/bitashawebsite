import NavBar from './NavBar';

function PageLayout({ children, dark = false, headerMode }) {
  const mode = headerMode || (dark ? 'dark' : 'light');

  return (
    <div className={dark ? 'min-h-screen bg-brandNight text-brandIvory' : 'site-gradient-page min-h-screen text-ink'}>
      <NavBar mode={mode} />
      <main>{children}</main>
    </div>
  );
}

export default PageLayout;
