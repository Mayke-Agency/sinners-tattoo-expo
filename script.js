(() => {
  "use strict";

  const selectors = {
    header: document.getElementById("site-header"),
    floatingCta: document.getElementById("floating-cta"),
    hero: document.querySelector(".hero"),
    revealTargets: document.querySelectorAll(
      ".section-heading, .intro-content, .artist-card, .lineup-card, .schedule-day, .tickets-panel, .feature-card, .gallery-item, .apply-card, .faq-item, .final-cta-panel",
    ),
    faqItems: document.querySelectorAll(".faq-item"),
    heroVideo: document.querySelector(".hero-video"),
    artistModal: document.getElementById("artist-modal"),
    artistModalTriggers: document.querySelectorAll(
      "[data-artist-modal-trigger]",
    ),
    anchorLinks: document.querySelectorAll('a[href^="#"]'),
    menuToggle: document.getElementById("menu-toggle"),
    siteNav: document.getElementById("site-nav"),
    siteNavLinks: document.querySelectorAll(".site-nav-link"),
    statSection: document.querySelector(".hype-strip"),
    statNumbers: document.querySelectorAll(".stat-number"),
    gallerySlides: document.querySelectorAll(".gallery-slide"),
  };

  const state = {
    prefersReducedMotion: window.matchMedia("(prefers-reduced-motion: reduce)")
      .matches,
    activeModalTrigger: null,
  };

  const ticketUrl =
    "https://ticketscandy.com/e/sinners-tattoo-expo-2026-15722";

  const artistProfiles = {
    "victor-portugal": {
      name: "Victor Portugal",
      image: "assets/images/artists/victor-portugal.webp",
      handle: "@victorportugal",
      instagramUrl: "https://www.instagram.com/victorportugal/",
      bio: "The Uruguayan-born, Poland-based dark art king brings 25+ years of biomech, surreal black-and-grey, and horror-soaked detail to the Sinners floor.",
      specialties: ["Black and grey", "Dark surrealism", "Biomechanical horror"],
      pieces: createFeaturedPieceSlots("Victor Portugal", [
        "assets/images/featured/victor-portugal-1.webp",
        "assets/images/featured/victor-portugal-2.webp",
        "assets/images/featured/victor-portugal-3.webp",
        "assets/images/featured/victor-portugal-4.webp",
        "assets/images/featured/victor-portugal-5.webp",
        "assets/images/featured/victor-portugal-6.webp",
      ]),
    },
    "deanna-james": {
      name: "Deanna James",
      image: "assets/images/artists/deanna-james.webp",
      handle: "@deanna_art",
      instagramUrl: "https://www.instagram.com/deanna_art/",
      bio: "Known as “The Painterly Tattooer,” Deanna brings fine-art instincts, oil-painting softness, and Ink Master-proven technique to every collector session.",
      specialties: ["Painterly realism", "Fine art tattoos", "Color portraiture"],
      pieces: createFeaturedPieceSlots("Deanna James", [
        "assets/images/featured/deanna-james-1.webp",
        "assets/images/featured/deanna-james-2.webp",
        "assets/images/featured/deanna-james-3.webp",
        "assets/images/featured/deanna-james-4.webp",
        "assets/images/featured/deanna-james-5.webp",
        "assets/images/featured/deanna-james-6.webp",
      ]),
    },
    "zack-singer": {
      name: "Zack Singer",
      image: "assets/images/artists/zack-singer.webp",
      handle: "@zacksingerink",
      instagramUrl: "https://www.instagram.com/zacksingerink/",
      bio: "Dallas-bred and two decades deep, Zack blends dotwork, surrealism, and black-and-grey portraiture into work that feels unmistakably his.",
      specialties: ["Surrealism", "Dotwork", "Black and grey portraiture"],
      pieces: createFeaturedPieceSlots("Zack Singer", [
        "assets/images/featured/zack-singer-1.webp",
        "assets/images/featured/zack-singer-2.webp",
        "assets/images/featured/zack-singer-3.webp",
        "assets/images/featured/zack-singer-4.webp",
        "assets/images/featured/zack-singer-5.webp",
        "assets/images/featured/zack-singer-6.webp",
      ]),
    },
    "jon-nelson": {
      name: "Jon Nelson",
      image: "assets/images/artists/jon-nelson.webp",
      handle: "@jonnelsonart",
      instagramUrl: "https://www.instagram.com/jonnelsonart/",
      bio: "Jon brings bold, readable tattooing built for collectors who want impact from across the room and detail up close.",
      specialties: ["Illustrative blackwork", "Neo-traditional color", "Large-scale custom work"],
      pieces: createFeaturedPieceSlots("Jon Nelson", [
        "assets/images/featured/jon-nelson-1.webp",
        "assets/images/featured/jon-nelson-2.webp",
        "assets/images/featured/jon-nelson-3.webp",
        "assets/images/featured/jon-nelson-4.webp",
        "assets/images/featured/jon-nelson-5.webp",
        "assets/images/featured/jon-nelson-6.webp",
      ]),
    },
    "daria-pirojenko": {
      name: "Daria Pirojenko",
      image: "assets/images/artists/daria-pirojenko.webp",
      handle: "@dariapirojenko",
      instagramUrl: "https://www.instagram.com/dariapirojenko/",
      bio: "Daria's work leans elegant, delicate, and precise, with soft movement that makes fine-line pieces feel personal instead of quiet.",
      specialties: ["Fine line", "Botanical detail", "Ornamental composition"],
      pieces: createFeaturedPieceSlots("Daria Pirojenko", [
        "assets/images/featured/daria-pirojenko-1.webp",
        "assets/images/featured/daria-pirojenko-2.webp",
        "assets/images/featured/daria-pirojenko-3.webp",
        "assets/images/featured/daria-pirojenko-4.webp",
        "assets/images/featured/daria-pirojenko-5.webp",
        "assets/images/featured/daria-pirojenko-6.webp",
      ]),
    },
    "kevin-laroy": {
      name: "Kevin Laroy",
      image: "assets/images/artists/kevin-laroy.webp",
      handle: "@kevinlaroy",
      instagramUrl: "https://www.instagram.com/kevinlaroy/",
      bio: "Kevin is known for polished, camera-ready work with a high-fashion edge and a booth presence that draws a crowd.",
      specialties: ["Portrait realism", "Celebrity-inspired pieces", "Black and grey detail"],
      pieces: createFeaturedPieceSlots("Kevin Laroy", [
        "assets/images/featured/kevin-laroy-1.webp",
        "assets/images/featured/kevin-laroy-2.webp",
        "assets/images/featured/kevin-laroy-3.webp",
        "assets/images/featured/kevin-laroy-4.webp",
        "assets/images/featured/kevin-laroy-5.webp",
        "assets/images/featured/kevin-laroy-6.webp",
      ]),
    },
    winnie: {
      name: "Winnie The Jroo",
      image: "assets/images/artists/winnie.webp",
      handle: "@winniethejroo",
      instagramUrl: "https://www.instagram.com/winniethejroo/",
      bio: "Winnie mixes playful character energy with serious craft, turning high-personality ideas into clean, memorable tattoos.",
      specialties: ["Anime and pop culture", "Color character work", "Expressive custom flash"],
      pieces: createFeaturedPieceSlots("Winnie The Jroo", [
        "assets/images/featured/winnie-1.webp",
        "assets/images/featured/winnie-2.webp",
        "assets/images/featured/winnie-3.webp",
        "assets/images/featured/winnie-4.webp",
        "assets/images/featured/winnie-5.webp",
        "assets/images/featured/winnie-6.webp",
      ]),
    },
    "andy-pho": {
      name: "Andy Pho",
      image: "assets/images/artists/andy-pho.webp",
      handle: "@andypho",
      instagramUrl: "https://www.instagram.com/andypho/",
      bio: "Andy builds dramatic pieces with cinematic depth, clean contrast, and a collector-first approach to large concepts.",
      specialties: ["Black and grey realism", "Surreal portraiture", "Large-scale sleeves"],
      pieces: createFeaturedPieceSlots("Andy Pho", [
        "assets/images/featured/andy-pho-1.webp",
        "assets/images/featured/andy-pho-2.webp",
        "assets/images/featured/andy-pho-3.webp",
        "assets/images/featured/andy-pho-4.webp",
        "assets/images/featured/andy-pho-5.webp",
        "assets/images/featured/andy-pho-6.webp",
      ]),
    },
    "joao-morais": {
      name: "João Morais",
      image: "assets/images/artists/joao-morais.webp",
      handle: "@joaomoraisart",
      instagramUrl: "https://www.instagram.com/joaomoraisart/",
      bio: "João brings a sharp eye for movement, shape, and tone, creating work that feels refined without losing intensity.",
      specialties: ["Blackwork", "Geometric flow", "Abstract realism"],
      pieces: createFeaturedPieceSlots("João Morais", [
        "assets/images/featured/joao-morais-1.webp",
        "assets/images/featured/joao-morais-2.webp",
        "assets/images/featured/joao-morais-3.webp",
        "assets/images/featured/joao-morais-4.webp",
        "assets/images/featured/joao-morais-5.webp",
        "assets/images/featured/joao-morais-6.webp",
      ]),
    },
    "anthony-michaels": {
      name: "Anthony Michaels",
      image: "assets/images/artists/anthony-michaels.webp",
      handle: "@antmikes",
      instagramUrl: "https://www.instagram.com/antmikes/",
      bio: "Anthony brings competition-level polish and big-stage experience to pieces that balance technical control with personality.",
      specialties: ["Color realism", "Surreal concepts", "Award-winning custom tattoos"],
      pieces: createFeaturedPieceSlots("Anthony Michaels", [
        "assets/images/featured/ant-michaels-1.webp",
        "assets/images/featured/ant-michaels-2.webp",
        "assets/images/featured/ant-michaels-3.webp",
        "assets/images/featured/ant-michaels-4.webp",
        "assets/images/featured/ant-michaels-5.webp",
        "assets/images/featured/ant-michaels-6.webp",
      ]),
    },
    "tony-v": {
      name: "Tony V",
      image: "assets/images/artists/tony-v.webp",
      handle: "@tonyvtattoos",
      instagramUrl: "https://www.instagram.com/tonyvtattoos/",
      bio: "Tony's work is built on strong composition, confident contrast, and custom pieces made to stand out on a busy expo floor.",
      specialties: ["Neo-traditional", "Illustrative realism", "Bold color work"],
      pieces: createFeaturedPieceSlots("Tony V", [
        "assets/images/featured/tony-v-1.webp",
        "assets/images/featured/tony-v-2.webp",
        "assets/images/featured/tony-v-3.webp",
        "assets/images/featured/tony-v-4.webp",
        "assets/images/featured/tony-v-5.webp",
        "assets/images/featured/tony-v-6.webp",
      ]),
    },
  };

  function createFeaturedPieceSlots(artistName, imagePaths = []) {
    return Array.from({ length: 6 }, (_, index) => ({
      alt: `${artistName} featured tattoo piece ${index + 1}`,
      src: imagePaths[index] || "",
    }));
  }

  function init() {
    handleHeaderState();
    setupScrollListeners();
    setupRevealAnimations();
    setupFaqAccordion();
    setupArtistModal();
    setupSmoothAnchorBehavior();
    setupVideoPlaybackFallback();
    setupMobileCtaVisibility();
    setupMenu();
    setupStatCounters();
    setupGalleryCarousel();
  }

  function setupMenu() {
    const { menuToggle, siteNav, siteNavLinks } = selectors;
    if (!menuToggle || !siteNav) return;

    menuToggle.addEventListener("click", () => {
      const isOpen = siteNav.classList.toggle("is-open");
      menuToggle.classList.toggle("is-active", isOpen);
      menuToggle.setAttribute("aria-expanded", String(isOpen));
      menuToggle.setAttribute(
        "aria-label",
        isOpen ? "Close navigation menu" : "Open navigation menu",
      );
      document.body.classList.toggle("menu-open", isOpen);
    });

    siteNavLinks.forEach((link) => {
      link.addEventListener("click", () => {
        closeMenu();
      });
    });

    document.addEventListener("click", (event) => {
      const clickedInsideMenu = siteNav.contains(event.target);
      const clickedToggle = menuToggle.contains(event.target);

      if (!clickedInsideMenu && !clickedToggle) {
        closeMenu();
      }
    });

    document.addEventListener("keydown", (event) => {
      if (event.key === "Escape") {
        closeMenu();
      }
    });
  }

  function closeMenu() {
    const { menuToggle, siteNav } = selectors;
    if (!menuToggle || !siteNav) return;

    siteNav.classList.remove("is-open");
    menuToggle.classList.remove("is-active");
    menuToggle.setAttribute("aria-expanded", "false");
    menuToggle.setAttribute("aria-label", "Open navigation menu");
    document.body.classList.remove("menu-open");
  }

  function setupScrollListeners() {
    let ticking = false;

    const onScroll = () => {
      if (!ticking) {
        window.requestAnimationFrame(() => {
          handleHeaderState();
          setupMobileCtaVisibility();
          ticking = false;
        });
        ticking = true;
      }
    };

    window.addEventListener("scroll", onScroll, { passive: true });
    window.addEventListener("resize", onScroll);
  }

  function handleHeaderState() {
    if (!selectors.header) return;

    const isScrolled = window.scrollY > 24;
    selectors.header.classList.toggle("is-scrolled", isScrolled);
  }

  function setupMobileCtaVisibility() {
    const cta = document.getElementById("floating-cta");
    const hero = document.querySelector(".hero");
    const footer = document.querySelector(".site-footer");

    if (!cta || !hero || !footer) return;

    const isMobile = () => window.innerWidth <= 820;

    const updateCtaVisibility = () => {
      if (!isMobile()) {
        cta.classList.remove("is-visible");
        return;
      }

      const heroBottom = hero.getBoundingClientRect().bottom;
      const footerTop = footer.getBoundingClientRect().top;
      const viewportHeight = window.innerHeight;

      const pastHero = heroBottom < 120;
      const nearFooter = footerTop < viewportHeight - 120;

      if (pastHero && !nearFooter) {
        cta.classList.add("is-visible");
      } else {
        cta.classList.remove("is-visible");
      }
    };

    updateCtaVisibility();

    window.addEventListener("scroll", updateCtaVisibility, { passive: true });
    window.addEventListener("resize", updateCtaVisibility);
  }

  function setupRevealAnimations() {
    if (!selectors.revealTargets.length) return;

    selectors.revealTargets.forEach((element) => {
      element.classList.add("reveal");
    });

    if (state.prefersReducedMotion || !("IntersectionObserver" in window)) {
      selectors.revealTargets.forEach((element) => {
        element.classList.add("is-visible");
      });
      return;
    }

    const observer = new IntersectionObserver(
      (entries, io) => {
        entries.forEach((entry) => {
          if (!entry.isIntersecting) return;
          entry.target.classList.add("is-visible");
          io.unobserve(entry.target);
        });
      },
      {
        threshold: 0.14,
        rootMargin: "0px 0px -40px 0px",
      },
    );

    selectors.revealTargets.forEach((element) => observer.observe(element));
  }

  function setupFaqAccordion() {
    if (!selectors.faqItems.length) return;

    selectors.faqItems.forEach((item) => {
      item.addEventListener("toggle", () => {
        if (!item.open) return;

        selectors.faqItems.forEach((otherItem) => {
          if (otherItem !== item && otherItem.open) {
            otherItem.open = false;
          }
        });
      });
    });
  }

  function setupArtistModal() {
    const { artistModal, artistModalTriggers } = selectors;
    if (!artistModal || !artistModalTriggers.length) return;

    const closeButtons = artistModal.querySelectorAll(
      "[data-artist-modal-close]",
    );
    const cta = artistModal.querySelector("[data-artist-modal-cta]");

    artistModalTriggers.forEach((trigger) => {
      trigger.addEventListener("click", (event) => {
        event.preventDefault();
        event.stopImmediatePropagation();

        const artistId = trigger.dataset.artistModalTrigger;
        const profile = artistProfiles[artistId];
        if (!profile) return;

        openArtistModal(profile, trigger);
      });
    });

    closeButtons.forEach((button) => {
      button.addEventListener("click", closeArtistModal);
    });

    artistModal.addEventListener("keydown", (event) => {
      if (event.key === "Tab") {
        trapModalFocus(event);
      }
    });

    document.addEventListener("keydown", (event) => {
      if (
        event.key === "Escape" &&
        artistModal.classList.contains("is-open")
      ) {
        closeArtistModal();
      }
    });

    if (cta) {
      cta.addEventListener("click", () => {
        if (typeof fbq === "function") {
          fbq("track", "InitiateCheckout", {
            location: "artist_modal",
            artist: cta.dataset.artistName || "",
          });
        }
      });
    }
  }

  function openArtistModal(profile, trigger) {
    const { artistModal } = selectors;
    if (!artistModal) return;

    state.activeModalTrigger = trigger;
    closeMenu();
    populateArtistModal(profile);
    artistModal.classList.add("is-open");
    artistModal.setAttribute("aria-hidden", "false");
    document.body.classList.add("modal-open");

    const closeButton = artistModal.querySelector(".artist-modal-close");
    if (closeButton) {
      closeButton.focus({ preventScroll: true });
    }
  }

  function closeArtistModal() {
    const { artistModal } = selectors;
    if (!artistModal || !artistModal.classList.contains("is-open")) return;

    artistModal.classList.remove("is-open");
    artistModal.setAttribute("aria-hidden", "true");
    document.body.classList.remove("modal-open");

    if (state.activeModalTrigger) {
      state.activeModalTrigger.focus({ preventScroll: true });
    }

    state.activeModalTrigger = null;
  }

  function populateArtistModal(profile) {
    const { artistModal } = selectors;
    if (!artistModal) return;

    const photo = artistModal.querySelector("[data-artist-modal-photo]");
    const name = artistModal.querySelector("[data-artist-modal-name]");
    const instagram = artistModal.querySelector(
      "[data-artist-modal-instagram]",
    );
    const bio = artistModal.querySelector("[data-artist-modal-bio]");
    const specialties = artistModal.querySelector(
      "[data-artist-modal-specialties]",
    );
    const pieces = artistModal.querySelector("[data-artist-modal-pieces]");
    const cta = artistModal.querySelector("[data-artist-modal-cta]");

    if (photo) {
      photo.src = profile.image;
      photo.alt = `${profile.name} tattoo artist`;
    }

    if (name) name.textContent = profile.name;

    if (instagram) {
      instagram.textContent = `${profile.handle} on Instagram`;
      instagram.href = profile.instagramUrl;
      instagram.setAttribute(
        "aria-label",
        `Open ${profile.name}'s Instagram profile`,
      );
    }

    if (bio) bio.textContent = profile.bio;

    renderListItems(specialties, profile.specialties, "li");
    renderFeaturedPieces(pieces, profile.pieces);

    if (cta) {
      cta.textContent = `Get Your Tickets to See ${profile.name}`;
      cta.href = ticketUrl;
      cta.dataset.artistName = profile.name;
    }
  }

  function renderListItems(container, items, tagName, className = "") {
    if (!container) return;

    container.replaceChildren();

    items.forEach((item) => {
      const element = document.createElement(tagName);
      element.textContent = item;
      if (className) {
        element.className = className;
      }
      container.appendChild(element);
    });
  }

  function renderFeaturedPieces(container, pieces) {
    if (!container) return;

    container.replaceChildren();

    pieces.forEach((piece, index) => {
      const slot = document.createElement("div");
      slot.className = "artist-modal-piece";

      if (piece.src) {
        const image = document.createElement("img");
        image.src = piece.src;
        image.alt = piece.alt || `Featured tattoo piece ${index + 1}`;
        slot.appendChild(image);
      } else {
        slot.classList.add("is-empty");
        slot.textContent = `Piece ${index + 1}`;
      }

      container.appendChild(slot);
    });
  }

  function trapModalFocus(event) {
    const { artistModal } = selectors;
    if (!artistModal) return;

    const focusableElements = artistModal.querySelectorAll(
      'a[href], button:not([disabled]), [tabindex]:not([tabindex="-1"])',
    );
    if (!focusableElements.length) return;

    const firstElement = focusableElements[0];
    const lastElement = focusableElements[focusableElements.length - 1];

    if (event.shiftKey && document.activeElement === firstElement) {
      event.preventDefault();
      lastElement.focus();
    } else if (!event.shiftKey && document.activeElement === lastElement) {
      event.preventDefault();
      firstElement.focus();
    }
  }

  function setupSmoothAnchorBehavior() {
    if (!selectors.anchorLinks.length) return;

    selectors.anchorLinks.forEach((link) => {
      link.addEventListener("click", (event) => {
        const href = link.getAttribute("href");
        if (!href || href === "#" || href === "#!") return;

        const target = document.querySelector(href);
        if (!target) return;

        event.preventDefault();

        const headerOffset = selectors.header
          ? selectors.header.offsetHeight
          : 0;
        const targetTop =
          target.getBoundingClientRect().top +
          window.pageYOffset -
          headerOffset -
          12;

        window.scrollTo({
          top: Math.max(targetTop, 0),
          behavior: state.prefersReducedMotion ? "auto" : "smooth",
        });
      });
    });
  }

  function setupVideoPlaybackFallback() {
    const video = document.querySelector(".hero-video");
    if (!video) return;

    // Safari-friendly autoplay state
    video.muted = true;
    video.defaultMuted = true;
    video.playsInline = true;
    video.setAttribute("muted", "");
    video.setAttribute("playsinline", "");
    video.setAttribute("webkit-playsinline", "");

    const tryPlay = async () => {
      try {
        await video.play();
      } catch (error) {
        console.warn("Autoplay blocked:", error);
        video.setAttribute("controls", "controls");
      }
    };

    if (document.readyState === "complete") {
      tryPlay();
    } else {
      window.addEventListener("load", tryPlay, { once: true });
    }

    document.addEventListener("visibilitychange", () => {
      if (document.hidden) {
        video.pause();
        return;
      }

      tryPlay();
    });
  }

  function setupStatCounters() {
    const { statSection, statNumbers } = selectors;
    if (!statSection || !statNumbers.length) return;

    let hasAnimated = false;

    const formatValue = (value, prefix = "", suffix = "") => {
      return `${prefix}${value.toLocaleString()}${suffix}`;
    };

    const animateCounter = (element) => {
      const target = Number(element.dataset.target || 0);
      const prefix = element.dataset.prefix || "";
      const suffix = element.dataset.suffix || "";
      const duration = 1800;
      const startTime = performance.now();

      const step = (currentTime) => {
        const elapsed = currentTime - startTime;
        const progress = Math.min(elapsed / duration, 1);

        const easedProgress = 1 - Math.pow(1 - progress, 3);
        const currentValue = Math.round(target * easedProgress);

        element.textContent = formatValue(currentValue, prefix, suffix);

        if (progress < 1) {
          requestAnimationFrame(step);
        } else {
          element.textContent = formatValue(target, prefix, suffix);
        }
      };

      requestAnimationFrame(step);
    };

    const startCounters = () => {
      if (hasAnimated) return;
      hasAnimated = true;
      statNumbers.forEach((number) => animateCounter(number));
    };

    if (!("IntersectionObserver" in window)) {
      startCounters();
      return;
    }

    const observer = new IntersectionObserver(
      (entries, io) => {
        entries.forEach((entry) => {
          if (!entry.isIntersecting) return;
          startCounters();
          io.unobserve(entry.target);
        });
      },
      {
        threshold: 0.35,
      },
    );

    observer.observe(statSection);
  }

  function setupGalleryCarousel() {
    const { gallerySlides } = selectors;
    if (!gallerySlides.length) return;

    let currentIndex = 0;
    const totalSlides = gallerySlides.length;
    const intervalDuration = 6500;

    const showSlide = (index) => {
      gallerySlides.forEach((slide, slideIndex) => {
        slide.classList.toggle("is-active", slideIndex === index);
      });
    };

    showSlide(currentIndex);

    window.setInterval(() => {
      currentIndex = (currentIndex + 1) % totalSlides;
      showSlide(currentIndex);
    }, intervalDuration);
  }

  init();
})();
