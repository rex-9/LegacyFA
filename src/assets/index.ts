import logo from "./logo.png";

export interface IIcon {
  icon: string;
  label: string;
}

const icons: { [key: string]: IIcon } = {
  logo: { icon: logo, label: "logo" },
};

const images = {
  logo: { icon: logo, label: "logo" },
};

export { icons, images };
