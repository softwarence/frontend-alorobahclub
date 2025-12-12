import Cards from "@/components/dashboard/Cards";
import ProductSalesChart from "@/components/dashboard/ProductSalesChart";

function Overview() {
  return (
    <div className="bg-gray-100">
      <h1 className="text-3xl p-3 pl-7">Overview </h1>
      <Cards />
      <ProductSalesChart />
    </div>
  );
}

export default Overview;
