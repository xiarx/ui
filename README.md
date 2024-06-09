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

- `docker build -t digimoca . && docker run -p 8080:80 digimoca` (if you don't have node installed and just want to run the project)

> Docker will create a production build and serve it through nginx.  It will listen on localhost:8080.  

> Both webpack and docker will serve using http, if your browser is forced to https it will reject the requests.  

## Project Structure

- src - All core app components like the router goes in the root directory of src.  
- app.tsx - All context providers and app setup go there.  
- router.tsx - All app routes and navigation logic go there.  
- @context - For all context providers like theme, localization and auth.  
- @data - All API calls made to fetch data go there, as well as the response type interfaces for the expected results.  
- @api - Responsible for fetching data and client side caching, error handling and data manipulation.  Components should be able to use these hooks without needing to know where the data is coming from.  
- @hooks - For any custom hooks not relevant to the data API.  
- @components - For all UI view components including full pages, core layout, custom built components and modules/widgets.  
- @routes - All route containers go here, including page layout, navigation logic and data algorithms.  This is to keep most of the logic out of the view components and keep them as pure as possible.  
- @theme - Only global styles should go there, if it's not specific to any page or component.  
