module.exports = {
  HOST:'localhost',
  USER:'dbUser',
  PASSWORD:'DeepDive2020',
  DB:'testdb',
  dialect: 'mysql',
  pool: {
    max: 5,
    min: 0,
    acquire: 30_000,
    idle: 10_000
  }
};

