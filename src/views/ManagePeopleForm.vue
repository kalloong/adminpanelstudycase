<template>
    <form @submit.prevent="submitForm" class="bg-white p-6 rounded-lg shadow-md">
        <div class="mb-4">
            <label class="block text-sm font-medium text-gray-700 mb-1">Name</label>
            <input
            type="text"
            v-model="name"
            class="w-full border border-gray-300 rounded-lg p-2 focus:ring-blue-500 focus:border-blue-500"
            placeholder="Enter name"
            />
        </div>
        <div class="mb-4">
            <label class="block text-sm font-medium text-gray-700 mb-1">Position</label>
            <input
            type="text"
            v-model="position"
            class="w-full border border-gray-300 rounded-lg p-2 focus:ring-blue-500 focus:border-blue-500"
            placeholder="Enter position"
            />
        </div>
        <div class="mb-4">
            <label class="block text-sm font-medium text-gray-700 mb-1">Nationality</label>
            <select
            v-model="selectedCountryCode"
            class="w-full border border-gray-300 rounded-lg p-2 focus:ring-blue-500 focus:border-blue-500"
            >
            <option value="" disabled>Select a country</option>
            <option
                v-for="(country, index) in countries"
                :key="index"
                :value="country.code"
            >
                {{ country.name }}
            </option>
            </select>
        </div>
        <button
            type="submit"
            class="w-full bg-blue-600 text-white py-2 rounded-lg hover:bg-blue-700 transition"
        >
            Add Person
        </button>
    </form>
</template>
    
<script>
    export default {
        data() {
        return {
            name: '',
            position: '',
            selectedCountryCode: '',
            countries: [],
        };
        },
        methods: {
        submitForm() {
            if (this.name && this.position && this.selectedCountryCode) {
            const person = {
                name: this.name,
                position: this.position,
                nationality: this.selectedCountryCode.toLowerCase(),
            };
            this.$emit('addPerson', person);
            this.name = '';
            this.position = '';
            this.selectedCountryCode = '';
            } else {
            alert('Please fill out all fields.');
            }
        },
        async fetchCountries() {
            try {
            const response = await fetch('https://flagcdn.com/en/codes.json');
            const data = await response.json();
            this.countries = Object.entries(data).map(([code, name]) => ({
                code,
                name,
            }));
            } catch (error) {
            console.error('Failed to fetch countries:', error);
            }
        },
        },
        mounted() {
        this.fetchCountries();
        },
    };
</script>