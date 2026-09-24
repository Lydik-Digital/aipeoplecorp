/* ANDRH 78 · configuration partagée (questionnaire + écran live)
   endpoint : adresse de l'application Web Google Apps Script (se termine par /exec) */
window.ANDRH_CONFIG = {
  endpoint: "https://script.google.com/macros/s/AKfycbzPkVzwIOfNpx0Qgmj65efu5GgFsKVd-X2Sl6BtaxU8AsJSkLguvtDTmjYijgqQIQU8/exec",
  participantUrl: "https://aipeoplecorp.org/andrh/",
  sectors: [
    "Industrie / Production",
    "Banque / Assurance / Finance",
    "Conseil / Services aux entreprises",
    "Commerce / Distribution",
    "Tech / Numérique / Télécoms",
    "Santé / Médico-social",
    "Transport / Logistique",
    "BTP / Immobilier",
    "Énergie / Environnement",
    "Hôtellerie / Restauration / Tourisme",
    "Secteur public / Collectivités",
    "Associatif / ESS",
    "Autre"
  ],
  sizes: [
    { value: "<50",       label: "Moins de 50 salariés",      group: "PME" },
    { value: "50-249",    label: "50 à 249 salariés",         group: "PME" },
    { value: "250-999",   label: "250 à 999 salariés",        group: "ETI" },
    { value: "1000-4999", label: "1 000 à 4 999 salariés",    group: "ETI" },
    { value: "5000+",     label: "5 000 salariés et plus",    group: "Grands groupes" }
  ]
};
