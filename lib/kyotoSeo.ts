import { kyotoFaqs } from "@/data/kyotoFaqs";
import {
  buildProductPageJsonLdGraph,
  buildProductPageMetadata,
  type ProductSeoConfig,
} from "@/lib/productPageSeo";

export const kyotoConfig: ProductSeoConfig = {
  name: "KYOTO Habit Tracker",
  tagline: "Build good habits. Stick with them. Grow with others.",
  path: "/kyoto-habit-tracker",
  description:
    "KYOTO is a warm, friendly habit tracker by FluvoSoft. Build good habits, quit bad ones, track streaks and mood, join clubs and challenges, and stay accountable with friends — optimistic, social, and encouraging.",
  shortDescription:
    "Warm coral habit tracker with streaks, mood, clubs, challenges, friends, and a leaderboard. Built by FluvoSoft.",
  keywords: [
    "KYOTO Habit Tracker",
    "habit tracker app",
    "daily habit tracker",
    "streak tracker",
    "habit clubs",
    "habit challenges",
    "mood tracker",
    "accountability app",
    "FluvoSoft KYOTO",
    "build good habits",
    "quit bad habits",
    "habit leaderboard",
    "social habit tracker",
  ],
  ogImagePath: "/habit_tracker/habit_tracker_kyoto_logo.png",
  ogImageAlt:
    "KYOTO Habit Tracker — warm coral habit app to build routines and grow with others by FluvoSoft",
  applicationCategory: "LifestyleApplication",
  operatingSystems: ["Android"],
  features: [
    "Daily habit check-ins and streaks",
    "Build good habits and quit bad ones",
    "Habit clubs and challenges",
    "Friends, notifications, and leaderboard",
    "Activity stats with daily, weekly, and monthly views",
    "Mood tracking alongside habit progress",
    "Achievements for consistency and community",
  ],
  screenshotPaths: [
    "/habit_tracker/habit_tracker_KYOTO_dashboard.jpeg",
    "/habit_tracker/habit_tracker_KYOTO_explore.jpeg",
    "/habit_tracker/habit_tracker_KYOTO_activity.jpeg",
    "/habit_tracker/habit_tracker_KYOTO_profile.jpeg",
    "/habit_tracker/habit_tracker_KYOTO_clubs.jpeg",
    "/habit_tracker/habit_tracker_KYOTO_leaderboard.jpeg",
    "/habit_tracker/habit_tracker_KYOTO_custom_habit.jpeg",
  ],
  playStoreUrl: "#",
  offers: [{ name: "Free", price: 0 }],
  faqs: kyotoFaqs.map((item) => ({
    question: item.question,
    answer: item.answer,
  })),
};

export const kyotoMetadata = buildProductPageMetadata(kyotoConfig);

export function buildKyotoJsonLdGraph() {
  return buildProductPageJsonLdGraph(kyotoConfig);
}
