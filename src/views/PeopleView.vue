<template>
    <div>
        <h1 v-for="people in people" :key="people._id">
            {{ people.name }}
        </h1>
    </div>
</template>

<script>
const url = process.env.VUE_APP_URL;
export default {
    data() {
        return {
            people: []
        }
    },
    mounted() {
        this.fetchData()
    },
    methods: {
        async fetchData() {
            const response = await fetch(`${url}/people`)
            const data = await response.json()
            this.people = data
            // console.log(data)
        }
    }
}
</script>