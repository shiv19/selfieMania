// Configurations go here
const ModesEnum = {
  PRODUCTION: 'PRODUCTION',
  DEVELOPMENT: 'DEVELOPMENT'
};

const MODE = ModesEnum.PRODUCTION;

const ProductionConfig = {
  mode: ModesEnum.PRODUCTION,
  apiUrl: ''
};

const DevelopmentConfig = {
  mode: ModesEnum.DEVELOPMENT,
  apiUrl: ''
};

let Config; // this will be exported

switch (MODE) {
  case 'PRODUCTION': Config = ProductionConfig; break;
  case 'STAGING': Config = DevelopmentConfig; break;
  default: break;
}

module.exports = Config;
