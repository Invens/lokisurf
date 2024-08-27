// components/Layout.js
const Layout = ({ children }) => {
  return (
    <div className="flex">
      <main className="flex-1 p-4 bg-gray-900 text-white">
        {children}
      </main>
    </div>
  );
};

export default Layout;
