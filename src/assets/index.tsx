import logo from "./logo.png";
import visa from "./visa.svg";
import master from "./master.png";
import girl from "./girl.jpg";
import lens from "./lens.svg";
import bag from "./bag.svg";
import bell from "./bell.svg";
import camera from "./camera.svg";
import car from "./car.svg";
import chat from "./chat.svg";
import dashboard from "./dashboard.svg";
import database from "./database.svg";
import downArrow from "./downArrow.svg";
import dollar from "./dollar.svg";
import house from "./house.svg";
import investment from "./investment.svg";
import logOut from "./logOut.svg";
import person from "./person.svg";
import plane from "./plane.svg";
import setting from "./setting.svg";
import transactions from "./transactions.svg";
import wallet from "./wallet.svg";
import mail from "./mail.svg";
import increase from "./increase.svg";
import rightArrow from "./rightArrow.svg";
import plus from "./plus.svg";
import apple from "./apple.svg";
import tesla from "./tesla.svg";
import amazon from "./amazon.tsx";
import netflix from "./netflix.svg";
import sim from "./sim.svg";
import { IIcon } from "../interface.tsx";
import AmazonSvg from "./amazon.tsx";

const iconFunc = ({ icon, fill }: { icon: string; fill: string }) => {
  switch (icon) {
    case "amazon":
      return <AmazonSvg fill="red" />;
      break;

    default:
      break;
  }
};

const icons: { [key: string]: IIcon } = {
  logo: { icon: logo, label: "logo" },
  lens: { icon: lens, label: "lens" },
  mail: { icon: mail, label: "mail" },
  bag: { icon: bag, label: "bag" },
  bell: { icon: bell, label: "bell" },
  camera: { icon: camera, label: "camera" },
  car: { icon: car, label: "car" },
  chat: { icon: chat, label: "chat" },
  dashboard: { icon: dashboard, label: "dashboard" },
  downArrow: { icon: downArrow, label: "downArrow" },
  database: { icon: database, label: "database" },
  dollar: { icon: dollar, label: "dollar" },
  house: { icon: house, label: "house" },
  investment: { icon: investment, label: "investment" },
  logOut: { icon: logOut, label: "logOut" },
  person: { icon: person, label: "person" },
  plane: { icon: plane, label: "plane" },
  setting: { icon: setting, label: "setting" },
  transactions: { icon: transactions, label: "transactions" },
  wallet: { icon: wallet, label: "wallet" },
  increase: { icon: increase, label: "increase" },
  rightArrow: { icon: rightArrow, label: "rightArrow" },
  plus: { icon: plus, label: "plus" },
  apple: { icon: apple, label: "apple" },
  amazon: { icon: amazon, label: "amazon" },
  tesla: { icon: tesla, label: "tesla" },
  netflix: { icon: netflix, label: "netflix" },
  sim: { icon: sim, label: "sim" },
};

const images = {
  logo: { icon: logo, label: "logo" },
  girl: { icon: girl, label: "girl" },
  visa: { icon: visa, label: "visa" },
  master: { icon: master, label: "master" },
};

export { icons, images };
