//Part1
server: tsc -b-->generate dist folder, copy gql file in sit, node dist/index.js
client: npm i --save graphql-zeus, npm run zeus(in root folder), generate dist and run 

//Part2
hasura.io --> create a project in cloud, connect with a postgreSQL db(using neon.tech), 
compose docker file - docker-compose up --> localhost:8112, localhost:4446
run hasura GUI locally - npx hasura-cli console (in hasura folder)
run psql db locally - psql -h localhost -p 4446 -U user -d reef_dev

//Part3
solution in the docker compose file for the race condition between psql and hasura in part 2 



hasura exposes a graphql server over a database