import { COMPANY_NAME, GITHUB } from "../_constants/names";
import { Dictionary } from "./type";

export const nbNO: Dictionary = {
    hello_world: "Hei verden!",

    // metadata
    docexchangeio_a_student_powered_study_platform: `${COMPANY_NAME} - en studentdrevet studieplattform`,

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

    // profile
    save: "Lagre",
    delete_account: "Slett konto",
    or: "eller",
    sign_out: "Logg ut",
    change_password: "Endre passord",
    error_fetching_user_data: "Feil ved henting av brukerdata",
    user_updated: "Brukeren er oppdatert",
    error_updating_user: "Feil ved oppdatering av bruker",

    // nav
    contribute_documents: "Bidra med dokumenter",
    explore: "Utforsk",
    dashboard: "Dashbord",
    your_profile: "Din profil",

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

    // about
    about_us: "Om oss",
    team: "Team",
    docexchangeio_is_a_student_powered_study_platform: `${COMPANY_NAME} er en studentdrevet studieplattform. Vi har som mål å gi studenter en plattform der de kan dele arbeidet sitt og bli belønnet samtidig som de får tilgang til alle de beste studieressursene fra sine medstudenter.`,
    at_docexchangeio_we_believe_in_the_power_of_collaborative_learning: `Hos ${COMPANY_NAME} tror vi på kraften av samarbeidslæring. Vår misjon er å transformere den tradisjonelle læringsprosessen ved å fremme et miljø der studenter kan samarbeide, dele innsikt og få tilgang til varierte perspektiver på emner de studerer. Ved å tjene penger på delte ressurser oppfordrer vi studenter til å produsere kvalitetsinnhold.`,
    by_the_same_token_docexchangeio_is_an_open_source_platform: `Fordi vi tror på deling og åpenhet, er ${COMPANY_NAME} en open-source plattform. Dette vil si at alle kan se, laste ned, modifisere og dele koden som ble brukt til å bygge ${COMPANY_NAME}, noe som gjør det ikke bare lettere for brukerne våre å stole på sikkerheten og personvernet til plattformen vår, men det gir også brukerne våre en unik mulighet til å delta aktivt i videre utvikling av plattformen.`,
    get_to_know_our_team: "Bli kjent med teamet vårt",
    source_code: "Kildekode",
    check_out_our_source_code_on_github: `Sjekk ut koden vår på ${GITHUB}`,
    are_you_interested_in_joining_our_team:
        "Er du interessert i å bli med i teamet vårt? I så fall, ta kontakt med en av oss!",
    student_rewards_program: "Belønningsprogram for studenter",
    we_pay_out_100p_of_our_revenue_to_uploaders:
        "Vi utbetaler 100% av inntektene våre til opplastere. Det vil si at alt brukerne våre betaler i medlemskapsavgifter går tilbake til brukerne. Fordelingen er basert på hvor populære dokumentene er, og de med flest visninger, nedlastninger og likes blir belønnet mest.",
    how_to_get_paid: "Hvordan få betalt",
    learn_how_you_can_start_receiving_rewards:
        "Lær hvordan du kan motta belønninger",
    we_use_stripe_to_pay_our_users:
        "Vi bruker Stripe til å betale brukerne våre. Du kan koble Stripe-kontoen din og få betalt direkte til bankkontoen din. Du kan gjøre dette på ditt ",
    note_that_you_have_to_connect_your_stripe_account:
        ". Merk at du må koble til Stripe-kontoen din før du kan få betalt. Du vil ikke bli betalt for bruken av opplastingene dine før du kobler Stripe-kontoen. Deretter vil du bli betalt ved neste betalingsperiode.",
    legal: "Juridisk",
    on_this_page_you_can_find_information_about_who_we_are:
        "På denne siden kan du finne informasjon om hvem vi er",
    this_section_describes_our_legal_policies:
        "Denne siden beskriver våre juridiske retningslinjer",
    read_more_about_our_rewards_program: "Les mer om vårt belønningsprogram",
    support: "Kundestøtte",
    faq: "FAQ",
    contact_us: "Kontakt oss",
    terms_and_conditions_title: "Vilkår for bruk",
    privacy_policy_title: "Personvernerklæring",

    // bottom bar
    company: "Bedrift",
    social: "Sosialt",
    help: "Hjelp",
};
