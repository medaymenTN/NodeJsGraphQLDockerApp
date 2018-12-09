#define the latest nodejs image  to build from
FROM node:latest
RUN mkdir -p /usr/src/graphqlApp

#create a working directory
WORKDIR /usr/src/graphqlApp
RUN npm install -g nodemon --save

#copy package.json file under the working directory 
COPY package.json /usr/src/graphqlApp/
RUN npm install

#copy all your files under the working directory
COPY . /usr/src/graphqlApp/

EXPOSE 4000
#start nodejs server 
CMD npm start