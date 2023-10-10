<template>
<section>
    <base-card>
    <h2>Register as o coach now!</h2>
    <coach-form @save-data="addCoach"></coach-form>
    </base-card>
</section>
</template>

<script>
import CoachForm from '../components/CoachForm.vue'
export default {
components: {
    CoachForm
},
methods: {
    addCoach(data) {
this.$store.dispatch('coaches/addCoach', data);
this.$router.replace('/coaches');
// this.$router.push('/coaches');
    }
}
}
</script>


