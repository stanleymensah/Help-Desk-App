import helpdeskImg from "./helpdesk.png";
import helpdeskPrimaryImg from "./helpdesk-primary.png";

export const HelpdeskLogo = () => {
  return <img src={helpdeskImg} alt="helpdesk-logo-white" />;
};

export const HelpdeskLogoPrimary = () => {
  return <img src={helpdeskPrimaryImg} alt="helpdesk-logo-primary" className="w-6 h-7"/>;
};
