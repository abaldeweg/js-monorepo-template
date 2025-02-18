ARG VITE_BASE_URL

# build stage
FROM node:lts-alpine as build-stage

WORKDIR /usr/app

COPY ./package.json ./
COPY ./pnpm-lock.yaml ./
RUN pnpm install
COPY . .

ARG VITE_BASE_URL
ENV VITE_BASE_URL=$VITE_BASE_URL

RUN pnpm build

# production stage
FROM httpd:2.4 as production-stage

ARG VITE_BASE_URL
ENV VITE_BASE_URL=$VITE_BASE_URL

COPY ./docker/httpd.conf /usr/local/apache2/conf/httpd.conf

COPY --from=build-stage /usr/app/dist /usr/local/apache2/htdocs${VITE_BASE_URL}

EXPOSE 80
