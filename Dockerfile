FROM node:16.19.0

WORKDIR /app
COPY package*.json ./
RUN npm install 
COPY . ./
RUN npm run build

ENV NUXT_HOST=0.0.0.0
ENV NUXT_PORT=3000

RUN apt -y update
RUN apt install -y mc

CMD ["npm", "start"]