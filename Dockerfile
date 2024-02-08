FROM node

WORKDIR /app

COPY . . 

RUN npm install

RUN npm uninstall bcrypt

RUN npm install bcrypt

EXPOSE 8080

CMD ["node", "server"]