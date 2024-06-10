# UI Assessment

An interesting description.  

## Requirements

- npm >= v10.7.0
- node >= v22.2.0

> It might work on lower versions but it's not been tested.  

OR

- Docker

## Setup

- `git clone https://github.com/xiarx/ui.git`
- `cd ui`

### Node

- `npm install`
- `npm run dev` (webpack dev server)

> It will listen on localhost:4000

### Docker

- `npm run docker` (requires docker to be installed)

OR

- `docker build -t ui . && docker run -p 8080:80 ui` (if you don't have node installed and just want to run the project)

> Docker will create a production build and serve it through nginx.  It will listen on localhost:8080.  

> Both webpack and docker will serve using http, if your browser is forced to https it will reject the requests.  
