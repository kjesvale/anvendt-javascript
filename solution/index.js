import {
    configureDialog,
    configureCloseDialog,
    configureForm,
} from "./oppgave3";
import { handleFormSubmit, populatePokemonListFromServer } from "./oppgave4";

configureDialog();
configureCloseDialog();
configureForm();

handleFormSubmit();
populatePokemonListFromServer();
