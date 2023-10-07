import { UrlBlock } from "./UrlBlock";
import { useAppDispatch } from "redux-hooks";
import { createLink } from "features/link/link-slice";

export const NewLink = () => {
  const dispatch = useAppDispatch();

  const handleNewTodo = (title: string) => {
    dispatch(createLink(title));
  };

  return <UrlBlock handleClick={handleNewTodo} />;
};
