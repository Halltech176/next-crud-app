import Head from "next/head";
const Layout = ({ children, title }) => {
  return (
    <>
      <Head>
        <title>{title}</title>
      </Head>
      <main className="p-3">{children}</main>
      <footer className="bg-slate-700 text-white text-center font-poppins p-3 font-medium">
        <p>This is our footer</p>
      </footer>
    </>
  );
};
export default Layout;
