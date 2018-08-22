/**Showcasing that you can also specifically outsource actions, getters and mutations into separate file, all to keep store.js lean*/


 /**Getters allow you to access your state from within different components
  * The components automatically get updated whenever your state changes
  * This is reusable code to access our state
  * They are used in the Result and AnotherResult Components
  */
export const getValue = (state) => {
        return state.value;
    }