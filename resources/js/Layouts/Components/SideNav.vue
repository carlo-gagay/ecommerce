<script setup>
import Logo from '@components/Logo.vue'
</script>

<template>
    <aside>
        <div class="brand">
            <Logo/>
        </div>
        <div class="container">

        </div>
    </aside>
</template>

<style scoped lang="scss">
aside {
    @apply w-[238px] h-screen border-2 border-r-neutral-200 absolute top-0 z-30;
    @apply bg-transparent py-16;

    .brand {
        @apply p-2;
    }
}
</style>