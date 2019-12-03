1. What problem does the context API help solve?

    In React, data is passed down from parent to child via props, but this can be troublesome in a large application where many components needs those props. Context API provides a way to share values between components without having to pass props throughout every level of the tree. It’s a great tool to simplify state management. 
    
    Its best to use Context when your codebase has a lot of components that depends on a single piece of data, but are nested deep within the component tree.


2. In your own words, describe `actions`, `reducers` and the `store` and their role in Redux. What does each piece do? Why is the store known as a 'single source of truth' in a redux application?

    Reducer functions takes two arguments, the current state and an action and returns a new updated state object based on both the arguments. Reducer functions are great for managing changes in state while maintaining the immutability we want in our components.
 	Actions describes to the reducer what event just occurred and how the reducer should update the state based on the event. The reducer needs to have some data(payload) passed into it through the action to be able to update the state correctly.
	The Store contains the state of the entire application and also provides a few methods to access the state, dispatch actions, and listeners.


3. What is the difference between Application state and Component state? When would be a good time to use one over the other?

	Application state is when the state changes we clone the state object, modify the clone, and replace the original state with a new copy. Component state is quite the opposite. It mutates the original object and writes to the store object. 


4. Describe `redux-thunk`, what does it allow us to do? How does it change our `action-creators`?

    Redux-thunk is a middleware package that we can use to give Redux the ability to run asynchronous operations. A thunk is a function that is returned by another function. We use thunks in our action creators to run async operations in Redux. When an action creator is called, redux-thunk intercepts and acts on returned data. If the returned data is an action, it forwards the action to the reducer. If the returned data is a function, a thunk, then it invokes the thunk and passes the dispatch function as an argument to it.

5. What is your favorite state management system you've learned and this sprint? Please explain why!

    My favorite state management system by far is the Context API. It just seem less complex to me as far as understanding. There’s no need to have to pass props throughout every level of the tree. It’s much easier having to use Context when you have a codebase that has a lot of components that depends on a single piece of data.

