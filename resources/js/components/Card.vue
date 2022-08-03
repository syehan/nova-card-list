<template>
    <card class="px-4 py-4">
        <div v-if="card.rows.length" data-testid="resource-table">
            <div v-for="item in card.rows" class="group">
                <a :href="item.viewUrl">
                <div class="h-6 flex items-center mb-4">
                    <h3 class="mr-3 leading-tight text-sm font-bold">{{ item.title }}</h3>
                </div>
                <div class="flex items-center mb-4">
                    <div class="rounded-lg bg-primary-500 text-white h-14 w-14 flex items-center justify-center">
                        <img class="rounded-lg" src="https://via.placeholder.com/150" alt="https://via.placeholder.com/150">
                    </div>
                    <div class="ml-4"><p class="flex items-center text-4xl">0</p>
                        <div>
                            <p class="flex items-center font-bold text-sm">
                                <span class="text-gray-400 font-semibold">
                                    <span>No Current Data</span>
                                </span>
                            </p>
                        </div>
                    </div>
                </div>
                <div v-if="card.rows.length === 0" class="px-2 text-xs text-gray-400">
                    {{ __('There are no fields to display.') }}
                </div>
                </a>
            </div>
        </div>
    </card>
</template>

<script>
export default {
    props: {
        card: {
            type: Object,
            required: true,
        },
    },
}
</script>
