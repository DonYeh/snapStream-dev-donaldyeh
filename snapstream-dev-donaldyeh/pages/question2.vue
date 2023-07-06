<template>
    <div class="mt-20">     
        <table class="table-auto mx-auto text-left">
            <thead class="uppercase">
                <tr>
                    <th class="px-4 py-1">User</th>
                    <th class="px-4 py-1">Team</th>
                </tr>
            </thead>
            <tbody>
                <tr v-for="person in users.users" :key="person.id" @click="fetchUserActivity(person.id)" class="cursor-pointer hover:text-blue-500 focus:text-blue-700"> 
                    <td class="px-4">{{ person.name }}</td> 
                    <td class="px-4">{{ person.team }}</td> 
                </tr>
            </tbody>
        </table>

        <br/>

    <div v-if="selectedUserActivity.length"  >
        <h2 class="text-1xl text-center pb-2">Activity Details for {{users.users.filter((user)=>user.id === selectedUserActivity[0].userId)[0].name}} (userID: {{ selectedUserActivity[0].userId }})</h2>
    
        <table class="table-auto mx-auto text-left">
            <thead class="uppercase">
                <tr>
                    <th class="px-3 py-1">Workout</th>
                    <th class="px-3 py-1">Minutes</th>
                </tr>
            </thead>
            <tbody>
                <tr v-for="userActivity in selectedUserActivity" :key="userActivity.id">
                    <td class="px-3">{{ userActivity.workout }}</td> 
                    <td class="px-3">{{ userActivity.minutes }}</td> 
                </tr>
            </tbody>
        </table>
    </div>

        
    </div>
</template>

<script setup>
import { ref } from 'vue'

        const { data: users } = await useFetch('/api/users')

        let selectedUserActivity = ref([])

        const fetchUserActivity = async (userId) => {
           
            const {data} = await useFetch(`/api/activity?userId=${userId}` )
            const selectedUser = toRaw(data)
           
            selectedUserActivity.value = toRaw(selectedUser.value.selectedUser)
            
        }

</script>

<style scoped>

</style>