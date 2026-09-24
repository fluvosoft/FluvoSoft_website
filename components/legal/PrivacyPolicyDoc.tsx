"use client";

import LegalPolicyDoc from "@/components/legal/LegalPolicyDoc";
import { privacyDocArticleIds, privacyDocChapters } from "@/data/fluvoSoftPrivacy";

export default function PrivacyPolicyDoc() {
  return (
    <LegalPolicyDoc
      chapters={privacyDocChapters}
      articleIds={privacyDocArticleIds}
      heading="Full policy"
      intro="Structured like product documentation — use the table of contents to jump to any section, or read straight through."
      navLabel="Privacy policy sections"
    />
  );
}
