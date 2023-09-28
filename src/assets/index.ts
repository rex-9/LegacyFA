import logo from "./logo.png";
import lens from "./lens.svg";
import mail from "./mail.svg";

export interface IIcon {
  icon: string;
  label: string;
}

const icons: { [key: string]: IIcon } = {
  logo: { icon: logo, label: "logo" },
  lens: { icon: lens, label: "lens" },
  mail: { icon: mail, label: "mail" },
};

const images = {
  logo: { icon: logo, label: "logo" },
};

export { icons, images };
