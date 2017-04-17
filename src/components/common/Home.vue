<template>
    <div class="wrapper">
        <v-sidebar></v-sidebar>
        <div class="content">
            <transition name="slide-fade" mode="out-in">
            		<router-view></router-view>
            </transition>
        </div>
    </div>
</template>

<script>
    import vSidebar from './Sidebar.vue';
    export default {
   	 	data() {
            return {
            		
            }
        },
        components:{
            vSidebar
        }
    }
</script>
