<template>
    <div>
        <section class="mb-6">
            <h2 class="text-2xl font-semibold mb-4">Add a New Person</h2>
            <ManagePeopleForm @addPerson="addPerson" />
        </section>
        <section>
            <h2 class="text-2xl font-semibold mb-4">People List</h2>
            <PeopleTable :people="people" />
        </section>
    </div>
</template>
    
<script>
import ManagePeopleForm from './ManagePeopleForm.vue';
import PeopleTable from './PeopleTable.vue';
    
export default {
    components: { ManagePeopleForm, PeopleTable },
    data() {
    return {
        people: [],
    };
    },
    methods: {
    addPerson(person) {
        this.people.push(person);
    },
    },
};
</script>