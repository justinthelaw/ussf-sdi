FROM node:latest
WORKDIR /server
COPY package.json /server
USER root
RUN npm install
COPY . /server
EXPOSE 3001
CMD  npm run dev