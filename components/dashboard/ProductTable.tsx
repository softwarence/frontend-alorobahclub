import Image from "next/image";
import { products } from "./productsData";

export default function ProductTable() {
  return (
    <div className="bg-white rounded-lg shadow overflow-x-auto  ">
      <table className="min-w-[900px] w-full text-sm ">
        <thead className="bg-gray-100 text-left ">
          <tr>
            <th className="p-3">
              <input type="checkbox" />
            </th>
            <th className="p-3">Product</th>
            <th className="p-3 hidden md:table-cell">Category</th>
            <th className="p-3">Price</th>
            <th className="p-3 hidden lg:table-cell">SKU</th>
            <th className="p-3">Stock</th>
            <th className="p-3 hidden md:table-cell">Published</th>
            <th className="p-3"></th>
          </tr>
        </thead>

        <tbody>
          {products.map((item) => (
            <tr key={item.id} className="  hover:bg-gray-50 border-b-8 border-gray-100 rounded-lg">
              <td className="p-3">
                <input type="checkbox" />
              </td>

              {/* Product */}
              <td className="p-3">
                <div className="flex items-center gap-3">
                  <Image
                    src={item.image}
                    alt={item.title}
                    width={50}
                    height={50}
                    className="rounded shrink-0"
                  />
                  <div>
                    <p className="font-medium">{item.title}</p>
                    {/* Mobile meta */}
                    <p className="text-xs text-gray-500 md:hidden">{item.category}</p>
                  </div>
                </div>
              </td>

              <td className="p-3 hidden md:table-cell text-gray-600">{item.category}</td>

              <td className="p-3 font-medium">{item.price} SAR</td>

              <td className="p-3 hidden lg:table-cell text-gray-600">{item.sku}</td>

              <td className="p-3">
                {item.stock === "in" ? (
                  <span className="text-green-600 font-medium">In stock</span>
                ) : (
                  <span className="text-red-500 font-medium">Out of stock</span>
                )}
              </td>

              <td className="p-3 hidden md:table-cell text-gray-500">{item.published}</td>

              <td className="p-3 text-xl text-right">⋮</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}
