<template>
  <li class="mt-3">
    <a
      class="flex items-center space-x-3 text-slate-800 font-medium dark:text-slate-200"
      href="#0"
      @click.prevent="open = !open"
      aria-haspopup="true"
      :aria-expanded="open"
    >
      <svg class="fill-slate-400 shrink-0 ml-2" :class="{ 'rotate-90': open }" width="8" height="10" xmlns="http://www.w3.org/2000/svg">
        <path d="M1 2 2.414.586 6.828 5 2.414 9.414 1 8l3-3z" />
      </svg>
      <span>{{title}}</span>
    </a>
    <!-- 3rd level -->
    <ul class="mb-3 ml-1 pl-4 border-l border-slate-200 dark:border-slate-800" :class="{ 'hidden': !open }">
      <slot />
    </ul>
  </li>
</template>
<script>
export default {
  name: 'SidebarLinkSubgroup',
  props: ['title', 'open'],
}
</script>