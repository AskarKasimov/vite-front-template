FROM node:23.9-alpine3.20 AS build
WORKDIR /app
COPY package.json yarn.lock ./
RUN yarn install --frozen-lockfile
COPY . .
RUN yarn build --mode production

FROM node:23.9-alpine3.20
RUN npm install -g serve
COPY --from=build /app/dist /app/dist
WORKDIR /app
EXPOSE 3000
CMD ["serve", "-s", "dist", "-l", "3000"]
