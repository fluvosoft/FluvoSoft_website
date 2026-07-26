export type KyotoFaqCategory =
  | "All"
  | "Account"
  | "Habits"
  | "Social"
  | "Progress"
  | "General";

export type KyotoFaq = {
  id: string;
  question: string;
  answer: string;
  category: Exclude<KyotoFaqCategory, "All">;
};

export const kyotoFaqCategories: KyotoFaqCategory[] = [
  "All",
  "Account",
  "Habits",
  "Social",
  "Progress",
  "General",
];

export const kyotoFaqs: KyotoFaq[] = [
  {
    id: "getting-started",
    category: "Account",
    question: "How do I get started with KYOTO?",
    answer:
      "New users see a branded welcome and short onboarding slides about habits, progress, and staying motivated with others. Sign in or create an account with email or Google, verify your email after signup, and acknowledge Terms & Privacy. Returning users skip the intro and continue where they left off.",
  },
  {
    id: "profile-setup",
    category: "Account",
    question: "What is profile setup?",
    answer:
      "After first sign-in you complete a short setup: name and birthdate, gender (Male, Female, or Other), and one or more starter habits. When you finish, you land on Home with those habits ready to track.",
  },
  {
    id: "home",
    category: "Habits",
    question: "What can I do on Home?",
    answer:
      "Home is your daily hub: a personalized greeting, today’s progress, a date strip for recent and upcoming days, marking habits complete or incomplete, streak visibility, a Today / Clubs toggle, shortcuts to challenges and Explore, and quick access to notifications, Activity, and Profile. The center + button lets you add habits or log mood.",
  },
  {
    id: "create-habits",
    category: "Habits",
    question: "How do I create habits?",
    answer:
      "You can quit a bad habit with templates like Social Media, Sugar, Late Night, or Smoking; start a good habit from popular ideas (walk, swim, read, meditate, water, workout, journal, sleep early, and more); or build a custom habit with name, icon, color, times per day, and build vs quit. Add daily reminders with preferred time and an optional note. Suggested habits from Explore can be added in one tap.",
  },
  {
    id: "explore",
    category: "Habits",
    question: "What is Explore?",
    answer:
      "Explore is a discovery space for suggested habits, Habit Clubs (browse, search, create, join, or leave), Challenges (streak, daily check-in, active-day, and habit-count goals), Learn Habits tips, and live search across habits, clubs, and challenges.",
  },
  {
    id: "friends",
    category: "Social",
    question: "How do friends and clubs work?",
    answer:
      "Send friend requests by @username, accept or decline incoming requests, see pending outgoing requests, open a friend’s profile, and remove friends. Clubs and challenges support shared accountability. In-app notifications cover social and progress updates — open them from Home and mark one or all as read.",
  },
  {
    id: "activity",
    category: "Progress",
    question: "How do I track progress and mood?",
    answer:
      "Activity offers Daily, Weekly, and Monthly views with success rate, completions, points, best streak, missed days, and a comparison chart. Log today’s mood from Activity or the center + menu and see a weekly mood overview. You can also jump to the Leaderboard.",
  },
  {
    id: "leaderboard",
    category: "Social",
    question: "How does the Leaderboard work?",
    answer:
      "The Leaderboard ranks users by points with a Top 3 podium and ranked list. Switch between Daily, Weekly, and Monthly tabs. Your row is highlighted when you appear on the board. Complete habits to climb the ranks.",
  },
  {
    id: "achievements",
    category: "Progress",
    question: "What are Achievements?",
    answer:
      "Achievements unlock for consistency and engagement — multi-day streaks, early progress milestones, and social or community milestones. Completing habits unlocks more over time.",
  },
  {
    id: "navigation",
    category: "General",
    question: "How is the app organized?",
    answer:
      "Bottom navigation keeps things simple: Home (today’s habits and clubs), Explore (discover habits, clubs, challenges, tips), Activity (stats, mood, leaderboard), Profile (identity, friends, achievements), and a center + button to add a habit or log mood. Most secondary actions open as sheets or overlays.",
  },
  {
    id: "free",
    category: "General",
    question: "Is KYOTO Habit Tracker free?",
    answer:
      "KYOTO is built to help you build, track, grow, and connect without paywalls on core habit tracking. Check the Pricing section on this page for the latest details.",
  },
];
