import { socialLinks } from "../data";
import SocialLink from "./SocialLink";

const SocialLinks = ({ parentClass, itemClass }) => {
  return (
    <ul className={parentClass}>
      {socialLinks.map((link) => {
        return <SocialLink itemClass={itemClass} key={link.id} {...link} />;
      })}
    </ul>
  );
};
export default SocialLinks;
