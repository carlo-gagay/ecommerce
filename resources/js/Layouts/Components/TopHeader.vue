<script setup>
import MenuIcon from "@icons/menu.svg"
import {Link} from "@inertiajs/vue3"
</script>

<template>
    <div id="top-header">
        <div class="inner">
            <div class="start-section">
                <Link :href="route('home')" class="branding">
                    <MenuIcon class="icon"/>
                    <h2>Ecommerce</h2>
                </Link>
                <div class="nav-links">
                    <ul class="navs">
                        <li>
                            <Link :href="route('home')">
                                Link One
                            </Link>
                        </li>
                    </ul>
                </div>
            </div>
            <div class="end-section">

            </div>
        </div>
    </div>
</template>

<style scoped lang="scss">
#top-header {
    @apply p-2 bg-[#172B4D];

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

            .nav-links {

                .nav {

                    
                }
            }
        }

        .end-section {

        }
    }
}
</style>