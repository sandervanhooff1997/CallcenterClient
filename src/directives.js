import Vue from 'vue'
import store from './vuex/store'

Vue.directive('can', function (el, binding, vnode) {
    var roles = binding.value;

    if (!roles || !roles.length) {
        return;
    }

    var user = store.getters.user;
    var hasRole = false;

    roles.forEach(role => {
        user.roles.forEach(userRole => {
            if (userRole === role) {
                hasRole = true;
            }
        });
    });

    if (!hasRole)
        el.style.display = "none";
})