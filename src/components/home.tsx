import { icons } from "../assets";
import { IIcon } from "../assets/index";

const Home = () => {
  const Icon = ({ icon }: { icon: IIcon }) => {
    return (
      <img className="w-5 h-5 rounded-lg" src={icon.icon} alt={icon.label} />
    );
  };

  return (
    <div className="w-[85%] bg-blue-400">
      <nav className="text-2xl font-bold flex-center !justify-between gap-4 py-6 px-8 font-quicksand">
        <div>Dashboard</div>
        <div className="flex-center gap-8 font-mooli">
          <div className="relative w-[18vw]">
            <input
              type="search"
              id="default-search"
              className="relative w-full p-2 pl-6 text-sm text-gray-900 border border-gray-300 rounded-lg bg-gray-50 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
              placeholder="Search ..."
              required
            />
            <button className="absolute right-6 bottom-[20%]">
              <Icon icon={icons.lens} />
            </button>
          </div>
          <div className="flex-center h-12 w-[18vw] gap-4 !justify-around bg-white rounded-lg pr-4">
            <img
              className="w-20 h-20 rounded-lg"
              src={icons.logo.icon}
              alt={icons.logo.icon}
            />
            <span className="text-base flex-grow">Hello Username!</span>
            <Icon icon={icons.mail} />
            <button className="relative">
              <Icon icon={icons.lens} />
              <div className="absolute -top-3 -right-2 inline-flex items-center justify-center w-5 h-5 text-xs font-bold text-white bg-purple-500 border-2 border-white rounded-full">
                5
              </div>
            </button>
          </div>
        </div>
      </nav>
    </div>
  );
};

export default Home;
