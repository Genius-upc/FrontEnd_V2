<template>
    <div class="card">
        <h3>README</h3>
        <p class="bg-primary border-round p-3">This page covers the Vite version, Primevue and Primeflex libraries.</p>
        <h5>Getting Started</h5>
        <p>
            cd vue-project <br/>
            npm install<br/>
            npm install primevue<br/>
            npm Install primeflex<br/>
            npm install --save-dev sass<br/>
        </p>

        <p>Next step is running the application using the serve script and navigate to <i>http://localhost:5173/</i> to view the application. That is it, you may now start with the development of your application using the Genius App.</p>

        <CodeHighlight> npm run dev </CodeHighlight>

        <h5>Structure</h5>
        <ul class="line-height-3">
            <li><span class="text-primary font-medium">src/layout</span>: Main layout files, needs to be present</li>
            <li><span class="text-primary font-medium">src/views</span>: Demo pages</li>
            <li><span class="text-primary font-medium">public/demo</span>: Assets used in demos</li>
            <li><span class="text-primary font-medium">public/layout</span>: Assets used in layout</li>
            <li><span class="text-primary font-medium">src/assets/demo</span>: Styles used in demos</li>
            <li><span class="text-primary font-medium">src/assets/layout</span>: SCSS files of the main layout</li>
        </ul>

        <h5>Menu</h5>
        <p>Main menu is defined at <span class="text-primary font-medium">src/layout/AppMenu.vue</span> file.</p>

    </div>
</template>

<style lang="scss" scoped>
@media screen and (max-width: 991px) {
    .video-container {
        position: relative;
        width: 100%;
        height: 0;
        padding-bottom: 56.25%;

        iframe {
            position: absolute;
            top: 0;
            left: 0;
            width: 100%;
            height: 100%;
        }
    }
}
</style>
<script setup>
</script>