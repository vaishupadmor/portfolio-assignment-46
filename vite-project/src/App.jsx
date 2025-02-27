import React from 'react'

function App() {
  return (
    <div>
      <nav class="bg-gray-900 text-white py-4">
    <div class="container mx-auto flex justify-between items-center px-4">
        <h1 class="text-xl font-bold pl-180">My Portfolio</h1>
        <ul class="flex space-x-4">
            <li><a href="#" class="hover:text-gray-300">Home</a></li>
            <li><a href="#about" class="hover:text-gray-300">About</a></li>
            <li><a href="#projects" class="hover:text-gray-300">Projects</a></li>
            <li><a href="#contact" class="hover:text-gray-300">Contact</a></li>
        </ul>
    </div>
</nav>
<section class="flex flex-col items-center justify-center text-center p-10 bg-gray-800 text-white">
    <h2 class="text-4xl font-bold">Hello, I'm [Vaishali Padmor]</h2>
    <p class="text-lg mt-4">A Frontend Developer specialized in Tailwind CSS.</p>
    <a href="#projects" class="mt-6 px-6 py-2 bg-blue-500 text-white rounded-lg hover:bg-blue-600">View My Work</a>
</section>
<section id="about" class="container mx-auto p-6 text-center">
    <h2 class="text-2xl font-semibold">About Me</h2>
    <p class="mt-4 text-gray-700">I am a web developer with expertise in Tailwind CSS and modern web technologies.</p>
</section>

<section id="projects" class="container mx-auto p-6">
    <h2 class="text-2xl font-semibold text-center">Projects</h2>
    <div class="grid md:grid-cols-3 gap-6 mt-6">
        <div class="bg-white shadow-md rounded-lg p-4">
            <h3 class="text-lg font-bold">Project 1</h3>
            <p class="text-gray-600">Description of project.</p>
        </div>
        <div class="bg-white shadow-md rounded-lg p-4">
            <h3 class="text-lg font-bold">Project 2</h3>
            <p class="text-gray-600">Description of project.</p>
        </div>
        <div class="bg-white shadow-md rounded-lg p-4">
            <h3 class="text-lg font-bold">Project 3</h3>
            <p class="text-gray-600">Description of project.</p>
        </div>
    </div>
</section>
<section id="contact" class="container mx-auto p-6 text-center">
    <h2 class="text-2xl font-semibold">Contact Me</h2>
    <p class="mt-4">Email: your.email@example.com</p>
</section>
<footer class="bg-gray-900 text-white text-center py-4 mt-6">
    <p>&copy; 2025 My Portfolio. All rights reserved.</p>
</footer>
    </div>
  )
}

export default App