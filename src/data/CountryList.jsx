const countryList = [
    {
        name: "Christmas Island",
        slug: "christmas-island",
        iso2: "CX"
    },
    {
        name: "Malawi",
        slug: "malawi",
        iso2: "MW"
    },
    {
        name: "Saint Pierre and Miquelon",
        slug: "saint-pierre-and-miquelon",
        iso2: "PM"
    },
    {
        name: "Zambia",
        slug: "zambia",
        iso2: "ZM"
    },
    {
        name: "Latvia",
        slug: "latvia",
        iso2: "LV"
    },
    {
        name: "Montserrat",
        slug: "montserrat",
        iso2: "MS"
    },
    {
        name: "Norfolk Island",
        slug: "norfolk-island",
        iso2: "NF"
    },
    {
        name: "Poland",
        slug: "poland",
        iso2: "PL"
    },
    {
        name: "Austria",
        slug: "austria",
        iso2: "AT"
    },
    {
        name: "Brunei Darussalam",
        slug: "brunei",
        iso2: "BN"
    },
    {
        name: "Denmark",
        slug: "denmark",
        iso2: "DK"
    },
    {
        name: "Japan",
        slug: "japan",
        iso2: "JP"
    },
    {
        name: "Saint-Barthélemy",
        slug: "saint-barthélemy",
        iso2: "BL"
    },
    {
        name: "Slovenia",
        slug: "slovenia",
        iso2: "SI"
    },
    {
        name: "Puerto Rico",
        slug: "puerto-rico",
        iso2: "PR"
    },
    {
        name: "Serbia",
        slug: "serbia",
        iso2: "RS"
    },
    {
        name: "Solomon Islands",
        slug: "solomon-islands",
        iso2: "SB"
    },
    {
        name: "Germany",
        slug: "germany",
        iso2: "DE"
    },
    {
        name: "Iceland",
        slug: "iceland",
        iso2: "IS"
    },
    {
        name: "Niue",
        slug: "niue",
        iso2: "NU"
    },
    {
        name: "Hungary",
        slug: "hungary",
        iso2: "HU"
    },
    {
        name: "Kiribati",
        slug: "kiribati",
        iso2: "KI"
    },
    {
        name: "Tuvalu",
        slug: "tuvalu",
        iso2: "TV"
    },
    {
        name: "Kuwait",
        slug: "kuwait",
        iso2: "KW"
    },
    {
        name: "New Zealand",
        slug: "new-zealand",
        iso2: "NZ"
    },
    {
        name: "Virgin Islands, US",
        slug: "virgin-islands",
        iso2: "VI"
    },
    {
        name: "Yemen",
        slug: "yemen",
        iso2: "YE"
    },
    {
        name: "Burkina Faso",
        slug: "burkina-faso",
        iso2: "BF"
    },
    {
        name: "Costa Rica",
        slug: "costa-rica",
        iso2: "CR"
    },
    {
        name: "Macedonia, Republic of",
        slug: "macedonia",
        iso2: "MK"
    },
    {
        name: "Malta",
        slug: "malta",
        iso2: "MT"
    },
    {
        name: "Somalia",
        slug: "somalia",
        iso2: "SO"
    },
    {
        name: "British Virgin Islands",
        slug: "british-virgin-islands",
        iso2: "VG"
    },
    {
        name: "Jersey",
        slug: "jersey",
        iso2: "JE"
    },
    {
        name: "Sierra Leone",
        slug: "sierra-leone",
        iso2: "SL"
    },
    {
        name: "Hong Kong, SAR China",
        slug: "hong-kong-sar-china",
        iso2: "HK"
    },
    {
        name: "Panama",
        slug: "panama",
        iso2: "PA"
    },
    {
        name: "Angola",
        slug: "angola",
        iso2: "AO"
    },
    {
        name: "El Salvador",
        slug: "el-salvador",
        iso2: "SV"
    },
    {
        name: "Gambia",
        slug: "gambia",
        iso2: "GM"
    },
    {
        name: "Ghana",
        slug: "ghana",
        iso2: "GH"
    },
    {
        name: "Niger",
        slug: "niger",
        iso2: "NE"
    },
    {
        name: "Rwanda",
        slug: "rwanda",
        iso2: "RW"
    },
    {
        name: "Tokelau",
        slug: "tokelau",
        iso2: "TK"
    },
    {
        name: "Armenia",
        slug: "armenia",
        iso2: "AM"
    },
    {
        name: "Cameroon",
        slug: "cameroon",
        iso2: "CM"
    },
    {
        name: "Cyprus",
        slug: "cyprus",
        iso2: "CY"
    },
    {
        name: "Eritrea",
        slug: "eritrea",
        iso2: "ER"
    },
    {
        name: "Namibia",
        slug: "namibia",
        iso2: "NA"
    },
    {
        name: "Pitcairn",
        slug: "pitcairn",
        iso2: "PN"
    },
    {
        name: "Spain",
        slug: "spain",
        iso2: "ES"
    },
    {
        name: "Ukraine",
        slug: "ukraine",
        iso2: "UA"
    },
    {
        name: "Congo (Kinshasa)",
        slug: "congo-kinshasa",
        iso2: "CD"
    },
    {
        name: "Czech Republic",
        slug: "czech-republic",
        iso2: "CZ"
    },
    {
        name: "Italy",
        slug: "italy",
        iso2: "IT"
    },
    {
        name: "Northern Mariana Islands",
        slug: "northern-mariana-islands",
        iso2: "MP"
    },
    {
        name: "Cook Islands",
        slug: "cook-islands",
        iso2: "CK"
    },
    {
        name: "Egypt",
        slug: "egypt",
        iso2: "EG"
    },
    {
        name: "Honduras",
        slug: "honduras",
        iso2: "HN"
    },
    {
        name: "Lithuania",
        slug: "lithuania",
        iso2: "LT"
    },
    {
        name: "Timor-Leste",
        slug: "timor-leste",
        iso2: "TL"
    },
    {
        name: "San Marino",
        slug: "san-marino",
        iso2: "SM"
    },
    {
        name: "Bolivia",
        slug: "bolivia",
        iso2: "BO"
    },
    {
        name: "Luxembourg",
        slug: "luxembourg",
        iso2: "LU"
    },
    {
        name: "Myanmar",
        slug: "myanmar",
        iso2: "MM"
    },
    {
        name: "Papua New Guinea",
        slug: "papua-new-guinea",
        iso2: "PG"
    },
    {
        name: "Paraguay",
        slug: "paraguay",
        iso2: "PY"
    },
    {
        name: "Turkey",
        slug: "turkey",
        iso2: "TR"
    },
    {
        name: "Anguilla",
        slug: "anguilla",
        iso2: "AI"
    },
    {
        name: "Morocco",
        slug: "morocco",
        iso2: "MA"
    },
    {
        name: "Romania",
        slug: "romania",
        iso2: "RO"
    },
    {
        name: "Sudan",
        slug: "sudan",
        iso2: "SD"
    },
    {
        name: "Tajikistan",
        slug: "tajikistan",
        iso2: "TJ"
    },
    {
        name: "Croatia",
        slug: "croatia",
        iso2: "HR"
    },
    {
        name: "Liberia",
        slug: "liberia",
        iso2: "LR"
    },
    {
        name: "Sweden",
        slug: "sweden",
        iso2: "SE"
    },
    {
        name: "Bahamas",
        slug: "bahamas",
        iso2: "BS"
    },
    {
        name: "Central African Republic",
        slug: "central-african-republic",
        iso2: "CF"
    },
    {
        name: "Antarctica",
        slug: "antarctica",
        iso2: "AQ"
    },
    {
        name: "Samoa",
        slug: "samoa",
        iso2: "WS"
    },
    {
        name: "United Kingdom",
        slug: "united-kingdom",
        iso2: "GB"
    },
    {
        name: "Cuba",
        slug: "cuba",
        iso2: "CU"
    },
    {
        name: "Martinique",
        slug: "martinique",
        iso2: "MQ"
    },
    {
        name: "Oman",
        slug: "oman",
        iso2: "OM"
    },
    {
        name: "Taiwan, Republic of China",
        slug: "taiwan",
        iso2: "TW"
    },
    {
        name: "British Indian Ocean Territory",
        slug: "british-indian-ocean-territory",
        iso2: "IO"
    },
    {
        name: "Netherlands Antilles",
        slug: "netherlands-antilles",
        iso2: "AN"
    },
    {
        name: "US Minor Outlying Islands",
        slug: "us-minor-outlying-islands",
        iso2: "UM"
    },
    {
        name: "Equatorial Guinea",
        slug: "equatorial-guinea",
        iso2: "GQ"
    },
    {
        name: "Nauru",
        slug: "nauru",
        iso2: "NR"
    },
    {
        name: "South Georgia and the South Sandwich Islands",
        slug: "south-georgia-and-the-south-sandwich-islands",
        iso2: "GS"
    },
    {
        name: "Aruba",
        slug: "aruba",
        iso2: "AW"
    },
    {
        name: "Benin",
        slug: "benin",
        iso2: "BJ"
    },
    {
        name: "Cocos (Keeling) Islands",
        slug: "cocos-keeling-islands",
        iso2: "CC"
    },
    {
        name: "Bangladesh",
        slug: "bangladesh",
        iso2: "BD"
    },
    {
        name: "Comoros",
        slug: "comoros",
        iso2: "KM"
    },
    {
        name: "Côte d'Ivoire",
        slug: "cote-divoire",
        iso2: "CI"
    },
    {
        name: "Faroe Islands",
        slug: "faroe-islands",
        iso2: "FO"
    },
    {
        name: "Guinea-Bissau",
        slug: "guinea-bissau",
        iso2: "GW"
    },
    {
        name: "Viet Nam",
        slug: "vietnam",
        iso2: "VN"
    },
    {
        name: "Wallis and Futuna Islands",
        slug: "wallis-and-futuna-islands",
        iso2: "WF"
    },
    {
        name: "Albania",
        slug: "albania",
        iso2: "AL"
    },
    {
        name: "Ethiopia",
        slug: "ethiopia",
        iso2: "ET"
    },
    {
        name: "Jamaica",
        slug: "jamaica",
        iso2: "JM"
    },
    {
        name: "Antigua and Barbuda",
        slug: "antigua-and-barbuda",
        iso2: "AG"
    },
    {
        name: "Bosnia and Herzegovina",
        slug: "bosnia-and-herzegovina",
        iso2: "BA"
    },
    {
        name: "Algeria",
        slug: "algeria",
        iso2: "DZ"
    },
    {
        name: "Malaysia",
        slug: "malaysia",
        iso2: "MY"
    },
    {
        name: "Saint-Martin (French part)",
        slug: "saint-martin-french-part",
        iso2: "MF"
    },
    {
        name: "Togo",
        slug: "togo",
        iso2: "TG"
    },
    {
        name: "Ecuador",
        slug: "ecuador",
        iso2: "EC"
    },
    {
        name: "New Caledonia",
        slug: "new-caledonia",
        iso2: "NC"
    },
    {
        name: "Saudi Arabia",
        slug: "saudi-arabia",
        iso2: "SA"
    },
    {
        name: "Syrian Arab Republic (Syria)",
        slug: "syria",
        iso2: "SY"
    },
    {
        name: "Thailand",
        slug: "thailand",
        iso2: "TH"
    },
    {
        name: "Sri Lanka",
        slug: "sri-lanka",
        iso2: "LK"
    },
    {
        name: "American Samoa",
        slug: "american-samoa",
        iso2: "AS"
    },
    {
        name: "Grenada",
        slug: "grenada",
        iso2: "GD"
    },
    {
        name: "Guatemala",
        slug: "guatemala",
        iso2: "GT"
    },
    {
        name: "Peru",
        slug: "peru",
        iso2: "PE"
    },
    {
        name: "Russian Federation",
        slug: "russia",
        iso2: "RU"
    },
    {
        name: "Belize",
        slug: "belize",
        iso2: "BZ"
    },
    {
        name: "Chile",
        slug: "chile",
        iso2: "CL"
    },
    {
        name: "French Polynesia",
        slug: "french-polynesia",
        iso2: "PF"
    },
    {
        name: "ALA Aland Islands",
        slug: "ala-aland-islands",
        iso2: "AX"
    },
    {
        name: "Andorra",
        slug: "andorra",
        iso2: "AD"
    },
    {
        name: "Guadeloupe",
        slug: "guadeloupe",
        iso2: "GP"
    },
    {
        name: "Kazakhstan",
        slug: "kazakhstan",
        iso2: "KZ"
    },
    {
        name: "South Africa",
        slug: "south-africa",
        iso2: "ZA"
    },
    {
        name: "Israel",
        slug: "israel",
        iso2: "IL"
    },
    {
        name: "Micronesia, Federated States of",
        slug: "micronesia",
        iso2: "FM"
    },
    {
        name: "Uruguay",
        slug: "uruguay",
        iso2: "UY"
    },
    {
        name: "Monaco",
        slug: "monaco",
        iso2: "MC"
    },
    {
        name: "Belgium",
        slug: "belgium",
        iso2: "BE"
    },
    {
        name: "Djibouti",
        slug: "djibouti",
        iso2: "DJ"
    },
    {
        name: "Turkmenistan",
        slug: "turkmenistan",
        iso2: "TM"
    },
    {
        name: "Mongolia",
        slug: "mongolia",
        iso2: "MN"
    },
    {
        name: "Nicaragua",
        slug: "nicaragua",
        iso2: "NI"
    },
    {
        name: "France",
        slug: "france",
        iso2: "FR"
    },
    {
        name: "Guernsey",
        slug: "guernsey",
        iso2: "GG"
    },
    {
        name: "Burundi",
        slug: "burundi",
        iso2: "BI"
    },
    {
        name: "Saint Kitts and Nevis",
        slug: "saint-kitts-and-nevis",
        iso2: "KN"
    },
    {
        name: "South Sudan",
        slug: "south-sudan",
        iso2: "SS"
    },
    {
        name: "Iraq",
        slug: "iraq",
        iso2: "IQ"
    },
    {
        name: "Libya",
        slug: "libya",
        iso2: "LY"
    },
    {
        name: "United Arab Emirates",
        slug: "united-arab-emirates",
        iso2: "AE"
    },
    {
        name: "Bulgaria",
        slug: "bulgaria",
        iso2: "BG"
    },
    {
        name: "Iran, Islamic Republic of",
        slug: "iran",
        iso2: "IR"
    },
    {
        name: "Svalbard and Jan Mayen Islands",
        slug: "svalbard-and-jan-mayen-islands",
        iso2: "SJ"
    },
    {
        name: "Cambodia",
        slug: "cambodia",
        iso2: "KH"
    },
    {
        name: "Réunion",
        slug: "réunion",
        iso2: "RE"
    },
    {
        name: "Saint Lucia",
        slug: "saint-lucia",
        iso2: "LC"
    },
    {
        name: "Estonia",
        slug: "estonia",
        iso2: "EE"
    },
    {
        name: "Falkland Islands (Malvinas)",
        slug: "falkland-islands-malvinas",
        iso2: "FK"
    },
    {
        name: "Belarus",
        slug: "belarus",
        iso2: "BY"
    },
    {
        name: "Colombia",
        slug: "colombia",
        iso2: "CO"
    },
    {
        name: "Lesotho",
        slug: "lesotho",
        iso2: "LS"
    },
    {
        name: "Nigeria",
        slug: "nigeria",
        iso2: "NG"
    },
    {
        name: "Azerbaijan",
        slug: "azerbaijan",
        iso2: "AZ"
    },
    {
        name: "Dominican Republic",
        slug: "dominican-republic",
        iso2: "DO"
    },
    {
        name: "Gibraltar",
        slug: "gibraltar",
        iso2: "GI"
    },
    {
        name: "Barbados",
        slug: "barbados",
        iso2: "BB"
    },
    {
        name: "Qatar",
        slug: "qatar",
        iso2: "QA"
    },
    {
        name: "Seychelles",
        slug: "seychelles",
        iso2: "SC"
    },
    {
        name: "Bahrain",
        slug: "bahrain",
        iso2: "BH"
    },
    {
        name: "Liechtenstein",
        slug: "liechtenstein",
        iso2: "LI"
    },
    {
        name: "Madagascar",
        slug: "madagascar",
        iso2: "MG"
    },
    {
        name: "Macao, SAR China",
        slug: "macao-sar-china",
        iso2: "MO"
    },
    {
        name: "Nepal",
        slug: "nepal",
        iso2: "NP"
    },
    {
        name: "Sao Tome and Principe",
        slug: "sao-tome-and-principe",
        iso2: "ST"
    },
    {
        name: "Cayman Islands",
        slug: "cayman-islands",
        iso2: "KY"
    },
    {
        name: "China",
        slug: "china",
        iso2: "CN"
    },
    {
        name: "Dominica",
        slug: "dominica",
        iso2: "DM"
    },
    {
        name: "Lebanon",
        slug: "lebanon",
        iso2: "LB"
    },
    {
        name: "Suriname",
        slug: "suriname",
        iso2: "SR"
    },
    {
        name: "Switzerland",
        slug: "switzerland",
        iso2: "CH"
    },
    {
        name: "Afghanistan",
        slug: "afghanistan",
        iso2: "AF"
    },
    {
        name: "Cape Verde",
        slug: "cape-verde",
        iso2: "CV"
    },
    {
        name: "Bhutan",
        slug: "bhutan",
        iso2: "BT"
    },
    {
        name: "Heard and Mcdonald Islands",
        slug: "heard-and-mcdonald-islands",
        iso2: "HM"
    },
    {
        name: "Portugal",
        slug: "portugal",
        iso2: "PT"
    },
    {
        name: "Mayotte",
        slug: "mayotte",
        iso2: "YT"
    },
    {
        name: "Jordan",
        slug: "jordan",
        iso2: "JO"
    },
    {
        name: "Pakistan",
        slug: "pakistan",
        iso2: "PK"
    },
    {
        name: "Trinidad and Tobago",
        slug: "trinidad-and-tobago",
        iso2: "TT"
    },
    {
        name: "Botswana",
        slug: "botswana",
        iso2: "BW"
    },
    {
        name: "Congo (Brazzaville)",
        slug: "congo-brazzaville",
        iso2: "CG"
    },
    {
        name: "Georgia",
        slug: "georgia",
        iso2: "GE"
    },
    {
        name: "Indonesia",
        slug: "indonesia",
        iso2: "ID"
    },
    {
        name: "Western Sahara",
        slug: "western-sahara",
        iso2: "EH"
    },
    {
        name: "Argentina",
        slug: "argentina",
        iso2: "AR"
    },
    {
        name: "Kenya",
        slug: "kenya",
        iso2: "KE"
    },
    {
        name: "Mozambique",
        slug: "mozambique",
        iso2: "MZ"
    },
    {
        name: "Lao PDR",
        slug: "lao-pdr",
        iso2: "LA"
    },
    {
        name: "Moldova",
        slug: "moldova",
        iso2: "MD"
    },
    {
        name: "Republic of Kosovo",
        slug: "kosovo",
        iso2: "XK"
    },
    {
        name: "Tunisia",
        slug: "tunisia",
        iso2: "TN"
    },
    {
        name: "Uzbekistan",
        slug: "uzbekistan",
        iso2: "UZ"
    },
    {
        name: "Maldives",
        slug: "maldives",
        iso2: "MV"
    },
    {
        name: "Mexico",
        slug: "mexico",
        iso2: "MX"
    },
    {
        name: "Slovakia",
        slug: "slovakia",
        iso2: "SK"
    },
    {
        name: "Tonga",
        slug: "tonga",
        iso2: "TO"
    },
    {
        name: "Zimbabwe",
        slug: "zimbabwe",
        iso2: "ZW"
    },
    {
        name: "Mauritania",
        slug: "mauritania",
        iso2: "MR"
    },
    {
        name: "Palau",
        slug: "palau",
        iso2: "PW"
    },
    {
        name: "Saint Helena",
        slug: "saint-helena",
        iso2: "SH"
    },
    {
        name: "Brazil",
        slug: "brazil",
        iso2: "BR"
    },
    {
        name: "Gabon",
        slug: "gabon",
        iso2: "GA"
    },
    {
        name: "Haiti",
        slug: "haiti",
        iso2: "HT"
    },
    {
        name: "Holy See (Vatican City State)",
        slug: "holy-see-vatican-city-state",
        iso2: "VA"
    },
    {
        name: "French Guiana",
        slug: "french-guiana",
        iso2: "GF"
    },
    {
        name: "India",
        slug: "india",
        iso2: "IN"
    },
    {
        name: "Uganda",
        slug: "uganda",
        iso2: "UG"
    },
    {
        name: "Australia",
        slug: "australia",
        iso2: "AU"
    },
    {
        name: "Netherlands",
        slug: "netherlands",
        iso2: "NL"
    },
    {
        name: "Fiji",
        slug: "fiji",
        iso2: "FJ"
    },
    {
        name: "Guinea",
        slug: "guinea",
        iso2: "GN"
    },
    {
        name: "Saint Vincent and Grenadines",
        slug: "saint-vincent-and-the-grenadines",
        iso2: "VC"
    },
    {
        name: "United States of America",
        slug: "united-states",
        iso2: "US"
    },
    {
        name: "Canada",
        slug: "canada",
        iso2: "CA"
    },
    {
        name: "Isle of Man",
        slug: "isle-of-man",
        iso2: "IM"
    },
    {
        name: "Korea (South)",
        slug: "korea-south",
        iso2: "KR"
    },
    {
        name: "Senegal",
        slug: "senegal",
        iso2: "SN"
    },
    {
        name: "Venezuela (Bolivarian Republic)",
        slug: "venezuela",
        iso2: "VE"
    },
    {
        name: "Chad",
        slug: "chad",
        iso2: "TD"
    },
    {
        name: "Mali",
        slug: "mali",
        iso2: "ML"
    },
    {
        name: "Marshall Islands",
        slug: "marshall-islands",
        iso2: "MH"
    },
    {
        name: "Vanuatu",
        slug: "vanuatu",
        iso2: "VU"
    },
    {
        name: "French Southern Territories",
        slug: "french-southern-territories",
        iso2: "TF"
    },
    {
        name: "Ireland",
        slug: "ireland",
        iso2: "IE"
    },
    {
        name: "Kyrgyzstan",
        slug: "kyrgyzstan",
        iso2: "KG"
    },
    {
        name: "Guam",
        slug: "guam",
        iso2: "GU"
    },
    {
        name: "Philippines",
        slug: "philippines",
        iso2: "PH"
    },
    {
        name: "Bermuda",
        slug: "bermuda",
        iso2: "BM"
    },
    {
        name: "Bouvet Island",
        slug: "bouvet-island",
        iso2: "BV"
    },
    {
        name: "Finland",
        slug: "finland",
        iso2: "FI"
    },
    {
        name: "Greece",
        slug: "greece",
        iso2: "GR"
    },
    {
        name: "Greenland",
        slug: "greenland",
        iso2: "GL"
    },
    {
        name: "Korea (North)",
        slug: "korea-north",
        iso2: "KP"
    },
    {
        name: "Montenegro",
        slug: "montenegro",
        iso2: "ME"
    },
    {
        name: "Singapore",
        slug: "singapore",
        iso2: "SG"
    },
    {
        name: "Swaziland",
        slug: "swaziland",
        iso2: "SZ"
    },
    {
        name: "Palestinian Territory",
        slug: "palestine",
        iso2: "PS"
    },
    {
        name: "Turks and Caicos Islands",
        slug: "turks-and-caicos-islands",
        iso2: "TC"
    },
    {
        name: "Guyana",
        slug: "guyana",
        iso2: "GY"
    },
    {
        name: "Mauritius",
        slug: "mauritius",
        iso2: "MU"
    },
    {
        name: "Norway",
        slug: "norway",
        iso2: "NO"
    },
    {
        name: "Tanzania, United Republic of",
        slug: "tanzania",
        iso2: "TZ"
    }
];

export default countryList;