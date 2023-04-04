/******/ (() => { // webpackBootstrap
/******/ 	var __webpack_modules__ = ({

/***/ "./.env":
/*!**************!*\
  !*** ./.env ***!
  \**************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "API_KEY": () => (/* binding */ API_KEY)
/* harmony export */ });
const API_KEY = "a867510b102f43ba991173444232803";

/***/ }),

/***/ "./node_modules/country-code-lookup/index.js":
/*!***************************************************!*\
  !*** ./node_modules/country-code-lookup/index.js ***!
  \***************************************************/
/***/ ((module) => {

module.exports.byFips = function(code) {
  return search('fips', code.toUpperCase())
}

module.exports.byIso = function(code) {
  if (!isNaN(parseInt(code))) {
    return search('isoNo', code.toString())
  }

  if (code.length === 2) {
    return search('iso2', code.toUpperCase())
  }

  if (code.length === 3) {
    return search('iso3', code.toUpperCase())
  }

  throw new Error('cannot determine ISO code type')
}

module.exports.byInternet = function(code) {
  return search('internet', code.toUpperCase())
}

module.exports.byCountry = function(country) {
  return search('country', country)
}

function search(field, code) {
  for (var i = 0; i < countries.length; i++) {
    if (countries[i][field] === code) {
      return countries[i]
    }
  }
  return null
}

var countries = [
  {
    continent: 'Asia',
    region: 'South Asia',
    country: 'Afghanistan',
    capital: 'Kabul',
    fips: 'AF',
    iso2: 'AF',
    iso3: 'AFG',
    isoNo: '4',
    internet: 'AF'
  },
  {
    continent: 'Europe',
    region: 'South East Europe',
    country: 'Albania',
    capital: 'Tirana',
    fips: 'AL',
    iso2: 'AL',
    iso3: 'ALB',
    isoNo: '8',
    internet: 'AL'
  },
  {
    continent: 'Africa',
    region: 'Northern Africa',
    country: 'Algeria',
    capital: 'Algiers',
    fips: 'AG',
    iso2: 'DZ',
    iso3: 'DZA',
    isoNo: '12',
    internet: 'DZ'
  },
  {
    continent: 'Oceania',
    region: 'Pacific',
    country: 'American Samoa',
    capital: 'Pago Pago',
    fips: 'AQ',
    iso2: 'AS',
    iso3: 'ASM',
    isoNo: '16',
    internet: 'AS'
  },
  {
    continent: 'Europe',
    region: 'South West Europe',
    country: 'Andorra',
    capital: 'Andorra la Vella',
    fips: 'AN',
    iso2: 'AD',
    iso3: 'AND',
    isoNo: '20',
    internet: 'AD'
  },
  {
    continent: 'Africa',
    region: 'Southern Africa',
    country: 'Angola',
    capital: 'Luanda',
    fips: 'AO',
    iso2: 'AO',
    iso3: 'AGO',
    isoNo: '24',
    internet: 'AO'
  },
  {
    continent: 'Americas',
    region: 'West Indies',
    country: 'Anguilla',
    capital: 'The Valley',
    fips: 'AV',
    iso2: 'AI',
    iso3: 'AIA',
    isoNo: '660',
    internet: 'AI'
  },
  {
    continent: 'Americas',
    region: 'West Indies',
    country: 'Antigua and Barbuda',
    capital: "Saint John's",
    fips: 'AC',
    iso2: 'AG',
    iso3: 'ATG',
    isoNo: '28',
    internet: 'AG'
  },
  {
    continent: 'Americas',
    region: 'South America',
    country: 'Argentina',
    capital: 'Buenos Aires',
    fips: 'AR',
    iso2: 'AR',
    iso3: 'ARG',
    isoNo: '32',
    internet: 'AR'
  },
  {
    continent: 'Asia',
    region: 'South West Asia',
    country: 'Armenia',
    capital: 'Yerevan',
    fips: 'AM',
    iso2: 'AM',
    iso3: 'ARM',
    isoNo: '51',
    internet: 'AM'
  },
  {
    continent: 'Americas',
    region: 'West Indies',
    country: 'Aruba',
    capital: 'Oranjestad',
    fips: 'AA',
    iso2: 'AW',
    iso3: 'ABW',
    isoNo: '533',
    internet: 'AW'
  },
  {
    continent: 'Oceania',
    region: 'Pacific',
    country: 'Australia',
    capital: 'Canberra',
    fips: 'AS',
    iso2: 'AU',
    iso3: 'AUS',
    isoNo: '36',
    internet: 'AU'
  },
  {
    continent: 'Europe',
    region: 'Central Europe',
    country: 'Austria',
    capital: 'Vienna',
    fips: 'AU',
    iso2: 'AT',
    iso3: 'AUT',
    isoNo: '40',
    internet: 'AT'
  },
  {
    continent: 'Asia',
    region: 'South West Asia',
    country: 'Azerbaijan',
    capital: 'Baku (Baki)',
    fips: 'AJ',
    iso2: 'AZ',
    iso3: 'AZE',
    isoNo: '31',
    internet: 'AZ'
  },
  {
    continent: 'Americas',
    region: 'West Indies',
    country: 'The Bahamas',
    capital: 'Nassau',
    fips: 'BF',
    iso2: 'BS',
    iso3: 'BHS',
    isoNo: '44',
    internet: 'BS'
  },
  {
    continent: 'Asia',
    region: 'South West Asia',
    country: 'Bahrain',
    capital: 'Manama',
    fips: 'BA',
    iso2: 'BH',
    iso3: 'BHR',
    isoNo: '48',
    internet: 'BH'
  },
  {
    continent: 'Asia',
    region: 'South Asia',
    country: 'Bangladesh',
    capital: 'Dhaka',
    fips: 'BG',
    iso2: 'BD',
    iso3: 'BGD',
    isoNo: '50',
    internet: 'BD'
  },
  {
    continent: 'Americas',
    region: 'West Indies',
    country: 'Barbados',
    capital: 'Bridgetown',
    fips: 'BB',
    iso2: 'BB',
    iso3: 'BRB',
    isoNo: '52',
    internet: 'BB'
  },
  {
    continent: 'Europe',
    region: 'Eastern Europe',
    country: 'Belarus',
    capital: 'Minsk',
    fips: 'BO',
    iso2: 'BY',
    iso3: 'BLR',
    isoNo: '112',
    internet: 'BY'
  },
  {
    continent: 'Europe',
    region: 'Western Europe',
    country: 'Belgium',
    capital: 'Brussels',
    fips: 'BE',
    iso2: 'BE',
    iso3: 'BEL',
    isoNo: '56',
    internet: 'BE'
  },
  {
    continent: 'Americas',
    region: 'Central America',
    country: 'Belize',
    capital: 'Belmopan',
    fips: 'BH',
    iso2: 'BZ',
    iso3: 'BLZ',
    isoNo: '84',
    internet: 'BZ'
  },
  {
    continent: 'Africa',
    region: 'Western Africa',
    country: 'Benin',
    capital: 'Porto-Novo��',
    fips: 'BN',
    iso2: 'BJ',
    iso3: 'BEN',
    isoNo: '204',
    internet: 'BJ'
  },
  {
    continent: 'Americas',
    region: 'West Indies',
    country: 'Bermuda',
    capital: 'Hamilton',
    fips: 'BD',
    iso2: 'BM',
    iso3: 'BMU',
    isoNo: '60',
    internet: 'BM'
  },
  {
    continent: 'Asia',
    region: 'South Asia',
    country: 'Bhutan',
    capital: 'Thimphu',
    fips: 'BT',
    iso2: 'BT',
    iso3: 'BTN',
    isoNo: '64',
    internet: 'BT'
  },
  {
    continent: 'Americas',
    region: 'South America',
    country: 'Bolivia',
    capital: 'La Paz / Sucre',
    fips: 'BL',
    iso2: 'BO',
    iso3: 'BOL',
    isoNo: '68',
    internet: 'BO'
  },
  {
    continent: 'Europe',
    region: 'South East Europe',
    country: 'Bosnia and Herzegovina',
    capital: 'Sarajevo',
    fips: 'BK',
    iso2: 'BA',
    iso3: 'BIH',
    isoNo: '70',
    internet: 'BA'
  },
  {
    continent: 'Africa',
    region: 'Southern Africa',
    country: 'Botswana',
    capital: 'Gaborone',
    fips: 'BC',
    iso2: 'BW',
    iso3: 'BWA',
    isoNo: '72',
    internet: 'BW'
  },
  {
    continent: 'Americas',
    region: 'South America',
    country: 'Brazil',
    capital: 'Brasilia',
    fips: 'BR',
    iso2: 'BR',
    iso3: 'BRA',
    isoNo: '76',
    internet: 'BR'
  },
  {
    continent: 'Americas',
    region: 'West Indies',
    country: 'British Virgin Islands',
    capital: 'Road Town',
    fips: 'VI',
    iso2: 'VG',
    iso3: 'VGB',
    isoNo: '92',
    internet: 'VG'
  },
  {
    continent: 'Asia',
    region: 'South East Asia',
    country: 'Brunei',
    capital: 'Bandar Seri Begawan',
    fips: 'BX',
    iso2: 'BN',
    iso3: 'BRN',
    isoNo: '96',
    internet: 'BN'
  },
  {
    continent: 'Europe',
    region: 'South East Europe',
    country: 'Bulgaria',
    capital: 'Sofia',
    fips: 'BU',
    iso2: 'BG',
    iso3: 'BGR',
    isoNo: '100',
    internet: 'BG'
  },
  {
    continent: 'Africa',
    region: 'Western Africa',
    country: 'Burkina Faso',
    capital: 'Ouagadougou',
    fips: 'UV',
    iso2: 'BF',
    iso3: 'BFA',
    isoNo: '854',
    internet: 'BF'
  },
  {
    continent: 'Africa',
    region: 'Central Africa',
    country: 'Burundi',
    capital: 'Bujumbura',
    fips: 'BY',
    iso2: 'BI',
    iso3: 'BDI',
    isoNo: '108',
    internet: 'BI'
  },
  {
    continent: 'Asia',
    region: 'South East Asia',
    country: 'Cambodia',
    capital: 'Phnom Penh',
    fips: 'CB',
    iso2: 'KH',
    iso3: 'KHM',
    isoNo: '116',
    internet: 'KH'
  },
  {
    continent: 'Africa',
    region: 'Western Africa',
    country: 'Cameroon',
    capital: 'Yaounde',
    fips: 'CM',
    iso2: 'CM',
    iso3: 'CMR',
    isoNo: '120',
    internet: 'CM'
  },
  {
    continent: 'Americas',
    region: 'North America',
    country: 'Canada',
    capital: 'Ottawa',
    fips: 'CA',
    iso2: 'CA',
    iso3: 'CAN',
    isoNo: '124',
    internet: 'CA'
  },
  {
    continent: 'Africa',
    region: 'Western Africa',
    country: 'Cape Verde',
    capital: 'Praia',
    fips: 'CV',
    iso2: 'CV',
    iso3: 'CPV',
    isoNo: '132',
    internet: 'CV'
  },
  {
    continent: 'Americas',
    region: 'West Indies',
    country: 'Cayman Islands',
    capital: 'George Town',
    fips: 'CJ',
    iso2: 'KY',
    iso3: 'CYM',
    isoNo: '136',
    internet: 'KY'
  },
  {
    continent: 'Africa',
    region: 'Central Africa',
    country: 'Central African Republic',
    capital: 'Bangui',
    fips: 'CT',
    iso2: 'CF',
    iso3: 'CAF',
    isoNo: '140',
    internet: 'CF'
  },
  {
    continent: 'Africa',
    region: 'Central Africa',
    country: 'Chad',
    capital: "N'Djamena",
    fips: 'CD',
    iso2: 'TD',
    iso3: 'TCD',
    isoNo: '148',
    internet: 'TD'
  },
  {
    continent: 'Americas',
    region: 'South America',
    country: 'Chile',
    capital: 'Santiago',
    fips: 'CI',
    iso2: 'CL',
    iso3: 'CHL',
    isoNo: '152',
    internet: 'CL'
  },
  {
    continent: 'Asia',
    region: 'East Asia',
    country: 'China',
    capital: 'Beijing',
    fips: 'CH',
    iso2: 'CN',
    iso3: 'CHN',
    isoNo: '156',
    internet: 'CN'
  },
  {
    continent: 'Asia',
    region: 'South East Asia',
    country: 'Christmas Island',
    capital: 'The Settlement',
    fips: 'KT',
    iso2: 'CX',
    iso3: 'CXR',
    isoNo: '162',
    internet: 'CX'
  },
  {
    continent: 'Asia',
    region: 'South East Asia',
    country: 'Cocos (Keeling) Islands',
    capital: 'West Island',
    fips: 'CK',
    iso2: 'CC',
    iso3: 'CCK',
    isoNo: '166',
    internet: 'CC'
  },
  {
    continent: 'Americas',
    region: 'South America',
    country: 'Colombia',
    capital: 'Bogota',
    fips: 'CO',
    iso2: 'CO',
    iso3: 'COL',
    isoNo: '170',
    internet: 'CO'
  },
  {
    continent: 'Africa',
    region: 'Indian Ocean',
    country: 'Comoros',
    capital: 'Moroni',
    fips: 'CN',
    iso2: 'KM',
    iso3: 'COM',
    isoNo: '174',
    internet: 'KM'
  },
  {
    continent: 'Africa',
    region: 'Central Africa',
    country: 'Republic of the Congo',
    capital: 'Brazzaville',
    fips: 'CF',
    iso2: 'CG',
    iso3: 'COG',
    isoNo: '178',
    internet: 'CG'
  },
  {
    continent: 'Oceania',
    region: 'Pacific',
    country: 'Cook Islands',
    capital: 'Avarua',
    fips: 'CW',
    iso2: 'CK',
    iso3: 'COK',
    isoNo: '184',
    internet: 'CK'
  },
  {
    continent: 'Americas',
    region: 'Central America',
    country: 'Costa Rica',
    capital: 'San Jose',
    fips: 'CS',
    iso2: 'CR',
    iso3: 'CRI',
    isoNo: '188',
    internet: 'CR'
  },
  {
    continent: 'Africa',
    region: 'Western Africa',
    country: "Cote d'Ivoire",
    capital: 'Yamoussoukro',
    fips: 'IV',
    iso2: 'CI',
    iso3: 'CIV',
    isoNo: '384',
    internet: 'CI'
  },
  {
    continent: 'Europe',
    region: 'South East Europe',
    country: 'Croatia',
    capital: 'Zagreb',
    fips: 'HR',
    iso2: 'HR',
    iso3: 'HRV',
    isoNo: '191',
    internet: 'HR'
  },
  {
    continent: 'Americas',
    region: 'West Indies',
    country: 'Cuba',
    capital: 'Havana',
    fips: 'CU',
    iso2: 'CU',
    iso3: 'CUB',
    isoNo: '192',
    internet: 'CU'
  },
  {
    continent: 'Asia',
    region: 'South West Asia',
    country: 'Cyprus',
    capital: 'Nicosia',
    fips: 'CY',
    iso2: 'CY',
    iso3: 'CYP',
    isoNo: '196',
    internet: 'CY'
  },
  {
    continent: 'Europe',
    region: 'Central Europe',
    country: 'Czech Republic',
    capital: 'Prague',
    fips: 'EZ',
    iso2: 'CZ',
    iso3: 'CZE',
    isoNo: '203',
    internet: 'CZ'
  },
  {
    continent: 'Europe',
    region: 'Northern Europe',
    country: 'Denmark',
    capital: 'Copenhagen',
    fips: 'DA',
    iso2: 'DK',
    iso3: 'DNK',
    isoNo: '208',
    internet: 'DK'
  },
  {
    continent: 'Africa',
    region: 'Eastern Africa',
    country: 'Djibouti',
    capital: 'Djibouti',
    fips: 'DJ',
    iso2: 'DJ',
    iso3: 'DJI',
    isoNo: '262',
    internet: 'DJ'
  },
  {
    continent: 'Americas',
    region: 'West Indies',
    country: 'Dominica',
    capital: 'Roseau',
    fips: 'DO',
    iso2: 'DM',
    iso3: 'DMA',
    isoNo: '212',
    internet: 'DM'
  },
  {
    continent: 'Americas',
    region: 'West Indies',
    country: 'Dominican Republic',
    capital: 'Santo Domingo',
    fips: 'DR',
    iso2: 'DO',
    iso3: 'DOM',
    isoNo: '214',
    internet: 'DO'
  },
  {
    continent: 'Americas',
    region: 'South America',
    country: 'Ecuador',
    capital: 'Quito',
    fips: 'EC',
    iso2: 'EC',
    iso3: 'ECU',
    isoNo: '218',
    internet: 'EC'
  },
  {
    continent: 'Africa',
    region: 'Northern Africa',
    country: 'Egypt',
    capital: 'Cairo',
    fips: 'EG',
    iso2: 'EG',
    iso3: 'EGY',
    isoNo: '818',
    internet: 'EG'
  },
  {
    continent: 'Americas',
    region: 'Central America',
    country: 'El Salvador',
    capital: 'San Salvador',
    fips: 'ES',
    iso2: 'SV',
    iso3: 'SLV',
    isoNo: '222',
    internet: 'SV'
  },
  {
    continent: 'Africa',
    region: 'Western Africa',
    country: 'Equatorial Guinea',
    capital: 'Malabo',
    fips: 'EK',
    iso2: 'GQ',
    iso3: 'GNQ',
    isoNo: '226',
    internet: 'GQ'
  },
  {
    continent: 'Africa',
    region: 'Eastern Africa',
    country: 'Eritrea',
    capital: 'Asmara',
    fips: 'ER',
    iso2: 'ER',
    iso3: 'ERI',
    isoNo: '232',
    internet: 'ER'
  },
  {
    continent: 'Europe',
    region: 'Eastern Europe',
    country: 'Estonia',
    capital: 'Tallinn',
    fips: 'EN',
    iso2: 'EE',
    iso3: 'EST',
    isoNo: '233',
    internet: 'EE'
  },
  {
    continent: 'Africa',
    region: 'Eastern Africa',
    country: 'Ethiopia',
    capital: 'Addis Ababa',
    fips: 'ET',
    iso2: 'ET',
    iso3: 'ETH',
    isoNo: '231',
    internet: 'ET'
  },
  {
    continent: 'Americas',
    region: 'South America',
    country: 'Falkland Islands (Islas Malvinas)',
    capital: 'Stanley',
    fips: 'FA',
    iso2: 'FK',
    iso3: 'FLK',
    isoNo: '238',
    internet: 'FK'
  },
  {
    continent: 'Europe',
    region: 'Northern Europe',
    country: 'Faroe Islands',
    capital: 'Torshavn',
    fips: 'FO',
    iso2: 'FO',
    iso3: 'FRO',
    isoNo: '234',
    internet: 'FO'
  },
  {
    continent: 'Oceania',
    region: 'Pacific',
    country: 'Fiji',
    capital: 'Suva',
    fips: 'FJ',
    iso2: 'FJ',
    iso3: 'FJI',
    isoNo: '242',
    internet: 'FJ'
  },
  {
    continent: 'Europe',
    region: 'Northern Europe',
    country: 'Finland',
    capital: 'Helsinki',
    fips: 'FI',
    iso2: 'FI',
    iso3: 'FIN',
    isoNo: '246',
    internet: 'FI'
  },
  {
    continent: 'Europe',
    region: 'Western Europe',
    country: 'France',
    capital: 'Paris',
    fips: 'FR',
    iso2: 'FR',
    iso3: 'FRA',
    isoNo: '250',
    internet: 'FR'
  },
  {
    continent: 'Americas',
    region: 'South America',
    country: 'French Guiana',
    capital: 'Cayenne',
    fips: 'FG',
    iso2: 'GF',
    iso3: 'GUF',
    isoNo: '254',
    internet: 'GF'
  },
  {
    continent: 'Oceania',
    region: 'Pacific',
    country: 'French Polynesia',
    capital: 'Papeete',
    fips: 'FP',
    iso2: 'PF',
    iso3: 'PYF',
    isoNo: '258',
    internet: 'PF'
  },
  {
    continent: 'Africa',
    region: 'Western Africa',
    country: 'Gabon',
    capital: 'Libreville',
    fips: 'GB',
    iso2: 'GA',
    iso3: 'GAB',
    isoNo: '266',
    internet: 'GA'
  },
  {
    continent: 'Africa',
    region: 'Western Africa',
    country: 'The Gambia',
    capital: 'Banjul',
    fips: 'GA',
    iso2: 'GM',
    iso3: 'GMB',
    isoNo: '270',
    internet: 'GM'
  },
  {
    continent: 'Asia',
    region: 'South West Asia',
    country: 'Georgia',
    capital: "T'bilisi",
    fips: 'GG',
    iso2: 'GE',
    iso3: 'GEO',
    isoNo: '268',
    internet: 'GE'
  },
  {
    continent: 'Europe',
    region: 'Western Europe',
    country: 'Germany',
    capital: 'Berlin',
    fips: 'GM',
    iso2: 'DE',
    iso3: 'DEU',
    isoNo: '276',
    internet: 'DE'
  },
  {
    continent: 'Africa',
    region: 'Western Africa',
    country: 'Ghana',
    capital: 'Accra',
    fips: 'GH',
    iso2: 'GH',
    iso3: 'GHA',
    isoNo: '288',
    internet: 'GH'
  },
  {
    continent: 'Europe',
    region: 'South West Europe',
    country: 'Gibraltar',
    capital: 'Gibraltar',
    fips: 'GI',
    iso2: 'GI',
    iso3: 'GIB',
    isoNo: '292',
    internet: 'GI'
  },
  {
    continent: 'Europe',
    region: 'South East Europe',
    country: 'Greece',
    capital: 'Athens',
    fips: 'GR',
    iso2: 'GR',
    iso3: 'GRC',
    isoNo: '300',
    internet: 'GR'
  },
  {
    continent: 'Americas',
    region: 'North America',
    country: 'Greenland',
    capital: 'Nuuk (Godthab)',
    fips: 'GL',
    iso2: 'GL',
    iso3: 'GRL',
    isoNo: '304',
    internet: 'GL'
  },
  {
    continent: 'Americas',
    region: 'West Indies',
    country: 'Grenada',
    capital: "Saint George's",
    fips: 'GJ',
    iso2: 'GD',
    iso3: 'GRD',
    isoNo: '308',
    internet: 'GD'
  },
  {
    continent: 'Americas',
    region: 'West Indies',
    country: 'Guadeloupe',
    capital: 'Basse-Terre',
    fips: 'GP',
    iso2: 'GP',
    iso3: 'GLP',
    isoNo: '312',
    internet: 'GP'
  },
  {
    continent: 'Oceania',
    region: 'Pacific',
    country: 'Guam',
    capital: 'Hagatna (Agana)',
    fips: 'GQ',
    iso2: 'GU',
    iso3: 'GUM',
    isoNo: '316',
    internet: 'GU'
  },
  {
    continent: 'Americas',
    region: 'Central America',
    country: 'Guatemala',
    capital: 'Guatemala',
    fips: 'GT',
    iso2: 'GT',
    iso3: 'GTM',
    isoNo: '320',
    internet: 'GT'
  },
  {
    continent: 'Africa',
    region: 'Western Africa',
    country: 'Guinea',
    capital: 'Conakry',
    fips: 'GV',
    iso2: 'GN',
    iso3: 'GIN',
    isoNo: '324',
    internet: 'GN'
  },
  {
    continent: 'Africa',
    region: 'Western Africa',
    country: 'Guinea-Bissau',
    capital: 'Bissau',
    fips: 'PU',
    iso2: 'GW',
    iso3: 'GNB',
    isoNo: '624',
    internet: 'GW'
  },
  {
    continent: 'Americas',
    region: 'South America',
    country: 'Guyana',
    capital: 'Georgetown',
    fips: 'GY',
    iso2: 'GY',
    iso3: 'GUY',
    isoNo: '328',
    internet: 'GY'
  },
  {
    continent: 'Americas',
    region: 'West Indies',
    country: 'Haiti',
    capital: 'Port-au-Prince',
    fips: 'HA',
    iso2: 'HT',
    iso3: 'HTI',
    isoNo: '332',
    internet: 'HT'
  },
  {
    continent: 'Europe',
    region: 'Southern Europe',
    country: 'Holy See (Vatican City)',
    capital: 'Vatican City',
    fips: 'VT',
    iso2: 'VA',
    iso3: 'VAT',
    isoNo: '336',
    internet: 'VA'
  },
  {
    continent: 'Americas',
    region: 'Central America',
    country: 'Honduras',
    capital: 'Tegucigalpa',
    fips: 'HO',
    iso2: 'HN',
    iso3: 'HND',
    isoNo: '340',
    internet: 'HN'
  },
  {
    continent: 'Europe',
    region: 'Central Europe',
    country: 'Hungary',
    capital: 'Budapest',
    fips: 'HU',
    iso2: 'HU',
    iso3: 'HUN',
    isoNo: '348',
    internet: 'HU'
  },
  {
    continent: 'Europe',
    region: 'Northern Europe',
    country: 'Iceland',
    capital: 'Reykjavik',
    fips: 'IC',
    iso2: 'IS',
    iso3: 'ISL',
    isoNo: '352',
    internet: 'IS'
  },
  {
    continent: 'Asia',
    region: 'South Asia',
    country: 'India',
    capital: 'New Delhi',
    fips: 'IN',
    iso2: 'IN',
    iso3: 'IND',
    isoNo: '356',
    internet: 'IN'
  },
  {
    continent: 'Asia',
    region: 'South East Asia',
    country: 'Indonesia',
    capital: 'Jakarta',
    fips: 'ID',
    iso2: 'ID',
    iso3: 'IDN',
    isoNo: '360',
    internet: 'ID'
  },
  {
    continent: 'Asia',
    region: 'South West Asia',
    country: 'Iran',
    capital: 'Tehran',
    fips: 'IR',
    iso2: 'IR',
    iso3: 'IRN',
    isoNo: '364',
    internet: 'IR'
  },
  {
    continent: 'Asia',
    region: 'South West Asia',
    country: 'Iraq',
    capital: 'Baghdad',
    fips: 'IZ',
    iso2: 'IQ',
    iso3: 'IRQ',
    isoNo: '368',
    internet: 'IQ'
  },
  {
    continent: 'Europe',
    region: 'Western Europe',
    country: 'Ireland',
    capital: 'Dublin',
    fips: 'EI',
    iso2: 'IE',
    iso3: 'IRL',
    isoNo: '372',
    internet: 'IE'
  },
  {
    continent: 'Asia',
    region: 'South West Asia',
    country: 'Israel',
    capital: 'Jerusalem',
    fips: 'IS',
    iso2: 'IL',
    iso3: 'ISR',
    isoNo: '376',
    internet: 'IL'
  },
  {
    continent: 'Europe',
    region: 'Southern Europe',
    country: 'Italy',
    capital: 'Rome',
    fips: 'IT',
    iso2: 'IT',
    iso3: 'ITA',
    isoNo: '380',
    internet: 'IT'
  },
  {
    continent: 'Americas',
    region: 'West Indies',
    country: 'Jamaica',
    capital: 'Kingston',
    fips: 'JM',
    iso2: 'JM',
    iso3: 'JAM',
    isoNo: '388',
    internet: 'JM'
  },
  {
    continent: 'Asia',
    region: 'East Asia',
    country: 'Japan',
    capital: 'Tokyo',
    fips: 'JA',
    iso2: 'JP',
    iso3: 'JPN',
    isoNo: '392',
    internet: 'JP'
  },
  {
    continent: 'Asia',
    region: 'South West Asia',
    country: 'Jordan',
    capital: 'Amman',
    fips: 'JO',
    iso2: 'JO',
    iso3: 'JOR',
    isoNo: '400',
    internet: 'JO'
  },
  {
    continent: 'Asia',
    region: 'Central Asia',
    country: 'Kazakhstan',
    capital: 'Astana (Akmola)',
    fips: 'KZ',
    iso2: 'KZ',
    iso3: 'KAZ',
    isoNo: '398',
    internet: 'KZ'
  },
  {
    continent: 'Africa',
    region: 'Eastern Africa',
    country: 'Kenya',
    capital: 'Nairobi',
    fips: 'KE',
    iso2: 'KE',
    iso3: 'KEN',
    isoNo: '404',
    internet: 'KE'
  },
  {
    continent: 'Oceania',
    region: 'Pacific',
    country: 'Kiribati',
    capital: 'Tarawa',
    fips: 'KR',
    iso2: 'KI',
    iso3: 'KIR',
    isoNo: '296',
    internet: 'KI'
  },
  {
    continent: 'Asia',
    region: 'East Asia',
    country: 'North Korea',
    capital: "P'yongyang",
    fips: 'KN',
    iso2: 'KP',
    iso3: 'PRK',
    isoNo: '408',
    internet: 'KP'
  },
  {
    continent: 'Asia',
    region: 'East Asia',
    country: 'South Korea',
    capital: 'Seoul',
    fips: 'KS',
    iso2: 'KR',
    iso3: 'KOR',
    isoNo: '410',
    internet: 'KR'
  },
  {
    continent: 'Asia',
    region: 'South West Asia',
    country: 'Kuwait',
    capital: 'Kuwait',
    fips: 'KU',
    iso2: 'KW',
    iso3: 'KWT',
    isoNo: '414',
    internet: 'KW'
  },
  {
    continent: 'Asia',
    region: 'Central Asia',
    country: 'Kyrgyzstan',
    capital: 'Bishkek',
    fips: 'KG',
    iso2: 'KG',
    iso3: 'KGZ',
    isoNo: '417',
    internet: 'KG'
  },
  {
    continent: 'Asia',
    region: 'South East Asia',
    country: 'Laos',
    capital: 'Vientiane',
    fips: 'LA',
    iso2: 'LA',
    iso3: 'LAO',
    isoNo: '418',
    internet: 'LA'
  },
  {
    continent: 'Europe',
    region: 'Eastern Europe',
    country: 'Latvia',
    capital: 'Riga',
    fips: 'LG',
    iso2: 'LV',
    iso3: 'LVA',
    isoNo: '428',
    internet: 'LV'
  },
  {
    continent: 'Asia',
    region: 'South West Asia',
    country: 'Lebanon',
    capital: 'Beirut',
    fips: 'LE',
    iso2: 'LB',
    iso3: 'LBN',
    isoNo: '422',
    internet: 'LB'
  },
  {
    continent: 'Africa',
    region: 'Southern Africa',
    country: 'Lesotho',
    capital: 'Maseru',
    fips: 'LT',
    iso2: 'LS',
    iso3: 'LSO',
    isoNo: '426',
    internet: 'LS'
  },
  {
    continent: 'Africa',
    region: 'Western Africa',
    country: 'Liberia',
    capital: 'Monrovia',
    fips: 'LI',
    iso2: 'LR',
    iso3: 'LBR',
    isoNo: '430',
    internet: 'LR'
  },
  {
    continent: 'Africa',
    region: 'Northern Africa',
    country: 'Libya',
    capital: 'Tripoli',
    fips: 'LY',
    iso2: 'LY',
    iso3: 'LBY',
    isoNo: '434',
    internet: 'LY'
  },
  {
    continent: 'Europe',
    region: 'Central Europe',
    country: 'Liechtenstein',
    capital: 'Vaduz',
    fips: 'LS',
    iso2: 'LI',
    iso3: 'LIE',
    isoNo: '438',
    internet: 'LI'
  },
  {
    continent: 'Europe',
    region: 'Eastern Europe',
    country: 'Lithuania',
    capital: 'Vilnius',
    fips: 'LH',
    iso2: 'LT',
    iso3: 'LTU',
    isoNo: '440',
    internet: 'LT'
  },
  {
    continent: 'Europe',
    region: 'Western Europe',
    country: 'Luxembourg',
    capital: 'Luxembourg',
    fips: 'LU',
    iso2: 'LU',
    iso3: 'LUX',
    isoNo: '442',
    internet: 'LU'
  },
  {
    continent: 'Europe',
    region: 'South East Europe',
    country: 'North Macedonia',
    capital: 'Skopje',
    fips: 'MK',
    iso2: 'MK',
    iso3: 'MKD',
    isoNo: '807',
    internet: 'MK'
  },
  {
    continent: 'Africa',
    region: 'Indian Ocean',
    country: 'Madagascar',
    capital: 'Antananarivo',
    fips: 'MA',
    iso2: 'MG',
    iso3: 'MDG',
    isoNo: '450',
    internet: 'MG'
  },
  {
    continent: 'Africa',
    region: 'Southern Africa',
    country: 'Malawi',
    capital: 'Lilongwe',
    fips: 'MI',
    iso2: 'MW',
    iso3: 'MWI',
    isoNo: '454',
    internet: 'MW'
  },
  {
    continent: 'Asia',
    region: 'South East Asia',
    country: 'Malaysia',
    capital: 'Kuala Lumpur',
    fips: 'MY',
    iso2: 'MY',
    iso3: 'MYS',
    isoNo: '458',
    internet: 'MY'
  },
  {
    continent: 'Asia',
    region: 'South Asia',
    country: 'Maldives',
    capital: 'Male (Maale)',
    fips: 'MV',
    iso2: 'MV',
    iso3: 'MDV',
    isoNo: '462',
    internet: 'MV'
  },
  {
    continent: 'Africa',
    region: 'Western Africa',
    country: 'Mali',
    capital: 'Bamako',
    fips: 'ML',
    iso2: 'ML',
    iso3: 'MLI',
    isoNo: '466',
    internet: 'ML'
  },
  {
    continent: 'Europe',
    region: 'Southern Europe',
    country: 'Malta',
    capital: 'Valletta',
    fips: 'MT',
    iso2: 'MT',
    iso3: 'MLT',
    isoNo: '470',
    internet: 'MT'
  },
  {
    continent: 'Europe',
    region: 'Western Europe',
    country: 'Isle of Man',
    capital: 'Douglas',
    fips: 'IM',
    iso2: 'IM',
    iso3: 'IMN',
    isoNo: '833',
    internet: 'IM'
  },
  {
    continent: 'Oceania',
    region: 'Pacific',
    country: 'Marshall Islands',
    capital: 'Majuro',
    fips: 'RM',
    iso2: 'MH',
    iso3: 'MHL',
    isoNo: '584',
    internet: 'MH'
  },
  {
    continent: 'Americas',
    region: 'West Indies',
    country: 'Martinique',
    capital: 'Fort-de-France',
    fips: 'MB',
    iso2: 'MQ',
    iso3: 'MTQ',
    isoNo: '474',
    internet: 'MQ'
  },
  {
    continent: 'Africa',
    region: 'Western Africa',
    country: 'Mauritania',
    capital: 'Nouakchott',
    fips: 'MR',
    iso2: 'MR',
    iso3: 'MRT',
    isoNo: '478',
    internet: 'MR'
  },
  {
    continent: 'Africa',
    region: 'Indian Ocean',
    country: 'Mauritius',
    capital: 'Port Louis',
    fips: 'MP',
    iso2: 'MU',
    iso3: 'MUS',
    isoNo: '480',
    internet: 'MU'
  },
  {
    continent: 'Africa',
    region: 'Indian Ocean',
    country: 'Mayotte',
    capital: 'Mamoutzou',
    fips: 'MF',
    iso2: 'YT',
    iso3: 'MYT',
    isoNo: '175',
    internet: 'YT'
  },
  {
    continent: 'Americas',
    region: 'Central America',
    country: 'Mexico',
    capital: 'Mexico',
    fips: 'MX',
    iso2: 'MX',
    iso3: 'MEX',
    isoNo: '484',
    internet: 'MX'
  },
  {
    continent: 'Oceania',
    region: 'Pacific',
    country: 'Federated States of Micronesia',
    capital: 'Palikir',
    fips: '',
    iso2: 'FM',
    iso3: 'FSM',
    isoNo: '583',
    internet: 'FM'
  },
  {
    continent: 'Europe',
    region: 'Eastern Europe',
    country: 'Moldova',
    capital: 'Chisinau',
    fips: 'MD',
    iso2: 'MD',
    iso3: 'MDA',
    isoNo: '498',
    internet: 'MD'
  },
  {
    continent: 'Europe',
    region: 'Western Europe',
    country: 'Monaco',
    capital: 'Monaco',
    fips: 'MN',
    iso2: 'MC',
    iso3: 'MCO',
    isoNo: '492',
    internet: 'MC'
  },
  {
    continent: 'Asia',
    region: 'Northern Asia',
    country: 'Mongolia',
    capital: 'Ulaanbaatar',
    fips: 'MG',
    iso2: 'MN',
    iso3: 'MNG',
    isoNo: '496',
    internet: 'MN'
  },
  {
    continent: 'Americas',
    region: 'West Indies',
    country: 'Montserrat',
    capital: 'Plymouth',
    fips: 'MH',
    iso2: 'MS',
    iso3: 'MSR',
    isoNo: '500',
    internet: 'MS'
  },
  {
    continent: 'Africa',
    region: 'Northern Africa',
    country: 'Morocco',
    capital: 'Rabat',
    fips: 'MO',
    iso2: 'MA',
    iso3: 'MAR',
    isoNo: '504',
    internet: 'MA'
  },
  {
    continent: 'Africa',
    region: 'Southern Africa',
    country: 'Mozambique',
    capital: 'Maputo',
    fips: 'MZ',
    iso2: 'MZ',
    iso3: 'MOZ',
    isoNo: '508',
    internet: 'MZ'
  },
  {
    continent: 'Asia',
    region: 'South East Asia',
    country: 'Myanmar (Burma)',
    capital: 'Rangoon (Yangon)',
    fips: 'BM',
    iso2: 'MM',
    iso3: 'MMR',
    isoNo: '104',
    internet: 'MM'
  },
  {
    continent: 'Africa',
    region: 'Southern Africa',
    country: 'Namibia',
    capital: 'Windhoek',
    fips: 'WA',
    iso2: 'NA',
    iso3: 'NAM',
    isoNo: '516',
    internet: 'NA'
  },
  {
    continent: 'Oceania',
    region: 'Pacific',
    country: 'Nauru',
    capital: 'no official capital',
    fips: 'NR',
    iso2: 'NR',
    iso3: 'NRU',
    isoNo: '520',
    internet: 'NR'
  },
  {
    continent: 'Asia',
    region: 'South Asia',
    country: 'Nepal',
    capital: 'Kathmandu',
    fips: 'NP',
    iso2: 'NP',
    iso3: 'NPL',
    isoNo: '524',
    internet: 'NP'
  },
  {
    continent: 'Europe',
    region: 'Western Europe',
    country: 'Netherlands',
    capital: 'Amsterdam',
    fips: 'NL',
    iso2: 'NL',
    iso3: 'NLD',
    isoNo: '528',
    internet: 'NL'
  },
  {
    continent: 'Americas',
    region: 'West Indies',
    country: 'Netherlands Antilles',
    capital: 'Willemstad',
    fips: 'NT',
    iso2: 'AN',
    iso3: 'ANT',
    isoNo: '530',
    internet: 'AN'
  },
  {
    continent: 'Oceania',
    region: 'Pacific',
    country: 'New Caledonia',
    capital: 'Noumea',
    fips: 'NC',
    iso2: 'NC',
    iso3: 'NCL',
    isoNo: '540',
    internet: 'NC'
  },
  {
    continent: 'Oceania',
    region: 'Pacific',
    country: 'New Zealand',
    capital: 'Wellington',
    fips: 'NZ',
    iso2: 'NZ',
    iso3: 'NZL',
    isoNo: '554',
    internet: 'NZ'
  },
  {
    continent: 'Americas',
    region: 'Central America',
    country: 'Nicaragua',
    capital: 'Managua',
    fips: 'NU',
    iso2: 'NI',
    iso3: 'NIC',
    isoNo: '558',
    internet: 'NI'
  },
  {
    continent: 'Africa',
    region: 'Western Africa',
    country: 'Niger',
    capital: 'Niamey',
    fips: 'NG',
    iso2: 'NE',
    iso3: 'NER',
    isoNo: '562',
    internet: 'NE'
  },
  {
    continent: 'Africa',
    region: 'Western Africa',
    country: 'Nigeria',
    capital: 'Abuja',
    fips: 'NI',
    iso2: 'NG',
    iso3: 'NGA',
    isoNo: '566',
    internet: 'NG'
  },
  {
    continent: 'Oceania',
    region: 'Pacific',
    country: 'Niue',
    capital: 'Alofi',
    fips: 'NE',
    iso2: 'NU',
    iso3: 'NIU',
    isoNo: '570',
    internet: 'NU'
  },
  {
    continent: 'Oceania',
    region: 'Pacific',
    country: 'Norfolk Island',
    capital: 'Kingston',
    fips: 'NF',
    iso2: 'NF',
    iso3: 'NFK',
    isoNo: '574',
    internet: 'NF'
  },
  {
    continent: 'Oceania',
    region: 'Pacific',
    country: 'Northern Mariana Islands',
    capital: 'Saipan',
    fips: 'CQ',
    iso2: 'MP',
    iso3: 'MNP',
    isoNo: '580',
    internet: 'MP'
  },
  {
    continent: 'Europe',
    region: 'Northern Europe',
    country: 'Norway',
    capital: 'Oslo',
    fips: 'NO',
    iso2: 'NO',
    iso3: 'NOR',
    isoNo: '578',
    internet: 'NO'
  },
  {
    continent: 'Asia',
    region: 'South West Asia',
    country: 'Oman',
    capital: 'Muscat',
    fips: 'MU',
    iso2: 'OM',
    iso3: 'OMN',
    isoNo: '512',
    internet: 'OM'
  },
  {
    continent: 'Asia',
    region: 'South Asia',
    country: 'Pakistan',
    capital: 'Islamabad',
    fips: 'PK',
    iso2: 'PK',
    iso3: 'PAK',
    isoNo: '586',
    internet: 'PK'
  },
  {
    continent: 'Oceania',
    region: 'Pacific',
    country: 'Palau',
    capital: 'Koror',
    fips: 'PS',
    iso2: 'PW',
    iso3: 'PLW',
    isoNo: '585',
    internet: 'PW'
  },
  {
    continent: 'Asia',
    region: 'South West Asia',
    country: 'Palestinian Territory',
    capital: 'East Jerusalem',
    fips: 'WE',
    iso2: 'PS',
    iso3: 'PSE',
    isoNo: '275',
    internet: 'PS'
  },
  {
    continent: 'Americas',
    region: 'Central America',
    country: 'Panama',
    capital: 'Panama',
    fips: 'PM',
    iso2: 'PA',
    iso3: 'PAN',
    isoNo: '591',
    internet: 'PA'
  },
  {
    continent: 'Oceania',
    region: 'Pacific',
    country: 'Papua New Guinea',
    capital: 'Port Moresby',
    fips: 'PP',
    iso2: 'PG',
    iso3: 'PNG',
    isoNo: '598',
    internet: 'PG'
  },
  {
    continent: 'Americas',
    region: 'South America',
    country: 'Paraguay',
    capital: 'Asuncion',
    fips: 'PA',
    iso2: 'PY',
    iso3: 'PRY',
    isoNo: '600',
    internet: 'PY'
  },
  {
    continent: 'Americas',
    region: 'South America',
    country: 'Peru',
    capital: 'Lima',
    fips: 'PE',
    iso2: 'PE',
    iso3: 'PER',
    isoNo: '604',
    internet: 'PE'
  },
  {
    continent: 'Asia',
    region: 'South East Asia',
    country: 'Philippines',
    capital: 'Manila',
    fips: 'RP',
    iso2: 'PH',
    iso3: 'PHL',
    isoNo: '608',
    internet: 'PH'
  },
  {
    continent: 'Oceania',
    region: 'Pacific',
    country: 'Pitcairn Islands',
    capital: 'Adamstown',
    fips: 'PC',
    iso2: 'PN',
    iso3: 'PCN',
    isoNo: '612',
    internet: 'PN'
  },
  {
    continent: 'Europe',
    region: 'Eastern Europe',
    country: 'Poland',
    capital: 'Warsaw',
    fips: 'PL',
    iso2: 'PL',
    iso3: 'POL',
    isoNo: '616',
    internet: 'PL'
  },
  {
    continent: 'Europe',
    region: 'South West Europe',
    country: 'Portugal',
    capital: 'Lisbon',
    fips: 'PO',
    iso2: 'PT',
    iso3: 'PRT',
    isoNo: '620',
    internet: 'PT'
  },
  {
    continent: 'Americas',
    region: 'West Indies',
    country: 'Puerto Rico',
    capital: 'San Juan',
    fips: 'RQ',
    iso2: 'PR',
    iso3: 'PRI',
    isoNo: '630',
    internet: 'PR'
  },
  {
    continent: 'Asia',
    region: 'South West Asia',
    country: 'Qatar',
    capital: 'Doha',
    fips: 'QA',
    iso2: 'QA',
    iso3: 'QAT',
    isoNo: '634',
    internet: 'QA'
  },
  {
    continent: 'Africa',
    region: 'Indian Ocean',
    country: 'Reunion',
    capital: 'Saint-Denis',
    fips: 'RE',
    iso2: 'RE',
    iso3: 'REU',
    isoNo: '638',
    internet: 'RE'
  },
  {
    continent: 'Europe',
    region: 'South East Europe',
    country: 'Romania',
    capital: 'Bucharest',
    fips: 'RO',
    iso2: 'RO',
    iso3: 'ROU',
    isoNo: '642',
    internet: 'RO'
  },
  {
    continent: 'Asia',
    region: 'Northern Asia',
    country: 'Russia',
    capital: 'Moscow',
    fips: 'RS',
    iso2: 'RU',
    iso3: 'RUS',
    isoNo: '643',
    internet: 'RU'
  },
  {
    continent: 'Africa',
    region: 'Central Africa',
    country: 'Rwanda',
    capital: 'Kigali',
    fips: 'RW',
    iso2: 'RW',
    iso3: 'RWA',
    isoNo: '646',
    internet: 'RW'
  },
  {
    continent: 'Americas',
    region: 'West Indies',
    country: 'Saint Kitts and Nevis',
    capital: 'Basseterre',
    fips: 'SC',
    iso2: 'KN',
    iso3: 'KNA',
    isoNo: '659',
    internet: 'KN'
  },
  {
    continent: 'Americas',
    region: 'West Indies',
    country: 'Saint Lucia',
    capital: 'Castries',
    fips: 'ST',
    iso2: 'LC',
    iso3: 'LCA',
    isoNo: '662',
    internet: 'LC'
  },
  {
    continent: 'Americas',
    region: 'North America',
    country: 'Saint Pierre and Miquelon',
    capital: 'Saint-Pierre',
    fips: 'SB',
    iso2: 'PM',
    iso3: 'SPM',
    isoNo: '666',
    internet: 'PM'
  },
  {
    continent: 'Americas',
    region: 'West Indies',
    country: 'Saint Vincent and the Grenadines',
    capital: 'Kingstown',
    fips: 'VC',
    iso2: 'VC',
    iso3: 'VCT',
    isoNo: '670',
    internet: 'VC'
  },
  {
    continent: 'Europe',
    region: 'Southern Europe',
    country: 'San Marino',
    capital: 'San Marino',
    fips: 'SM',
    iso2: 'SM',
    iso3: 'SMR',
    isoNo: '674',
    internet: 'SM'
  },
  {
    continent: 'Africa',
    region: 'Western Africa',
    country: 'Sao Tome and Principe',
    capital: 'Sao Tome',
    fips: 'TP',
    iso2: 'ST',
    iso3: 'STP',
    isoNo: '678',
    internet: 'ST'
  },
  {
    continent: 'Asia',
    region: 'South West Asia',
    country: 'Saudi Arabia',
    capital: 'Riyadh',
    fips: 'SA',
    iso2: 'SA',
    iso3: 'SAU',
    isoNo: '682',
    internet: 'SA'
  },
  {
    continent: 'Africa',
    region: 'Western Africa',
    country: 'Senegal',
    capital: 'Dakar',
    fips: 'SG',
    iso2: 'SN',
    iso3: 'SEN',
    isoNo: '686',
    internet: 'SN'
  },
  {
    continent: 'Africa',
    region: 'Indian Ocean',
    country: 'Seychelles',
    capital: 'Victoria',
    fips: 'SE',
    iso2: 'SC',
    iso3: 'SYC',
    isoNo: '690',
    internet: 'SC'
  },
  {
    continent: 'Africa',
    region: 'Western Africa',
    country: 'Sierra Leone',
    capital: 'Freetown',
    fips: 'SL',
    iso2: 'SL',
    iso3: 'SLE',
    isoNo: '694',
    internet: 'SL'
  },
  {
    continent: 'Asia',
    region: 'South East Asia',
    country: 'Singapore',
    capital: 'Singapore',
    fips: 'SN',
    iso2: 'SG',
    iso3: 'SGP',
    isoNo: '702',
    internet: 'SG'
  },
  {
    continent: 'Europe',
    region: 'Central Europe',
    country: 'Slovakia',
    capital: 'Bratislava',
    fips: 'LO',
    iso2: 'SK',
    iso3: 'SVK',
    isoNo: '703',
    internet: 'SK'
  },
  {
    continent: 'Europe',
    region: 'South East Europe',
    country: 'Slovenia',
    capital: 'Ljubljana',
    fips: 'SI',
    iso2: 'SI',
    iso3: 'SVN',
    isoNo: '705',
    internet: 'SI'
  },
  {
    continent: 'Oceania',
    region: 'Pacific',
    country: 'Solomon Islands',
    capital: 'Honiara',
    fips: 'BP',
    iso2: 'SB',
    iso3: 'SLB',
    isoNo: '90',
    internet: 'SB'
  },
  {
    continent: 'Africa',
    region: 'Eastern Africa',
    country: 'Somalia',
    capital: 'Mogadishu',
    fips: 'SO',
    iso2: 'SO',
    iso3: 'SOM',
    isoNo: '706',
    internet: 'SO'
  },
  {
    continent: 'Africa',
    region: 'Southern Africa',
    country: 'South Africa',
    capital: 'Pretoria��',
    fips: 'SF',
    iso2: 'ZA',
    iso3: 'ZAF',
    isoNo: '710',
    internet: 'ZA'
  },
  {
    continent: 'Europe',
    region: 'South West Europe',
    country: 'Spain',
    capital: 'Madrid',
    fips: 'SP',
    iso2: 'ES',
    iso3: 'ESP',
    isoNo: '724',
    internet: 'ES'
  },
  {
    continent: 'Asia',
    region: 'South Asia',
    country: 'Sri Lanka',
    capital: 'Colombo',
    fips: 'CE',
    iso2: 'LK',
    iso3: 'LKA',
    isoNo: '144',
    internet: 'LK'
  },
  {
    continent: 'Africa',
    region: 'Northern Africa',
    country: 'Sudan',
    capital: 'Khartoum',
    fips: 'SU',
    iso2: 'SD',
    iso3: 'SDN',
    isoNo: '736',
    internet: 'SD'
  },
  {
    continent: 'Americas',
    region: 'South America',
    country: 'Suriname',
    capital: 'Paramaribo',
    fips: 'NS',
    iso2: 'SR',
    iso3: 'SUR',
    isoNo: '740',
    internet: 'SR'
  },
  {
    continent: 'Europe',
    region: 'Northern Europe',
    country: 'Svalbard',
    capital: 'Longyearbyen',
    fips: 'SV',
    iso2: 'SJ',
    iso3: 'SJM',
    isoNo: '744',
    internet: 'SJ'
  },
  {
    continent: 'Africa',
    region: 'Southern Africa',
    country: 'Eswatini',
    capital: 'Mbabane',
    fips: 'WZ',
    iso2: 'SZ',
    iso3: 'SWZ',
    isoNo: '748',
    internet: 'SZ'
  },
  {
    continent: 'Europe',
    region: 'Northern Europe',
    country: 'Sweden',
    capital: 'Stockholm',
    fips: 'SW',
    iso2: 'SE',
    iso3: 'SWE',
    isoNo: '752',
    internet: 'SE'
  },
  {
    continent: 'Europe',
    region: 'Central Europe',
    country: 'Switzerland',
    capital: 'Bern',
    fips: 'SZ',
    iso2: 'CH',
    iso3: 'CHE',
    isoNo: '756',
    internet: 'CH'
  },
  {
    continent: 'Asia',
    region: 'South West Asia',
    country: 'Syria',
    capital: 'Damascus',
    fips: 'SY',
    iso2: 'SY',
    iso3: 'SYR',
    isoNo: '760',
    internet: 'SY'
  },
  {
    continent: 'Asia',
    region: 'East Asia',
    country: 'Taiwan',
    capital: 'Taipei',
    fips: 'TW',
    iso2: 'TW',
    iso3: 'TWN',
    isoNo: '158',
    internet: 'TW'
  },
  {
    continent: 'Asia',
    region: 'Central Asia',
    country: 'Tajikistan',
    capital: 'Dushanbe',
    fips: 'TI',
    iso2: 'TJ',
    iso3: 'TJK',
    isoNo: '762',
    internet: 'TJ'
  },
  {
    continent: 'Africa',
    region: 'Eastern Africa',
    country: 'Tanzania',
    capital: 'Dar es Salaam',
    fips: 'TZ',
    iso2: 'TZ',
    iso3: 'TZA',
    isoNo: '834',
    internet: 'TZ'
  },
  {
    continent: 'Asia',
    region: 'South East Asia',
    country: 'Thailand',
    capital: 'Bangkok',
    fips: 'TH',
    iso2: 'TH',
    iso3: 'THA',
    isoNo: '764',
    internet: 'TH'
  },
  {
    continent: 'Africa',
    region: 'Western Africa',
    country: 'Togo',
    capital: 'Lome',
    fips: 'TO',
    iso2: 'TG',
    iso3: 'TGO',
    isoNo: '768',
    internet: 'TG'
  },
  {
    continent: 'Oceania',
    region: 'Pacific',
    country: 'Tokelau',
    capital: 'none',
    fips: 'TL',
    iso2: 'TK',
    iso3: 'TKL',
    isoNo: '772',
    internet: 'TK'
  },
  {
    continent: 'Oceania',
    region: 'Pacific',
    country: 'Tonga',
    capital: "Nuku'alofa",
    fips: 'TN',
    iso2: 'TO',
    iso3: 'TON',
    isoNo: '776',
    internet: 'TO'
  },
  {
    continent: 'Americas',
    region: 'West Indies',
    country: 'Trinidad and Tobago',
    capital: 'Port-of-Spain',
    fips: 'TD',
    iso2: 'TT',
    iso3: 'TTO',
    isoNo: '780',
    internet: 'TT'
  },
  {
    continent: 'Africa',
    region: 'Northern Africa',
    country: 'Tunisia',
    capital: 'Tunis',
    fips: 'TS',
    iso2: 'TN',
    iso3: 'TUN',
    isoNo: '788',
    internet: 'TN'
  },
  {
    continent: 'Asia',
    region: 'South West Asia',
    country: 'Turkey',
    capital: 'Ankara',
    fips: 'TU',
    iso2: 'TR',
    iso3: 'TUR',
    isoNo: '792',
    internet: 'TR'
  },
  {
    continent: 'Asia',
    region: 'Central Asia',
    country: 'Turkmenistan',
    capital: 'Ashgabat',
    fips: 'TX',
    iso2: 'TM',
    iso3: 'TKM',
    isoNo: '795',
    internet: 'TM'
  },
  {
    continent: 'Americas',
    region: 'West Indies',
    country: 'Turks and Caicos Islands',
    capital: 'Grand Turk',
    fips: 'TK',
    iso2: 'TC',
    iso3: 'TCA',
    isoNo: '796',
    internet: 'TC'
  },
  {
    continent: 'Oceania',
    region: 'Pacific',
    country: 'Tuvalu',
    capital: 'Funafuti',
    fips: 'TV',
    iso2: 'TV',
    iso3: 'TUV',
    isoNo: '798',
    internet: 'TV'
  },
  {
    continent: 'Africa',
    region: 'Eastern Africa',
    country: 'Uganda',
    capital: 'Kampala',
    fips: 'UG',
    iso2: 'UG',
    iso3: 'UGA',
    isoNo: '800',
    internet: 'UG'
  },
  {
    continent: 'Europe',
    region: 'Eastern Europe',
    country: 'Ukraine',
    capital: 'Kyiv',
    fips: 'UP',
    iso2: 'UA',
    iso3: 'UKR',
    isoNo: '804',
    internet: 'UA'
  },
  {
    continent: 'Asia',
    region: 'South West Asia',
    country: 'United Arab Emirates',
    capital: 'Abu Dhabi',
    fips: 'TC',
    iso2: 'AE',
    iso3: 'ARE',
    isoNo: '784',
    internet: 'AE'
  },
  {
    continent: 'Europe',
    region: 'Western Europe',
    country: 'United Kingdom',
    capital: 'London',
    fips: 'UK',
    iso2: 'GB',
    iso3: 'GBR',
    isoNo: '826',
    internet: 'UK'
  },
  {
    continent: 'Americas',
    region: 'North America',
    country: 'United States',
    capital: 'Washington DC',
    fips: 'US',
    iso2: 'US',
    iso3: 'USA',
    isoNo: '840',
    internet: 'US'
  },
  {
    continent: 'Americas',
    region: 'North America',
    country: 'United States Minor Outlying Islands',
    capital: 'Washington DC',
    fips: '',
    iso2: 'UM',
    iso3: 'UMI',
    isoNo: '581',
    internet: 'US'
  },
  {
    continent: 'Americas',
    region: 'South America',
    country: 'Uruguay',
    capital: 'Montevideo',
    fips: 'UY',
    iso2: 'UY',
    iso3: 'URY',
    isoNo: '858',
    internet: 'UY'
  },
  {
    continent: 'Asia',
    region: 'Central Asia',
    country: 'Uzbekistan',
    capital: 'Tashkent (Toshkent)',
    fips: 'UZ',
    iso2: 'UZ',
    iso3: 'UZB',
    isoNo: '860',
    internet: 'UZ'
  },
  {
    continent: 'Oceania',
    region: 'Pacific',
    country: 'Vanuatu',
    capital: 'Port-Vila',
    fips: 'NH',
    iso2: 'VU',
    iso3: 'VUT',
    isoNo: '548',
    internet: 'VU'
  },
  {
    continent: 'Americas',
    region: 'South America',
    country: 'Venezuela',
    capital: 'Caracas',
    fips: 'VE',
    iso2: 'VE',
    iso3: 'VEN',
    isoNo: '862',
    internet: 'UE'
  },
  {
    continent: 'Asia',
    region: 'South East Asia',
    country: 'Vietnam',
    capital: 'Hanoi',
    fips: 'VN',
    iso2: 'VN',
    iso3: 'VNM',
    isoNo: '704',
    internet: 'VN'
  },
  {
    continent: 'Americas',
    region: 'West Indies',
    country: 'Virgin Islands',
    capital: 'Charlotte Amalie',
    fips: 'VQ',
    iso2: 'VI',
    iso3: 'VIR',
    isoNo: '850',
    internet: 'VI'
  },
  {
    continent: 'Oceania',
    region: 'Pacific',
    country: 'Wallis and Futuna',
    capital: 'Mata-Utu (on Ile Uvea)',
    fips: 'WF',
    iso2: 'WF',
    iso3: 'WLF',
    isoNo: '876',
    internet: 'WF'
  },
  {
    continent: 'Africa',
    region: 'Northern Africa',
    country: 'Western Sahara',
    capital: 'none',
    fips: 'WI',
    iso2: 'EH',
    iso3: 'ESH',
    isoNo: '732',
    internet: 'EH'
  },
  {
    continent: 'Oceania',
    region: 'Pacific',
    country: 'Western Samoa',
    capital: 'Apia',
    fips: 'WS',
    iso2: 'WS',
    iso3: 'WSM',
    isoNo: '882',
    internet: 'WS'
  },
  {
    continent: 'Asia',
    region: 'South West Asia',
    country: 'Yemen',
    capital: 'Sanaa',
    fips: 'YM',
    iso2: 'YE',
    iso3: 'YEM',
    isoNo: '887',
    internet: 'YE'
  },
  {
    continent: 'Africa',
    region: 'Central Africa',
    country: 'Democratic Republic of the Congo',
    capital: 'Kinshasa',
    fips: 'CG',
    iso2: 'CD',
    iso3: 'COD',
    isoNo: '180',
    internet: 'ZR'
  },
  {
    continent: 'Africa',
    region: 'Southern Africa',
    country: 'Zambia',
    capital: 'Lusaka',
    fips: 'ZA',
    iso2: 'ZM',
    iso3: 'ZMB',
    isoNo: '894',
    internet: 'ZM'
  },
  {
    continent: 'Africa',
    region: 'Southern Africa',
    country: 'Zimbabwe',
    capital: 'Harare',
    fips: 'ZI',
    iso2: 'ZW',
    iso3: 'ZWE',
    isoNo: '716',
    internet: 'ZW'
  },
  {
    continent: 'Asia',
    region: 'East Asia',
    country: 'Hong Kong',
    capital: 'Victoria',
    fips: 'HK',
    iso2: 'HK',
    iso3: 'HKG',
    isoNo: '344',
    internet: 'HK'
  },
  {
    continent: 'Asia',
    region: 'East Asia',
    country: 'Macau',
    capital: 'Macau',
    fips: 'MC',
    iso2: 'MO',
    iso3: 'MAC',
    isoNo: '446',
    internet: 'MO'
  },
  {
    continent: 'Antarctica',
    region: 'Antarctica',
    country: 'Antarctica',
    capital: '',
    fips: 'AY',
    iso2: 'AQ',
    iso3: 'ATA',
    isoNo: '10',
    internet: 'AQ'
  },
  {
    continent: 'Atlantic Ocean',
    region: 'South Atlantic Ocean',
    country: 'Bouvet Island',
    capital: '',
    fips: 'BV',
    iso2: 'BV',
    iso3: 'BVT',
    isoNo: '74',
    internet: 'BV'
  },
  {
    continent: 'Asia',
    region: 'South Asia',
    country: 'British Indian Ocean Territory',
    capital: '',
    fips: 'IO',
    iso2: 'IO',
    iso3: 'IOT',
    isoNo: '86',
    internet: 'IO'
  },
  {
    continent: 'Indian Ocean',
    region: 'Southern Indian Ocean',
    country: 'French Southern and Antarctic Lands',
    capital: '',
    fips: 'FS',
    iso2: 'TF',
    iso3: 'ATF',
    isoNo: '260',
    internet: '--'
  },
  {
    continent: 'Indian Ocean',
    region: 'Southern Indian Ocean',
    country: 'Heard Island and McDonald Islands',
    capital: '',
    fips: 'HM',
    iso2: 'HM',
    iso3: 'HMD',
    isoNo: '334',
    internet: 'HM'
  },
  {
    continent: 'Atlantic Ocean',
    region: 'South Atlantic Ocean',
    country: 'Saint Helena',
    capital: '',
    fips: 'SH',
    iso2: 'SH',
    iso3: 'SHN',
    isoNo: '654',
    internet: 'SH'
  },
  {
    continent: 'Atlantic Ocean',
    region: 'South Atlantic Ocean',
    country: 'South Georgia and the South Sandwich Islands',
    capital: '',
    fips: 'SX',
    iso2: 'GS',
    iso3: 'SGS',
    isoNo: '239',
    internet: 'GS'
  },
  {
    continent: 'Europe',
    region: 'Western Europe',
    country: 'Guernsey',
    capital: 'Saint Peter Port',
    fips: 'GK',
    iso2: 'GG',
    iso3: 'GGY',
    isoNo: '831',
    internet: 'GG'
  },
  {
    continent: 'Europe',
    region: 'South East Europe',
    country: 'Serbia',
    capital: 'Belgrade',
    fips: 'RI',
    iso2: 'RS',
    iso3: 'SRB',
    isoNo: '688',
    internet: 'RS'
  },
  {
    continent: 'Americas',
    region: 'West Indies',
    country: 'Saint Barthélemy',
    capital: 'Gustavia',
    fips: 'TB',
    iso2: 'BL',
    iso3: 'BLM',
    isoNo: '652',
    internet: 'BL'
  },
  {
    continent: 'Europe',
    region: 'South East Europe',
    country: 'Montenegro',
    capital: 'Podgorica',
    fips: 'MJ',
    iso2: 'ME',
    iso3: 'MNE',
    isoNo: '499',
    internet: 'ME'
  },
  {
    continent: 'Europe',
    region: 'Western Europe',
    country: 'Jersey',
    capital: 'Saint Helier',
    fips: 'JE',
    iso2: 'JE',
    iso3: 'JEY',
    isoNo: '832',
    internet: 'JE'
  },
  {
    continent: 'Americas',
    region: 'West Indies',
    country: 'Curaçao',
    capital: 'Willemstad',
    fips: 'UC',
    iso2: 'CW',
    iso3: 'CUW',
    isoNo: '531',
    internet: 'CW'
  },
  {
    continent: 'Americas',
    region: 'West Indies',
    country: 'Saint Martin',
    capital: 'Marigot',
    fips: 'RN',
    iso2: 'MF',
    iso3: 'MAF',
    isoNo: '663',
    internet: 'MF'
  },
  {
    continent: 'Americas',
    region: 'West Indies',
    country: 'Sint Maarten',
    capital: 'Philipsburg',
    fips: 'NN',
    iso2: 'SX',
    iso3: 'SXM',
    isoNo: '534',
    internet: 'SX'
  },
  {
    continent: 'Asia',
    region: 'South East Asia',
    country: 'Timor-Leste',
    capital: 'Dili',
    fips: 'TT',
    iso2: 'TL',
    iso3: 'TLS',
    isoNo: '626',
    internet: 'TL'
  },
  {
    continent: 'Africa',
    region: 'Northern Africa',
    country: 'South Sudan',
    capital: 'Juba',
    fips: 'OD',
    iso2: 'SS',
    iso3: 'SSD',
    isoNo: '728',
    internet: 'SS'
  },
  {
    continent: 'Europe',
    region: 'Northern Europe',
    country: 'Åland Islands',
    capital: 'Mariehamn',
    fips: 'AX',
    iso2: 'AX',
    iso3: 'ALA',
    isoNo: '248',
    internet: 'AX'
  },
  {
    continent: 'Americas',
    region: 'West Indies',
    country: 'Bonaire',
    capital: 'Kralendijk',
    fips: 'BQ',
    iso2: 'BQ',
    iso3: 'BES',
    isoNo: '535',
    internet: 'BQ'
  },
  {
    continent: 'Europe',
    region: 'South East Europe',
    country: 'Republic of Kosovo',
    capital: 'Pristina',
    fips: 'KV',
    iso2: 'XK',
    iso3: 'UNK',
    isoNo: null,
    internet: 'XK'
  },
]

module.exports.countries = countries


/***/ }),

/***/ "./node_modules/css-loader/dist/cjs.js!./src/style.css":
/*!*************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js!./src/style.css ***!
  \*************************************************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../node_modules/css-loader/dist/runtime/sourceMaps.js */ "./node_modules/css-loader/dist/runtime/sourceMaps.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../node_modules/css-loader/dist/runtime/api.js */ "./node_modules/css-loader/dist/runtime/api.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../node_modules/css-loader/dist/runtime/getUrl.js */ "./node_modules/css-loader/dist/runtime/getUrl.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2__);
// Imports



var ___CSS_LOADER_URL_IMPORT_0___ = new URL(/* asset import */ __webpack_require__(/*! assets/billy-williams-8wz1Q4Q_XAg-unsplash.jpg */ "./src/assets/billy-williams-8wz1Q4Q_XAg-unsplash.jpg"), __webpack_require__.b);
var ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default()((_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default()));
___CSS_LOADER_EXPORT___.push([module.id, "@import url(https://fonts.googleapis.com/css2?family=Open+Sans:wght@300;400;500;600;700&display=swap);"]);
var ___CSS_LOADER_URL_REPLACEMENT_0___ = _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2___default()(___CSS_LOADER_URL_IMPORT_0___);
// Module
___CSS_LOADER_EXPORT___.push([module.id, "*, ::before, ::after {\n    box-sizing: border-box;\n    margin: 0;\n    padding: 0;\n}\n\nbody {\n    font-family: 'Open Sans', sans-serif;\n    background-image: url(" + ___CSS_LOADER_URL_REPLACEMENT_0___ + ");\n    background-size: cover;\n    background-repeat: no-repeat;\n    height: 100dvh;\n}\n\nmain {\n    display: flex;\n    flex-direction: column;\n    align-items: center;\n    width: 100dvw;\n}\n\n.search-bar {\n    max-width: 30rem;\n    margin: 0 auto;\n    padding: 2.5rem 2rem;\n}\n\nform  {\n    display: flex;\n    justify-content: space-between;\n    border-bottom: 1px solid rgba(255, 255, 255, 0.5);\n}\n\ninput {\n    font-family: inherit;\n    padding: 1rem 1.5rem;\n    border: 0;\n}\n\ninput[type=\"text\"] {\n    background-color: transparent;\n    flex-grow: 1;\n    opacity: 1;\n    color: white;\n}\n\ninput[type=\"image\"] {\n    height: 60px;\n    cursor: pointer;\n}\n\nh1 {\n    font-size: 5em;\n}\n\nh2 {\n    font-size: 2.5em;\n    font-weight: 500;\n}\n\np {\n    font-weight: 400;\n    font-size: 1.5em;\n}\n\n.content {\n    width: 25rem;\n    padding: 2rem 1.5rem;\n    color: white;\n    text-align: center;\n    display: flex;\n    flex-direction: column;\n    gap: 3rem;\n}\n\n.main-widget p {\n    font-weight: 300;\n    font-size: 1.2em;\n}\n\n.secondary-widget {\n    width: 100%;\n    padding: 1.5rem 1rem;\n    display: flex;\n    justify-content: space-evenly;\n    border: 1px solid rgba(255, 255, 255, 0.5);\n    border-radius: 50px;\n    background-color: rgba(255, 255, 255, 0.1);\n    backdrop-filter: blur(5px);\n}\n\n.label  {\n    font-weight: 300;\n    font-size: 1em;\n}", "",{"version":3,"sources":["webpack://./src/style.css"],"names":[],"mappings":"AAGA;IACI,sBAAsB;IACtB,SAAS;IACT,UAAU;AACd;;AAEA;IACI,oCAAoC;IACpC,yDAAqE;IACrE,sBAAsB;IACtB,4BAA4B;IAC5B,cAAc;AAClB;;AAEA;IACI,aAAa;IACb,sBAAsB;IACtB,mBAAmB;IACnB,aAAa;AACjB;;AAEA;IACI,gBAAgB;IAChB,cAAc;IACd,oBAAoB;AACxB;;AAEA;IACI,aAAa;IACb,8BAA8B;IAC9B,iDAAiD;AACrD;;AAEA;IACI,oBAAoB;IACpB,oBAAoB;IACpB,SAAS;AACb;;AAEA;IACI,6BAA6B;IAC7B,YAAY;IACZ,UAAU;IACV,YAAY;AAChB;;AAEA;IACI,YAAY;IACZ,eAAe;AACnB;;AAEA;IACI,cAAc;AAClB;;AAEA;IACI,gBAAgB;IAChB,gBAAgB;AACpB;;AAEA;IACI,gBAAgB;IAChB,gBAAgB;AACpB;;AAEA;IACI,YAAY;IACZ,oBAAoB;IACpB,YAAY;IACZ,kBAAkB;IAClB,aAAa;IACb,sBAAsB;IACtB,SAAS;AACb;;AAEA;IACI,gBAAgB;IAChB,gBAAgB;AACpB;;AAEA;IACI,WAAW;IACX,oBAAoB;IACpB,aAAa;IACb,6BAA6B;IAC7B,0CAA0C;IAC1C,mBAAmB;IACnB,0CAA0C;IAC1C,0BAA0B;AAC9B;;AAEA;IACI,gBAAgB;IAChB,cAAc;AAClB","sourcesContent":["@import url('https://fonts.googleapis.com/css2?family=Open+Sans:wght@300;400;500;600;700&display=swap');\n\n\n*, ::before, ::after {\n    box-sizing: border-box;\n    margin: 0;\n    padding: 0;\n}\n\nbody {\n    font-family: 'Open Sans', sans-serif;\n    background-image: url(assets/billy-williams-8wz1Q4Q_XAg-unsplash.jpg);\n    background-size: cover;\n    background-repeat: no-repeat;\n    height: 100dvh;\n}\n\nmain {\n    display: flex;\n    flex-direction: column;\n    align-items: center;\n    width: 100dvw;\n}\n\n.search-bar {\n    max-width: 30rem;\n    margin: 0 auto;\n    padding: 2.5rem 2rem;\n}\n\nform  {\n    display: flex;\n    justify-content: space-between;\n    border-bottom: 1px solid rgba(255, 255, 255, 0.5);\n}\n\ninput {\n    font-family: inherit;\n    padding: 1rem 1.5rem;\n    border: 0;\n}\n\ninput[type=\"text\"] {\n    background-color: transparent;\n    flex-grow: 1;\n    opacity: 1;\n    color: white;\n}\n\ninput[type=\"image\"] {\n    height: 60px;\n    cursor: pointer;\n}\n\nh1 {\n    font-size: 5em;\n}\n\nh2 {\n    font-size: 2.5em;\n    font-weight: 500;\n}\n\np {\n    font-weight: 400;\n    font-size: 1.5em;\n}\n\n.content {\n    width: 25rem;\n    padding: 2rem 1.5rem;\n    color: white;\n    text-align: center;\n    display: flex;\n    flex-direction: column;\n    gap: 3rem;\n}\n\n.main-widget p {\n    font-weight: 300;\n    font-size: 1.2em;\n}\n\n.secondary-widget {\n    width: 100%;\n    padding: 1.5rem 1rem;\n    display: flex;\n    justify-content: space-evenly;\n    border: 1px solid rgba(255, 255, 255, 0.5);\n    border-radius: 50px;\n    background-color: rgba(255, 255, 255, 0.1);\n    backdrop-filter: blur(5px);\n}\n\n.label  {\n    font-weight: 300;\n    font-size: 1em;\n}"],"sourceRoot":""}]);
// Exports
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);


/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/api.js":
/*!*****************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/api.js ***!
  \*****************************************************/
/***/ ((module) => {

"use strict";


/*
  MIT License http://www.opensource.org/licenses/mit-license.php
  Author Tobias Koppers @sokra
*/
module.exports = function (cssWithMappingToString) {
  var list = [];

  // return the list of modules as css string
  list.toString = function toString() {
    return this.map(function (item) {
      var content = "";
      var needLayer = typeof item[5] !== "undefined";
      if (item[4]) {
        content += "@supports (".concat(item[4], ") {");
      }
      if (item[2]) {
        content += "@media ".concat(item[2], " {");
      }
      if (needLayer) {
        content += "@layer".concat(item[5].length > 0 ? " ".concat(item[5]) : "", " {");
      }
      content += cssWithMappingToString(item);
      if (needLayer) {
        content += "}";
      }
      if (item[2]) {
        content += "}";
      }
      if (item[4]) {
        content += "}";
      }
      return content;
    }).join("");
  };

  // import a list of modules into the list
  list.i = function i(modules, media, dedupe, supports, layer) {
    if (typeof modules === "string") {
      modules = [[null, modules, undefined]];
    }
    var alreadyImportedModules = {};
    if (dedupe) {
      for (var k = 0; k < this.length; k++) {
        var id = this[k][0];
        if (id != null) {
          alreadyImportedModules[id] = true;
        }
      }
    }
    for (var _k = 0; _k < modules.length; _k++) {
      var item = [].concat(modules[_k]);
      if (dedupe && alreadyImportedModules[item[0]]) {
        continue;
      }
      if (typeof layer !== "undefined") {
        if (typeof item[5] === "undefined") {
          item[5] = layer;
        } else {
          item[1] = "@layer".concat(item[5].length > 0 ? " ".concat(item[5]) : "", " {").concat(item[1], "}");
          item[5] = layer;
        }
      }
      if (media) {
        if (!item[2]) {
          item[2] = media;
        } else {
          item[1] = "@media ".concat(item[2], " {").concat(item[1], "}");
          item[2] = media;
        }
      }
      if (supports) {
        if (!item[4]) {
          item[4] = "".concat(supports);
        } else {
          item[1] = "@supports (".concat(item[4], ") {").concat(item[1], "}");
          item[4] = supports;
        }
      }
      list.push(item);
    }
  };
  return list;
};

/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/getUrl.js":
/*!********************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/getUrl.js ***!
  \********************************************************/
/***/ ((module) => {

"use strict";


module.exports = function (url, options) {
  if (!options) {
    options = {};
  }
  if (!url) {
    return url;
  }
  url = String(url.__esModule ? url.default : url);

  // If url is already wrapped in quotes, remove them
  if (/^['"].*['"]$/.test(url)) {
    url = url.slice(1, -1);
  }
  if (options.hash) {
    url += options.hash;
  }

  // Should url be wrapped?
  // See https://drafts.csswg.org/css-values-3/#urls
  if (/["'() \t\n]|(%20)/.test(url) || options.needQuotes) {
    return "\"".concat(url.replace(/"/g, '\\"').replace(/\n/g, "\\n"), "\"");
  }
  return url;
};

/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/sourceMaps.js":
/*!************************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/sourceMaps.js ***!
  \************************************************************/
/***/ ((module) => {

"use strict";


module.exports = function (item) {
  var content = item[1];
  var cssMapping = item[3];
  if (!cssMapping) {
    return content;
  }
  if (typeof btoa === "function") {
    var base64 = btoa(unescape(encodeURIComponent(JSON.stringify(cssMapping))));
    var data = "sourceMappingURL=data:application/json;charset=utf-8;base64,".concat(base64);
    var sourceMapping = "/*# ".concat(data, " */");
    return [content].concat([sourceMapping]).join("\n");
  }
  return [content].join("\n");
};

/***/ }),

/***/ "./src/style.css":
/*!***********************!*\
  !*** ./src/style.css ***!
  \***********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/styleDomAPI.js */ "./node_modules/style-loader/dist/runtime/styleDomAPI.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/insertBySelector.js */ "./node_modules/style-loader/dist/runtime/insertBySelector.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js */ "./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/insertStyleElement.js */ "./node_modules/style-loader/dist/runtime/insertStyleElement.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/styleTagTransform.js */ "./node_modules/style-loader/dist/runtime/styleTagTransform.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! !!../node_modules/css-loader/dist/cjs.js!./style.css */ "./node_modules/css-loader/dist/cjs.js!./src/style.css");

      
      
      
      
      
      
      
      
      

var options = {};

options.styleTagTransform = (_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default());
options.setAttributes = (_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default());

      options.insert = _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default().bind(null, "head");
    
options.domAPI = (_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default());
options.insertStyleElement = (_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default());

var update = _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default()(_node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__["default"], options);




       /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__["default"] && _node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__["default"].locals ? _node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__["default"].locals : undefined);


/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js":
/*!****************************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js ***!
  \****************************************************************************/
/***/ ((module) => {

"use strict";


var stylesInDOM = [];
function getIndexByIdentifier(identifier) {
  var result = -1;
  for (var i = 0; i < stylesInDOM.length; i++) {
    if (stylesInDOM[i].identifier === identifier) {
      result = i;
      break;
    }
  }
  return result;
}
function modulesToDom(list, options) {
  var idCountMap = {};
  var identifiers = [];
  for (var i = 0; i < list.length; i++) {
    var item = list[i];
    var id = options.base ? item[0] + options.base : item[0];
    var count = idCountMap[id] || 0;
    var identifier = "".concat(id, " ").concat(count);
    idCountMap[id] = count + 1;
    var indexByIdentifier = getIndexByIdentifier(identifier);
    var obj = {
      css: item[1],
      media: item[2],
      sourceMap: item[3],
      supports: item[4],
      layer: item[5]
    };
    if (indexByIdentifier !== -1) {
      stylesInDOM[indexByIdentifier].references++;
      stylesInDOM[indexByIdentifier].updater(obj);
    } else {
      var updater = addElementStyle(obj, options);
      options.byIndex = i;
      stylesInDOM.splice(i, 0, {
        identifier: identifier,
        updater: updater,
        references: 1
      });
    }
    identifiers.push(identifier);
  }
  return identifiers;
}
function addElementStyle(obj, options) {
  var api = options.domAPI(options);
  api.update(obj);
  var updater = function updater(newObj) {
    if (newObj) {
      if (newObj.css === obj.css && newObj.media === obj.media && newObj.sourceMap === obj.sourceMap && newObj.supports === obj.supports && newObj.layer === obj.layer) {
        return;
      }
      api.update(obj = newObj);
    } else {
      api.remove();
    }
  };
  return updater;
}
module.exports = function (list, options) {
  options = options || {};
  list = list || [];
  var lastIdentifiers = modulesToDom(list, options);
  return function update(newList) {
    newList = newList || [];
    for (var i = 0; i < lastIdentifiers.length; i++) {
      var identifier = lastIdentifiers[i];
      var index = getIndexByIdentifier(identifier);
      stylesInDOM[index].references--;
    }
    var newLastIdentifiers = modulesToDom(newList, options);
    for (var _i = 0; _i < lastIdentifiers.length; _i++) {
      var _identifier = lastIdentifiers[_i];
      var _index = getIndexByIdentifier(_identifier);
      if (stylesInDOM[_index].references === 0) {
        stylesInDOM[_index].updater();
        stylesInDOM.splice(_index, 1);
      }
    }
    lastIdentifiers = newLastIdentifiers;
  };
};

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/insertBySelector.js":
/*!********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/insertBySelector.js ***!
  \********************************************************************/
/***/ ((module) => {

"use strict";


var memo = {};

/* istanbul ignore next  */
function getTarget(target) {
  if (typeof memo[target] === "undefined") {
    var styleTarget = document.querySelector(target);

    // Special case to return head of iframe instead of iframe itself
    if (window.HTMLIFrameElement && styleTarget instanceof window.HTMLIFrameElement) {
      try {
        // This will throw an exception if access to iframe is blocked
        // due to cross-origin restrictions
        styleTarget = styleTarget.contentDocument.head;
      } catch (e) {
        // istanbul ignore next
        styleTarget = null;
      }
    }
    memo[target] = styleTarget;
  }
  return memo[target];
}

/* istanbul ignore next  */
function insertBySelector(insert, style) {
  var target = getTarget(insert);
  if (!target) {
    throw new Error("Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.");
  }
  target.appendChild(style);
}
module.exports = insertBySelector;

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/insertStyleElement.js":
/*!**********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/insertStyleElement.js ***!
  \**********************************************************************/
/***/ ((module) => {

"use strict";


/* istanbul ignore next  */
function insertStyleElement(options) {
  var element = document.createElement("style");
  options.setAttributes(element, options.attributes);
  options.insert(element, options.options);
  return element;
}
module.exports = insertStyleElement;

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js":
/*!**********************************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js ***!
  \**********************************************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";


/* istanbul ignore next  */
function setAttributesWithoutAttributes(styleElement) {
  var nonce =  true ? __webpack_require__.nc : 0;
  if (nonce) {
    styleElement.setAttribute("nonce", nonce);
  }
}
module.exports = setAttributesWithoutAttributes;

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/styleDomAPI.js":
/*!***************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/styleDomAPI.js ***!
  \***************************************************************/
/***/ ((module) => {

"use strict";


/* istanbul ignore next  */
function apply(styleElement, options, obj) {
  var css = "";
  if (obj.supports) {
    css += "@supports (".concat(obj.supports, ") {");
  }
  if (obj.media) {
    css += "@media ".concat(obj.media, " {");
  }
  var needLayer = typeof obj.layer !== "undefined";
  if (needLayer) {
    css += "@layer".concat(obj.layer.length > 0 ? " ".concat(obj.layer) : "", " {");
  }
  css += obj.css;
  if (needLayer) {
    css += "}";
  }
  if (obj.media) {
    css += "}";
  }
  if (obj.supports) {
    css += "}";
  }
  var sourceMap = obj.sourceMap;
  if (sourceMap && typeof btoa !== "undefined") {
    css += "\n/*# sourceMappingURL=data:application/json;base64,".concat(btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap)))), " */");
  }

  // For old IE
  /* istanbul ignore if  */
  options.styleTagTransform(css, styleElement, options.options);
}
function removeStyleElement(styleElement) {
  // istanbul ignore if
  if (styleElement.parentNode === null) {
    return false;
  }
  styleElement.parentNode.removeChild(styleElement);
}

/* istanbul ignore next  */
function domAPI(options) {
  if (typeof document === "undefined") {
    return {
      update: function update() {},
      remove: function remove() {}
    };
  }
  var styleElement = options.insertStyleElement(options);
  return {
    update: function update(obj) {
      apply(styleElement, options, obj);
    },
    remove: function remove() {
      removeStyleElement(styleElement);
    }
  };
}
module.exports = domAPI;

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/styleTagTransform.js":
/*!*********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/styleTagTransform.js ***!
  \*********************************************************************/
/***/ ((module) => {

"use strict";


/* istanbul ignore next  */
function styleTagTransform(css, styleElement) {
  if (styleElement.styleSheet) {
    styleElement.styleSheet.cssText = css;
  } else {
    while (styleElement.firstChild) {
      styleElement.removeChild(styleElement.firstChild);
    }
    styleElement.appendChild(document.createTextNode(css));
  }
}
module.exports = styleTagTransform;

/***/ }),

/***/ "./src/js/Controller.js":
/*!******************************!*\
  !*** ./src/js/Controller.js ***!
  \******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Controller": () => (/* binding */ Controller)
/* harmony export */ });
/* harmony import */ var _Model__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Model */ "./src/js/Model.js");


class Controller {
    constructor(view) {
        this.view = view;
    }

    async searchHandler() {
        const query = this.view.userInput;

        if (query) {
            this.model = new _Model__WEBPACK_IMPORTED_MODULE_0__.Model(query);
            this.view.clearUserInput();
            this.view.clearErrorText();
            this.view.clearContent();

            try {
                await this.model.getData();

                this.view.renderContent();

                this.view.currentLocation = `${this.model.location_data.name} - ${this.model.countryFIPS}`;
                this.view.currentTemp = `${this.model.currTempC} °C`;
                this.view.currentCondition = `${this.model.current_data.condition.text}`;
                this.view.windSpeed = `${this.model.windSpeedKPH} km/h`;
                this.view.humidity = `${this.model.current_data.humidity} %`;

            } catch (error) {
                this.view.clearContent();

                if (error instanceof TypeError) {
                    this.view.showErrorText("This location cannot be found");
                } else {
                    console.log(error);
                }
            }
        }
    }

    startApp() {
        this.view.searchBtn.addEventListener("click", (e) => {
            e.preventDefault();
            this.searchHandler();
        })
    }
}

/***/ }),

/***/ "./src/js/Element.js":
/*!***************************!*\
  !*** ./src/js/Element.js ***!
  \***************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Element": () => (/* binding */ Element)
/* harmony export */ });
class Element {
    constructor(element, attributes = {}, children = []) {
        this.element = element;
        this.attributes = attributes;
        this.children = children;
    }

    setTextContent(textContent) {
        this.textContent = textContent;
        return this;
    }

    render() {
        let DOMElement = document.createElement(this.element);

        for (const k of Object.keys(this.attributes)) {
            DOMElement.setAttribute(k, this.attributes[k]);
        }

        // Append children Element or Text nodes
        if (this.textContent === undefined) {
            for (const child of this.children) {
                DOMElement.appendChild(child.render());
            } 
        } else {
            const textNode = document.createTextNode(this.textContent);
            DOMElement.appendChild(textNode);
        }
        return DOMElement;
    }
}

/***/ }),

/***/ "./src/js/Model.js":
/*!*************************!*\
  !*** ./src/js/Model.js ***!
  \*************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Model": () => (/* binding */ Model)
/* harmony export */ });
/* harmony import */ var _env__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../.env */ "./.env");

const lookup = __webpack_require__(/*! country-code-lookup */ "./node_modules/country-code-lookup/index.js");

class Model {
    constructor(query) {
        this.query = query;
    }

    async getData() {
        try {
            const options =  { mode: 'cors'};
            const response = await fetch(
                `http://api.weatherapi.com/v1/current.json?key=${_env__WEBPACK_IMPORTED_MODULE_0__.API_KEY}&q=${this.query}&aqi=no`,
                options
            );
            const result = await response.json();
            this.current_data = result.current;
            this.location_data = result.location;
        } catch (error) {
            console.log(error);
        }
    }

    get countryFIPS() {
        if (this.location_data.country === "United States of America") {
            return lookup.byCountry("United States").fips;
        } else {
            return lookup.byCountry(this.location_data.country).fips;
        }
    }

    get windSpeedKPH() {
        return this.current_data.wind_kph;
    }

    get currTempC() {
        return this.current_data.temp_c;
    }
}

/***/ }),

/***/ "./src/js/View.js":
/*!************************!*\
  !*** ./src/js/View.js ***!
  \************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "View": () => (/* binding */ View)
/* harmony export */ });
/* harmony import */ var _Element__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Element */ "./src/js/Element.js");


class View {
    constructor() {
        this.appContainer = document.querySelector("main");
        this.searchBtn = document.getElementById("search-btn");
        this.searchTxt = document.getElementById("search-txt");
    }

    get userInput() {
        return this.searchTxt.value; 
    }

    set currentLocation(currentLocation) {
        document.getElementById("current-location").innerText = currentLocation;
    }

    set currentTemp(currentTemp) {
        document.getElementById("current-temp").innerText = currentTemp;
    }

    set currentCondition(currentCondition) {
        document.getElementById("current-condition").innerText = currentCondition;
    }

    set windSpeed(windSpeed) {
        document.getElementById("wind-speed").innerText = windSpeed;
    }

    set humidity(humidity) {
        document.getElementById("humidity").innerText = humidity;
    }


    clearUserInput() {
        this.searchTxt.value = "";
    }

    clearContent() {
        while (this.appContainer.firstChild) {
            this.appContainer.removeChild(this.appContainer.lastChild);
        }
    }

    renderContent() {
        const content = new _Element__WEBPACK_IMPORTED_MODULE_0__.Element("div", {class: "content"}, [
            new _Element__WEBPACK_IMPORTED_MODULE_0__.Element("div", {class:"main-widget"}, [
                new _Element__WEBPACK_IMPORTED_MODULE_0__.Element("p", {id:"current-location"}),
                new _Element__WEBPACK_IMPORTED_MODULE_0__.Element("h1", {id:"current-temp"}),
                new _Element__WEBPACK_IMPORTED_MODULE_0__.Element("h2", {id:"current-condition"}),
            ]),
            new _Element__WEBPACK_IMPORTED_MODULE_0__.Element("div", {class:"secondary-widget"}, [
                new _Element__WEBPACK_IMPORTED_MODULE_0__.Element("div", {class:"text-group"}, [
                    new _Element__WEBPACK_IMPORTED_MODULE_0__.Element("p", {class:"label"}).setTextContent("Wind speed"),
                    new _Element__WEBPACK_IMPORTED_MODULE_0__.Element("p", {class:"text", id:"wind-speed"}),
                ]),
                new _Element__WEBPACK_IMPORTED_MODULE_0__.Element("div", {class:"text-group"}, [
                    new _Element__WEBPACK_IMPORTED_MODULE_0__.Element("p", {class:"label"}).setTextContent("Humidity"),
                    new _Element__WEBPACK_IMPORTED_MODULE_0__.Element("p", {class:"text", id:"humidity"}),
                ])
            ])
        ])
    this.appContainer.appendChild(content.render());
    }

    showErrorText(error) {
        document.getElementById("error-txt").innerText = error;
    }

    clearErrorText() {
        document.getElementById("error-txt").innerText = "";
    }
}

/***/ }),

/***/ "./src/assets/billy-williams-8wz1Q4Q_XAg-unsplash.jpg":
/*!************************************************************!*\
  !*** ./src/assets/billy-williams-8wz1Q4Q_XAg-unsplash.jpg ***!
  \************************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";
module.exports = __webpack_require__.p + "billy-williams-8wz1Q4Q_XAg-unsplash.jpg";

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		var cachedModule = __webpack_module_cache__[moduleId];
/******/ 		if (cachedModule !== undefined) {
/******/ 			return cachedModule.exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			id: moduleId,
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId](module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = __webpack_modules__;
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/compat get default export */
/******/ 	(() => {
/******/ 		// getDefaultExport function for compatibility with non-harmony modules
/******/ 		__webpack_require__.n = (module) => {
/******/ 			var getter = module && module.__esModule ?
/******/ 				() => (module['default']) :
/******/ 				() => (module);
/******/ 			__webpack_require__.d(getter, { a: getter });
/******/ 			return getter;
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/define property getters */
/******/ 	(() => {
/******/ 		// define getter functions for harmony exports
/******/ 		__webpack_require__.d = (exports, definition) => {
/******/ 			for(var key in definition) {
/******/ 				if(__webpack_require__.o(definition, key) && !__webpack_require__.o(exports, key)) {
/******/ 					Object.defineProperty(exports, key, { enumerable: true, get: definition[key] });
/******/ 				}
/******/ 			}
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/global */
/******/ 	(() => {
/******/ 		__webpack_require__.g = (function() {
/******/ 			if (typeof globalThis === 'object') return globalThis;
/******/ 			try {
/******/ 				return this || new Function('return this')();
/******/ 			} catch (e) {
/******/ 				if (typeof window === 'object') return window;
/******/ 			}
/******/ 		})();
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/hasOwnProperty shorthand */
/******/ 	(() => {
/******/ 		__webpack_require__.o = (obj, prop) => (Object.prototype.hasOwnProperty.call(obj, prop))
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/make namespace object */
/******/ 	(() => {
/******/ 		// define __esModule on exports
/******/ 		__webpack_require__.r = (exports) => {
/******/ 			if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 				Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 			}
/******/ 			Object.defineProperty(exports, '__esModule', { value: true });
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/publicPath */
/******/ 	(() => {
/******/ 		var scriptUrl;
/******/ 		if (__webpack_require__.g.importScripts) scriptUrl = __webpack_require__.g.location + "";
/******/ 		var document = __webpack_require__.g.document;
/******/ 		if (!scriptUrl && document) {
/******/ 			if (document.currentScript)
/******/ 				scriptUrl = document.currentScript.src;
/******/ 			if (!scriptUrl) {
/******/ 				var scripts = document.getElementsByTagName("script");
/******/ 				if(scripts.length) scriptUrl = scripts[scripts.length - 1].src
/******/ 			}
/******/ 		}
/******/ 		// When supporting browsers where an automatic publicPath is not supported you must specify an output.publicPath manually via configuration
/******/ 		// or pass an empty string ("") and set the __webpack_public_path__ variable from your code to use your own logic.
/******/ 		if (!scriptUrl) throw new Error("Automatic publicPath is not supported in this browser");
/******/ 		scriptUrl = scriptUrl.replace(/#.*$/, "").replace(/\?.*$/, "").replace(/\/[^\/]+$/, "/");
/******/ 		__webpack_require__.p = scriptUrl;
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/jsonp chunk loading */
/******/ 	(() => {
/******/ 		__webpack_require__.b = document.baseURI || self.location.href;
/******/ 		
/******/ 		// object to store loaded and loading chunks
/******/ 		// undefined = chunk not loaded, null = chunk preloaded/prefetched
/******/ 		// [resolve, reject, Promise] = chunk loading, 0 = chunk loaded
/******/ 		var installedChunks = {
/******/ 			"main": 0
/******/ 		};
/******/ 		
/******/ 		// no chunk on demand loading
/******/ 		
/******/ 		// no prefetching
/******/ 		
/******/ 		// no preloaded
/******/ 		
/******/ 		// no HMR
/******/ 		
/******/ 		// no HMR manifest
/******/ 		
/******/ 		// no on chunks loaded
/******/ 		
/******/ 		// no jsonp function
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/nonce */
/******/ 	(() => {
/******/ 		__webpack_require__.nc = undefined;
/******/ 	})();
/******/ 	
/************************************************************************/
var __webpack_exports__ = {};
// This entry need to be wrapped in an IIFE because it need to be in strict mode.
(() => {
"use strict";
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _env__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../.env */ "./.env");
/* harmony import */ var _js_View__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./js/View */ "./src/js/View.js");
/* harmony import */ var _js_Controller__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./js/Controller */ "./src/js/Controller.js");
/* harmony import */ var _style_css__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./style.css */ "./src/style.css");


const lookup = __webpack_require__(/*! country-code-lookup */ "./node_modules/country-code-lookup/index.js");











const app = new _js_Controller__WEBPACK_IMPORTED_MODULE_2__.Controller(new _js_View__WEBPACK_IMPORTED_MODULE_1__.View());
app.startApp();
})();

/******/ })()
;
//# sourceMappingURL=main-f2605fff52729fce8493.js.map