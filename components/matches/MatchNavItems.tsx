import { Button } from "../ui/button";

const MatchNavItems = () => {
  return (
    <div className="bg-[#001E24]">
      <div className=" flex justify-between md:px-5 px-1 max-w-[1900px] mx-auto py-4">
        <div className="flex md:gap-2 gap-1">
          <Button variant={"primary"} className="text-sm px-2 py-1 md:text-base md:px-4 md:py-2">
            Fixtures
          </Button>
          <Button variant={"primary"} className="text-sm px-2 py-1 md:text-base md:px-4 md:py-2">
            Results
          </Button>
          <Button variant={"primary"} className="text-sm px-2 py-1 md:text-base md:px-4 md:py-2">
            Results
          </Button>
        </div>
        <div>
          <Button variant={"primary"} className="text-sm px-2 py-1 md:text-base md:px-4 md:py-2">
            All Competitions
          </Button>
        </div>
      </div>
    </div>
  );
};

export default MatchNavItems;
