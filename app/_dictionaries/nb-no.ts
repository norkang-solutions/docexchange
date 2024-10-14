import { Dictionary } from "./type";

export const nbNO: Dictionary = {
    hello_world: "Hei verden!",
    // auth
    email: "E-post",
    username: "Brukernavn",
    password: "Passord",
    confirm_password: "Bekreft passord",
    sign_in: "Logg inn",
    sign_up: "Registrer deg",
    i_agree_to_the: "Jeg godtar",
    terms_and_conditions: "vilkårene for bruk",
    and: "og",
    privacy_policy: "personvernerklæringen",
    do_you_already_have_an_account: "Har du allerede en konto?",
    do_you_not_have_an_account: "Har du ikke en konto?",

    // nav
    contribute: "Bidra",
    explore: "Utforsk",
    dashboard: "Dashbord",

    // zod
    invalid_email_address: "Ugyldig e-postadresse",
    password_must_be_at_least_8_characters: "Passordet må være minst 8 tegn",
    password_must_be_at_most_100_characters: "Passordet må være maks 100 tegn",
    invalid_password_or_email: "Ugyldig passord eller e-post",
    user_not_found: "Brukeren ble ikke funnet",
    unknown_error_while_signing_in_please_contact_support:
        "Ukjent feil under pålogging. Vennligst kontakt support.",
    invalid_email_or_password: "Ugyldig e-post eller passord",
    username_must_be_at_least_3_characters: "Brukernavnet må være minst 3 tegn",
    username_must_be_at_most_30_characters: "Brukernavnet må være maks 30 tegn",
    username_must_be_alphanumeric_and_can_include_underscores:
        "Brukernavnet må være alfanumerisk og kan inkludere understreker",
    passwords_do_not_match: "Passorden stemmer ikke overens",
    you_must_agree_to_the_terms_and_conditions:
        "Du må godta vilkårene for bruk",
    unknown_error_while_signing_up_please_contact_support:
        "Ukjent feil under registrering. Vennligst kontakt support.",
    username_already_taken: "Brukernavnet er allerede i bruk",
    email_already_in_use: "E-postadressen er allerede i bruk",
};
