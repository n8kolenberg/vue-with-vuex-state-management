/**Showcasing that you can also specifically outsource actions, getters and mutations into separate file, all to keep store.js lean*/


/*Instead of passing the context object, you can just pass 'commit' as a destructured object - it will only pass commit then, which you can use in the function  */
export const updateValue = ({commit}, payload) => {
    commit('updateValue', payload);
}