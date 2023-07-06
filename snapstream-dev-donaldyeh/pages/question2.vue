<template>
    <div>     
        <table>
            <thead>
                <tr>
                    <th>User</th>
                    <th>Team</th>
                </tr>
            </thead>
            <tbody>
                <tr v-for="person in users.users" :key="person.id" @click="fetchUserActivity(person.id)" class="cursor-pointer hover:text-blue-500 focus:text-blue-700"> 
                    <td>{{ person.name }}</td> 
                    <td>{{ person.team }}</td> 
                </tr>
            </tbody>
        </table>

        <br/>

    <div v-if="selectedUserActivity.length"  >
        <h2>Activity Details for {{users.users.filter((user)=>user.id === selectedUserActivity[0].userId)[0].name}} (userID: {{ selectedUserActivity[0].userId }})</h2>
    
        <table>
            <thead>
                <tr>
                    <th>Workout</th>
                    <th>Minutes</th>
                </tr>
            </thead>
            <tbody>
                <tr v-for="userActivity in selectedUserActivity" :key="userActivity.id">
                    <td>{{ userActivity.workout }}</td> 
                    <td>{{ userActivity.minutes }}</td> 
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