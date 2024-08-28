import Link from 'next/link';

const Sidebar = ({ categories = [] }) => {
  return (
    <aside className="w-64 bg-gray-800 text-white p-4">
      <div className="text-xl font-bold mb-4">Categories</div>
      <ul>
        {categories.length > 0 ? (
          categories.map((category) => (
            <li key={category.guid} className="mb-2">
              <Link href={`#${category.guid.toLowerCase()}`}>
                <a className="hover:text-gray-400">{category.guid}</a>
              </Link>
            </li>
          ))
        ) : (
          <li className="text-gray-400">No categories available</li>
        )}
      </ul>
    </aside>
  );
};

export default Sidebar;
