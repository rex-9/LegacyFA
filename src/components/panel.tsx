import { icons } from "../assets";
import { IIcon } from "../assets/index";

const Panel = () => {
  const PrefixIcon = ({ icon, size }: { icon: IIcon; size: string }) => {
    return (
      <img
        // className={`w-${size} h-${size} rounded-lg`}
        className="rounded-lg"
        style={{ width: `${size}px`, height: `${size}px` }}
        src={icon.icon}
        alt={icon.label}
      />
    );
  };

  const NavBtn = ({
    icon,
    label,
    onClick,
  }: {
    icon: IIcon;
    label: string;
    onClick: () => void;
  }) => {
    return (
      <button className="p-2 w-full flex-center my-2" onClick={onClick}>
        <span className="flex justify-start px-4 gap-4 w-2/3 text-lg">
          <PrefixIcon icon={icon} size={"24"} /> {label}
        </span>
      </button>
    );
  };

  const navTo = (endpoint: string) => console.log(`Navigating to ${endpoint}`);

  return (
    <div className="w-[15%] bg-red-500 text-center h-full relative">
      <div className="text-2xl font-bold flex-center gap-4 py-6 font-quicksand">
        <PrefixIcon icon={icons.logo} size={"48"} /> Wallet Logo
      </div>
      <NavBtn
        icon={icons.logo}
        label="Dashboard"
        onClick={() => navTo("Dashboard")}
      />
      <NavBtn
        icon={icons.logo}
        label="Wallet"
        onClick={() => navTo("Wallet")}
      />
      <NavBtn
        icon={icons.logo}
        label="Transactions"
        onClick={() => navTo("Transactions")}
      />
      <NavBtn
        icon={icons.logo}
        label="Cashback"
        onClick={() => navTo("Cashback")}
      />
      <NavBtn
        icon={icons.logo}
        label="Payment"
        onClick={() => navTo("Payment")}
      />
      <NavBtn
        icon={icons.logo}
        label="Investment"
        onClick={() => navTo("Investment")}
      />
      <NavBtn
        icon={icons.logo}
        label="Profile"
        onClick={() => navTo("Profile")}
      />
      <NavBtn
        icon={icons.logo}
        label="Support"
        onClick={() => navTo("Support")}
      />
      <div className="flex-center py-4">
        <div className="w-2/3 border-[1px] h-[1px]" />
      </div>
      <NavBtn
        icon={icons.logo}
        label="Settings"
        onClick={() => navTo("Settings")}
      />
      <NavBtn
        icon={icons.logo}
        label="Logout"
        onClick={() => navTo("Log out")}
      />
      <div className="absolute bottom-[10%] left-[20%]">
        <label className="relative inline-flex items-center mb-5 cursor-pointer">
          <input type="checkbox" value="" className="sr-only peer" />
          <div className="w-9 h-5 bg-gray-200 peer-focus:outline-none peer-focus:ring-4 peer-focus:ring-blue-300 dark:peer-focus:ring-blue-800 rounded-full peer dark:bg-gray-700 peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-4 after:w-4 after:transition-all dark:border-gray-600 peer-checked:bg-blue-600" />
          <span className="ml-3 text-sm font-medium text-gray-900 dark:text-gray-300">
            Switch to light
          </span>
        </label>
      </div>
    </div>
  );
};

export default Panel;
