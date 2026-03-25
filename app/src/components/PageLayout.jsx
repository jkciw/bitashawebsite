import NavBar from './NavBar';

function PageLayout({ children, dark = false }) {
  return (
    <div className={dark ? 'min-h-screen bg-brandNavy text-brandIvory' : 'min-h-screen bg-white text-ink'}>
      <NavBar dark={dark} />
      <main>{children}</main>
    </div>
  );
}

export default PageLayout;
