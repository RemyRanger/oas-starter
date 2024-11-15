<template>
  <div>
    <transition enter-active-class="transition ease-out duration-200" enter-from-class="opacity-0"
      enter-to-class="opacity-100" leave-active-class="transition ease-out duration-100" leave-from-class="opacity-100"
      leave-to-class="opacity-0">
      <div v-show="sidebarOpen" class="md:hidden fixed inset-0 z-10 bg-slate-900 bg-opacity-20 transition-opacity"
        aria-hidden="true"></div>
    </transition>

    <transition enter-active-class="transition ease-out duration-200 transform"
      enter-from-class="opacity-0 -translate-x-full" enter-to-class="opacity-100 translate-x-0"
      leave-active-class="transition ease-out duration-200" leave-from-class="opacity-100" leave-to-class="opacity-0">
      <aside id="sidebar"
        class="fixed left-0 top-0 bottom-0 w-60 h-screen border-r border-slate-200 md:left-auto md:shrink-0 z-10 md:!opacity-100 md:!block dark:border-slate-800 dark:bg-slate-900"
        ref="sidebar" v-show="sidebarOpen">
        <!-- Gradient bg displaying on light layout only -->
        <div
          class="absolute inset-0 -left-[9999px] bg-gradient-to-b from-slate-50 to-white pointer-events-none -z-10 dark:hidden"
          aria-hidden="true"></div>

        <div class="fixed top-0 bottom-0 w-64 px-4 sm:px-6 md:pl-0 md:pr-8 overflow-y-auto no-scrollbar">
          <div class="pt-24 md:pt-28 pb-8">

            <!-- Docs nav -->
            <nav class="md:block">
              <ul class="text-sm">
                <!-- 1st level -->
                <SidebarLinkGroup v-slot="parentLink" :activeCondition="currentRoute.fullPath.includes('documentation')">
                  <a class="relative flex items-center font-[650] text-slate-800 p-1 before:absolute before:inset-0 before:rounded before:bg-gradient-to-tr before:from-blue-400 before:to-purple-500 before:opacity-20 before:-z-10 before:pointer-events-none dark:text-slate-200"
                    :class="{ 'before:hidden': !currentRoute.fullPath.includes('documentation') }" href="#0"
                    @click.prevent="parentLink.handleClick()">
                    <svg class="mr-3 shrink-0" width="24" height="24" viewBox="0 0 24 24"
                      xmlns="http://www.w3.org/2000/svg">
                      <path class="fill-blue-400"
                        d="M19.888 7.804a.88.88 0 0 0-.314-.328l-7.11-4.346a.889.889 0 0 0-.927 0L4.426 7.476a.88.88 0 0 0-.314.328L12 12.624l7.888-4.82Z" />
                      <path class="fill-white dark:fill-slate-800"
                        d="M4.112 7.804a.889.889 0 0 0-.112.43v7.892c0 .31.161.597.426.758l7.11 4.346c.14.085.3.13.464.13v-8.736l-7.888-4.82Z" />
                      <path class="fill-blue-600"
                        d="M19.888 7.804c.073.132.112.28.112.43v7.892c0 .31-.161.597-.426.758l-7.11 4.346c-.14.085-.3.13-.464.13v-8.736l7.888-4.82Z" />
                    </svg>
                    <span>Documentation</span>
                  </a>
                  <ul class="mb-3 ml-4 pl-6 border-l border-slate-200 dark:border-slate-800">
                    <li class="mt-3">
                      <router-link to="/documentation/getting-started" custom v-slot="{ href, navigate, isExactActive }">
                        <a class="flex items-center space-x-3 font-medium"
                          :class="isExactActive ? 'text-blue-600' : 'text-slate-800 dark:text-slate-200'" :href="href"
                          @click="navigate">Getting started</a>
                      </router-link>
                    </li>
                  </ul>
                </SidebarLinkGroup>
                <!-- 1st level -->
                <SidebarLinkGroup v-slot="parentLink" :activeCondition="currentRoute.fullPath.includes('oas')">
                  <a class="relative flex items-center font-[650] text-slate-800 p-1 before:absolute before:inset-0 before:rounded before:bg-gradient-to-tr before:from-blue-400 before:to-purple-500 before:opacity-20 before:-z-10 before:pointer-events-none dark:text-slate-200"
                    :class="{ 'before:hidden': !currentRoute.fullPath.includes('oas') }" href="#0"
                    @click.prevent="parentLink.handleClick()">
                    <svg class="mr-3 shrink-0" width="24" height="24" viewBox="0 0 24 24"
                      xmlns="http://www.w3.org/2000/svg">
                      <path class="fill-sky-400"
                        d="M19.888 7.804a.88.88 0 0 0-.314-.328l-7.11-4.346a.889.889 0 0 0-.927 0L4.426 7.476a.88.88 0 0 0-.314.328L12 12.624l7.888-4.82Z" />
                      <path class="fill-white dark:fill-slate-800"
                        d="M4.112 7.804a.889.889 0 0 0-.112.43v7.892c0 .31.161.597.426.758l7.11 4.346c.14.085.3.13.464.13v-8.736l-7.888-4.82Z" />
                      <path class="fill-sky-600"
                        d="M19.888 7.804c.073.132.112.28.112.43v7.892c0 .31-.161.597-.426.758l-7.11 4.346c-.14.085-.3.13-.464.13v-8.736l7.888-4.82Z" />
                    </svg>
                    <span>APIs &nbsp;</span>
                    <span class="bg-blue-100 text-blue-800 text-xs font-medium ms-2 px-2 py-0.5 rounded dark:bg-blue-900 dark:text-blue-300">Beta</span>
                  </a>
                  <ul class="mb-3 ml-4 pl-6 border-l border-slate-200 dark:border-slate-800">
                    <li v-for="api in apis" class="mt-3">
                      <router-link :to="'/oas/' + api.specs[0].filename" custom v-slot="{ href, navigate, isExactActive }">
                        <a class="flex items-center space-x-3 font-medium"
                          :class="isExactActive ? 'text-blue-600' : 'text-slate-800 dark:text-slate-200'" :href="href"
                          @click="navigate">{{ api.label }}</a>
                      </router-link>
                    </li>
                  </ul>
                </SidebarLinkGroup>
              </ul>
            </nav>
          </div>
        </div>

      </aside>
    </transition>
  </div>
</template>

<script>
import { ref, onMounted, onUnmounted } from 'vue'
import { useRouter } from 'vue-router';
import yaml from 'js-yaml';

import SidebarLinkGroup from '../utils/SidebarLinkGroup.vue'
import SidebarLinkSubgroup from '../utils/SidebarLinkSubgroup.vue'

export default {
  name: 'Sidebar',
  props: ['sidebarOpen'],
  components: {
    SidebarLinkGroup,
    SidebarLinkSubgroup,
  },
  setup(props, { emit }) {

    const sidebar = ref(null)
		const apis = ref([]);

    const currentRoute = useRouter().currentRoute.value

    // close on click outside
    const clickHandler = ({ target }) => {
      if (!sidebar.value) return
      if (
        !props.sidebarOpen ||
        sidebar.value.contains(target)
      ) return
      emit('close-sidebar')
    }

    // close if the esc key is pressed
    const keyHandler = ({ keyCode }) => {
      if (!props.sidebarOpen || keyCode !== 27) return
      emit('close-sidebar')
    }

    onMounted(() => {
      document.addEventListener('click', clickHandler)
      document.addEventListener('keydown', keyHandler)
    })

    onUnmounted(() => {
      document.removeEventListener('click', clickHandler)
      document.removeEventListener('keydown', keyHandler)
    })

		fetch(`${__APP_BASE_URL__}.redocly.yaml`)
			.then((response) => response.text())
			.then((text) => yaml.load(text))
			.then(redoclyConfig => {
				const keys = Object.keys(redoclyConfig.apis)

				keys.forEach(key => {
					const label = key.split('@')[0]
					if (!apis.value.some(api => api.label === label)) {
						apis.value.push({
							label,
							specs: []
						})
					}
				})

				apis.value.forEach(api => {
					keys.forEach(key => {
						let splitKey = key.split('@')
						if (api.label === splitKey[0]) {
							api.specs.push({
								label: splitKey[1],
								filename: redoclyConfig.apis[key].output.split('/').pop()
							})
						}
					})
				})
			})
			.catch((error) => {
				console.error("Erreur lors du chargement du fichier YAML :", error);
			});

		return {
      currentRoute,
      sidebar,
			apis,
    }
  },
}
</script>
