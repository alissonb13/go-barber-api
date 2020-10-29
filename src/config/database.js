module.exports = {
  dialect: 'postgres',
  host: 'localhost',
  userName: 'postgres',
  password: 'password',
  database: 'gobarber',
  define: {
    timestamps: true,
    underscored: true,
    underscoredAll: true,
  },
};
