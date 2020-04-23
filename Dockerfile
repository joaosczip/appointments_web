FROM node:14 

WORKDIR /app 

COPY package.json .

RUN npm i -g typescript \ 
    && yarn install

COPY . .

CMD [ "yarn", "run", "start" ]
