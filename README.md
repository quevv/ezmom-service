<h1 align="center">
  <img src="./public/images/ezmom_logo.svg"/>
  <br/>
  Ezmom service
  <br/>
  
</h1>

<h4 align="center">A Back-end base code of EzMom Store.</h4>

<p align="center">A Node.js API built with Express, PostgreSQL for managing Ezmom store system.</p>


## Table of Contents

- [Installation](#installation)
- [Usage](#usage)

## Installation

1. Clone the repository:
    ```bash
    git clone https://github.com/quevv/ezmom-service.git
    cd ezmom-service
    ```
2. Install dependencies
    ```bash
    npm install
    ```
3. Run database migrations to create the necessary tables
    ```bash
    npx sequelize-cli db:migrate
    ```

4. Start the server
    ```bash
    npm run dev
    ```

## Usage
The API will be available at http://localhost:5000 by default. You can use tools like Postman or cURL to interact with the endpoints.

---
> GitHub: [quevv](https://github.com/quevv) &nbsp;&middot;&nbsp;
> Facebook: [Quế Võ](https://www.facebook.com/ShinamonVu/)