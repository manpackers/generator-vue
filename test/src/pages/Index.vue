<style lang="scss" scoped>
.frame {
  color: #f00;
}
</style>

<template>
  <div class="frame"><Test /></div>
</template>

<script lang="babel">
import Test from '@/components/Test'

export default {
  components: { Test },
  methods: {
    test() { alert('bucuo') }
  }
}
</script>
