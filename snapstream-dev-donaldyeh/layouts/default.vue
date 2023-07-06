<template>
    <div>
      <header class="shadow-sm">
            <nav class="container mx-auto p-4 flex justify-between">
                <p>SnapStream Dev - Donald Yeh</p>
                <ul class="flex gap-4">
                    <li><NuxtLink to="/">Home</NuxtLink></li>
                    <li><NuxtLink to="/question1">Question 1</NuxtLink></li>
                    <li><NuxtLink to="/question2">Question 2</NuxtLink></li>
                </ul>
            </nav>
        </header>


<div class="container mx-auto p-4">
    <slot />
</div>


    </div>
  </template>

<style>
header {
    background: #113350;
    color: lightgray
}

.router-link-exact-active {
    color: orange
}
</style>
