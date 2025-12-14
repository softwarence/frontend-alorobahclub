import Cards from "@/components/dashboard/Cards";
import ProductSalesChart from "@/components/dashboard/ProductSalesChart";

function Overview() {
  return (
    <div className="bg-gray-50">
      <div className="flex justify-between p-5">
        <h1 className="text-3xl pb-4">Overview</h1>
        <select className="border px-2  rounded-md text-sm">
          <option>Bulk actions</option>
          <option>Delete</option>
        </select>
      </div>
      <Cards />
      <ProductSalesChart />
    </div>
  );
}

export default Overview;
