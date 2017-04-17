<template>
  <div class="hello">
		<el-radio class="radio" v-model="radio" label="1">备选项</el-radio>
  </div>
</template>

<script>
export default {
  name: 'hello',
  data () {
    return {
      radio: '1'
    }
  }
}
</script>
