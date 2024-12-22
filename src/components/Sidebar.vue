<template>
    <nav class="w-64 bg-blue-900 text-white flex flex-col h-full">
        <div class="py-6 px-4 text-center border-b border-blue-700">
            <h1 class="text-xl font-bold">Admin Panel</h1>
        </div>
        <ul class="flex-1 px-2">
            <li>
            <router-link
                to="/manage-people"
                class="block py-3 px-4 rounded-lg hover:bg-blue-800 transition duration-200"
            >
                Manage People
            </router-link>
            </li>
        </ul>
        <div class="py-4 px-4 border-t border-blue-700">
            <p class="text-sm">© 2024</p>
        </div>
    </nav>
</template>