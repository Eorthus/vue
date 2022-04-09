<template>
  <div class="wrapper" v-if="settings.content">
      <div class="content">
          <MyModal  :settings="settings"/>
      </div>
      <div class="footer">
          <button class="modal-btn" @click="onCloseClick">
              X
          </button>
      </div>
  </div>
</template>

<script>
import MyModal from "../components/MyModal.vue"
export default {
    name:"ModalWindow",
    components:{
        MyModal,
    },
    props:{
        settings:Object
    },
methods:{
    onCloseClick(){
        this.$modal.hide()
    },
    
}
}
</script>

<style lang="scss" scoped>
.wrapper{
    position: absolute;
    background: white;
    top:35%;
    left:40%;
    box-shadow: 0px 0px 10px 5px rgba(80, 80, 80,0.3);
}
.modal-btn{
    color:palevioletred;
    background: transparent;
    border:none;
    position: absolute;
    top:5px;
    right:5px;

}
</style>