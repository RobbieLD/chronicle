<template>
    <div class="action-button" @click="open" v-bind:style="style">
        <i class="pi action-button__icon" v-bind:class="buttonIcon"></i>
    </div>
</template>
<script lang='ts'>
    import { defineComponent } from 'vue'
    import { ActionButtonPosition } from '@/config/index'

    export default defineComponent({
        name: 'ActionButton',
        components: {},
        emits: ['clicked'],
        props: {
            icon: {
                type: String,
                required: true
            },
            position: {
                type: Number,
                required: true
            }
        },
        setup(props, { emit }) {
            
            const open = () => {
                emit('clicked')
            }
            
            // What was I thinking when I made this?
            const style: Record<string, string | number> = {}
            style[`${ActionButtonPosition[props.position]}`] = 0
            style[`border-bottom-${ActionButtonPosition[Number(!props.position)]}-radius`] = '0.2em'
            style[`border-top-${ActionButtonPosition[Number(!props.position)]}-radius`] = '0.2em'
        
            return {
                open,
                buttonIcon: props.icon,
                style
            }
        },
    })
</script>
<style lang='scss' scoped>
    .action-button {
        top: 30%;
        position: fixed;
        z-index: 1;
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
