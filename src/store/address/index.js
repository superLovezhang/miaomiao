const state = {
   nm : window.localStorage.getItem('localNM') || "北京",
   id : window.localStorage.getItem('localID') || 1
};
const mutations = {
   getAddress(state,payond){
      state.nm = payond.nm;
      state.id = payond.id;
   }
};
const actions = {

}

export default {
    namespace:true,
    state,
    mutations,
    actions
}