export default function Filters() {
  return (
    <div className="flex flex-col gap-3 mb-4 lg:flex-row lg:items-center lg:justify-between">
      {/* Search */}
      <div className="flex flex-col sm:flex-row gap-2 w-full lg:w-auto">
        <input
          type="text"
          placeholder="Search products..."
          className="border px-3 py-2 rounded text-sm w-full sm:w-64"
        />
        <button className="border px-4 py-2 rounded text-sm w-full sm:w-auto">Search</button>
      </div>

      {/* Filters */}
      <div className="flex flex-wrap gap-2">
        <select className="border px-3 py-2 rounded-md text-sm">
          <option>Default sorting</option>
          <option>Newest</option>
          <option>Oldest</option>
        </select>

        <select className="border px-3 py-2 rounded-md text-sm">
          <option>Select a category</option>
          <option>Newest</option>
          <option>Oldest</option>
        </select>
        <select className="border px-3 py-2 rounded-md text-sm">
          <option>Default stock status</option>
          <option>Newest</option>
          <option>Oldest</option>
        </select>

        <button className="border px-4 py-2 rounded text-sm w-full sm:w-auto">Filter</button>
      </div>
    </div>
  );
}
