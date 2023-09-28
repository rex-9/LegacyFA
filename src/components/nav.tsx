import { icons } from "../assets";
import { IIcon } from "../assets/index";

const nav = () => {
  const Icon = ({ icon }: { icon: IIcon }) => {
    return (
      <img className="w-5 h-5 rounded-lg" src={icon.icon} alt={icon.label} />
    );
  };
  return (
    <nav className="sticky top-0 text-2xl font-bold flex-center !justify-between gap-4 py-6 px-8 font-quicksand">
      <div>Dashboard</div>
      <div className="flex-center gap-8 font-mooli">
        <form>
          <label
            htmlFor="default-search"
            className="mb-2 text-sm font-medium text-gray-900 sr-only dark:text-white"
          >
            Search
          </label>
          <div className="relative w-[18vw]">
            <input
              type="search"
              id="default-search"
              className="relative w-full p-2 pl-6 text-sm text-gray-900 border border-gray-300 rounded-lg bg-gray-50 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
              placeholder="Search ..."
              required
            />
            <button type="submit" className="absolute right-6 bottom-[20%]">
              <Icon icon={icons.lens} />
            </button>
          </div>
        </form>
        <div className="flex-center h-12 w-[18vw] gap-4 !justify-around bg-white rounded-lg pr-4">
          <img
            className="w-20 h-20 rounded-lg"
            src={icons.logo.icon}
            alt={icons.logo.icon}
          />
          <span className="text-base flex-grow">Hello Username!</span>
          <button className="hover:bg-gray-200 rounded-lg p-2">
            <Icon icon={icons.mail} />
          </button>
          <button className="relative hover:bg-gray-200 rounded-lg p-2">
            <Icon icon={icons.lens} />
            <span className="sr-only">Notifications</span>
            <div className="noti-badge -top-3 -right-2">5</div>
          </button>
        </div>
      </div>
    </nav>
  );
};

export default nav;
