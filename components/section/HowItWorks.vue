<template>
    <UiSection title="How It Works" description="Zero configuration. Just install and start sharing." size="lg"
        spacing="lg">
        <div class="relative grid grid-cols-1 md:grid-cols-3 gap-8">

            <!-- Step 1: Install -->
            <div class="group relative z-10">
                <div
                    class="relative h-64 mb-6 overflow-hidden rounded-2xl border border-gray-200 dark:border-gray-800 bg-gray-50 dark:bg-gray-900/50 transition-all duration-300 group-hover:shadow-lg group-hover:border-teal-500/30">
                    <!-- Abstract Visual: App Window -->
                    <div class="absolute inset-0 flex items-center justify-center">
                        <!-- Window Frame -->
                        <div
                            class="relative w-32 h-40 bg-white dark:bg-gray-800 rounded-xl border border-gray-200 dark:border-gray-700 shadow-sm flex flex-col overflow-hidden transition-transform duration-500 group-hover:-translate-y-2">
                            <!-- Header -->
                            <div
                                class="h-6 border-b border-gray-100 dark:border-gray-700 bg-gray-50 dark:bg-gray-800 flex items-center px-2 gap-1.5">
                                <div class="w-2 h-2 rounded-full bg-red-400/80"></div>
                                <div class="w-2 h-2 rounded-full bg-amber-400/80"></div>
                                <div class="w-2 h-2 rounded-full bg-green-400/80"></div>
                            </div>
                            <!-- Content -->
                            <div
                                class="flex-1 flex flex-col items-center justify-center gap-3 p-2 bg-[radial-gradient(#e5e7eb_1px,transparent_1px)] dark:bg-[radial-gradient(#374151_1px,transparent_1px)] [background-size:8px_8px]">
                                <img src="~/assets/img/logo-512.png" alt="Logo" class="h-10 w-10 drop-shadow-sm" />
                                <div
                                    class="w-20 h-6 rounded-md bg-teal-500 text-[10px] text-white font-bold flex items-center justify-center shadow-sm">
                                    GET
                                </div>
                            </div>

                            <!-- Badge -->
                            <!-- <div
                                class="absolute -top-3 -right-3 h-8 w-8 rounded-full bg-teal-500 text-white flex items-center justify-center font-bold text-sm border-4 border-gray-50 dark:border-gray-900 z-20 shadow-sm">
                                1</div> -->
                        </div>

                        <!-- Glow -->
                        <div class="absolute w-24 h-24 bg-teal-500/10 rounded-full blur-2xl -z-10"></div>
                    </div>
                </div>
                <h3 class="text-xl font-semibold text-gray-900 dark:text-white mb-2 text-center">Install & Open</h3>
                <p class="text-gray-500 dark:text-gray-400 text-center text-sm leading-relaxed px-4">
                    Download LocalSend on all your devices. No account, no login, no servers.
                </p>
            </div>

            <!-- Step 2: Select -->
            <div class="group relative z-10">
                <div
                    class="relative h-64 mb-6 overflow-hidden rounded-2xl border border-gray-200 dark:border-gray-800 bg-gray-50 dark:bg-gray-900/50 transition-all duration-300 group-hover:shadow-lg group-hover:border-teal-500/30">
                    <!-- Abstract Visual: File Selection -->
                    <div class="absolute inset-0 flex items-center justify-center">
                        <div class="relative">
                            <!-- Background Cards (Stack effect) -->
                            <div
                                class="absolute top-0 left-0 w-28 h-36 bg-white dark:bg-gray-800 rounded-xl border border-gray-200 dark:border-gray-700 shadow-sm transform -rotate-6 translate-x-2 translate-y-2 opacity-60">
                            </div>
                            <div
                                class="absolute top-0 left-0 w-28 h-36 bg-white dark:bg-gray-800 rounded-xl border border-gray-200 dark:border-gray-700 shadow-sm transform rotate-6 -translate-x-2 translate-y-1 opacity-80">
                            </div>

                            <!-- Main Active Card -->
                            <div
                                class="relative w-28 h-36 bg-white dark:bg-gray-800 rounded-xl border border-gray-200 dark:border-gray-700 shadow-md flex flex-col p-3 transition-transform duration-500 group-hover:scale-105 group-hover:-translate-y-2">
                                <!-- Image Placeholder -->
                                <div
                                    class="w-full h-20 bg-gray-100 dark:bg-gray-700 rounded-lg mb-3 flex items-center justify-center overflow-hidden">
                                    <Icon name="material-symbols:image"
                                        class="text-3xl text-gray-300 dark:text-gray-600" />
                                </div>
                                <!-- Text Lines -->
                                <div class="w-3/4 h-2 bg-gray-100 dark:bg-gray-700 rounded-full mb-2"></div>
                                <div class="w-1/2 h-2 bg-gray-100 dark:bg-gray-700 rounded-full"></div>

                                <!-- Checkmark (Selection state) -->
                                <div
                                    class="absolute -right-2 -top-2 w-6 h-6 bg-teal-500 rounded-full flex items-center justify-center border-2 border-white dark:border-gray-800 shadow-sm">
                                    <Icon name="material-symbols:check" class="text-white text-xs font-bold" />
                                </div>

                                <!-- Badge -->
                                <!-- <div
                                    class="absolute -top-3 -left-3 h-8 w-8 rounded-full bg-teal-500 text-white flex items-center justify-center font-bold text-sm border-4 border-gray-50 dark:border-gray-900 z-20 shadow-sm">
                                    2</div> -->
                            </div>
                        </div>
                        <div class="absolute w-24 h-24 bg-blue-500/10 rounded-full blur-2xl -z-10"></div>
                    </div>
                </div>
                <h3 class="text-xl font-semibold text-gray-900 dark:text-white mb-2 text-center">Select Files</h3>
                <p class="text-gray-500 dark:text-gray-400 text-center text-sm leading-relaxed px-4">
                    Choose photos, videos, documents, or text. Any file type is supported.
                </p>
            </div>

            <!-- Step 3: Send -->
            <div class="group relative z-10">
                <div
                    class="relative h-64 mb-6 overflow-hidden rounded-2xl border border-gray-200 dark:border-gray-800 bg-gray-50 dark:bg-gray-900/50 transition-all duration-300 group-hover:shadow-lg group-hover:border-teal-500/30">
                    <!-- Abstract Visual: Transfer Animation -->
                    <div class="absolute inset-0 flex items-center justify-center">
                        <div class="relative w-full max-w-[220px] flex justify-between items-center px-6">
                            <!-- Device A (Phone) -->
                            <div
                                class="w-12 h-20 bg-white dark:bg-gray-800 rounded-lg border border-gray-200 dark:border-gray-700 shadow-sm flex flex-col items-center justify-end p-1 z-10">
                                <div class="w-4 h-1 bg-gray-200 dark:bg-gray-700 rounded-full mb-1"></div>
                            </div>

                            <!-- Flying File Animation -->
                            <div class="absolute left-8 top-1/2 -translate-y-1/2 z-20 file-transfer-anim">
                                <div
                                    class="w-10 h-12 bg-teal-500 rounded-lg shadow-lg flex items-center justify-center border-2 border-white dark:border-gray-800 transform rotate-12">
                                    <Icon name="material-symbols:description" class="text-white" />
                                </div>
                            </div>

                            <!-- Connection Line -->
                            <div class="absolute left-12 right-12 top-1/2 h-0.5 bg-gray-200 dark:bg-gray-700 -z-0">
                            </div>

                            <!-- Device B (Tablet) -->
                            <div
                                class="relative w-16 h-24 bg-white dark:bg-gray-800 rounded-xl border border-gray-200 dark:border-gray-700 shadow-sm flex flex-col items-center justify-end p-2 z-10">
                                <div class="w-6 h-1 bg-gray-200 dark:bg-gray-700 rounded-full mb-1"></div>
                                <!-- Badge -->
                                <div
                                    class="absolute -top-3 -right-3 h-8 w-8 rounded-full bg-teal-500 text-white flex items-center justify-center font-bold text-sm border-4 border-gray-50 dark:border-gray-900 z-20 shadow-sm">
                                    3</div>
                            </div>
                        </div>
                        <div class="absolute w-24 h-24 bg-purple-500/10 rounded-full blur-2xl -z-10"></div>
                    </div>
                </div>
                <h3 class="text-xl font-semibold text-gray-900 dark:text-white mb-2 text-center">Tap to Send</h3>
                <p class="text-gray-500 dark:text-gray-400 text-center text-sm leading-relaxed px-4">
                    Tap the nearby device. The transfer happens instantly over your local network.
                </p>
            </div>
        </div>
    </UiSection>
</template>

<style scoped>
.file-transfer-anim {
    animation: transfer 2.5s ease-in-out infinite;
}

@keyframes transfer {
    0% {
        transform: translate(0, -50%) scale(0.8);
        opacity: 0;
    }

    20% {
        opacity: 1;
        transform: translate(0, -50%) scale(1);
    }

    80% {
        opacity: 1;
        transform: translate(120px, -50%) scale(1);
    }

    100% {
        transform: translate(120px, -50%) scale(0.8);
        opacity: 0;
    }
}
</style>