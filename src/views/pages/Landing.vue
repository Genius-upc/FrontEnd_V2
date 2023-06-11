<script setup>
import { useLayout } from '@/layout/composables/layout';
import { computed } from 'vue';

const { layoutConfig } = useLayout();

const smoothScroll = (id) => {
    document.querySelector(id).scrollIntoView({
        behavior: 'smooth'
    });
};

const logoUrl = computed(() => {
    return `layout/images/${layoutConfig.darkTheme.value ? 'logo-white' : 'logo-dark'}.svg`;
});
</script>

<template>
    <div class="surface-0 flex justify-content-center">
        <div id="home" class="landing-wrapper overflow-hidden">
            <div class="py-4 px-4 mx-0 md:mx-6 lg:mx-8 lg:px-8 flex align-items-center justify-content-between relative lg:static mb-3">
                <a class="flex align-items-center" href="#"> <img :src="logoUrl" alt="Genius Logo" height="50" class="mr-0 lg:mr-2" /><span class="text-900 font-medium text-2xl line-height-3 mr-8">GENIUS</span> </a>
                <a class="cursor-pointer block lg:hidden text-700 p-ripple" v-ripple v-styleclass="{ selector: '@next', enterClass: 'hidden', leaveToClass: 'hidden', hideOnOutsideClick: true }">
                    <i class="pi pi-bars text-4xl"></i>
                </a>
                <div class="align-items-center surface-0 flex-grow-1 justify-content-between hidden lg:flex absolute lg:static w-full left-0 px-6 lg:px-0 z-2" style="top: 120px">
                    <ul class="list-none p-0 m-0 flex lg:align-items-center select-none flex-column lg:flex-row cursor-pointer">
                        <li>
                            <a @click="smoothScroll('#hero')" class="flex m-0 md:ml-5 px-0 py-3 text-900 font-medium line-height-3 p-ripple" v-ripple>
                                <span>Home</span>
                            </a>
                        </li>
                        <li>
                            <a @click="smoothScroll('#features')" class="flex m-0 md:ml-5 px-0 py-3 text-900 font-medium line-height-3 p-ripple" v-ripple>
                                <span>Features</span>
                            </a>
                        </li>
                        <li>
                            <a @click="smoothScroll('#highlights')" class="flex m-0 md:ml-5 px-0 py-3 text-900 font-medium line-height-3 p-ripple" v-ripple>
                                <span>Highlights</span>
                            </a>
                        </li>
                        <li>
                            <a @click="smoothScroll('#pricing')" class="flex m-0 md:ml-5 px-0 py-3 text-900 font-medium line-height-3 p-ripple" v-ripple>
                                <span>Pricing</span>
                            </a>
                        </li>
                    </ul>
                    <div class="flex justify-content-between lg:block border-top-1 lg:border-top-none surface-border py-3 lg:py-0 mt-3 lg:mt-0">
                        <router-link to="/auth/login"><Button label="Login" class="p-button-text p-button-rounded border-none font-light line-height-2 text-blue-500"></Button></router-link>
                        <Button label="Register" class="p-button-rounded border-none ml-5 font-light text-white line-height-2 bg-blue-500"></Button>
                    </div>
                </div>
            </div>

            <div
                id="hero"
                class="flex flex-column pt-4 px-4 lg:px-8 overflow-hidden"
                style="background: linear-gradient(0deg, rgba(255, 255, 255, 0.2), rgba(255, 255, 255, 0.2)), radial-gradient(77.36% 256.97% at 77.36% 57.52%, rgb(238, 239, 175) 0%, rgb(195, 227, 250) 100%); clip-path: ellipse(150% 87% at 93% 13%)"
            >
                <div class="mx-4 md:mx-8 mt-0 md:mt-4">
                    <h1 class="text-6xl font-bold text-gray-900 line-height-2"><span class="font-light block">Genius Offers</span>"FreePlace"</h1>
                    <p class="font-normal text-2xl line-height-3 md:mt-3 text-gray-700">This proposal aims to suport drivers to find a free <br/> parking space inmediatly throug their GPS location.</p>
                    <Button label="Get Started" class="p-button-rounded text-xl border-none mt-5 bg-blue-500 font-normal text-white line-height-3 px-3"></Button>
                </div>
                <div class="flex justify-content-center md:justify-content-end">
                    <img src="/demo/images/landing/screen-1.png" alt="Hero Image" class="w-9 md:w-auto" />
                </div>
            </div>

            <div id="features" class="py-4 px-4 lg:px-8 mt-5 mx-0 lg:mx-8">
                <div class="grid justify-content-center">
                    <div class="col-12 text-center mt-8 mb-4">
                        <h2 class="text-900 font-normal mb-2">Freeplaces</h2>
                        <span class="text-600 text-2xl">Choose from millions of available or reserve your space in advance. Join over 5.5 millions drivers enjoying easy parking.</span>
                    </div>

                    <div class="col-12 md:col-12 lg:col-4 p-0 lg:pr-5 lg:pb-5 mt-4 lg:mt-0">
                        <div
                            style="height: 160px; padding: 2px; border-radius: 10px; background: linear-gradient(90deg, rgba(253, 228, 165, 0.2), rgba(187, 199, 205, 0.2)), linear-gradient(180deg, rgba(253, 228, 165, 0.2), rgba(187, 199, 205, 0.2))"
                        >
                            <div class="p-3 surface-card h-full" style="border-radius: 8px">
                                <div class="flex align-items-center justify-content-center bg-yellow-200 mb-3" style="width: 3.5rem; height: 3.5rem; border-radius: 10px">
                                    <i class="pi pi-fw pi-users text-2xl text-yellow-700"></i>
                                </div>
                                <h5 class="mb-2 text-900">Stop wasting time</h5>
                                <span class="text-600">Find freeplaces instantly</span>
                            </div>
                        </div>
                    </div>

                    <div class="col-12 md:col-12 lg:col-4 p-0 lg:pr-5 lg:pb-5 mt-4 lg:mt-0">
                        <div
                            style="height: 160px; padding: 2px; border-radius: 10px; background: linear-gradient(90deg, rgba(145, 226, 237, 0.2), rgba(251, 199, 145, 0.2)), linear-gradient(180deg, rgba(253, 228, 165, 0.2), rgba(172, 180, 223, 0.2))"
                        >
                            <div class="p-3 surface-card h-full" style="border-radius: 8px">
                                <div class="flex align-items-center justify-content-center bg-cyan-200 mb-3" style="width: 3.5rem; height: 3.5rem; border-radius: 10px">
                                    <i class="pi pi-fw pi-palette text-2xl text-cyan-700"></i>
                                </div>
                                <h5 class="mb-2 text-900">Reserve</h5>
                                <span class="text-600">Reserve spaces in record time.</span>
                            </div>
                        </div>
                    </div>

                    <div class="col-12 md:col-12 lg:col-4 p-0 lg:pb-5 mt-4 lg:mt-0">
                        <div
                            style="height: 160px; padding: 2px; border-radius: 10px; background: linear-gradient(90deg, rgba(145, 226, 237, 0.2), rgba(172, 180, 223, 0.2)), linear-gradient(180deg, rgba(172, 180, 223, 0.2), rgba(246, 158, 188, 0.2))"
                        >
                            <div class="p-3 surface-card h-full" style="border-radius: 8px">
                                <div class="flex align-items-center justify-content-center bg-indigo-200" style="width: 3.5rem; height: 3.5rem; border-radius: 10px">
                                    <i class="pi pi-fw pi-map text-2xl text-indigo-700"></i>
                                </div>
                                <h5 class="mb-2 text-900">Great Support</h5>
                                <span class="text-600">Use advancement of technology and power of GPS.</span>
                            </div>
                        </div>
                    </div>



                </div>
            </div>

            <div id="highlights" class="py-4 px-4 lg:px-8 mx-0 my-6 lg:mx-8">
                <div class="text-center">
                    <h2 class="text-900 font-normal mb-2">Find parking in seconds</h2>
                    <span class="text-600 text-2xl">Start now</span>
                </div>

                <div class="grid mt-8 pb-2 md:pb-8">
                    <div class="flex justify-content-center col-12 lg:col-6 bg-purple-100 p-0 flex-order-1 lg:flex-order-0" style="border-radius: 8px">
                        <img src="/demo/images/landing/mockup.svg" class="w-11" alt="mockup mobile" />
                    </div>

                    <div class="col-12 lg:col-6 my-auto flex flex-column lg:align-items-end text-center lg:text-right">
                        <div class="flex align-items-center justify-content-center bg-purple-200 align-self-center lg:align-self-end" style="width: 4.2rem; height: 4.2rem; border-radius: 10px">
                            <i class="pi pi-fw pi-mobile text-5xl text-purple-700"></i>
                        </div>
                        <h2 class="line-height-1 text-900 text-4xl font-normal">Fast guarantee</h2>
                        <span class="text-700 text-2xl line-height-3 ml-0 md:ml-2" style="max-width: 650px"
                        >Choose from millions of available or reserve your space in advance. Join over 5.5 millions drivers enjoying easy parking.</span>
                    </div>
                </div>

            </div>

            <div id="pricing" class="py-4 px-4 lg:px-8 my-2 md:my-4">
                <div class="text-center">
                    <h2 class="text-900 font-normal mb-2">Suitable Pricing Plans</h2>
                    <span class="text-600 text-2xl">Fast & Easy</span>
                </div>

                <div class="grid justify-content-between mt-8 md:mt-0">
                    <div class="col-12 lg:col-4 p-0 md:p-3">
                        <div class="p-3 flex flex-column border-200 pricing-card cursor-pointer border-2 hover:border-primary transition-duration-300 transition-all" style="border-radius: 10px">
                            <h3 class="text-900 text-center my-5">Free</h3>
                            <img src="/demo/images/landing/free.svg" class="w-10 h-10 mx-auto" alt="free" />
                            <div class="my-5 text-center">
                                <span class="text-5xl font-bold mr-2 text-900">FREE</span>
                                <span class="text-600">for ever</span>
                                <Button label="Get Started" class="block mx-auto mt-4 p-button-rounded border-none ml-3 font-light line-height-2 bg-blue-500 text-white"></Button>
                            </div>
                            <Divider class="w-full bg-surface-200"></Divider>
                            <ul class="my-5 list-none p-0 flex text-900 flex-column">
                                <li class="py-2">
                                    <i class="pi pi-fw pi-check text-xl text-cyan-500 mr-2"></i>
                                    <span class="text-xl line-height-3">Mobile App</span>
                                </li>
                                <li class="py-2">
                                    <i class="pi pi-fw pi-check text-xl text-cyan-500 mr-2"></i>
                                    <span class="text-xl line-height-3">Unlimited Reservations</span>
                                </li>
                            </ul>
                        </div>
                    </div>

                    <div class="col-12 lg:col-4 p-0 md:p-3 mt-4 md:mt-0">
                        <div class="p-3 flex flex-column border-200 pricing-card cursor-pointer border-2 hover:border-primary transition-duration-300 transition-all" style="border-radius: 10px">
                            <h3 class="text-900 text-center my-5">Premium</h3>
                            <img src="/demo/images/landing/startup.svg" class="w-10 h-10 mx-auto" alt="startup" />
                            <div class="my-5 text-center">
                                <span class="text-5xl font-bold mr-2 text-900">S/.29.90</span>
                                <span class="text-600">per month</span>
                                <Button label="Try Free" class="block mx-auto mt-4 p-button-rounded border-none ml-3 font-light line-height-2 bg-blue-500 text-white"></Button>
                            </div>
                            <Divider class="w-full bg-surface-200"></Divider>
                            <ul class="my-5 list-none p-0 flex text-900 flex-column">
                                <li class="py-2">
                                    <i class="pi pi-fw pi-check text-xl text-cyan-500 mr-2"></i>
                                    <span class="text-xl line-height-3">Mobile App</span>
                                </li>
                                <li class="py-2">
                                    <i class="pi pi-fw pi-check text-xl text-cyan-500 mr-2"></i>
                                    <span class="text-xl line-height-3">Unlimited Reservations</span>
                                </li>
                                <li class="py-2">
                                    <i class="pi pi-fw pi-check text-xl text-cyan-500 mr-2"></i>
                                    <span class="text-xl line-height-3">Unlimited Support Ticket</span>
                                </li>
                            </ul>
                        </div>
                    </div>

                    <div class="col-12 lg:col-4 p-0 md:p-3 mt-4 md:mt-0">
                        <div class="p-3 flex flex-column border-200 pricing-card cursor-pointer border-2 hover:border-primary transition-duration-300 transition-all" style="border-radius: 10px">
                            <h3 class="text-900 text-center my-5">Platinum</h3>
                            <img src="/demo/images/landing/enterprise.svg" class="w-10 h-10 mx-auto" alt="enterprise" />
                            <div class="my-5 text-center">
                                <span class="text-5xl font-bold mr-2 text-900">S/.39.90</span>
                                <span class="text-600">per month</span>
                                <Button label="Get a Quote" class="block mx-auto mt-4 p-button-rounded border-none ml-3 font-light line-height-2 bg-blue-500 text-white"></Button>
                            </div>
                            <Divider class="w-full bg-surface-200"></Divider>
                            <ul class="my-5 list-none p-0 flex text-900 flex-column">
                                <li class="py-2">
                                    <i class="pi pi-fw pi-check text-xl text-cyan-500 mr-2"></i>
                                    <span class="text-xl line-height-3">Mobile App</span>
                                </li>
                                <li class="py-2">
                                    <i class="pi pi-fw pi-check text-xl text-cyan-500 mr-2"></i>
                                    <span class="text-xl line-height-3">Unlimited Reservations</span>
                                </li>
                                <li class="py-2">
                                    <i class="pi pi-fw pi-check text-xl text-cyan-500 mr-2"></i>
                                    <span class="text-xl line-height-3">Unlimited Support Ticket</span>
                                </li>
                                <li class="py-2">
                                    <i class="pi pi-fw pi-check text-xl text-cyan-500 mr-2"></i>
                                    <span class="text-xl line-height-3">Unlimited Cancel</span>
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>
            </div>

            <div class="py-4 px-4 mx-0 mt-8 lg:mx-8">
                <div class="grid justify-content-between">
                    <div class="col-12 md:col-2" style="margin-top: -1.5rem">
                        <a @click="smoothScroll('#home')" class="flex flex-wrap align-items-center justify-content-center md:justify-content-start md:mb-0 mb-3 cursor-pointer">
                            <img :src="logoUrl" alt="footer sections" width="50" height="50" class="mr-2" />
                            <h4 class="font-medium text-3xl text-900">GENIUS</h4>
                        </a>
                    </div>

                    <div class="col-12 md:col-10 lg:col-7">
                        <div class="grid text-center md:text-left">
                            <div class="col-12 md:col-3">
                                <h4 class="font-medium text-2xl line-height-3 mb-3 text-900">Company</h4>
                                <a class="line-height-3 text-xl block cursor-pointer mb-2 text-700">About Us</a>
                                <a class="line-height-3 text-xl block cursor-pointer mb-2 text-700">News</a>
                            </div>

                            <div class="col-12 md:col-3 mt-4 md:mt-0">
                                <h4 class="font-medium text-2xl line-height-3 mb-3 text-900">Resources</h4>
                                <a class="line-height-3 text-xl block cursor-pointer mb-2 text-700">Get Started</a>
                                <a class="line-height-3 text-xl block cursor-pointer mb-2 text-700">Learn</a>
                            </div>

                            <div class="col-12 md:col-3 mt-4 md:mt-0">
                                <h4 class="font-medium text-2xl line-height-3 mb-3 text-900">Community</h4>
                                <a class="line-height-3 text-xl block cursor-pointer mb-2 text-700">FAQ</a>
                                <a class="line-height-3 text-xl block cursor-pointer text-700">Blog</a>
                            </div>

                            <div class="col-12 md:col-3 mt-4 md:mt-0">
                                <h4 class="font-medium text-2xl line-height-3 mb-3 text-900">Legal</h4>
                                <a class="line-height-3 text-xl block cursor-pointer mb-2 text-700">Privacy Policy</a>
                                <a class="line-height-3 text-xl block cursor-pointer text-700">Terms of Service</a>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<!-- <style scoped>
#hero {
    background: linear-gradient(0deg, rgba(255, 255, 255, 0.2), rgba(255, 255, 255, 0.2)), radial-gradient(77.36% 256.97% at 77.36% 57.52%, #eeefaf 0%, #c3e3fa 100%);
    height: 700px;
    overflow: hidden;
}

@media screen and (min-width: 768px) {
    #hero {
        -webkit-clip-path: ellipse(150% 87% at 93% 13%);
        clip-path: ellipse(150% 87% at 93% 13%);
        height: 530px;
    }
}

@media screen and (min-width: 1300px) {
    #hero > img {
        position: absolute;
    }

    #hero > div > p {
        max-width: 450px;
    }
}

@media screen and (max-width: 1300px) {
    #hero {
        height: 600px;
    }

    #hero > img {
        position: static;
        transform: scale(1);
        margin-left: auto;
    }

    #hero > div {
        width: 100%;
    }

    #hero > div > p {
        width: 100%;
        max-width: 100%;
    }
}
</style> -->
