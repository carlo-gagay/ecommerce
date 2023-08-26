<script setup>
import {LayoutComponentHeader, LayoutComponentPageBody, LayoutComponentSideNav} from "@layouts/Components"
</script>

<template>
    <main>
        <LayoutComponentHeader/>
        <div class="page-body-wrapper">
            <LayoutComponentSideNav/>
            <LayoutComponentPageBody/>
        </div>
    </main>
</template>

<style scoped>
.page-body-wrapper {
    @apply flex flex-row items-center;
}
</style>