<script setup lang="ts">
const isHydrated = ref(false);
const isReleased = ref(false);

onMounted(() => {
  isHydrated.value = true;
});

const isContentLocked = computed(() => isHydrated.value && !isReleased.value);

function onVideoReleased() {
  isReleased.value = true;
}

useSeoMeta({
  title: "Gui Beltrame - Crie solos do zero",
  description:
    "Aprenda a criar solos com personalidade usando a técnica que você já tem. Método estruturado para guitarristas que querem sair do piloto automático e improvisar com liberdade.",
  ogTitle: "Gui Beltrame - Crie solos do zero",
  ogDescription:
    "Método estruturado para guitarristas que querem sair do piloto automático e improvisar com liberdade criativa.",
  ogType: "website",
  ogLocale: "pt_BR",
  ogSiteName: "Gui Beltrame - Crie solos do zero",
});

useHead({
  link: [{ rel: "canonical", href: "https://exemplo.com.br" }],
});
</script>

<template>
  <div>
    <LandingVideoIntro video-id="ooGThGr93XE" @released="onVideoReleased" />

    <main
      :inert="isContentLocked || undefined"
      :aria-hidden="isContentLocked || undefined"
    >
      <LandingStudentMethodOpinionsSection />

      <LandingPainIdentification />
      <LandingProblemReframe />
      <LandingAuthoritySection />
      <LandingMethodPillars />
      <LandingHeroSection />
      <LandingTriadeCreativaSection />
      <LandingTestimonialsSection />
      <LandingStudentVideosSection />
      <LandingCourseModules />
      <LandingPlatformBenefits />
      <LandingBonusSection />
      <LandingTimeValueSection />
      <LandingOfferSection />
      <LandingGuaranteeSection />
      <LandingTransformationSection />
      <LandingFAQSection />
      <LandingFinalCTASection />
      <LandingFooterSection />
    </main>
  </div>
</template>
