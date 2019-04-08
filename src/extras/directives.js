import Vue from 'vue'
import store from '@/vuex/store'

Vue.directive('can', function (el, binding, vnode) {
    var roles = binding.value;

    if (!roles || !Array.isArray(roles) || !roles.length) {
        return;
    }

    var user = store.getters.user;
    if (!user || !Array.isArray(user.roles) || !user.roles.length) {
        el.style.display = "none";
        return;
    }

    var hasRole = false;

    roles.forEach(role => {
        user.roles.forEach(userRole => {
            if (userRole === role) {
                hasRole = true;
            }
        });
    });

    if (!hasRole) {
        el.style.display = "none";
        return;
    }
})