# LealTest

This repository contains a simple web page that allows you to log in, sign up and list transactions per user based on the [API](https://pruebatecnica.puntosleal.com) provided by Leal.

The page contains a login component, register component and transaction component that are exported within the users module.

## Installation

In order to run this project you will need to make sure that the following dependencies are installed on your system:
  - Angular CLI 9.x
  - Node 12.x

```bash
C:\> git clone https://github.com/yabejarano10/LealTest.git

C:\> cd LealTest

C:\> npm install

C:\>ng serve
```

## Folder Structure

```
...
src
└── app
    ├── routing # The main routing module
    └── users
        ├── httpinterceptors (Contains the error and auth interceptors used)
        ├── login (LoginComponent)
        ├── models  (The data models used)
        ├── register (RegisterComponent)
        ├── services (Contains all the services used by the usersModule)
        ├── transactions (TransactionsComponent)
        └── users.module.ts (The module that contains all user components)

...
```

