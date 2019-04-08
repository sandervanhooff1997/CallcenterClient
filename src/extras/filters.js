import Vue from 'vue'

Vue.filter('commaSeperated', (arr) => {
    if (Array.isArray(arr))
        return arr.join(", ")
})

Vue.filter('uppercase', (text) => {
    if (typeof (text) === 'string')
        return text.toUpperCase()
})