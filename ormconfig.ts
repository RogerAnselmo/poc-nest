module.exports = {
    type: 'postgres',
    host: 'localhost',
    port: 5432,
    username: 'postgres',
    password: 'postgres',
    database: 'postgres',
    entities:['dist/src/**/entities/*entity.{ts,js}'],
    migrations: ['dist/src/migrations/*.js'],
    migrationsRun:true,
    synchronize: false,
    cli:{
      migrationsDir: 'src/migrations'
    },
  }