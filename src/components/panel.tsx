import { useEffect, useState } from "react";
import { icons } from "../assets";
import { IIcon } from "../interface";

const Panel = () => {
  const [theme, setTheme] = useState("light");

  // if local storage is empty save theme as light
  useEffect(() => {
    if (localStorage.getItem("theme") === null) {
      localStorage.setItem("theme", "light");
    }
  }, []);

  useEffect(() => {
    // select html elem
    const html = document.querySelector("html");
    //add or remove class dark in html elem according to theme in localstorage.
    if (localStorage.getItem("theme") === "dark") {
      html?.classList.add("dark");
      setTheme("dark");
    } else {
      html?.classList.remove("dark");
      setTheme("light");
    }
  }, [theme]);

  // handle switch theme
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
        className="p-2 w-full hover:bg-gray-200 flex-center my-2 relative"
        onClick={onClick}
      >
        <span className="flex justify-start px-4 gap-4 w-2/3 text-lg">
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
    <div className="w-[15%] text-center h-full relative dark-bg-white">
      <div className="text-2xl font-bold flex-center gap-4 py-6 font-quicksand dark-text-white">
        <PrefixIcon icon={icons.logo} size={"48"} /> Wallet
      </div>
      <NavBtn
        icon={icons.dashboard}
        label="Dashboard"
        onClick={() => navTo("Dashboard")}
      />
      <NavBtn
        icon={icons.wallet}
        label="Wallet"
        onClick={() => navTo("Wallet")}
      />
      <NavBtn
        icon={icons.transactions}
        label="Transactions"
        onClick={() => navTo("Transactions")}
        noti={1}
      />
      <NavBtn
        icon={icons.database}
        label="Cashback"
        onClick={() => navTo("Cashback")}
        noti={4}
      />
      <NavBtn
        icon={icons.dollar}
        label="Payment"
        onClick={() => navTo("Payment")}
      />
      <NavBtn
        icon={icons.investment}
        label="Investment"
        onClick={() => navTo("Investment")}
      />
      <NavBtn
        icon={icons.person}
        label="Profile"
        onClick={() => navTo("Profile")}
      />
      <NavBtn
        icon={icons.chat}
        label="Support"
        onClick={() => navTo("Support")}
      />
      <div className="flex-center py-4">
        <div className="w-2/3 border-[1px] h-[1px]" />
      </div>
      <NavBtn
        icon={icons.setting}
        label="Settings"
        onClick={() => navTo("Settings")}
      />
      <NavBtn
        icon={icons.logOut}
        label="Logout"
        onClick={() => navTo("Log out")}
      />
      <div className="absolute bottom-[5%] left-[20%]">
        <label className="relative inline-flex items-center mb-5 cursor-pointer">
          <input
            type="checkbox"
            value=""
            onChange={handleThemeSwitch}
            className="sr-only peer"
          />
          <div className="w-9 h-5 bg-gray-200 peer-focus:outline-none peer-focus:ring-4 peer-focus:ring-blue-300 dark:peer-focus:ring-blue-800 rounded-full peer dark:bg-gray-700 peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-4 after:w-4 after:transition-all dark:border-gray-600 peer-checked:bg-blue-600" />
          <span className="ml-3 text-sm font-medium text-gray-900 dark:text-gray-300">
            Switch to {theme !== "light" ? "Light" : "Dark"}
          </span>
        </label>
      </div>
    </div>
  );
};

export default Panel;
