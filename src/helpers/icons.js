import { library } from "@fortawesome/fontawesome-svg-core";
import {
  faTrash,
  faSignOutAlt,
  faEdit,
  faSpinner,
  faPlusCircle,
  faPhone,
  faMapMarkedAlt,
  faEnvelope,
  faCircleMinus,
  faLock,
  faKey,
} from "@fortawesome/free-solid-svg-icons";

const Icons = () => {
  return library.add(
    faTrash,
    faSignOutAlt,
    faEdit,
    faSpinner,
    faPlusCircle,
    faPhone,
    faMapMarkedAlt,
    faEnvelope,
    faCircleMinus,
    faLock,
    faKey
  );
};

export default Icons;
