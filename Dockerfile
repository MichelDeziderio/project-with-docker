FROM node:16.14.2 as angular
# ENV NODE_ENV=production
WORKDIR /app
COPY package.json /app
RUN npm install --silent
COPY . .
RUN npm run build

FROM nginx:alpine
VOLUME /var/cahce/nginx
COPY --from=angular app/dist/project-angular-with-docker /usr/share/nginx/html
COPY ./config/nginx.conf /etc/nginx/config.d/default.conf

# docker build -t angular .
# docker run -p 8081:80 angular