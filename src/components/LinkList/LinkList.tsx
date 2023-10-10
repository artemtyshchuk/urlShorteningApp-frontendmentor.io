import { useAppDispatch, useAppSelector } from "redux-hooks";
import { linkSelector } from "features/link/link-selectors";
import { LinkItem } from "components/LinkItem";
import { removeLink } from "features/link/link-slice";
import { Link } from "types";

export const LinkList = () => {
  const list: Link[] | null = useAppSelector(linkSelector);
  const dispatch = useAppDispatch();

  const handleRemoveLink = (id: Link[`result`]["code"]) => {
    dispatch(removeLink(id));
  };

  return (
    <>
      {list &&
        list.map((link) => (
          <LinkItem
            key={link.result.code}
            ok={true || false}
            result={link.result}
            removeLink={() => handleRemoveLink(link.result.code)}
          />
        ))}
    </>
  );
};
