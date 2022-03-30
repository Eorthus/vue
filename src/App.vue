<template>
  <div>
    <nav class="navy">
      <router-link style="color:plum" to="/">Back to list</router-link>
    </nav>
    <router-view/>
 </div>
</template>
<style lang="scss" scoped>
.navy{
  margin-left:2%;
  font-size: 18px;
  margin-top:30px;
}
</style>
