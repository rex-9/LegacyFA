import { icons } from "../assets";
import { IIcon } from "../assets/index";

const Panel = () => {
  const PrefixIcon = ({ icon, size }: { icon: IIcon; size: string }) => {
    return (
      <img
        className={`w-${size} h-${size} rounded-lg`}
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
        <span className="flex justify-start px-4 gap-4 w-1/2 text-lg">
          <PrefixIcon icon={icon} size={"6"} /> {label}
        </span>
      </button>
    );
  };

  const navTo = (endpoint: string) => console.log(`Navigating to ${endpoint}`);

  return (
    <div className="w-1/5 bg-red-500 text-center h-full">
      <div className="text-2xl font-bold flex-center gap-4 py-6">
        <PrefixIcon icon={icons.logo} size={"12"} /> Wallet Logo
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
    </div>
  );
};

export default Panel;
