FROM node:latest


RUN apt-get update \
    && apt-get install -y xdg-utils \
    && apt-get clean \
    && rm -rf /var/lib/apt/lists/*

RUN mkdir -p /app/src

WORKDIR /app/src

COPY package.json .
COPY vite.config.js .


RUN npm install

COPY . .

EXPOSE 5173

CMD ["npm", "run", "dev"]