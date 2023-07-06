<template>
    <div>
        
        <div>
            <label>number: </label>
            <input type="number" required v-model="number" >
        </div>
        <div v-if="numberError.length">{{ numberError }}</div>
        <div>
            <label>base: </label>
            <input type="number" required v-model="base" >
        </div>
        <div v-if="baseError.length">{{ baseError }}</div>

        
        <div>
            <p v-if="number || number === 0">output: {{number}} base {{base}} = <span v-if="base !== undefined">{{answer.answer}}</span></p>
        </div>
        

    </div>
</template>

<script setup>
    import numToStringBase from '../numToStringBase'
    import { ref, computed  } from 'vue'

    let number = ref(null)
    let base = ref()

    const numberError = computed(()=> {
        return ((isNaN(number.value) || !isFinite(number.value)) ? "Please provide a valid number" : "")
    })

    const baseError = computed(()=> {
        return ((base.value < 2 || base.value > 32) ? "Please provide a base between 2 and 32" : "")
    })

    const answer  = computed(()=> {
        return numToStringBase(number.value, base.value)
    })




</script>