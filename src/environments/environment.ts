import { environmentProd } from "./environment.prod";

export const environment = {
    production: true,
    supabaseapiUrl: process.env['SUPABASE_URL'] || environmentProd.supabaseapiUrl,
    supabaseapiKey: process.env['SUPABASE_ANON_KEY'] || environmentProd.supabaseapiKey,
    emailJscontact_service: process.env['EMAILJS_SERVICE_ID'] || environmentProd.emailJscontact_service,
    emailJscontact_form: process.env['EMAILJS_TEMPLATE_ID'] || environmentProd.emailJscontact_form,
    emailjspublickey: process.env['EMAILJS_PUBLIC_KEY'] || environmentProd.emailjspublickey
};
