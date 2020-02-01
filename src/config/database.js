module.exports = {
  dialect: 'postgress',
  host: 'localhost',
  username: 'postgres',
  password: 'docker',
  database: 'gobarber',
  define: {
    timestamps: true,
    undescored: true,
    undescoredAll: true,
  },
};
