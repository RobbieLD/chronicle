<template>
    <graph-panel></graph-panel>
</template>
<script lang='ts'>
    import { defineComponent } from 'vue'
    import GraphPanel from '@/components/GraphPanel.vue'

    export default defineComponent({
        name: 'Graph',
        components: {
            GraphPanel
        },
        setup() {
            return {
            }
        },
    })
</script>
<style lang='scss' scoped>
</style>
