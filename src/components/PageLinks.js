import { pageLinks } from "../data";
import PageLink from "./PageLink";

const PageLinks = ({ parentClass, itemClass }) => {
  return (
    <ul className={parentClass} id={parentClass}>
      {pageLinks.map((link) => {
        return <PageLink itemClass={itemClass} key={link.id} {...link} />;
      })}
    </ul>
  );
};
export default PageLinks;
