import AgendaIcon from "@material-ui/icons/Book";

import AgendaList from "./AgendaList";
import AgendaEdit from "./AgendaEdit";
import AgendaCreate from "./AgendaCreate";
import { ListGuesser } from "react-admin";

export default {
  list: AgendaList,
  edit: AgendaEdit,
  create: AgendaCreate,
  icon: AgendaIcon
};
