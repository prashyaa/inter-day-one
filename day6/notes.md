What is an event in react?
--->An event is an action that could be triggered as a result of the user action or system generated event. For example, a mouse click, loading of a web page, pressing a key, window resizes, and other interactions are called events.

for Example:>
<button onclick="showMessage()">  
       Hello JavaTpoint  
</button>

What is memory leak and how to overcome?

---->Memory leak occurs when programmers create a memory in heap and forget to delete it. 

The consequences of memory leak is that it reduces the performance of the computer by reducing the amount of available memory. Eventually, in the worst case, too much of the available memory may become allocated and all or part of the system or device stops working correctly, the application fails, or the system slows down vastly .

Memory leaks are particularly serious issues for programs like daemons and servers which by definition never terminate

Do you prefer function-based or class component and why ?
-----> Functional Components:
     A functional component is just a plain JavaScript pure function that accepts props as an argument and returns a React element(JSX).
     There is no render method used in functional components.
     Functional component run from top to bottom and once the function is returned it cant be kept alive.
     Also known as Stateless components as they simply accept data and display them in some form, that they are mainly responsible for rendering UI.
     React lifecycle methods (for example, componentDidMount) cannot be used in functional components.
     Hooks can be easily used in functional components to make them Stateful.

example: const [name,SetName]= React.useState(‘ ‘)

Explain reducer as pure function in redux
---> Reducers are a pure function in Redux. Pure functions are predictable. Reducers are the only way to change states in Redux. It is the only place where you can write logic and calculations. Reducer function will accept the previous state of app and action being dispatched, calculate the next state and returns the new object.

The following few things should never be performed inside the reducer −

Mutation of functions arguments
API calls & routing logic
Calling non-pure function e.g. Math.random()

For  Exapmle:>

const initialState = {
   isLoading: false,
   items: []
};
const reducer = (state = initialState, action) => {
   switch (action.type) {
      case 'ITEMS_REQUEST':
         return Object.assign({}, state, {
            isLoading: action.payload.isLoading
         })
      case ‘ITEMS_REQUEST_SUCCESS':
         return Object.assign({}, state, {
            items: state.items.concat(action.items),
            isLoading: action.isLoading
         })
      default:
         return state;
   }
}
export default reducer;

Why do we use redux thunk?
----> Redux Thunk middleware allows you to write action creators that return a function instead of an action. The thunk can be used to delay the dispatch of an action, or to dispatch only if a certain condition is met. The inner function receives the store methods dispatch and getState as parameters.

An action creator that returns a function to perform asynchronous dispatch:

const INCREMENT_COUNTER = 'INCREMENT_COUNTER'

function increment() {
  return {
    type: INCREMENT_COUNTER
  }
}

function incrementAsync() {
  return dispatch => {
    setTimeout(() => {
      // Yay! Can invoke sync or async actions with `dispatch`
      dispatch(increment())
    }, 1000)
  }
}
An action creator that returns a function to perform conditional dispatch:

function incrementIfOdd() {
  return (dispatch, getState) => {
    const { counter } = getState()

    if (counter % 2 === 0) {
      return
    }

    dispatch(increment())
  }
}

What do you know about NPM?

---->Adapt packages of code for your apps, or incorporate packages as they are.
Download standalone tools you can use right away.
Run packages without downloading using npx.
Share code with any npm user, anywhere.
Restrict code to specific developers.
Create organizations to coordinate package maintenance, coding, and developers.
Form virtual teams by using organizations.
Manage multiple versions of code and code dependencies.
Update applications easily when underlying code is updated.
Discover multiple ways to solve the same puzzle.
Find other developers who are working on similar problems and projects.