# colorpicker
A simple color picker app in React Native.

## State Management and Architecture
I used the Context API along with the useContext and useReducer hooks to separate the views from the business logic.
Each reducer has its own file in which the business logic for that particular state is stored.

## Tests
I made this app mainly to try Test Driven Development with the Context API.
It wasn't that hard to do on the reducers, but I had to do some back and forth with the components' test, mainly to retrieve the correct components and their props.
Also I tried to refrain from putting test IDs everywhere.
