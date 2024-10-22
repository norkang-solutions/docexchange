import { COMPANY_NAME } from "../_constants/names";
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

    // profile
    save: "Save",
    delete_account: "Delete account",
    or: "or",
    sign_out: "Sign out",
    change_password: "Change password",
    error_fetching_user_data: "Error fetching user data",
    user_updated: "User updated",
    error_updating_user: "Error updating user",

    // nav
    contribute_documents: "Contribute documents",
    explore: "Explore",
    dashboard: "Dashboard",
    your_profile: "Your profile",

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

    about_us: "About us",
    team: "Team",

    docexchangeio_is_a_student_powered_study_platform: `${COMPANY_NAME} is a student-powered study platform. We aim to provide students with a platform where they can share their work and be rewarded as well as access all the best study materials from their peers.`,
    at_docexchangeio_we_believe_in_the_power_of_collaborative_learning: `At ${COMPANY_NAME}, we believe in the power of collaborative learning. Our mission is to transform the traditional learning process by fostering an environment where students can collaborate, share insights, and access varied perspectives on topics they study. By monetizing their shared resources, we encourage students to produce quality content.`,
    by_the_same_token_docexchangeio_is_an_open_source_platform: `By the same token, ${COMPANY_NAME} is an open-source platform. This means that anyone can view, download, modify and share the code used to build ${COMPANY_NAME}. Not only does this allow our users to trust the security and privacy of our platform, but it also gives our users a unique opportunity to take part in its future development.`,
    get_to_know_our_team: "Get to know our team",
    source_code: "Source code",
    check_out_our_source_code_on_github: "Check out our source code on GitHub",
    are_you_interested_in_joining_our_team:
        "Are you interested in joining our team? Then contact one of us!",
    student_rewards_program: "Student rewards program",
    we_pay_out_100p_of_our_revenue_to_uploaders:
        "We pay out 100% of our revenue to uploaders. This means that all the money our users spend on subscription fees goes back to the users. The distribution is based on the popularity of documents, and the most viewed, downloaded and liked documents will be rewarded the most.",
    how_to_get_paid: "How to get paid",
    learn_how_you_can_start_receiving_rewards:
        "Learn how you can start receiving rewards",
    we_use_stripe_to_pay_our_users:
        "We use Stripe to pay our users. You can connect your Stripe account and get paid directly to your bank account, you can do this on your ",
    note_that_you_have_to_connect_your_stripe_account:
        ". Note that you have to connect your Stripe account before you can get paid. You will not be paid for the use of your uploads until you connect your Stripe account. Then you will be paid on the next payment cycle.",
    legal: "Legal",
    on_this_page_you_can_find_information_about_who_we_are:
        "On this page you can find information about who we are",
    this_section_describes_our_legal_policies:
        "This section describes our legal policies",
    read_more_about_our_rewards_program: "Read more about our rewards program",
};
