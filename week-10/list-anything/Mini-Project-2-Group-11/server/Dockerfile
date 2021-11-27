FROM node:latest
WORKDIR /server
COPY package*.json /server
RUN npm install
COPY . /server
EXPOSE 3001
CMD npx knex migrate:rollback && npx knex migrate:latest && npx knex seed:run && npm start