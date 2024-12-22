<template>
    <table class="w-full bg-white rounded-lg shadow-md overflow-hidden">
        <thead class="bg-blue-600 text-white">
            <tr>
            <th class="py-3 px-4 text-left">Name</th>
            <th class="py-3 px-4 text-left">Position</th>
            <th class="py-3 px-4 text-left">Nationality</th>
            <th class="py-3 px-4 text-left">Flag</th>
            </tr>
        </thead>
        <tbody>
            <tr
            v-for="(person, index) in people"
            :key="index"
            class="odd:bg-gray-50 even:bg-white"
            >
            <td class="py-3 px-4">{{ person.name }}</td>
            <td class="py-3 px-4">{{ person.position }}</td>
            <td class="py-3 px-4">{{ person.nationality }}</td>
            <td class="py-3 px-4">
                <img
                :src="`https://flagcdn.com/16x12/${person.nationality.toLowerCase()}.png`"
                :srcset="`
                    https://flagcdn.com/32x24/${person.nationality.toLowerCase()}.png 2x,
                    https://flagcdn.com/48x36/${person.nationality.toLowerCase()}.png 3x
                `"
                width="24"
                height="18"
                alt="Flag of {{ person.nationality }}"
                class="rounded shadow"
                />
            </td>
            </tr>
        </tbody>
    </table>
</template>
    
<script>
    export default {
        props: {
        people: {
            type: Array,
            required: true,
        },
        },
    };
</script>
