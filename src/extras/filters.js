import Vue from 'vue'

Vue.filter('commaSeperated', (arr) => {
    if (Array.isArray(arr))
        return arr.join(", ")
})