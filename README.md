# OpenAI API Quickstart - Node.js example app

This is an example pet name generator app used in the OpenAI API [quickstart tutorial](https://beta.openai.com/docs/quickstart). It uses the [Next.js](https://nextjs.org/) framework with [React](https://reactjs.org/). Check out the tutorial or follow the instructions below to get set up.

## Setup

1. I would recommend [installing Chocolatey](https://jcutrer.com/windows/install-chocolatey-choco-windows10)
2. Then install git: ```choco install git```
3. Finally, if you don’t have Node.js installed, ```choco install nodejs```

## Get this code and play

4. Clone this repository ```git clone https://github.com/craigamckay/openai_duranduran.git```

5. Navigate into the project directory

   ```bash
   $ cd openai-quickstart-node
   ```

6. Install the requirements

   ```bash
   $ npm install
   ```

7. Make a copy of the example environment variables file

   ```bash
   $ cp .env.example .env
   ```

8. Add your [API key](https://beta.openai.com/account/api-keys) to the newly created `.env` file

9. Run the app

   ```bash
   $ npm run dev
   ```

You should now be able to access the app at [http://localhost:3000](http://localhost:3000)! For the full context behind this example app, check out the [tutorial](https://beta.openai.com/docs/quickstart).
