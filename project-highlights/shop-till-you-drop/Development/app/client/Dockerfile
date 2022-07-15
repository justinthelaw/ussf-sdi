FROM node:latest
WORKDIR /client
COPY package.json /client
RUN export NODE_OPTIONS=--openssl-legacy-provider
USER root
RUN npm install
COPY . /client
EXPOSE 3000
CMD npm run dev