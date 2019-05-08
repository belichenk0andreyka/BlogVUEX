<template>
  <div id="app">
    <header-self></header-self>
    <router-view></router-view>
    <app-history></app-history>
  </div>
</template>

<script>

export default {
  components: {
    name: 'app',
  }
}
</script>

<style>
  .post{
    height: 500px;
    width: 500px;
    list-style-type: none;
  }
  .buttonDelete{
    background-color: white;
    color: #38414A;
    border: 2px solid #A52A2A;
    font-weight: 550;
    font-size: 17px;
    border-radius: 2px;
    box-shadow: -1px 3px 28px 6px rgba(0,0,0,0.17);
    margin-right: 10px;
    transition-duration: 0.6s;
    float: left;
  }
  .buttonDelete:hover{
    background-color: #A52A2A;
    color: white;
    transition-duration: 0.6s;
  }
  .buttonChange{
    background-color: #3C97E1;
    color: #38414A;
    border: 2px solid #3C97E1;
    font-weight: 550;
    font-size: 17px;
    border-radius: 2px;
    box-shadow: -1px 3px 28px 6px rgba(0,0,0,0.17);
    margin-right: 10px;
    float: left;
    position: relative;
  }
  .buttonChange:hover{
    background-color: white;
    color: black;
    transition-duration: 0.6s;
  }
  .changePost{
    width: 195px;
    margin-right: 6px;
    height: 30px;
    box-shadow: -1px 3px 19px -7px rgba(0,0,0,0.13);
  }
</style>
