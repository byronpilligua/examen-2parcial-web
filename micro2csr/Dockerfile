FROM node:16
COPY . /app
WORKDIR /app
RUN npm install 
ENV VUE_APP_API=http://restapi:5000/api
EXPOSE 8080
ENTRYPOINT ["npm","run","serve"]