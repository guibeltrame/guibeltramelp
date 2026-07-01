<script setup lang="ts">
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
    <LandingVideoIntro />

    <main id="esconder" style="display: none;">
      <LandingPainIdentification />
      <LandingProblemReframe />
      <LandingAuthoritySection />
      <LandingMethodPillars />
      <LandingHeroSection />
      <LandingTriadeCreativaSection />
      <LandingCourseModules />
      <LandingStudentVideosSection />
      <LandingTestimonialsSection />
      <LandingPlatformBenefits />
      <LandingBonusSection />
      <LandingTimeValueSection />
      <LandingOfferSection />
      <LandingGuaranteeSection />
      <LandingTransformationSection />
      <LandingFAQSection />
      <LandingFinalCTASection />
     
    </main>
     <LandingFooterSection />
  </div>
</template>
