import { IIcon } from "../assets/index";
const TinyIcon = ({ icon }: { icon: IIcon }) => {
  return (
    <img
      className="w-2 h-2 rounded-lg text-gray-300"
      src={icon.icon}
      alt={icon.label}
    />
  );
};

const Heading = ({
  header,
  action,
  icon,
}: {
  header: string;
  action: string;
  icon: IIcon;
}) => {
  return (
    <div className="flex-center w-full !justify-between">
      <span className="text-2xl font-quicksand font-bold">{header}</span>
      <span className="text-sm flex-center gap-2 text-gray-300">
        {action}
        <TinyIcon icon={icon} />
      </span>
    </div>
  );
};

export { TinyIcon, Heading };
