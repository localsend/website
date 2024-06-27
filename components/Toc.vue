<template>
  <div :class="{ 'sidebar-container': true, 'sidebar-open': isSidebarOpen }">
    <button class="close-btn" @click="toggleSidebar">×</button>
    <nav class="toc">
      <ul>
        <li v-for="(item, index) in tocItems" :key="index">
          <a :href="item.href" :class="{ active: activeLink === item.href }">{{ item.text }}</a>
          <ul v-if="item.children">
            <li v-for="(child, childIndex) in item.children" :key="childIndex">
              <a :href="child.href" :class="{ active: activeLink === child.href }">{{ child.text }}</a>
            </li>
          </ul>
        </li>
      </ul>
    </nav>
  </div>
  <button v-if="!isSidebarOpen" class="open-btn" @click="toggleSidebar">☰</button>
</template>


<script setup>
import { ref, onMounted } from 'vue';

const tocItems = ref([]);
const activeLink = ref('');
const isSidebarOpen = ref(window.innerWidth > 768);

const toggleSidebar = () => {
  isSidebarOpen.value = !isSidebarOpen.value;
};

onMounted(() => {
  const headers = document.querySelectorAll('h1');
  const toc = [];

  headers.forEach((header) => {
    const text = header.innerText;
    const id = text.replace(/\s+/g, '-').toLowerCase();
    header.id = id;

    toc.push({ text, href: `#${id}`, children: [] });
  });

  tocItems.value = toc;

  // Update the active link based on scroll position
  window.addEventListener('scroll', () => {
    let current = '';
    headers.forEach((header) => {
      const rect = header.getBoundingClientRect();
      if (rect.top <= 10 && rect.bottom >= 10) {
        current = `#${header.id}`;
      }
    });
    activeLink.value = current;
  });

  // Handle window resize
  window.addEventListener('resize', () => {
    if (window.innerWidth <= 768) {
      isSidebarOpen.value = false;
    } else {
      isSidebarOpen.value = true;
    }
  });
});
</script>


<style scoped>
.sidebar-container {
  position: fixed;
  top: 0;
  left: 0;
  width: 20vw;
  height: 100vh;
  overflow-y: auto;
  background-color: #fff;
  border-right: 1px solid #f2f2f2;
  padding: 20px;
  box-shadow: 2px 0 5px rgba(0, 0, 0, 0.1);
  transition: transform 0.3s ease;
  z-index: 1000;
}

.sidebar-open {
  transform: translateX(0);
}

.sidebar-container:not(.sidebar-open) {
  transform: translateX(-100%);
}

.close-btn {
  position: absolute;
  top: 10px;
  right: 10px;
  background: none;
  border: none;
  font-size: 24px;
  cursor: pointer;
}

.open-btn {
  position: fixed;
  top: 10px;
  left: 10px;
  background: none;
  border: none;
  font-size: 24px;
  cursor: pointer;
  z-index: 1000;
}

.toc ul {
  list-style: none;
  padding: 0;
  margin: 0;
}

.toc li {
  margin: 0 0 10px 0;
}

.toc a {
  display: block;
  text-decoration: none;
  color: #0d9488;
  padding: 5px 10px;
  border-radius: 4px;
}

.toc a:hover {
  background-color: #e5e7eb;
}

.toc a.active {
  background-color: #e2e2e2;
  color: #0d9488;
  font-weight: bold;
}

@media (max-width: 768px) {
  .sidebar-container {
    width: 100%;
  }

  .open-btn {
    left: 10px;
  }
}
</style>
