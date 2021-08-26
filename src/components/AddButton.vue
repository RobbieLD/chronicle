<template>
    <div class="add-button" @click="open">
        <i class="pi pi-plus add-button__icon"></i>
    </div>
</template>
<script lang='ts'>
    import { defineComponent } from 'vue'

    export default defineComponent({
        name: 'AddButton',
        components: {},
        emits: ['clicked'],
        setup(props, { emit }) {
            const open = () => {
                emit('clicked')
            }
            return {
                open
            }
        },
    })
</script>
<style lang='scss' scoped>
    .add-button {
        right: 0;
        top: 30%;
        position: fixed;
        z-index: 1;
        border-bottom-left-radius: 0.2em;
        border-top-left-radius: 0.2em;
        color: var(--primary-color-text);
        background-color: var(--primary-color);
        padding: 1em;
        box-shadow: 5px 10px 18px #0000006b;
        cursor: pointer;

        &__icon {
            font-size: 2em;
        }
    }
</style>
