import { Dictionary } from "./type";

export const enUS: Dictionary = {
    hello_world: "Hello world!",
    // auth
    email: "Email",
    username: "Username",
    password: "Password",
    confirm_password: "Confirm password",
    sign_in: "Sign in",
    sign_up: "Sign up",
    i_agree_to_the: "I agree to the",
    terms_and_conditions: "terms and conditions",
    and: "and",
    privacy_policy: "privacy policy",
    do_you_already_have_an_account: "Do you already have an account?",
    do_you_not_have_an_account: "Do you not have an account?",

    // nav
    contribute: "Contribute",
    explore: "Explore",
    dashboard: "Dashboard",

    // zod
    invalid_email_address: "Invalid email address",
    password_must_be_at_least_8_characters:
        "Password must be at least 8 characters",
    password_must_be_at_most_100_characters:
        "Password must be at most 100 characters",
    invalid_password_or_email: "Invalid password or email",
    user_not_found: "User not found",
    unknown_error_while_signing_in_please_contact_support:
        "Unknown error while signing in. Please contact support.",
    invalid_email_or_password: "Invalid email or password",
    username_must_be_at_least_3_characters:
        "Username must be at least 3 characters",
    username_must_be_at_most_30_characters:
        "Username must be at most 30 characters",
    username_must_be_alphanumeric_and_can_include_underscores:
        "Username must be alphanumeric and can include underscores",
    passwords_do_not_match: "Passwords do not match",
    you_must_agree_to_the_terms_and_conditions:
        "You must agree to the terms and conditions",
    email_already_in_use: "Email already in use",
    unknown_error_while_signing_up_please_contact_support:
        "Unknown error while signing up. Please contact support.",
    username_already_taken: "Username already taken",
};
