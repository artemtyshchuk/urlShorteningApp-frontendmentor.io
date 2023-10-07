import { useAppDispatch, useAppSelector } from "redux-hooks";
import styles from "./LinkList.module.scss";
import { linkSelector } from "features/link/link-selectors";
import { LinkItem } from "components/LinkItem";
import { removeLink } from "features/link/link-slice";
import { Link } from "types";

interface LinkListProps {}

export const LinkList = ({}: LinkListProps) => {
  const { list } = useAppSelector(linkSelector);
  const dispatch = useAppDispatch();

  const handleRemoveLink = (result: Link["result"]) => {
    dispatch(removeLink(result.code));
  };
  return (
    <ul>
      {list.map((link) => {
        return (
          <LinkItem
            key={link.result.code}
            removeLink={handleRemoveLink}
            {...link}
          />
        );
      })}
    </ul>
  );
};
