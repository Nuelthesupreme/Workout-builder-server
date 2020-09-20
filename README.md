# Workout Builder

> Limit the seed data to 3 exercises per muscle

(routes/exercise-routes) Endpoints for:

1. Adding Exercises,
1. Deleting Exercises,

(routes/muscle-group-routes.js) Endpoints for:

1. Adding Muscle Groups,
1. Deleting Muscle Groups

(routes/workout-routes.js) Endpoints for:

1. Getting all workouts for a user,
1. Getting a workout by id for a user,
1. Deleting a workout for a user,
1. Creating a workout for a user,
1. Updating a workout for a user.

## How to setup the seed data.

Before this: Create a user in postman / insomnia. go into Robo3T and find the user for the seed data.

We need the exercises populated first as they share a reference with the muscle groups and the workouts.

Run `node dist/seed/exercises.js`

We need to get the exercise ids once that is run, and then add them to the seed data for muscle groups.

Run `node dist/seed/muscleGroups.js`

With that, we need to add the muscle group ids and the exercise ids to the seed data for the workouts. As well as the user id.

Run `node dist/seed/workouts.js`

\*\*This will always be available to you afterwards, try to not to reseed unless you want to update all the ids\*\*
