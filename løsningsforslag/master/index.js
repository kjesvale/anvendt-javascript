import { populatePokemonList } from "./oppgave2";
import {
    configureDialog,
    configureCloseDialog,
    configureForm,
} from "./oppgave3";
import { handleFormSubmit, populatePokemonListFromServer } from "./oppgave4";

// populatePokemonList();

configureDialog();
configureCloseDialog();
configureForm();

handleFormSubmit();
populatePokemonListFromServer();
