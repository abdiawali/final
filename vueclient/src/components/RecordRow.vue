<template>
    <!-- table to get the value of each value in the studyRecord object-->
    <tr>
        <td>{{ StudyRecord.subject }}</td>
        <td>{{ StudyRecord.when }}</td>
        <td>{{ StudyRecord.howLong }}</td>
        <td>{{ StudyRecord.style }}</td>
    </tr>
    
</template>

<script>
//import RecordForm from '@/components/RecordForm.vue'
export default {
    name: 'RecordRow',
    data(){
        return{
            
        }
    },
    components: {
        //RecordForm
    },
    props: {
        StudyRecord: Object,
    },
    methods: {
        deletename(name) {
            if (confirm('Delete')) {
                this.$emit('delete-name', name)
            }
        }
    }
    
    
}
</script>
<style scoped>

</style>