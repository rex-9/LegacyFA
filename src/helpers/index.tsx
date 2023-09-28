import { IIcon } from "../interface";

const TinyIcon = ({
  icon,
  reverse = false,
}: {
  icon: IIcon;
  reverse?: boolean;
}) => {
  return (
    <>
      {reverse ? (
        <img
          className="w-4 h-4 rounded-lg scale-y-[-1]"
          src={icon.icon}
          alt={icon.label}
        />
      ) : (
        <img className="w-4 h-4 rounded-lg" src={icon.icon} alt={icon.label} />
      )}
    </>
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
      <button className="text-sm flex-center gap-2 text-gray-300 hover:text-black">
        {action}
        <TinyIcon icon={icon} />
      </button>
    </div>
  );
};

export { TinyIcon, Heading };
