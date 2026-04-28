<script setup lang="ts">
const { t } = useI18n();

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
  title: () => t("seo.home.title"),
  description: () => t("seo.home.description"),
  ogTitle: () => t("seo.home.ogTitle"),
  ogDescription: () => t("seo.home.ogDescription"),
  ogType: "website",
  ogSiteName: () => t("site.name"),
});
</script>

<template>
  <div>
    <SiteHeader :hidden="isContentLocked" />

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
