# Stage 1
FROM node:lts as build-stage
WORKDIR /frontend
COPY package.json .
RUN npm install
COPY . .
ARG REACT_APP_BACKEND_URL
ENV REACT_APP_BACKEND_URL=$REACT_APP_BACKEND_URL
RUN npm run build
# Stage 2
FROM nginx:1.17.0-alpine
COPY --from=build-stage /frontend/build /usr/share/nginx/html
EXPOSE $REACT_DOCKER_PORT
CMD nginx -g 'daemon off;'