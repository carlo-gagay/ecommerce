<script setup>
import {IconInventory, IconMenu, IconProducts, IconSettings2, IconUser} from "@icons"
import {Link} from "@inertiajs/vue3"
</script>

<template>
    <div id="top-header">
        <div class="inner">
            <div class="start-section">
                <Link :href="route('home')" class="branding">
                    <IconMenu class="icon"/>
                    <h2>Ecommerce</h2>
                </Link>
                <div class="nav-links">
                    <ul class="nav inline">
                        <li>
                            <Link class="btn with-icon primary-inline" :href="route('home')">
                                <IconProducts class="icon"/> <span>Products</span>
                            </Link>
                        </li>
                        <li>
                            <Link class="btn with-icon primary-inline" :href="route('home')">
                                <IconInventory class="icon"/> <span>Inventory</span>
                            </Link>
                        </li>
                    </ul>
                </div>
            </div>
            <div class="end-section">
                <ul class="nav inline">
                    <li>
                        <button class="btn-icon primary">
                            <IconSettings2 class="icon lg"/>
                        </button>
                    </li>
                    <li>
                        <button class="btn-icon primary">
                            <IconUser class="icon lg"/>
                        </button>
                    </li>
                </ul>
            </div>
        </div>
    </div>
</template>

<style scoped lang="scss">
#top-header {
    @apply py-2 px-4 bg-violet-900;

    .inner {
        @apply flex justify-between items-center;

        .start-section {
            @apply flex items-center;

            .branding {
                @apply flex items-center text-white;

                h2 {
                    @apply text-lg px-2 font-bold;
                }
            }
        }

        .end-section {

        }
    }
}

.nav {
    @apply px-4 text-slate-200;
}
</style>