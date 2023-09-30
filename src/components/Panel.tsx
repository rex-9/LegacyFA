import { Dispatch, SetStateAction } from "react";
import { icons } from "../assets";
import { IIcon } from "../interface";

const Panel = ({
  theme,
  setTheme,
}: {
  theme: string;
  setTheme: Dispatch<SetStateAction<string>>;
}) => {
  const handleThemeSwitch: () => void = () => {
    if (localStorage.getItem("theme") === "light") {
      setTheme("dark");
      localStorage.setItem("theme", "dark");
    } else {
      setTheme("light");
      localStorage.setItem("theme", "light");
    }
  };

  const PrefixIcon = ({ icon, size }: { icon: IIcon; size: string }) => {
    return (
      <img
        className="object-cover"
        style={{ width: `${size}px`, height: `${size}px` }}
        src={icon?.icon}
        alt={icon?.label}
      />
    );
  };

  const NavBtn = ({
    icon,
    label,
    onClick,
    noti = 0,
  }: {
    icon: IIcon;
    label: string;
    onClick: () => void;
    noti?: number;
  }) => {
    return (
      <button
        className="p-2 w-full hover:bg-gray-200 dark:hover:bg-opacity-25 dark:hover:bg-gradient-to-tr dark:hover:from-[#3C4879] dark:hover:to-[#724DAD] flex-center my-2 relative"
        onClick={onClick}
      >
        <span className="flex justify-start px-4 gap-4 w-2/3 text-base">
          <PrefixIcon icon={icon} size={"24"} /> {label}
          {noti > 0 && (
            <>
              <span className="sr-only">Notifications</span>
              <div className="noti-badge right-8 top-3">{noti}</div>
            </>
          )}
        </span>
      </button>
    );
  };

  const navTo: (endpoint: string) => void = (endpoint) => {
    console.log(`Navigating to ${endpoint}`);
  };

  return (
    <div className="w-[15%] text-center h-full relative dark-panel">
      <div className="text-2xl font-bold flex-center gap-4 py-6 font-quicksand dark-text-white">
        <PrefixIcon icon={icons.logo} size={"48"} /> Wallet
      </div>
      <NavBtn
        icon={theme === "light" ? icons.dashboardB : icons.dashboardW}
        label="Dashboard"
        onClick={() => navTo("Dashboard")}
      />
      <NavBtn
        icon={theme === "light" ? icons.walletB : icons.walletW}
        label="Wallet"
        onClick={() => navTo("Wallet")}
      />
      <NavBtn
        icon={theme === "light" ? icons.transactionsB : icons.transactionsW}
        label="Transactions"
        onClick={() => navTo("Transactions")}
        noti={1}
      />
      <NavBtn
        icon={theme === "light" ? icons.databaseB : icons.databaseW}
        label="Cashback"
        onClick={() => navTo("Cashback")}
        noti={4}
      />
      <NavBtn
        icon={theme === "light" ? icons.dollarB : icons.dollarW}
        label="Payment"
        onClick={() => navTo("Payment")}
      />
      <NavBtn
        icon={theme === "light" ? icons.investmentB : icons.investmentW}
        label="Investment"
        onClick={() => navTo("Investment")}
      />
      <NavBtn
        icon={theme === "light" ? icons.personB : icons.personW}
        label="Profile"
        onClick={() => navTo("Profile")}
      />
      <NavBtn
        icon={theme === "light" ? icons.chatB : icons.chatW}
        label="Support"
        onClick={() => navTo("Support")}
      />
      <div className="flex-center py-4">
        <div className="w-2/3 border-[1px] h-[1px]" />
      </div>
      <NavBtn
        icon={theme === "light" ? icons.settingB : icons.settingW}
        label="Settings"
        onClick={() => navTo("Settings")}
      />
      <NavBtn
        icon={theme === "light" ? icons.logOutB : icons.logOutW}
        label="Logout"
        onClick={() => navTo("Log out")}
      />
      <div className="absolute bottom-[5%] left-[20%]">
        <label className="relative inline-flex items-center cursor-pointer">
          <input
            type="checkbox"
            value={theme}
            onChange={handleThemeSwitch}
            checked={theme === "dark"}
            className="sr-only peer"
          />
          <div className="w-11 h-6 bg-gray-200 peer-focus:outline-none peer-focus:ring-4 peer-focus:ring-purple-300 dark:peer-focus:ring-purple-800 rounded-full peer dark:bg-gray-700 peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all dark:border-gray-600 peer-checked:bg-purple-600"></div>
          <span className="ml-3 text-sm font-medium text-gray-900 dark:text-gray-300">
            Switch to {theme !== "light" ? "Light" : "Dark"}
          </span>
        </label>
      </div>
    </div>
  );
};

export default Panel;
