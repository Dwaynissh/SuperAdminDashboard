import CompanyCard from "../Props/CompanyCard";
import logo from "../../assets/nextloogoforcode.png";
import ChartDoughnut from "../allCharts/ChartDoughnut";
import CardLineChart from "../allCharts/CardLineChart";

const DashboardDisplay = () => {
  document.title = "Admin Dashboard Display";

  return (
    <div className="text-blue-950 flex flex-col h-full bg-gray-100">
      <div className="h-[450px] md:h-[200px] py-5 grid grid-cols-1 lg:grid-cols-4 gap-2">
        <div className="h-full rounded-md m-2 bg-red-500">Hello</div>
        <div className="h-full rounded-md m-2 bg-yellow-500">Hello</div>
        <div className="h-full rounded-md m-2 bg-blue-500">Hello</div>
        <div className="h-full rounded-md m-2 bg-green-500">Hello</div>
      </div>

      <div className="h-[400px] py-5 grid grid-cols-1 md:grid-cols-1 lg:grid-cols-3 gap-2">
        <div className="h-full p-[20px] rounded-md m-2 bg-white lg:col-span-2">
          <div>
            <div className="font-bold text-blue-950">
              Financial Analysis (2019 - 2021)
            </div>
            <div className="flex justify-between items-center">
              <div>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Velit
                est similique quibusdam iusto minima.
              </div>
              <div>
                <input type="checkbox" />
              </div>
            </div>
          </div>
          <div className="border h-[80%]">
            <CardLineChart />
          </div>
        </div>
        <div className="h-full p-[20px] rounded-md m-2 bg-white">
          <div className="mb-2">
            <div className="font-bold text-blue-950">Financials</div>
            <div>Q1</div>
          </div>
          <div className="border h-[80%] flex justify-center">
            <ChartDoughnut />
          </div>
        </div>
      </div>

      <div className="h-[600px] lg:h-[400px] py-5 grid grid-cols-1 md:grid-cols-3  lg:grid-cols-3 gap-2">
        <div className="h-full p-[20px] rounded-md m-1 bg-white ">
          <div className="flex justify-between items-center ">
            <div className="font-bold text-blue-950">
              Balance Sheet Statistics
            </div>
            <div className="font-bold text-blue-950 text-[20px]">↓</div>
          </div>
          <div className="border h-[80%]">Chart</div>
        </div>
        <div className="h-full p-[20px] rounded-md m-1 bg-white">
          <div className="">
            <div className="font-bold text-blue-950">Risks</div>
            <div className=" flex justify-between items-center">
              <div>
                Lorem ipsum dolor sit amet consectetur, adipisicing elit. Labore
                architecto sed ea illum quaerat.
              </div>
              <div className="font-bold text-blue-950 text-[20px]">↓</div>
            </div>
          </div>
          <div className="border h-[80%]">Chart</div>
        </div>
        <div className="h-full p-[20px] rounded-md m-1 bg-white">
          <div className="">
            <div className="font-bold text-blue-950">Marketing</div>
            <div>
              Lorem ipsum dolor sit amet consectetur, adipisicing elit. Labore
              architecto sed ea illum quaerat.
            </div>
          </div>
          <div className="border h-[80%]">Chart</div>
        </div>
      </div>

      <div className="h-[600px] lg:h-[400px] py-5 grid grid-cols-1 gap-2">
        <CompanyCard logo={logo} companyName="Next" />
      </div>
    </div>
  );
};

export default DashboardDisplay;
