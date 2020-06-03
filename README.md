# Messageboard

This project was generated with [Angular CLI](https://github.com/angular/angular-cli) version 9.1.7.

## Development server

Before running the app, make sure the web API is running (API/MessageBoard.sln). I used visual studio 2019 with SSL disabled.

Verify the port that the web API is running on. Update the port of the client-side connection URLs, if needed, in the following files...

* src\app\Services\signal-r.service.ts
* src\app\app.component.ts
* src\app\Services\message.service.ts

You will likely need to create the local database as well by running the migrations within the Migrations folder of the web API (I'm not too familiar with this process, so this could be wrong, but that is my understanding).

Once the web API is running you should be able to run the client.

Run `ng serve` for a dev server. Navigate to `http://localhost:4200/`. The app will automatically reload if you change any of the source files.

## TODO

### Get SignalR push messages working

### Implement Login Flow

Keep this simple for now...
* Add a user's table to the database
* Add UsersController with login endpoint
* Add a UsersService to the web API for handling business logic for existing users
* Switching user's mid session?

* Build the user's panel component (probably just called Users)

### Clean up the UI (make it dark!!)

### Design channels/groups with "whispering" single user's in mind

### Implement editing of sent messages



