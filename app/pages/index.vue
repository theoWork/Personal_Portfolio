<template>
  <div class="min-h-screen bg-neutral-900">
    <HeroSection />
    <div class="pt-0">
      <AboutSection />
      <SkillsSection />
      <ProjectsSection />
      <ContactSection />
    </div>
  </div>
</template>

<script setup>
// Landing page: composition of section components only.
// All section logic lives in app/components/sections/*.vue
import HeroSection from '~/components/hero/HeroSection.vue'
import AboutSection from '~/components/sections/AboutSection.vue'
import SkillsSection from '~/components/sections/SkillsSection.vue'
import ProjectsSection from '~/components/sections/ProjectsSection.vue'
import ContactSection from '~/components/sections/ContactSection.vue'
</script>