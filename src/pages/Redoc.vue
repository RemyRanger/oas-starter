<template>
	<div className="flex flex-col min-h-screen overflow-hidden">
		<!-- Site header -->
		<Header />
		<!-- Page content -->
		<main class="grow">
			<section class="relative">
				<div>
					<!-- Main content -->
					<div>
						<!-- Sidebar -->
						<Sidebar :sidebarOpen="sidebarOpen" @close-sidebar="sidebarOpen = false" class="px-4 sm:px-6" />
						<div class="md:pl-64">
							<div class="top-0 left-0 md:top-20 md:left-64 outer-container bg-white">
								<!-- Mobile hamburger + breadcrumbs -->
								<div class="md:hidden flex items-center pt-24 ml-3">
									<!-- Hamburger button -->
									<MenuButton :sidebarOpen="sidebarOpen"
										@toggle-sidebar="sidebarOpen = !sidebarOpen" />
									<!-- Breadcrumbs -->
									<div class="flex items-center text-sm whitespace-nowrap min-w-0 ml-3">
										<span class="text-slate-600">APIs</span>
										<svg class="fill-slate-400 shrink-0 mx-2" width="8" height="10"
											xmlns="http://www.w3.org/2000/svg">
											<path d="M1 2 2.414.586 6.828 5 2.414 9.414 1 8l3-3z" />
										</svg>
										<span class="text-slate-800 font-medium truncate">{{
											currentRoute.params.filename }}</span>
									</div>
								</div>

								<div ref="redoc" />
							</div>
						</div>
					</div>
				</div>
			</section>
		</main>
	</div>
</template>

<script>
import { ref } from 'vue'
import { useRouter } from 'vue-router'

import Header from '/src/partials/Header.vue'
import MenuButton from '../partials/MenuButton.vue'
import Sidebar from '../partials/Sidebar.vue'

export default {
	name: 'Redoc',
	components: {
		Header,
		MenuButton,
		Sidebar,
	},
	watch: {
		currentRoute(to) {
			this.initRedoc(to.params.filename)
		}
	},
	setup() {
		const currentRoute = useRouter().currentRoute
		const sidebarOpen = ref(false)
		const redoc = ref(null);

		return {
			currentRoute,
			sidebarOpen,
			redoc,
		}
	},
	mounted() {
		this.initRedoc(this.currentRoute.params.filename)
	},
	methods: {
		initRedoc(filename) {
			window.Redoc.init(
				__APP_BASE_URL__ + filename,
				{
					hideLogo: true,
					disableSearch: true
				},
				this.redoc
			)
		}
	}
}
</script>

<style>
.outer-container {
	display: flex;
	flex-direction: column;
	position: fixed;
	bottom: 0;
	right: 0;
	scroll-padding: 0 !important;
	scroll-behavior: unset !important;
	overflow-y: scroll;
}

.bg-white {
	background-color: aliceblue;
}
</style>
