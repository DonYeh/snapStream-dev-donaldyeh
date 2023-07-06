<template>
    <div class="flex flex-col content-center mt-20">
        
        <div class="pb-3 text-center text-xl">
            <label class="item pr-2">number: </label>
            <input type="number" required v-model="number" >
        </div>
        <div class="text-red-600 text-center" v-if="numberError.length">{{ numberError }}</div>
        <div class="pb-3 text-center text-xl">
            <label class="pr-2">base: </label>
            <input type="number" required v-model="base" >
        </div>
        <div class="text-red-600 text-center" v-if="baseError.length">{{ baseError }}</div>
        <div class="text-center text-xl">
            <p v-if="number || number === 0" class="pr-2">output: {{number}} base {{base}} = <span v-if="base !== undefined">{{answer.answer}}</span></p>
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