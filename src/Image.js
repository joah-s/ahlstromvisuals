const Image = () => {
return(
  <div class="min-h-screen flex flex-col">
  <header class="bg-gray-800 py-4">
    <nav class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex items-center justify-between">
      <div class="flex items-center">
        <img class="h-8 w-auto" src="https://tailwindui.com/img/logos/workflow-mark-indigo-500.svg" alt="Workflow" />
      </div>
      <div class="hidden md:block">
        <ul class="ml-10 flex items-center space-x-4">
          <li class="text-gray-300 hover:text-white px-3 py-2 rounded-md text-sm font-medium">Dashboard</li>
          <li class="text-gray-300 hover:text-white px-3 py-2 rounded-md text-sm font-medium">Team</li>
          <li class="text-gray-300 hover:text-white px-3 py-2 rounded-md text-sm font-medium">Projects</li>
          <li class="text-gray-300 hover:text-white px-3 py-2 rounded-md text-sm font-medium">Calendar</li>
        </ul>
      </div>
      <div class="-mr-2 flex md:hidden">
        <button type="button" class="bg-gray-900 inline-flex items-center justify-center p-2 rounded-md text-gray-400 hover:text-white hover:bg-gray-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-gray-800 focus:ring-white" aria-expanded="false">
          <span class="sr-only">Open main menu</span>
          
          <svg class="block h-6 w-6" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true">
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 6h16M4 12h16M4 18h16" />
          </svg>
         
          <svg class="hidden h-6 w-6" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true">
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M6 18L18 6M6 6l12 12" />
          </svg>
        </button>
      </div>
    </nav>
  </header>
  <main class="flex-grow">
    
  </main>
  <footer class="bg-gray-800 py-8">
    <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <p class="text-center text-gray-400">
        © 2021 My Website
      </p>
    </div>
  </footer>
</div>

);
};

export default Image;