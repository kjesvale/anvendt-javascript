import { populateList } from "./oppgave2";
import {
    configureDialogButton,
    closeDialogOnClickOutside,
    preventFormFromSubmitting,
} from "./oppgave3";
import { handleFormSubmit, populateListFromAPI } from "./oppgave4";

// populateList();
configureDialogButton();
closeDialogOnClickOutside();
// preventFormFromSubmitting();

handleFormSubmit();
populateListFromAPI();
