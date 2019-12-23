<template>
<div>
  <h1 class="text-center">Study Tracker</h1>
  <div id="add-hours" class="card">
    <h2 class="card-header">Update Record</h2>
    <div class="card-body">

      <!--Error messages displays here -->
      <form>
        <div class="alert alert-danger" v-show="errors && errors.length > 0">
            <li v-for="error in errors" v-bind:key="error">{{ error }}  </li>
        </div>

      <!-- gets user's naem-->
        <div class="form-group">
          <label class="form-label" for="subject" ref="subject">What class?</label>
          <select class="form-control" v-model="subject">
              <option v-for="subject in subjects" v-bind:value="subject" v-bind:key="subject">{{ subject }}</option>
          </select>
        </div>
                  
        <div class="form-group">
            <!-- TODO change label message to include name of activity -->
          <label class="form-label" for="when">When did you do it?</label>
          <input id="when" class="form-control" type="date" v-model="when" >
        </div>

        <div class="form-group">
          <label class="form-label" for="howLong">How long were doing this?</label>
          <input id="howLong" class="form-control" v-model.number="howLong">
        </div>

        <div class="form-group">
          <label class="form-label" for="style">how did you do this assignment?</label>
          <select class="form-control" v-model="style">
              <option v-for="style in styles" v-bind:value="style" v-bind:key="style">{{ style }}</option>
          </select>
        </div>

        <div>
            <button class="btn btn-primary mt-2" type="button" @click="addRecord">Add record</button>
        </div>
        <span><br>{{StudyRecord}}</span>

      </form>
    
    </div>
  </div>
</div>
</template>

 
<script>
export default {
  name: 'RecordForm',
  data() {
    return {
      when: '',
      howLong: '',
      subject: '',
      subjects: [
        'math', 'drawing', 'programming'
      ],
      style: '',
      styles:[ 'Visual', 'Auditory', 'Kinesthetic'],
      StudyRecord: [],
      errors: [],
      
    }
  },
  methods: {
    //function for when button is clicked to add record
    addRecord() 
    {
        this.errors = []
        if (this.whenLocal == 'Invalid Date' || this.whenLocal.getTime()> new Date().getTime() ) 
        {
            this.errors.push('Select a valid date, today or in the past')
        }
        if (typeof (this.howLong) != "number" || this.howLong <= 0) 
        {
            this.errors.push('The number of hours must be a number greater than zero.')
        }
        if (this.errors.length == 0) 
        {
          
          let Record = {
              subject: this.subject,
              when: this.whenLocal,
              howLong: this.howLong,
              style: this.style
          }
          this.subject = '',
          this.when = '',
          this.howLong = '',
          this.style = '',
          //this.$emit('StudyRecord-added', StudyRecord)

          this.StudyRecord.push(Record)
          
          this.$record_api.addRecord(Record).then( () => {
            // do whatever you need to do when record is added 
            this.updateRecord()
          })
          
        }
    }
  },
  computed: 
    {
      whenLocal() 
      {
        let date = new Date(this.when)
        let timestamp = date.getTime() + (date.getTimezoneOffset() * 60 * 1000)
        let localDate = new Date(timestamp)
        return localDate
      }
    }
}
</script> 

<style scoped>
form{
  background-color: lightblue;
  margin: 4px;
  padding: 10px;
  font-weight: bold;
  font-size: 18px;

}
.card-body{
  background-color:rgba(202, 174, 174, 0.466);
}
.card-header{
  background-color:lightblue;
  font-family: 'Franklin Gothic Medium', 'Arial Narrow', Arial, sans-serif;
  font-weight: bold;
  text-align: center
}
.text-center{
  padding: 10px
}
</style>