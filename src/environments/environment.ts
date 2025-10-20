export const environment = {
    production: true,
    supabaseapiUrl: process.env['SUPABASE_URL'] || '',
    supabaseapiKey: process.env['SUPABASE_ANON_KEY'] || '',
    emailJscontact_service: process.env['EMAILJS_SERVICE_ID'] || '',
    emailJscontact_form: process.env['EMAILJS_TEMPLATE_ID'] || '',
    emailjspublickey: process.env['EMAILJS_PUBLIC_KEY'] || ''
};
