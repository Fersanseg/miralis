# Build
FROM node:19-alpine as build

WORKDIR /usr/src/app

COPY package*.json ./

RUN npm install

COPY . .

RUN npm run build

# Deploy
FROM node:19-alpine

WORKDIR /usr/src/app

COPY --from=build /usr/src/app/.env .env
COPY --from=build /usr/src/app/build ./build
COPY --from=build /usr/src/app/package.json .
COPY --from=build /usr/src/app/node_modules ./node_modules

CMD [ "node", "-r", "dotenv/config", "build" ]