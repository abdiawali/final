<template>
<div>
<div class="card">
  <h2 class="card-header">Activity Record</h2>

  <div class="card-body">
    <h3> {{ StudyRecord.length }} record(s)</h3>

    <div id="records">
      <table class="table">
        <tr>
          <th>subject</th>
          <th>When</th>
          <th>How long?</th>
          <th>style</th>
        </tr>
        <RecordRow v-for="record in StudyRecord" v-bind:key="record.subject"
        v-bind:StudyRecord= "record"
        ></RecordRow>
      </table>   
    </div>
  </div>
</div>


  <div class="card">
    
    <h2 class="card-header">Summary</h2>

    <div class="card-body">
      <!-- TODO use computed property to display total hours -->
      <p>You have spent a total of {{totalHours}} hours, broken down as follows:</p>
      
      <!-- TODO computed property to display total for each type  
      <ul class="list-group list-group-flush">
          <li class="list-group-item" v-for="hours, subject in totalHoursBySubject">{{ subject }}: {{ hours }}</li>
      </ul>-->
    </div>
  </div>
</div>

</template>

<script>
import RecordRow from '@/components/RecordRow.vue'
export default {
  name: 'RecordTable',  
  components: {
    RecordRow,
    },
  data() {
    return {
      StudyRecord: []
    }
  },
  mounted() {
    // let exampleRecords = [
    //   {subject: 'Math', when: '01-01-2019', howLong: 2, style: 'Visual'},
    //   {subject: 'Programming', when: '01-01-2019', howLong: 8, style: 'Visual'},
    // ]
    this.$record_aoi.getAllRecords().then( records => {
      this.StudyRecord = records
      })
  },
  computed: {
    totalHours() {
      let total = 0
      if (this.StudyRecord.length > 0){
          total = this.StudyRecord.reduce(function (hoursAccumulator, currentRecord) {
              return hoursAccumulator + currentRecord.howLong
          }, 0)
      }
      return total
    
    },
    totalHoursBySubject() {
      let hoursBySubject = {}
      this.subjects.forEach(subject => {
        let totalForSubject = this.StudyRecord
          .filter(function (record) { return record.subject === subject})
          .reduce(function (accumulator, current) {return accumulator + current.howLong }, 0)
        hoursBySubject[subject] = totalForSubject
      })
    return hoursBySubject
    },
  }
}

</script>
<style>
.card-body{
  background-color:lightblue;
  font-family: 'Franklin Gothic Medium', 'Arial Narrow', Arial, sans-serif;
  font-weight: bold;
  text-align: center
}
.card-header{
  font-weight: bold
}

</style>