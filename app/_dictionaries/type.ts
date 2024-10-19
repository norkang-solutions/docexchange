export type Dictionary = {
    hello_world: string;

    // auth
    email: string;
    username: string;
    password: string;
    confirm_password: string;
    sign_in: string;
    sign_up: string;
    i_agree_to_the: string;
    terms_and_conditions: string;
    and: string;
    privacy_policy: string;
    do_you_already_have_an_account: string;
    do_you_not_have_an_account: string;

    // nav
    contribute_documents: string;
    explore: string;
    dashboard: string;

    // zod
    invalid_email_address: string;
    password_must_be_at_least_8_characters: string;
    password_must_be_at_most_100_characters: string;
    invalid_password_or_email: string;
    user_not_found: string;
    unknown_error_while_signing_in_please_contact_support: string;
    invalid_email_or_password: string;
    username_must_be_at_least_3_characters: string;
    username_must_be_at_most_30_characters: string;
    username_must_be_alphanumeric_and_can_include_underscores: string;
    passwords_do_not_match: string;
    you_must_agree_to_the_terms_and_conditions: string;
    email_already_in_use: string;
    unknown_error_while_signing_up_please_contact_support: string;
    username_already_taken: string;
};
